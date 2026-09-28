// © 2026 Reborn Assistant — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-assistant.com
/* ── Reborn Assistant — i18n loader ── */

/* Language dropdown CSS — the single source of truth lives in section 9 of
   /assets/css/site.css. This resolved copy is injected ONLY on pages that do not
   link that stylesheet (legacy or cached pages); keep both in sync. */
(function injectLangCSS() {
  if (document.querySelector('link[rel~="stylesheet"][href*="/assets/css/site.css"]')) return;
  const s = document.createElement('style');
  s.textContent = [
    '.lang-select{position:relative;display:inline-block;user-select:none;}',
    '.lang-select-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:40px;min-width:40px;padding:0 12px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.28);border-radius:10px;font-family:\'Inter\',system-ui,sans-serif;font-size:12px;font-weight:600;letter-spacing:.04em;white-space:nowrap;color:#d4af37;cursor:pointer;transition:background-color .2s ease,border-color .2s ease;}',
    '.lang-select-btn:hover,.lang-select.open .lang-select-btn{background:rgba(212,175,55,0.12);border-color:rgba(212,175,55,0.5);}',
    '.lang-select-btn:focus-visible{outline:2px solid #f5e6b8;outline-offset:3px;}',
    '.lang-flag{font-size:15px;line-height:1;}',
    '.lang-chevron{font-size:9px;opacity:.7;transition:transform .2s ease;}',
    '.lang-select.open .lang-chevron{transform:rotate(180deg);}',
    '.lang-select-menu{position:absolute;top:calc(100% + 8px);inset-inline-end:0;z-index:999;min-width:min(330px,calc(100vw - 24px));max-height:min(70vh,560px);overflow-y:auto;overscroll-behavior:contain;display:none;grid-template-columns:1fr 1fr;gap:2px;padding:6px;background:#0a0908;border:1px solid rgba(212,175,55,0.3);border-radius:12px;box-shadow:0 24px 60px -12px rgba(0,0,0,.85),0 0 0 1px rgba(0,0,0,.6),inset 0 1px 0 rgba(245,230,184,.06);}',
    '.lang-select.open .lang-select-menu{display:grid;}',
    '.lang-option{display:flex;align-items:center;gap:9px;width:100%;min-height:40px;padding:0 12px;background:transparent;border:0;border-radius:8px;font-family:\'Inter\',system-ui,sans-serif;font-size:13px;font-weight:500;text-align:start;color:#a39b80;cursor:pointer;transition:background-color .15s ease,color .15s ease;}',
    '.lang-option:hover{background:rgba(212,175,55,0.1);color:#ecd58c;}',
    '.lang-option:focus-visible{outline:2px solid transparent;outline-offset:-2px;background:rgba(212,175,55,0.1);color:#ecd58c;box-shadow:inset 0 0 0 1px rgba(245,230,184,.6);}',
    '.lang-option.active{color:#d4af37;background:rgba(212,175,55,0.08);font-weight:600;}',
    '.lang-option.active::after{content:"";width:6px;height:6px;margin-inline-start:auto;background:#d4af37;transform:rotate(45deg);}',
  ].join('');
  document.head.appendChild(s);
})();

const LANGS = {
  fr: { flag: '🇫🇷', label: 'Français'    },
  en: { flag: '🇬🇧', label: 'English'     },
  es: { flag: '🇪🇸', label: 'Español'     },
  de: { flag: '🇩🇪', label: 'Deutsch'     },
  pt: { flag: '🇧🇷', label: 'Português'   },
  it: { flag: '🇮🇹', label: 'Italiano'    },
  nl: { flag: '🇳🇱', label: 'Nederlands'  },
  pl: { flag: '🇵🇱', label: 'Polski'      },
  ru: { flag: '🇷🇺', label: 'Русский'     },
  tr: { flag: '🇹🇷', label: 'Türkçe'      },
  ja: { flag: '🇯🇵', label: '日本語'       },
  ko: { flag: '🇰🇷', label: '한국어'       },
  tl: { flag: '🇵🇭', label: 'Filipino'     },
  zh: { flag: '🇨🇳', label: '中文'          },
  ar: { flag: '🇸🇦', label: 'العربية'      },
};

