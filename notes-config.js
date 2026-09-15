/* ============================================================
   MANIFESTO NOTES CONFIG
   ============================================================
   This file is the ONLY place the words on the desk live.
   Every sticky note / index card / polaroid on the page is one
   entry in the NOTES list below, matched to its spot on the desk
   by "id" (the id is set on the paper in index.html, look for
   data-note-id="...").

   HOW TO SWAP A NOTE FOR YOUR OWN HAND-DRAWN / PHOTOGRAPHED VERSION
   -------------------------------------------------------------
   1. Find the entry you want to change below.
   2. Change   type: "text"   to   type: "image"
   3. Add a line   src: "assets/notes/your-file.jpg"
      (drop your exported image into the assets/notes folder first)
   4. Optionally write a short   alt: "..."   describing the image
      for people using screen readers.
   5. Save the file. That's it — the paper on the desk keeps its
      size, tilt, shadow and tape/pin, it just shows your image
      instead of the typed text now.

   You do NOT need to touch index.html, styles.css or script.js
   to do a swap. Nothing else in this file needs to change either.
   ============================================================ */

const NOTES = [

  // ---------- LANDING ----------
  {
    id: "landing-kicker",
    type: "text",
    html: `the wall behind my desk`
  },
  {
    id: "landing-hero",
    type: "text",
    html: `
      <p class="note-heading note-heading--xl">Useful. Functional. Beautiful.<br>In that order.</p>
      <p class="note-sub">Good design solves a problem, and never screws anyone over doing it.</p>
      <p class="note-byline">a manifesto by Danae Swart</p>
    `
  },
  {
    id: "landing-opening",
    type: "text",
    html: `
      <p class="note-eyebrow">before the rest of this</p>
      <p>This is not a poster of nice words hung up to look thoughtful. It is the actual record of what I will bend on, what I will not, and why, written out honestly.</p>
      <p>Nothing I design is neutral. Every decision changes what someone understands, trusts, or is able to do, whether I mean it to or not. What follows turns that responsibility into actual principles, real decisions, and a few things I still have not resolved.</p>
      <p>I do not expect to agree with all of this in five years. It is an honest account of where I stand today, and with more projects and more experience, I'll be able to build on these principles and discover more of myself.</p>
      <p class="note-signoff">Welcome to my wall.</p>
    `
  },
  {
    // Swap this to type:"image" with your own photo whenever you like.
    id: "landing-about-photo",
    type: "image",
    src: "assets/notes/landing-about.png",
    alt: "Photo of the manifesto's author"
  },
  {
    id: "landing-about-caption",
    type: "text",
    html: `<p>I am a UX design student figuring out where I stand. This is the wall where I work everything out for the world to see.</p>`
  },

  // ---------- HOW TO READ A PINNED NOTE ----------
  {
    id: "htr-tag",
    type: "text",
    html: `<p class="note-eyebrow">before you look around</p><p class="note-heading">How to read a principle</p>`
  },
  {
    id: "htr-statement",
    type: "text",
    html: `<p class="note-label">The statement.</p><p>One sentence I can hold onto mid-decision, when things get messy and I need something simple to check against.</p>`
  },
  {
    id: "htr-why",
    type: "text",
    html: `<p class="note-label">Why I hold this.</p><p>The reasoning I would actually give if someone pushed back and asked me to justify it.</p>`
  },
  {
    id: "htr-changes",
    type: "text",
    html: `<p class="note-label">What this changes.</p><p>The concrete thing it makes me do differently on a real project, not just something I believe in theory.</p>`
  },
  {
    id: "htr-line",
    type: "text",
    html: `<p class="note-label">The line.</p><p>The point past which I will not go, no matter how reasonable the pressure sounds.</p>`
  },
  {
    id: "htr-gutcheck",
    type: "text",
    html: `<p class="note-label">The gut check.</p><p>A short phrase for when there is no time to reread any of this and I just need a quick sanity check.</p>`
  },

  // ---------- DESIGN POSITION ----------
  {
    id: "position-tag",
    type: "text",
    html: `<p class="note-eyebrow">case notes</p><p class="note-heading">Design position</p>`
  },
  {
    id: "position-p1",
    type: "text",
    html: `<p>Design is never just decoration. To me, it is the act of making something easier, better, or possible in the first place, and it needs to be functional before it is allowed to be beautiful. I believe design carries social, emotional and environmental weight depending on the project, and pretending otherwise is how careless work gets made.</p>`
  },
  {
    id: "position-p2",
    type: "text",
    html: `<p>I see myself as accountable first to the user, but I am realistic about the fact that I cannot design anything without someone employing me to do it. That tension between user and business is not something I have neatly resolved, and I do not think a manifesto that pretends to have resolved it is being honest. What I have settled on instead is a way of working through that tension: I advocate, I push back, I propose alternatives, and I keep raising concerns even after a decision has been made.</p>`
  },
  {
    id: "position-quote-1",
    type: "text",
    html: `<p class="note-quote-big">Being paid does not mean staying silent.</p>`
  },
  {
    id: "position-p3",
    type: "text",
    html: `<p>The line I actually hold onto is not "no persuasion" or "no business influence." It is whether the user knows what is happening to them, and whether they still come out with something of value. A discount banner with a clearly visible "no thanks" is a nudge. A signup flow that hides the free tier so people cannot find it is a trap.</p>`
  },
  {
    id: "position-quote-2",
    type: "text",
    html: `<p class="note-quote-big">I will design the first.<br>I will not design the second.</p>`
  },
  {
    id: "position-p4",
    type: "text",
    html: `<p>Some things sit outside that negotiation entirely. I will not target vulnerable groups or minorities. I will not build something I know will cause real physical or environmental harm, the kind of project that looks fine on a screen but damages a community or a place in the real world.</p>`
  },
  {
    id: "position-p4b",
    type: "text",
    html: `<p>Accessibility is not something I treat as optional depending on budget or time; it is the floor every project starts from, not a feature added at the end.</p>`
  },
  {
    id: "position-p5",
    type: "text",
    html: `<p>Newer technology, particularly AI, does not get a free pass just because it is new. I see AI as an aid, not an author. Anything built with it needs to be tested properly, with clear boundaries in place, so it cannot be misused. I still believe human judgement and creativity are what actually make something work and feel right, not the tool doing the work for me.</p>`
  },
  {
    id: "position-p6",
    type: "text",
    html: `<p>Responsible innovation, to me, means asking who else is affected by a decision before I say yes to it, not just the direct user in front of me. That includes environmental impact. I will not always be able to refuse a project on sustainability grounds alone, but I will always push for the better option in the room, even when it does not win.</p>`
  },
  {
    id: "position-signoff",
    type: "text",
    html: `<p class="note-signoff">This is not a manifesto built on absolutes. It is built on where I am willing to compromise, where I will push back, and where I will stop entirely.</p>`
  },

  // ---------- THE PRINCIPLES ----------
  {
    id: "principles-tag",
    type: "text",
    html: `<p class="note-eyebrow">pinned around the desk</p><p class="note-heading">The principles</p>`
  },

  // Principle 1
  {
    id: "principle-1-statement",
    type: "text",
    html: `<p class="note-index">01</p><p class="note-heading">Design with people, not around them.</p><p class="note-quote">"If I didn't ask, I don't actually know."</p>`
  },
  {
    // Derived from the principle itself — swap for your own words any time.
    id: "principle-1-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Empathy — listening before I assume I already know what someone needs.</p>`
  },
  {
    id: "principle-1-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Good design does not come from guessing what people want. It comes from research, testing and genuinely listening to the people a product is built for.</p>
      <p class="note-label">What this changes</p><p>I will make research and testing a non-negotiable part of my process, not an afterthought. I will involve real users early and let their feedback shape decisions rather than confirm ones already made.</p>
      <p class="note-label">The line</p><p>If a team skips research and assumes instead of asking, that goes against everything I believe good design should be built on.</p>
    `
  },

  // Principle 2
  {
    id: "principle-2-statement",
    type: "text",
    html: `<p class="note-index">02</p><p class="note-heading">If they don't know it's happening, it's not a nudge, it's a trap.</p><p class="note-quote">"A choice you can't see isn't a choice at all."</p>`
  },
  {
    id: "principle-2-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Honesty — being upfront about what's actually happening to someone.</p>`
  },
  {
    id: "principle-2-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Persuasive design is not automatically wrong. A nudge becomes manipulation the moment the user has no real choice, no visibility, and no way to undo it.</p>
      <p class="note-label">What this changes</p><p>I am comfortable designing something like a discount banner, as long as the "no thanks" option is just as visible and the user can change their mind at any point.</p>
      <p class="note-label">The line</p><p>No visible way out, no undo, and no real alternative for the user is where a nudge becomes a trap.</p>
    `
  },

  // Principle 3
  {
    id: "principle-3-statement",
    type: "text",
    html: `<p class="note-index">03</p><p class="note-heading">I advocate before I agree, and paid doesn't mean silent.</p><p class="note-quote">"Being paid buys my time, not my silence."</p>`
  },
  {
    id: "principle-3-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Integrity — saying what I actually think, even under pressure.</p>`
  },
  {
    id: "principle-3-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Being employed to design something does not mean switching off my own judgement. I believe in respectful pushback and working towards a compromise that is better for both the user and the business.</p>
      <p class="note-label">What this changes</p><p>When I disagree, I will say so directly and propose an alternative rather than quietly complying, and I will keep raising concerns throughout a project.</p>
      <p class="note-label">The line</p><p>If a request undermines my other principles, compromise stops and I will not continue with the work.</p>
    `
  },

  // Principle 4
  {
    id: "principle-4-statement",
    type: "text",
    html: `<p class="note-index">04</p><p class="note-heading">Accessibility is not a feature. It's the floor.</p><p class="note-quote">"If the entrance is closed, nothing past it matters."</p>`
  },
  {
    id: "principle-4-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Fairness — making sure the basics work for everyone, not just most people.</p>`
  },
  {
    id: "principle-4-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Accessibility is not a nice-to-have added at the end if time allows. Contrast, readable text and testing should be built in from the start of every project.</p>
      <p class="note-label">What this changes</p><p>I will build in proper contrast and legible text sizing as a baseline on every project, and push for testing with people with disabilities wherever possible.</p>
      <p class="note-label">The line</p><p>Refusing to adjust basic things like text size or contrast for people who need it is not acceptable to me. That is the bare minimum, not an extra.</p>
    `
  },

  // Principle 5
  {
    id: "principle-5-statement",
    type: "text",
    html: `<p class="note-index">05</p><p class="note-heading">AI is a tool, not an author.</p><p class="note-quote">"A tool that decides for me stops being a tool."</p>`
  },
  {
    id: "principle-5-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Responsibility — owning the decisions I make, not outsourcing them.</p>`
  },
  {
    id: "principle-5-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>AI can help and speed things up, but it should never replace human creativity or judgement. Final decisions should never be left to an algorithm.</p>
      <p class="note-label">What this changes</p><p>Any AI-assisted feature I work on will be extensively tested and given clear restraints so it cannot be misused. I will treat AI as an assistant, never the final call.</p>
      <p class="note-label">The line</p><p>I will not build an AI feature that is left unrestrained, with no boundaries on how it could be used or misused.</p>
    `
  },

  // Principle 6
  {
    id: "principle-6-statement",
    type: "text",
    html: `<p class="note-index">06</p><p class="note-heading">I look beyond the user, to everyone affected, before I say yes.</p><p class="note-quote">"Someone always carries the cost I don't see."</p>`
  },
  {
    id: "principle-6-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Care — thinking about who else is touched by what I build.</p>`
  },
  {
    id: "principle-6-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Research should not stop at the direct user. It should look at everyone touched by a solution, directly or indirectly, so that no community is left worse off.</p>
      <p class="note-label">What this changes</p><p>As part of my research, I will actively look for who could be harmed by a project, not just who benefits from it, before agreeing to work on it.</p>
      <p class="note-label">The line</p><p>Manipulative content aimed at children, projects that encourage gambling addiction, or sites that promote violence. These are hard lines, not points for compromise.</p>
    `
  },

  // Principle 7
  {
    id: "principle-7-statement",
    type: "text",
    html: `<p class="note-index">07</p><p class="note-heading">Function first, decoration second.</p><p class="note-quote">"Pretty and broken is still broken."</p>`
  },
  {
    id: "principle-7-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Craft — caring more about whether it works than how it looks.</p>`
  },
  {
    id: "principle-7-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>Decoration should support a design, not distract from it. If something looks impressive but gets in the way, it has failed at its job.</p>
      <p class="note-label">What this changes</p><p>I will cut or simplify a decorative element, such as an animation that slows loading time, if it works against usability.</p>
      <p class="note-label">The line</p><p>The flood of generic, low-effort AI-generated visuals currently overwhelming the internet is decoration and speed being prioritised over genuine function and craft.</p>
    `
  },

  // Principle 8
  {
    id: "principle-8-statement",
    type: "text",
    html: `<p class="note-index">08</p><p class="note-heading">Sustainability is a voice in the room, even when it doesn't win.</p><p class="note-quote">"Losing the argument isn't the same as not making it."</p>`
  },
  {
    id: "principle-8-values",
    type: "text",
    html: `<p class="note-label">My values</p><p class="note-value">Persistence — speaking up even when I know I might not win.</p>`
  },
  {
    id: "principle-8-detail",
    type: "text",
    html: `
      <p class="note-label">Why I hold this</p><p>I will not always be able to refuse a project on environmental grounds, but I will always advocate for a better, less harmful alternative where one exists.</p>
      <p class="note-label">What this changes</p><p>I will push for more sustainable choices during a project and raise environmental impact as a genuine consideration rather than an afterthought.</p>
      <p class="note-label">The line</p><p>Deliberately and knowingly designing something that causes environmental harm, when a better option was ignored, is where my advocacy turns into refusal.</p>
    `
  },

  // ---------- THE GUT CHECK (intro text only — the tool itself is hand-coded, see index.html + script.js) ----------
  {
    id: "gutcheck-intro",
    type: "text",
    html: `
      <p class="note-eyebrow">a note taped above the monitor</p>
      <p class="note-heading">The gut check</p>
      <p>Eight honest questions, one per principle. Answer "yes" to any of them mid-project and it flags which line you might be pushing against. This is not a scored test. It is a way of catching myself before I've talked myself into something.</p>
    `
  },

  // ---------- MANIFESTO IN ACTION ----------
  {
    id: "action-tag",
    type: "text",
    html: `<p class="note-eyebrow">open case files</p><p class="note-heading">Manifesto in action</p>`
  },
  {
    id: "casefile-1",
    type: "text",
    html: `
      <p class="note-folder-title">Case File 1 &mdash; The free tier that went missing</p>
      <p class="note-label">What happened</p><p>A client wants the free plan tucked beneath a much more prominent paid option, technically present but nearly invisible.</p>
      <p class="note-label">The pull</p><p>The business wants higher conversion. I want users to make a genuinely informed choice.</p>
      <p class="note-label">What I'd do</p><p>Push back with an alternative: make both tiers equally visible, and make the paid tier more appealing through hierarchy and messaging instead of hiding the free one.</p>
      <p class="note-label">The principle behind it</p><p>If they don't know it's happening, it's not a nudge, it's a trap.</p>
      <p class="note-label">What it might cost the business</p><p>Some short-term conversion to the paid plan.</p>
      <p class="note-label">What it protects instead</p><p>The user's ability to make an informed choice, and the trust that protects the relationship long term.</p>
    `
  },
  {
    id: "casefile-2",
    type: "text",
    html: `
      <p class="note-folder-title">Case File 2 &mdash; The personalisation feature that knew too much</p>
      <p class="note-label">What happened</p><p>An AI feature adjusts content and pricing per user based on browsing behaviour.</p>
      <p class="note-label">The pull</p><p>The business wants to launch fast. I want to be sure the feature can't quietly discriminate, like showing higher prices to less price-sensitive users.</p>
      <p class="note-label">What I'd do</p><p>Insist on a testing phase for manipulative outcomes, and build in visible boundaries: a maximum price variance, and a way for users to see or reset their personalisation.</p>
      <p class="note-label">The principle behind it</p><p>AI is a tool, not an author.</p>
      <p class="note-label">What it might cost the business</p><p>A slightly slower launch.</p>
      <p class="note-label">What it protects instead</p><p>Understanding, fairness, and the user's ability to question or reset what the system decided about them.</p>
    `
  },
  {
    id: "casefile-3",
    type: "text",
    html: `
      <p class="note-folder-title">Case File 3 &mdash; The app for the company down the road from the damaged well</p>
      <p class="note-label">What happened</p><p>Designing an investor and customer app for a company running a large operation that risks a small town's water supply.</p>
      <p class="note-label">The pull</p><p>The work itself, and the direct user experience, isn't harmful. The wider business is.</p>
      <p class="note-label">What I'd do</p><p>Raise the concern directly, push the client to mitigate the harm. If it's severe and ignored, decline the work.</p>
      <p class="note-label">The principle behind it</p><p>I look beyond the user, to everyone affected, before I say yes.</p>
      <p class="note-label">What it might cost the business</p><p>Possibly the client relationship altogether.</p>
      <p class="note-label">What it protects instead</p><p>A community that never agreed to carry the cost of someone else's project.</p>
    `
  },

  // ---------- THE WALL ----------
  {
    id: "wall-intro",
    type: "text",
    html: `
      <p class="note-eyebrow">polaroids, pinned lower down</p>
      <p class="note-heading">The wall</p>
      <p>These projects came before this manifesto had a name. Looking back at them shows me which values were already shaping my decisions, and where my practice still falls short of what I'm claiming here.</p>
    `
  },

  // Lumi
  {
    id: "lumi-photo",
    type: "image",
    src: "assets/notes/lumi.png",
    alt: "Lumi app screens shown on phone mockups, with the Lumi logo"
  },
  {
    id: "lumi-write",
    type: "text",
    html: `
      <p class="note-heading">Lumi</p>
      <p class="note-sub">An everyday app for connection, built with dementia in mind.</p>
      <p class="note-trace">Principle trace: Accessibility is not a feature. It's the floor.</p>
      <p>Lumi lets people take photos of their day and share them to a private circle. The circle can send reminders and to-do items back, so someone in a care home, for example, can receive a note like "Bingo at 2pm" from the people looking out for them.</p>
      <p class="note-label">What I built</p><p>Built around colour recognition support and WCAG accessibility standards from the start, not added afterward.</p>
      <p class="note-label">What pulled in two directions</p><p>Designing specifically with people with dementia in mind, while making sure the app still worked well for everyone else using it too.</p>
      <p class="note-label">If I did it again</p><p>I would go deeper into research on pattern recognition, and if this moved toward production, I would run real user testing to check whether people would actually use it day to day, not just whether they could.</p>
    `
  },

  // Ripple
  {
    id: "ripple-photo",
    type: "image",
    src: "assets/notes/ripple.png",
    alt: "Ripple app screens shown on phone mockups"
  },
  {
    id: "ripple-write",
    type: "text",
    html: `
      <p class="note-heading">Ripple</p>
      <p class="note-sub">A wearable and app that turns steps into support for people in need.</p>
      <p class="note-trace">Principle trace: Sustainability is a voice in the room, even when it doesn't win.</p>
      <p>Ripple pairs an interface-free wearable band with an app. As you walk or run, it tracks your steps toward an event you choose, and sponsors turn that activity into donations. The app shows exactly where the money goes. A sponsor-facing tool uses AI to help companies see which charity work would have the most impact, and at what estimated cost. The band also carries a small SOS button linked to an emergency contact.</p>
      <p class="note-label">What I built</p><p>Transparency built into the app around where funds go, AI used to support sponsor decisions rather than automate them outright, and a safety feature considered alongside the core concept.</p>
      <p class="note-label">What pulled in two directions</p><p>Figuring out the concept itself and whether it could actually work end to end, from tracking to payout to sponsor buy-in.</p>
      <p class="note-label">If I did it again</p><p>I would think harder about what genuinely benefits the sponsoring companies beyond visibility and promotion. That side of the concept still feels underexplored.</p>
    `
  },

  // Now Conservation
  {
    id: "nowcon-photo",
    type: "image",
    src: "assets/notes/nowcon.png",
    alt: "Now Conservation website shown on laptop, tablet and phone mockups"
  },
  {
    id: "nowcon-write",
    type: "text",
    html: `
      <p class="note-heading">Now Conservation</p>
      <p class="note-sub">Following the story of every animal a non-profit rescues.</p>
      <p class="note-trace">Principle trace: I look beyond the user, to everyone affected, before I say yes.</p>
      <p>A website for a wildlife conservation non-profit, built around user stories and rescue progress for each animal. Visitors can follow an animal's story and virtually adopt one, paying monthly to help cover things like medical care.</p>
      <p class="note-label">What I built</p><p>A story-driven structure built to create a genuine connection to individual animals, rather than a generic donation ask.</p>
      <p class="note-label">What pulled in two directions</p><p>Finding a way to make people genuinely engaged with the non-profit's work, not just get them to click donate once.</p>
      <p class="note-label">If I did it again</p><p>Honestly, still unresolved. I have not landed on a better answer yet, and I think that is worth admitting rather than hiding.</p>
    `
  },

  // ---------- REFLECTION ----------
  {
    id: "reflection-tag",
    type: "text",
    html: `<p class="note-eyebrow">last thing, before you go</p><p class="note-heading">Reflection</p>`
  },
  {
    id: "reflection-1a",
    type: "text",
    html: `<p>The hardest principle to pin down was the one about advocating before agreeing. It was easy to write a version that sounded good, harder to be honest about where advocacy actually stops and refusal begins. I still don't have a perfectly clean answer, and I don't think I should pretend to.</p>`
  },
  {
    id: "reflection-1b",
    type: "text",
    html: `<p>Writing this manifesto brought two of my own values into direct conflict. I believe the user should come first, but I also admitted early on that I'll do what's needed to keep a client happy and get paid, within limits. My actual position isn't "the user always wins," it's closer to "I'll push as hard as I can for the user, within the reality of also needing to earn a living."</p>`
  },
  {
    id: "reflection-2a",
    type: "text",
    html: `<p>My position shifted most on dark patterns. At the start I thought of them as something to avoid outright. Through this process I realised my actual objection is narrower: whether the user is aware of what's happening and still has a real choice, not persuasion techniques in general.</p>`
  },
  {
    id: "reflection-2b",
    type: "text",
    html: `<p>This manifesto still has blind spots. I haven't fully worked out what I'd do if pushing back repeatedly still didn't change a client's mind on something serious but short of my hard boundaries. Most of this hasn't been tested against real financial pressure yet.</p>`
  },
  {
    id: "reflection-3",
    type: "text",
    html: `<p>Going forward, I want to use this as a working document, not something written once and forgotten. I'll revisit it as I take on real projects, especially around AI features and accessibility, since my thinking there is likely to keep developing.</p>`
  },
  {
    id: "reflection-photo",
    type: "image",
    src: "assets/notes/reflection-photo.png",
    alt: "Black and white photo of the manifesto's author"
  },

  // ---------- FOOTER ----------
  {
    id: "footer-stamp",
    type: "text",
    html: `<p class="note-stamp">care always.<br>function first.<br>take no bullshit.</p>`
  }
];

