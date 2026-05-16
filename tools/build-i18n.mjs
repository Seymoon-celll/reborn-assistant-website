/**
 * Static i18n pre-renderer for reborn-assistance.fr
 *
 * Reads every source HTML in the project root + /docs, generates one mirrored
 * tree per non-French language under /<lang>/ with [data-i18n] resolved at
 * build time, title/description/OG/canonical rewritten per language, and
 * relative paths converted to absolute (asset-shared + lang-prefixed for pages).
 *
 * Also injects hreflang links into every output page (including the FR
 * root pages, modified in place).
 *
 * Run from repo root: node tools/build-i18n.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { SEO, seoFor, LANGS, PAGES, BONUS_PAGES } from './seo-i18n.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://reborn-assistance.fr';

const SOURCE_LANG = 'fr';
const NON_FR_LANGS = LANGS.filter(l => l !== SOURCE_LANG);
const RTL_LANGS = new Set(['ar']);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveKey(obj, key) {
  return key.split('.').reduce((acc, k) => acc?.[k], obj);
}

async function loadLangFile(lang) {
  const file = path.join(ROOT, 'langs', `${lang}.js`);
  if (!fs.existsSync(file)) throw new Error(`Missing lang file: ${file}`);
  const mod = await import(pathToFileURL(file).href);
  return mod.default;
}

/**
 * Replace every <TAG ... data-i18n="key" ...>OLD</TAG> with translated value.
 * Confirmed by audit: zero same-tag nesting on this site, so a lazy match is safe.
 */
function applyI18n(html, strings) {
  return html.replace(
    /<(\w+)([^>]*?\bdata-i18n=["']([^"']+)["'][^>]*?)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, key, _old) => {
      const val = resolveKey(strings, key);
      return val === undefined ? match : `<${tag}${attrs}>${val}</${tag}>`;
    }
  );
}

/**
 * Build the hreflang block for a given canonical page (relative path).
 * x-default points to FR (the root). One entry per language, absolute URLs.
 */
/** Map a source page path to its public canonical URL portion (after host + lang prefix). */
function pageToCanonicalTail(page) {
  if (page === 'index.html') return '/';
  if (page === 'docs/index.html') return '/docs/';
  return '/' + page;
}

function buildHreflang(page) {
  const tail = pageToCanonicalTail(page);
  const lines = [];
  for (const lang of LANGS) {
    const prefix = lang === SOURCE_LANG ? '' : '/' + lang;
    lines.push(`    <link rel="alternate" hreflang="${lang}" href="${SITE}${prefix}${tail}">`);
  }
  lines.push(`    <link rel="alternate" hreflang="x-default" href="${SITE}${tail}">`);
  return lines.join('\n');
}

/**
 * Inject hreflang and JS-prerendered-lang signal into <head>.
 * If the hreflang block is already present (from a previous build), replace it.
 */
function injectHeadSeoTags(html, page, lang) {
  const marker = '<!-- ── hreflang ─';
  const block = `\n    ${marker}──────────────────────────────────── -->\n${buildHreflang(page)}\n    <!-- ── /hreflang ── -->\n    <script>window.__PRERENDERED_LANG__=${JSON.stringify(lang)};</script>`;

  // Remove any existing hreflang block (idempotent rebuilds)
  html = html.replace(
    /\n\s*<!-- ── hreflang ─[\s\S]*?<!-- ── \/hreflang ── -->(?:\s*<script>window\.__PRERENDERED_LANG__[^<]*<\/script>)?/g,
    ''
  );

  // Insert before </head>
  return html.replace('</head>', `${block}\n</head>`);
}

/**
 * Update <html lang="...">, og:locale, title, description, og:title, og:description,
 * og:url, canonical, twitter:title, twitter:description for a given language and page.
 */
function rewriteSeoTags(html, lang, page) {
  const seo = seoFor(lang, page);
  const langPrefix = lang === SOURCE_LANG ? '' : '/' + lang;
  const tail = pageToCanonicalTail(page);
  const pageUrl = `${SITE}${langPrefix}${tail}`;

  // <html lang="..."> + dir for RTL
  const dirAttr = RTL_LANGS.has(lang) ? ' dir="rtl"' : '';
  html = html.replace(/<html[^>]*>/, `<html lang="${lang}"${dirAttr}>`);

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);

  // meta description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}">`
  );

  // og:title / og:description / og:url / og:locale
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${pageUrl}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:locale["']\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:locale" content="${seo.ogLocale}">`
  );

  // twitter:title / twitter:description (keep concise — same as OG)
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}">`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}">`
  );

  // canonical
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${pageUrl}">`
  );

  return html;
}