const SUPPORTED = Object.keys(LANGS);

/* Resolve dot-path in an object: "pricing.voyageur.rank" → value */
function resolve(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}

/* Emoji-led labels (/assets/css/site.css §7, §13): ::first-letter hides the leading emoji, and would also hide punctuation
   that follows it ("❌「…", "💡 ¿…"). Same test as tools/build-i18n.mjs, re-applied here in case a cached page is older than
   its strings: a label that is not SAFE keeps its OS emoji (.emoji-keep; a .callout--gl frame loses callout--gl).
   Built with new RegExp in a try: an engine without these Unicode properties simply skips the check. */
let SAFE_EMOJI_LEAD = null;
try {
  /* the emoji cluster (a flag, or a pictograph + any combining mark / skin tone / tag character, per ZWJ part) is matched
     atomically ((?=(…))\1), so it cannot give back an extender to pass the punctuation test */
  SAFE_EMOJI_LEAD = new RegExp('^\\s*(?=((?:\\p{Regional_Indicator}{2}|(?!\\p{P})\\p{Extended_Pictographic}[\\p{M}\\p{Emoji_Modifier}\\u{E0020}-\\u{E007F}]*(?:\\u{200D}\\p{Extended_Pictographic}[\\p{M}\\p{Emoji_Modifier}\\u{E0020}-\\u{E007F}]*)*)))\\1(?!\\s*\\p{P})', 'u');
} catch (e) { /* unsupported: keep the build's classes */ }
function guardEmojiLabel(el) {
  if (!SAFE_EMOJI_LEAD) return;
  if (el.classList.contains('emoji-lead') || el.classList.contains('emoji-keep')) {
    const safe = SAFE_EMOJI_LEAD.test(el.textContent);
    el.classList.toggle('emoji-lead', safe);
    el.classList.toggle('emoji-keep', !safe);
    /* its gold stand-in steps aside beside a kept emoji (site.css: .inline-gl--off — also where :has() is unknown) */
    const gl = el.previousElementSibling;
    if (gl && gl.classList.contains('inline-gl')) gl.classList.toggle('inline-gl--off', !safe);
  }
  const frame = el.closest('.callout--gl');
  const title = frame && frame.firstElementChild;
  if (title && (frame === el || title === el || title.contains(el)) && !SAFE_EMOJI_LEAD.test(title.textContent)) frame.classList.remove('callout--gl');
}

/* Apply loaded translations to every [data-i18n] element */
function applyTranslations(strings) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = resolve(strings, el.dataset.i18n);
    if (val !== undefined) {
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
      guardEmojiLabel(el);
    }
  });
  document.documentElement.lang = currentLang;
}

/* Detect language from URL path (e.g. /en/docs/...) — null if root (= FR) */
function detectLangFromPath() {
  const m = location.pathname.match(/^\/([a-z]{2})(\/|$)/);
  return m && SUPPORTED.includes(m[1]) ? m[1] : null;
}

/* Return current path stripped of any lang prefix (e.g. /en/docs/x.html → /docs/x.html) */
function stripLangPrefix() {
  const cur = detectLangFromPath();
  if (!cur) return location.pathname;
  return location.pathname.replace(/^\/[a-z]{2}/, '') || '/';
}

/* Detect browser language, fallback to 'fr' */
function detectBrowserLang() {
  const code = (navigator.language || '').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(code) ? code : 'fr';
}

/* URL path always wins over localStorage / browser — search engines and shared links need this */
let currentLang = detectLangFromPath() || localStorage.getItem('site-lang') || detectBrowserLang();
let cachedStrings = {};

