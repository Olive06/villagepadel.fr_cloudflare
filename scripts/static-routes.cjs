// CommonJS module - no ES modules issues
const fs = require('fs');
const path = require('path');

// Define all routes that need static files
const routes = [
  'vp-tech',
  'grisolles',
  'campsas',
  'baraqueville',
  'port-la-nouvelle'
];

// Base directory
const distDir = path.join(__dirname, '../dist');

// For each route, create a directory and copy index.html
routes.forEach(route => {
  const routeDir = path.join(distDir, route);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
    console.log(`Created directory: ${route}`);
  }
  
  // Copy index.html to this directory
  fs.copyFileSync(
    path.join(distDir, 'index.html'),
    path.join(routeDir, 'index.html')
  );
  
  console.log(`Created static file for: /${route}`);
});

// Generate a sitemap
const baseUrl = 'https://villagepadel.fr';
const allRoutes = ['', ...routes]; // Empty string for root route

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route ? '/' + route : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  sitemapContent
);

console.log('Sitemap generated!');