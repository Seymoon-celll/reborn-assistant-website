/**
 * Translation map for docs/automatiser-ringmaster-flyff-universe.html
 *
 * Each language exports { "FR phrase or HTML fragment": "translated phrase or fragment" }.
 * The builder applies replaceAll on the FR source HTML to produce each language variant.
 *
 * Empty objects (fr, en) mean: the source is already in that language, skip generation.
 *
 * Phrases are kept long enough to be unique within the page (avoid accidental
 * matches inside CSS/script blocks).
 */

const fr = {};  // source language — no remapping
const en = {};  // generated separately as a hand-written source under /en/docs/

const es = {};
const de = {};
const pt = {};
const it = {};
const nl = {};
const pl = {};
const ru = {};
const tr = {};
const ja = {};
const ko = {};
const tl = {};
const zh = {};
const ar = {};

export const automateRmContent = { fr, en, es, de, pt, it, nl, pl, ru, tr, ja, ko, tl, zh, ar };
