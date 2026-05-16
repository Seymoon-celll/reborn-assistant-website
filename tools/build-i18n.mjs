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

import { SEO, seoFor, LANGS, PAGES } from './seo-i18n.mjs';
import { LONGTAIL_PAGES, LONGTAIL_LANGS, RTL_LONGTAIL_LANGS } from './longtail-i18n.mjs';

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
 * Asset paths (favicon.svg, langs/index.js, og-image.jpg) → ALWAYS rewritten to "/asset".
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
 * For language-specific long-tail-page URLs, swap FR slugs → target language slug.
 * For each long-tail page, the FR slug (absolute path starting with /docs/...) is
 * remapped to the per-language slug if defined. Languages without a slug keep FR.
 */
function rewriteBonusLinks(html, lang) {
  if (lang === 'fr') return html;
  for (const page of LONGTAIL_PAGES) {
    const frSlug = '/' + page.slugs.fr;
    const targetSlug = page.slugs[lang];
    if (!targetSlug || targetSlug === page.slugs.fr) continue;
    html = html.replaceAll(`href="${frSlug}"`, `href="/${targetSlug}"`);
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
  // Long-tail SEO pages — 15 languages, cross-language alternates
  for (const page of LONGTAIL_PAGES) {
    const altLines = LONGTAIL_LANGS
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${page.slugs[l]}"/>`)
      .concat([`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${page.slugs.fr}"/>`])
      .join('\n');
    for (const l of LONGTAIL_LANGS) {
      urls.push(
        `  <url>\n` +
        `    <loc>${SITE}/${page.slugs[l]}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>monthly</changefreq>\n` +
        `    <priority>0.8</priority>\n` +
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

/**
 * Render one long-tail SEO page from its FR source into a target language.
 *
 * 1. Apply the content translation map (replaceAll on FR strings).
 * 2. Replace <html lang="fr"> + add dir="rtl" for AR.
 * 3. Rewrite title / meta description / OG / Twitter / canonical / og:locale
 *    using the per-language SEO meta.
 * 4. Rewrite hreflang block with the 15 per-language slugs + x-default → FR.
 * 5. Convert relative asset paths (../favicon.svg, etc.) to absolute.
 * 6. Rewrite the related-card links so they point to the same language.
 */
function renderLongtailPage(frHtml, page, lang) {
  let html = frHtml;
  const seo = page.seo[lang] || page.seo.en || page.seo.fr;
  const targetSlug = page.slugs[lang];
  const pageUrl = `${SITE}/${targetSlug}`;

  // 1. Apply content translation map (replaceAll on FR phrases)
  const contentMap = page.content[lang] || {};
  for (const [fr, tr] of Object.entries(contentMap)) {
    html = html.replaceAll(fr, tr);
  }

  // 2. <html lang> + dir
  const dirAttr = RTL_LONGTAIL_LANGS.has(lang) ? ' dir="rtl"' : '';
  html = html.replace(/<html[^>]*>/, `<html lang="${lang}"${dirAttr}>`);

  // 3. SEO meta — title, description, OG, Twitter, canonical
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}">`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}">`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}">`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${pageUrl}">`);
  html = html.replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:locale" content="${seo.ogLocale}">`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}">`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}">`);
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${pageUrl}">`);

  // 4. Replace the 3-line FR hreflang block with the 15-language version
  const hreflangLines = LONGTAIL_LANGS
    .map(l => `    <link rel="alternate" hreflang="${l}" href="${SITE}/${page.slugs[l]}">`)
    .concat([`    <link rel="alternate" hreflang="x-default" href="${SITE}/${page.slugs.fr}">`])
    .join('\n');
  html = html.replace(
    /<!-- ── hreflang ─[\s\S]*?<!-- ── \/hreflang.*?-->|<link rel="alternate" hreflang="fr"[\s\S]*?hreflang="x-default"[^>]*>/,
    `<!-- ── hreflang ──────────────────────────────────── -->\n${hreflangLines}\n    <!-- ── /hreflang ── -->`
  );

  // 5. Convert relative asset paths to absolute (page lives at /<lang>/docs/<slug>.html)
  html = html.replaceAll('href="../favicon.svg"', 'href="/favicon.svg"');
  html = html.replaceAll('href="index.html"', `href="/${lang}/docs/index.html"`);

  // 6. Cross-link related cards — point to the SAME language's slugs
  for (const other of LONGTAIL_PAGES) {
    if (other.id === page.id) continue;
    const frRel = path.basename(other.slugs.fr);                // e.g. "meilleurs-outils-flyff-universe-2026.html"
    const targetAbs = '/' + other.slugs[lang];                  // language-specific slug
    html = html.replaceAll(`href="${frRel}"`, `href="${targetAbs}"`);
  }

  // 7. Prerendered-lang marker
  html = html.replace(/<\/head>/, `    <script>window.__PRERENDERED_LANG__=${JSON.stringify(lang)};</script>\n</head>`);

  return html;
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

  // 4. Long-tail pages — generate each non-FR / non-EN language from FR source
  let longtailCount = 0;
  for (const page of LONGTAIL_PAGES) {
    const frHtml = readSource(page.source);
    for (const lang of LONGTAIL_LANGS) {
      if (lang === 'fr' || lang === 'en') continue; // hand-written sources
      const out = renderLongtailPage(frHtml, page, lang);
      writeOutput(page.slugs[lang], out);
      longtailCount++;
    }
  }
  console.log('[build-i18n] wrote', longtailCount, 'long-tail pages across 13 non-FR/EN languages');

  // 5. Sitemap + robots
  writeOutput('sitemap.xml', buildSitemap());
  writeOutput('robots.txt', buildRobots());
  console.log('[build-i18n] wrote sitemap.xml + robots.txt');

  console.log('[build-i18n] done.');
}

build().catch(err => { console.error(err); process.exit(1); });
