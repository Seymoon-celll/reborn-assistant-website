/**
 * Loads the per-language translation maps of the long-tail articles from ./i18n/<lang>.json.
 *
 * Each JSON file holds, per page id, an array of [French segment, translation] pairs. A French segment is an
 * exact substring of the FR source (a whole paragraph, list item, cell, heading, JSON-LD string…) and is
 * applied with replaceAll by tools/build-i18n.mjs. Pairs are applied longest-first so that a short segment
 * ("Heal Rain") can never rewrite part of a longer one before the longer one gets its own translation.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(path.dirname(new URL(import.meta.url).pathname), 'i18n');
const LANGS = ['es', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ja', 'ko', 'tl', 'zh', 'ar'];

export function loadPageMaps(pageId) {
  const content = { fr: {}, en: {} }; // FR is the source, EN is hand-written
  for (const lang of LANGS) {
    const file = path.join(DIR, `${lang}.json`);
    const pairs = fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, 'utf8'))[pageId] || []) : [];
    content[lang] = Object.fromEntries([...pairs].sort((a, b) => b[0].length - a[0].length));
  }
  return content;
}
