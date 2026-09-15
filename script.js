(() => {
  "use strict";

  const desk = document.getElementById("desk");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  /* ------------------------------------------------------------
     1. MOUNT NOTES FROM notes-config.js
     Every element with data-note-id gets its content (text or
     image) from the matching entry in NOTES.
  ------------------------------------------------------------ */
  function mountNotes() {
    const notesById = new Map(NOTES.map((n) => [n.id, n]));

    document.querySelectorAll("[data-note-id]").forEach((paperEl) => {
      const note = notesById.get(paperEl.dataset.noteId);
      const contentEl = paperEl.querySelector(".paper__content");
      if (!note || !contentEl) return;

      if (note.type === "image") {
        contentEl.innerHTML = "";
        const img = document.createElement("img");
        img.className = "paper__image";
        img.src = note.src;
        img.alt = note.alt || "";
        img.loading = "lazy";
        contentEl.appendChild(img);
      } else {
        contentEl.innerHTML = note.html;
      }
    });
  }

  /* ------------------------------------------------------------
     2. THE GUT CHECK TOOL
  ------------------------------------------------------------ */
  function initGutCheck() {
    const list = document.getElementById("gutcheckList");
    const resultEl = document.getElementById("gutcheckResult");
    const resetBtn = document.getElementById("gutcheckReset");
    if (!list || !resultEl || !resetBtn) return;

    const answers = new Map(); // index -> "yes" | "no"

    GUT_CHECK_QUESTIONS.forEach((q, i) => {
      const li = document.createElement("li");
      li.className = "gutcheck-item";
      li.innerHTML = `
        <p class="gutcheck-question" id="gutcheckQ${i}">${i + 1}. ${q.question}</p>
        <div class="gutcheck-actions" role="group" aria-labelledby="gutcheckQ${i}">
          <button type="button" class="gutcheck-btn gutcheck-btn--yes" aria-pressed="false" data-index="${i}" data-answer="yes">Yes</button>
          <button type="button" class="gutcheck-btn gutcheck-btn--no" aria-pressed="false" data-index="${i}" data-answer="no">No</button>
        </div>
        <p class="gutcheck-flag" id="gutcheckFlag${i}" hidden>&#9873; Pushing against: <strong>${q.principle}</strong></p>
      `;
      list.appendChild(li);
    });

    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".gutcheck-btn");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      const answer = btn.dataset.answer;
      answers.set(index, answer);

      const item = btn.closest(".gutcheck-item");
      item.querySelectorAll(".gutcheck-btn").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      const flag = document.getElementById(`gutcheckFlag${index}`);
      flag.hidden = answer !== "yes";

      renderResult();
    });

    resetBtn.addEventListener("click", () => {
      answers.clear();
      list.querySelectorAll(".gutcheck-btn").forEach((b) => b.setAttribute("aria-pressed", "false"));
      list.querySelectorAll(".gutcheck-flag").forEach((f) => (f.hidden = true));
      renderResult();
    });

    function renderResult() {
      const flaggedPrinciples = [...new Set(
        [...answers.entries()]
          .filter(([, v]) => v === "yes")
          .map(([i]) => GUT_CHECK_QUESTIONS[i].principle)
      )];

      if (flaggedPrinciples.length > 0) {
        resultEl.innerHTML = `
          <p>&#9873; Pushing against:</p>
          <ul>${flaggedPrinciples.map((p) => `<li>${p}</li>`).join("")}</ul>
        `;
      } else if (answers.size > 0) {
        resultEl.innerHTML = `<p>No flags raised. Nothing here is pushing against your lines right now.</p>`;
      } else {
        resultEl.innerHTML = `<p>Answer a question below to see what it flags.</p>`;
      }
    }

    renderResult();
  }

  /* ------------------------------------------------------------
     3. HORIZONTAL SCROLL BEHAVIOUR
     - vertical wheel input becomes horizontal scroll
     - native horizontal wheel/trackpad input passes through
     - click-and-drag scrolling
     - left/right arrow + home/end keyboard support
  ------------------------------------------------------------ */
  function initScrollBehaviour() {
    if (!desk) return;

    desk.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // already horizontal, let it be native
        e.preventDefault();
        desk.scrollLeft += e.deltaY;
      },
      { passive: false }
    );

    let isDown = false;
    let dragged = false;
    let startX = 0;
    let startScroll = 0;

    desk.addEventListener("mousedown", (e) => {
      isDown = true;
      dragged = false;
      startX = e.pageX;
      startScroll = desk.scrollLeft;
      desk.classList.add("is-dragging");
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) dragged = true;
      desk.scrollLeft = startScroll - dx;
    });

    ["mouseup", "mouseleave"].forEach((evt) =>
      window.addEventListener(evt, () => {
        isDown = false;
        desk.classList.remove("is-dragging");
      })
    );

    // stop a drag from also firing a click on whatever it released over
    desk.addEventListener(
      "click",
      (e) => {
        if (dragged) {
          e.preventDefault();
          e.stopPropagation();
          dragged = false;
        }
      },
      true
    );

    desk.addEventListener("keydown", (e) => {
      if (e.target !== desk) return;
      const step = desk.clientWidth * 0.8;
      if (e.key === "ArrowRight") {
        desk.scrollBy({ left: step, behavior: scrollBehavior });
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        desk.scrollBy({ left: -step, behavior: scrollBehavior });
        e.preventDefault();
      } else if (e.key === "Home") {
        desk.scrollTo({ left: 0, behavior: scrollBehavior });
        e.preventDefault();
      } else if (e.key === "End") {
        desk.scrollTo({ left: desk.scrollWidth, behavior: scrollBehavior });
        e.preventDefault();
      }
    });
  }

  /* ------------------------------------------------------------
     4. NAV NOTES — jump to a cluster
  ------------------------------------------------------------ */
  function initNav() {
    document.querySelectorAll("[data-goto]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = document.querySelector(`[data-cluster-id="${btn.dataset.goto}"]`);
        if (target) target.scrollIntoView({ behavior: scrollBehavior, inline: "start", block: "nearest" });
      });
    });
  }

  /* ------------------------------------------------------------
     5. PROGRESS INDICATOR
  ------------------------------------------------------------ */
  function initProgress() {
    const fill = document.getElementById("progressFill");
    if (!desk || !fill) return;

    let ticking = false;
    function update() {
      const max = desk.scrollWidth - desk.clientWidth;
      const pct = max > 0 ? (desk.scrollLeft / max) * 100 : 0;
      fill.style.width = `${pct}%`;
      ticking = false;
    }
    desk.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountNotes();
    initGutCheck();
    initScrollBehaviour();
    initNav();
    initProgress();
  });
})();