/**
 * Convert all relative paths into absolute paths so the page works under any /<lang>/ prefix.
 *
 * Two flavours of source page exist:
 *   - root pages    (index.html, privacy.html)
 *   - docs pages    (docs/<x>.html)
 *
 * Asset paths (favicon.svg, langs/index.js, og-image.png) → ALWAYS rewritten to "/asset".
 * Internal page links → rewritten to /<lang>/<page> for non-FR; FR keeps original relatives.
 */
function rewritePaths(html, page, lang) {
  const langPrefix = lang === SOURCE_LANG ? '' : '/' + lang;
  const isDocsPage = page.startsWith('docs/');

  // Shared assets — always at site root
  if (isDocsPage) {
    html = html.replace(/(href|src)=["']\.\.\/favicon\.svg["']/g, '$1="/favicon.svg"');
    html = html.replace(/(href|src)=["']\.\.\/langs\/index\.js["']/g, '$1="/langs/index.js"');
  } else {
    // root pages
    html = html.replace(/(href|src)=["']favicon\.svg["']/g, '$1="/favicon.svg"');
    html = html.replace(/(href|src)=["']langs\/index\.js["']/g, '$1="/langs/index.js"');
  }

  // Internal page navigation — only rewrite for non-FR (FR keeps the original relative tree)
  if (lang !== SOURCE_LANG) {
    if (isDocsPage) {
      // ../index.html        → /<lang>/
      html = html.replace(/(href|src)=["']\.\.\/index\.html(#[^"']*)?["']/g,
        (_, a, hash = '') => `${a}="${langPrefix}/${hash}"`);
      // intra-docs links: <name>.html → /<lang>/docs/<name>.html
      // We must NOT match absolute URLs, anchors, ../foo, langs/ etc — only bare <word>.html
      html = html.replace(/(href|src)=["'](?!https?:|\/|\.\.\/|#|mailto:)([\w-]+\.html)(#[^"']*)?["']/g,
        (_, a, file, hash = '') => `${a}="${langPrefix}/docs/${file}${hash}"`);
    } else {
      // root → docs/<name>.html → /<lang>/docs/<name>.html
      html = html.replace(/(href|src)=["']docs\/([\w-]+\.html)(#[^"']*)?["']/g,
        (_, a, file, hash = '') => `${a}="${langPrefix}/docs/${file}${hash}"`);
      html = html.replace(/(href|src)=["']docs\/(#[^"']*)?["']/g,
        (_, a, hash = '') => `${a}="${langPrefix}/docs/${hash || ''}"`);
    }
  }

  return html;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeHtmlAttr(s) {
  return String(s).replace(/[&"]/g, c => ({ '&': '&amp;', '"': '&quot;' }[c]));
}

/**
 * For language-specific bonus-page URLs, swap FR slugs → EN slugs when rendering EN.
 * Other non-FR languages keep FR slugs (user lands on the FR version — acceptable
 * fallback since these pages only exist in FR + EN).
 */
function rewriteBonusLinks(html, lang) {
  if (lang !== 'en') return html;
  for (const bp of BONUS_PAGES) {
    // bp.fr is "/docs/x.html", bp.en is "/en/docs/y.html"
    html = html.replaceAll(`href="${bp.fr}"`, `href="${bp.en}"`);
  }
  return html;
}

/**
 * Mark the right language as active in the dropdown by setting the visible flag/code.
 * The HTML hardcodes the FR flag + "FR" — we replace them for non-FR builds.
 */
function setActiveLangInHeader(html, lang) {
  if (lang === 'fr') return html; // unchanged
  const flags = { en: '🇬🇧', es: '🇪🇸', de: '🇩🇪', pt: '🇧🇷', it: '🇮🇹', nl: '🇳🇱', pl: '🇵🇱', ru: '🇷🇺', tr: '🇹🇷', ja: '🇯🇵', ko: '🇰🇷', tl: '🇵🇭', zh: '🇨🇳', ar: '🇸🇦' };
  const flag = flags[lang] || '🌐';
  html = html.replace(/<span class="lang-flag">🇫🇷<\/span>/g, `<span class="lang-flag">${flag}</span>`);
  html = html.replace(/<span class="lang-code">FR<\/span>/g, `<span class="lang-code">${lang.toUpperCase()}</span>`);
  return html;
}

// ─── Sitemap.xml + robots.txt ────────────────────────────────────────────────

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  for (const page of PAGES) {
    const tail = pageToCanonicalTail(page);
    const alternates = LANGS.map(l => {
      const pref = l === SOURCE_LANG ? '' : '/' + l;
      return `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${pref}${tail}"/>`;
    }).join('\n');
    const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${tail}"/>`;

    // One <url> entry per language with its alternates listed
    for (const l of LANGS) {
      const pref = l === SOURCE_LANG ? '' : '/' + l;
      urls.push(
        `  <url>\n` +
        `    <loc>${SITE}${pref}${tail}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${page === 'index.html' ? 'weekly' : 'monthly'}</changefreq>\n` +
        `    <priority>${page === 'index.html' ? '1.0' : '0.7'}</priority>\n` +
        alternates + '\n' +
        xdefault + '\n' +
        `  </url>`
      );
    }
  }
  // Bonus pages — FR + EN only, with cross-language alternates
  for (const bp of BONUS_PAGES) {
    const altLines =
      `    <xhtml:link rel="alternate" hreflang="fr" href="${SITE}${bp.fr}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${bp.en}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${bp.fr}"/>`;
    for (const url of [bp.fr, bp.en]) {
      urls.push(
        `  <url>\n` +
        `    <loc>${SITE}${url}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${bp.changefreq}</changefreq>\n` +
        `    <priority>${bp.priority}</priority>\n` +
        altLines + '\n' +
        `  </url>`
      );
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    urls.join('\n') + '\n' +
    `</urlset>\n`;
}

function buildRobots() {
  return (
    `# Reborn Assistant — reborn-assistance.fr\n` +
    `User-agent: *\n` +
    `Allow: /\n` +
    `Disallow: /tools/\n` +
    `Disallow: /privacy.html\n` +
    `\n` +
    `Sitemap: ${SITE}/sitemap.xml\n`
  );
}

// ─── Main build ──────────────────────────────────────────────────────────────

function readSource(page) {
  return fs.readFileSync(path.join(ROOT, page), 'utf-8');
}

function writeOutput(outRel, content) {
  const outPath = path.join(ROOT, outRel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
}

async function build() {
  console.log('[build-i18n] root:', ROOT);
  console.log('[build-i18n] generating', NON_FR_LANGS.length, 'languages ×', PAGES.length, 'pages =', NON_FR_LANGS.length * PAGES.length, 'files');

  // 1. Load all lang files
  const strings = {};
  for (const lang of LANGS) {
    strings[lang] = await loadLangFile(lang);
  }
  console.log('[build-i18n] loaded', Object.keys(strings).length, 'lang files');

  // 2. FR pages (source) — only inject hreflang + prerendered-lang marker (in place)
  for (const page of PAGES) {
    let html = readSource(page);
    html = injectHeadSeoTags(html, page, 'fr');
    writeOutput(page, html);
  }
  console.log('[build-i18n] FR pages updated with hreflang × ' + PAGES.length);

  // 3. Each non-FR language
  let count = 0;
  for (const lang of NON_FR_LANGS) {
    for (const page of PAGES) {
      let html = readSource(page);
      html = applyI18n(html, strings[lang]);
      html = rewriteSeoTags(html, lang, page);
      html = rewritePaths(html, page, lang);
      html = rewriteBonusLinks(html, lang);
      html = setActiveLangInHeader(html, lang);
      html = injectHeadSeoTags(html, page, lang);
      writeOutput(`${lang}/${page}`, html);
      count++;
    }
  }
  console.log('[build-i18n] wrote', count, 'localized pages');

  // 4. Sitemap + robots
  writeOutput('sitemap.xml', buildSitemap());
  writeOutput('robots.txt', buildRobots());
  console.log('[build-i18n] wrote sitemap.xml + robots.txt');

  console.log('[build-i18n] done.');
}

build().catch(err => { console.error(err); process.exit(1); });
