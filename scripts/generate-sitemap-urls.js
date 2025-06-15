const fs = require("fs");
const path = require("path");

const categories = [
  "sweets",
  "containers",
  "decor",
  "earthmatters",
  "fashion",
  "food",
];

const urls = categories.map((category) => {
  return {
    loc: `https://clickkmaster.in/categories/${category}`,
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  };
});

const filePath = path.join(__dirname, "../public/custom-urls.json");
fs.writeFileSync(filePath, JSON.stringify(urls, null, 2));

console.log("✅ Dynamic category URLs generated for sitemap");
console.log(`✅ URLs saved to ${filePath}`);
// You can now use this JSON file to generate your sitemap dynamically
// or include it in your sitemap generation process.
// Make sure to run this script whenever you add or remove categories
// to keep the sitemap up-to-date.
// You can also integrate this with your build process to automate updates.
// For example, you can add this script to your package.json scripts:
// "scripts": {
//   "generate-sitemap-urls": "node scripts/generate-sitemap-urls.js"
// },
// Then run `npm run generate-sitemap-urls` to regenerate the URLs whenever needed.
// This script can be run manually or as part of your build process to ensure
// that the sitemap always reflects the current categories available on your site.
// This approach allows you to maintain a dynamic sitemap that updates automatically    