// The gut check questions live here too, since they're closely tied to the
// principles above — but the interactive card itself is hand-built in
// script.js and stays that way even if these papers become images.
const GUT_CHECK_QUESTIONS = [
  {
    question: "Am I skipping research or user testing because of time pressure?",
    principle: "Design with people, not around them."
  },
  {
    question: "Would the person be affected without knowing exactly what's happening to them?",
    principle: "If they don't know it's happening, it's not a nudge, it's a trap."
  },
  {
    question: "Am I being asked to stay quiet about a concern instead of raising it?",
    principle: "I advocate before I agree, and paid doesn't mean silent."
  },
  {
    question: "Could this exclude someone because of an accessibility need?",
    principle: "Accessibility is not a feature. It's the floor."
  },
  {
    question: "Is AI or automation making the call with no human check or boundary?",
    principle: "AI is a tool, not an author."
  },
  {
    question: "Does this specifically target a vulnerable group, or risk real harm to people beyond the direct user?",
    principle: "I look beyond the user, to everyone affected, before I say yes."
  },
  {
    question: "Is decoration or speed winning over whether it actually works?",
    principle: "Function first, decoration second."
  },
  {
    question: "Is there a more sustainable option on the table that's being ignored?",
    principle: "Sustainability is a voice in the room, even when it doesn't win."
  }
];
