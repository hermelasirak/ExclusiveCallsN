import fs from "fs";
import path from "path";

const distDir = path.join(process.cwd(), "dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.warn("spa-shells: dist/index.html not found, skipping");
  process.exit(0);
}

const html = fs.readFileSync(indexPath, "utf8");
const routes = ["privacy-choices", "privacypolicy"];

for (const route of routes) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

console.log("SPA shells written for /privacy-choices and /privacypolicy");