/* Switch language — on a static pre-rendered site, this redirects to /<lang>/<path>.
   FR lives at the root (no /fr/ prefix). The root HTML is FR, so when language is FR
   we never need to fetch anything: just stay where we are or strip the lang prefix. */
async function setLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'fr';

  const basePath = stripLangPrefix();
  const targetPath = lang === 'fr' ? basePath : '/' + lang + basePath;

  /* If we're not on the right URL yet, redirect — that's where the pre-rendered HTML lives */
  if (location.pathname !== targetPath && location.pathname !== targetPath.replace(/\/$/, '/index.html')) {
    localStorage.setItem('site-lang', lang);
    location.href = targetPath;
    return;
  }

  /* Already on the right URL — just sync the in-page state (used by initial load) */
  currentLang = lang;
  localStorage.setItem('site-lang', lang);

  const menu = document.querySelector('.lang-select');
  if (menu) menu.classList.remove('open');

  const flagEl = document.querySelector('.lang-flag');
  const codeEl = document.querySelector('.lang-code');
  if (flagEl) flagEl.textContent = LANGS[lang]?.flag ?? '';
  if (codeEl) codeEl.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  /* Load & cache strings — only really needed if HTML is stale (cached) */
  if (!cachedStrings[lang]) {
    try {
      const base = new URL(`./${lang}.js`, import.meta.url).href;
      const url = `${base}?v=${Date.now()}`;
      const mod = await import(url);
      cachedStrings[lang] = mod.default;
    } catch (e) {
      console.error(`[i18n] Failed to load lang "${lang}":`, e);
      return;
    }
  }
  applyTranslations(cachedStrings[lang]);
}

function toggleLangMenu() {
  const el = document.querySelector('.lang-select');
  if (el) el.classList.toggle('open');
}

/* Close on outside click */
document.addEventListener('click', e => {
  const el = document.querySelector('.lang-select');
  if (el && !el.contains(e.target)) el.classList.remove('open');
});

/* Accessibility, once for every page (disclosure pattern: a button with
   aria-expanded that shows a list of buttons — no aria-haspopup, no role=menu):
   aria-expanded mirrors the open state (whoever toggles the class), Escape
   closes the menu and returns focus, and the menu closes when keyboard focus
   leaves it so it never covers the next focus stop.
   The open menu is also nudged back inside the viewport (8px margin) when its
   button sits too close to an edge (legacy headers on narrow phones). */
(function langMenuA11y() {
  const el = document.querySelector('.lang-select');
  const btn = el && el.querySelector('.lang-select-btn');
  if (!btn) return;
  const menu = el.querySelector('.lang-select-menu');
  const sync = () => {
    const open = el.classList.contains('open');
    btn.setAttribute('aria-expanded', String(open));
    if (!menu) return;
    menu.style.translate = '';
    if (open) {
      const r = menu.getBoundingClientRect();
      const dx = r.left < 8 ? 8 - r.left : Math.min(0, innerWidth - 8 - r.right);
      if (dx) menu.style.translate = dx + 'px 0';
    }
  };
  sync();
  new MutationObserver(sync).observe(el, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && el.classList.contains('open')) { el.classList.remove('open'); btn.focus(); }
  });
  /* relatedTarget is null for a mouse click in Safari: leave that case to the click handlers */
  el.addEventListener('focusout', e => {
    if (e.relatedTarget && !el.contains(e.relatedTarget)) el.classList.remove('open');
  });
  /* …and when focus comes back from the browser UI somewhere else on the page */
  document.addEventListener('focusin', e => {
    if (el.classList.contains('open') && !el.contains(e.target)) el.classList.remove('open');
  });
})();

/* Init — handle both cases: module executes before or after DOMContentLoaded */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
} else {
  setLang(currentLang);
}

/* Expose globals for inline onclick handlers */
window.setLang = setLang;
window.toggleLangMenu = toggleLangMenu;
