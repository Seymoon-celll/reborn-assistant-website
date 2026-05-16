// © 2026 Reborn Assistant — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-assistant.com
/* ── Reborn Assistant — i18n loader ── */

/* Inject lang-select dropdown CSS */
(function injectLangCSS() {
  const s = document.createElement('style');
  s.textContent = [
    '.lang-select{position:relative;display:inline-block;user-select:none;}',
    '.lang-select-btn{display:flex;align-items:center;gap:7px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.25);border-radius:8px;padding:7px 13px;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;color:#d4af37;cursor:pointer;transition:all 0.2s ease;letter-spacing:0.5px;white-space:nowrap;}',
    '.lang-select-btn:hover{background:rgba(212,175,55,0.12);border-color:rgba(212,175,55,0.45);}',
    '.lang-chevron{font-size:9px;transition:transform 0.2s ease;opacity:0.6;margin-left:2px;}',
    '.lang-select.open .lang-chevron{transform:rotate(180deg);}',
    '.lang-select-menu{position:absolute;top:calc(100% + 6px);right:0;min-width:130px;background:rgba(10,10,8,0.97);border:1px solid rgba(212,175,55,0.25);border-radius:8px;overflow:hidden;display:none;flex-direction:column;backdrop-filter:blur(16px);box-shadow:0 12px 40px rgba(0,0,0,0.6),0 0 0 1px rgba(212,175,55,0.08);z-index:999;}',
    '.lang-select.open .lang-select-menu{display:flex;}',
    '.lang-option{display:flex;align-items:center;gap:9px;width:100%;background:transparent;border:none;border-bottom:1px solid rgba(212,175,55,0.08);padding:10px 14px;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:500;color:#9a9278;cursor:pointer;transition:all 0.15s ease;text-align:left;}',
    '.lang-option:last-child{border-bottom:none;}',
    '.lang-option:hover{background:rgba(212,175,55,0.09);color:#d4af37;}',
    '.lang-option.active{color:#d4af37;background:rgba(212,175,55,0.05);font-weight:600;}',
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

/* Apply loaded translations to every [data-i18n] element */
function applyTranslations(strings) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = resolve(strings, el.dataset.i18n);
    if (val !== undefined) {
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
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

/* Init — handle both cases: module executes before or after DOMContentLoaded */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
} else {
  setLang(currentLang);
}

/* Expose globals for inline onclick handlers */
window.setLang = setLang;
window.toggleLangMenu = toggleLangMenu;
