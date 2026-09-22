import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Needed because __dirname does not exist in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔴 CHANGE THIS
const SITE_URL = "https://exclusivecalls.com";

const routes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/services", changefreq: "monthly", priority: 0.8 },
  { path: "/pricing", changefreq: "monthly", priority: 0.9 },
  { path: "/testimonials", changefreq: "monthly", priority: 0.5 },
  { path: "/contactus", changefreq: "monthly", priority: 0.6 },
  { path: "/privacypolicy", changefreq: "yearly", priority: 0.2 },
  { path: "/termsandconditions", changefreq: "yearly", priority: 0.2 },
];


function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrl({ path: p, changefreq, priority }) {
  return `
  <url>
    <loc>${escapeXml(`${SITE_URL}${p}`)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  const urls = routes.map(buildUrl).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap.trim(), "utf8");

  console.log("✅ sitemap.xml generated successfully");
}

generateSitemap();
