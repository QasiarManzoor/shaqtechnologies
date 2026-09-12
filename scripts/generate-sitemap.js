import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { services } from '../src/data/services.js';

const SITE_URL = 'https://shaqtechnologies.com';
const APP_FILE = fileURLToPath(new URL('../src/App.jsx', import.meta.url));
const SITEMAP_FILE = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));
const EXCLUDED_ROUTES = new Set(['/not-found']);

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const appSource = await readFile(APP_FILE, 'utf8');
const routePattern = /<Route\s+[^>]*path=["']([^"']+)["']/g;
const paths = new Set();

for (const match of appSource.matchAll(routePattern)) {
  const route = match[1];

  if (route.includes('*') || EXCLUDED_ROUTES.has(route)) {
    continue;
  }

  if (route === '/services/:slug') {
    services.forEach(({ slug }) => paths.add(`/services/${slug}`));
    continue;
  }

  if (route.includes(':')) {
    throw new Error(
      `Sitemap generation does not know how to expand the dynamic route "${route}". `
      + 'Add its public URLs to scripts/generate-sitemap.js.',
    );
  }

  paths.add(route);
}

if (!paths.has('/')) {
  throw new Error('The public home route was not found while generating the sitemap.');
}

const orderedPaths = [...paths].sort((left, right) => {
  if (left === '/') return -1;
  if (right === '/') return 1;
  return left.localeCompare(right);
});
const lastModified = new Date().toISOString().slice(0, 10);
const urls = orderedPaths.map((path) => [
  '  <url>',
  `    <loc>${escapeXml(new URL(path, SITE_URL).href)}</loc>`,
  `    <lastmod>${lastModified}</lastmod>`,
  '  </url>',
].join('\n')).join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  '</urlset>',
  '',
].join('\n');

await writeFile(SITEMAP_FILE, sitemap, 'utf8');
console.log(`Generated sitemap.xml with ${orderedPaths.length} public URLs.`);
