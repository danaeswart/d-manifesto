// Copies the static site into dist/ for deployment.
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");
const include = ["index.html", "script.js", "notes-config.js", "styles.css", "assets"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const item of include) {
  fs.cpSync(path.join(root, item), path.join(dist, item), { recursive: true });
}

console.log("Built site into dist/");
