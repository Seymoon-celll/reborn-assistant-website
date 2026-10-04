/**
 * Long-tail SEO pages — full 15-language coverage.
 *
 * Structure per page:
 *   • id          internal identifier
 *   • source      path of the FR HTML source (lives in /docs/)
 *   • slugs       per-language output path (relative to repo root)
 *   • seo         per-language { title, description, ogLocale }
 *   • content     per-language string→string map applied via replaceAll on
 *                 the FR source. Empty {} means "skip generation" (FR is the
 *                 source; EN is hand-written separately under /en/docs/).
 */

import { automateRmContent } from './longtail-translations/automate-rm.mjs';
import { toolsContent }     from './longtail-translations/tools-2026.mjs';
import { guideRmContent }   from './longtail-translations/guide-rm.mjs';

export const LONGTAIL_LANGS = ['fr', 'en', 'es', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ja', 'ko', 'tl', 'zh', 'ar'];
export const RTL_LONGTAIL_LANGS = new Set(['ar']);

// ─── Slugs per language ──────────────────────────────────────────────────────

const AUTOMATE_SLUGS = {
  fr: 'docs/automatiser-ringmaster-flyff-universe.html',
  en: 'en/docs/automate-ringmaster-flyff-universe.html',
  es: 'es/docs/automatizar-ringmaster-flyff-universe.html',
  de: 'de/docs/ringmaster-automatisieren-flyff-universe.html',
  pt: 'pt/docs/automatizar-ringmaster-flyff-universe.html',
  it: 'it/docs/automatizzare-ringmaster-flyff-universe.html',
  nl: 'nl/docs/ringmaster-automatiseren-flyff-universe.html',
  pl: 'pl/docs/automatyzacja-ringmaster-flyff-universe.html',
  ru: 'ru/docs/avtomatizirovat-ringmaster-flyff-universe.html',
  tr: 'tr/docs/ringmaster-otomatiklestirme-flyff-universe.html',
  ja: 'ja/docs/ringmaster-jidoka-flyff-universe.html',
  ko: 'ko/docs/ringmaster-jadonghwa-flyff-universe.html',
  tl: 'tl/docs/i-automate-ang-ringmaster-flyff-universe.html',
  zh: 'zh/docs/ringmaster-zidonghua-flyff-universe.html',
  ar: 'ar/docs/atmatat-ringmaster-flyff-universe.html',
};

const TOOLS_SLUGS = {
  fr: 'docs/meilleurs-outils-flyff-universe-2026.html',
  en: 'en/docs/best-flyff-universe-tools-2026.html',
  es: 'es/docs/mejores-herramientas-flyff-universe-2026.html',
  de: 'de/docs/beste-flyff-universe-tools-2026.html',
  pt: 'pt/docs/melhores-ferramentas-flyff-universe-2026.html',
  it: 'it/docs/migliori-strumenti-flyff-universe-2026.html',
  nl: 'nl/docs/beste-flyff-universe-tools-2026.html',
  pl: 'pl/docs/najlepsze-narzedzia-flyff-universe-2026.html',
  ru: 'ru/docs/luchshie-instrumenty-flyff-universe-2026.html',
  tr: 'tr/docs/en-iyi-flyff-universe-araclari-2026.html',
  ja: 'ja/docs/saikou-no-flyff-universe-tools-2026.html',
  ko: 'ko/docs/choesangui-flyff-universe-dogu-2026.html',
  tl: 'tl/docs/pinakamahusay-flyff-universe-tools-2026.html',
  zh: 'zh/docs/zuijia-flyff-universe-gongju-2026.html',
  ar: 'ar/docs/afdal-adawat-flyff-universe-2026.html',
};

const GUIDE_SLUGS = {
  fr: 'docs/guide-ringmaster-flyff-universe.html',
  en: 'en/docs/flyff-universe-ringmaster-class-guide.html',
  es: 'es/docs/guia-ringmaster-flyff-universe.html',
  de: 'de/docs/ringmaster-flyff-universe-klassenguide.html',
  pt: 'pt/docs/guia-ringmaster-flyff-universe.html',
  it: 'it/docs/guida-ringmaster-flyff-universe.html',
  nl: 'nl/docs/ringmaster-flyff-universe-klassengids.html',
  pl: 'pl/docs/poradnik-ringmaster-flyff-universe.html',
  ru: 'ru/docs/rukovodstvo-ringmaster-flyff-universe.html',
  tr: 'tr/docs/ringmaster-flyff-universe-rehberi.html',
  ja: 'ja/docs/ringmaster-class-guide-flyff-universe.html',
  ko: 'ko/docs/ringmaster-class-gaideu-flyff-universe.html',
  tl: 'tl/docs/gabay-sa-ringmaster-flyff-universe.html',
  zh: 'zh/docs/ringmaster-zhiye-zhinan-flyff-universe.html',
  ar: 'ar/docs/dalil-ringmaster-flyff-universe.html',
};

// ─── SEO meta per page × language ────────────────────────────────────────────

const AUTOMATE_SEO = {
  fr: { title: "Automatiser son Ringmaster sur Flyff Universe — Guide 2026", description: "Tutoriel pas à pas pour automatiser votre Ringmaster Flyff Universe avec Reborn Assistant : rotation de buffs, Heal Rain, potions de MP, intervalles selon votre INT.", ogLocale: 'fr_FR' },
  en: { title: "How to Automate Your Ringmaster on Flyff Universe — 2026 Guide", description: "Step-by-step tutorial to automate your Flyff Universe Ringmaster with Reborn Assistant: buff rotation, Heal Rain, MP potions and intervals based on your INT.", ogLocale: 'en_US' },
  es: { title: "Automatizar tu Ringmaster en Flyff Universe — Guía 2026", description: "Tutorial paso a paso para automatizar tu Ringmaster en Flyff Universe con Reborn Assistant: rotación de buffs, Heal Rain, pociones de MP e intervalos según tu INT.", ogLocale: 'es_ES' },
  de: { title: "Ringmaster auf Flyff Universe automatisieren — Guide 2026", description: "Schritt-für-Schritt-Anleitung zur Automatisierung Ihres Ringmasters in Flyff Universe mit Reborn Assistant: Buff-Rotation, Heal Rain, MP-Tränke und Intervalle nach Ihrer INT.", ogLocale: 'de_DE' },
  pt: { title: "Automatizar seu Ringmaster no Flyff Universe — Guia 2026", description: "Tutorial passo a passo para automatizar seu Ringmaster no Flyff Universe com Reborn Assistant: rotação de buffs, Heal Rain, poções de MP e intervalos de acordo com sua INT.", ogLocale: 'pt_BR' },
  it: { title: "Automatizzare il Ringmaster su Flyff Universe — Guida 2026", description: "Tutorial passo passo per automatizzare il tuo Ringmaster su Flyff Universe con Reborn Assistant: rotazione dei buff, Heal Rain, pozioni MP e intervalli in base alla tua INT.", ogLocale: 'it_IT' },
  nl: { title: "Uw Ringmaster automatiseren in Flyff Universe — Gids 2026", description: "Stapsgewijze tutorial om uw Ringmaster in Flyff Universe te automatiseren met Reborn Assistant: buffrotatie, Heal Rain, MP-drankjes en intervallen op basis van uw INT.", ogLocale: 'nl_NL' },
  pl: { title: "Automatyzacja Ringmastera w Flyff Universe — Poradnik 2026", description: "Poradnik krok po kroku: automatyzacja Ringmastera w Flyff Universe z Reborn Assistant — rotacja buffów, Heal Rain, mikstury MP i interwały dobrane do Twojego INT.", ogLocale: 'pl_PL' },
  ru: { title: "Автоматизация Ringmaster в Flyff Universe — Руководство 2026", description: "Пошаговое руководство по автоматизации Ringmaster в Flyff Universe с Reborn Assistant: ротация баффов, Heal Rain, зелья MP и интервалы под ваш INT.", ogLocale: 'ru_RU' },
  tr: { title: "Flyff Universe'de Ringmaster Otomatikleştirme — 2026 Rehberi", description: "Flyff Universe'de Ringmaster'ınızı Reborn Assistant ile otomatikleştirmek için adım adım rehber: buff rotasyonu, Heal Rain, MP iksirleri ve INT'inize göre aralıklar.", ogLocale: 'tr_TR' },
  ja: { title: "Flyff UniverseでRingmasterを自動化する — 2026年完全ガイド", description: "Reborn AssistantでFlyff UniverseのRingmasterを自動化するステップバイステップガイド: バフローテーション、Heal Rain、MPポーション、INTに合わせた間隔設定。", ogLocale: 'ja_JP' },
  ko: { title: "Flyff Universe에서 Ringmaster 자동화 — 2026 완벽 가이드", description: "Reborn Assistant로 Flyff Universe의 Ringmaster를 자동화하는 단계별 튜토리얼: 버프 로테이션, Heal Rain, MP 물약, INT에 맞춘 간격 설정.", ogLocale: 'ko_KR' },
  tl: { title: "I-automate ang Ringmaster mo sa Flyff Universe — Gabay 2026", description: "Hakbang-hakbang na tutorial para i-automate ang Ringmaster mo sa Flyff Universe gamit ang Reborn Assistant: buff rotation, Heal Rain, MP potions at mga interval batay sa iyong INT.", ogLocale: 'tl_PH' },
  zh: { title: "在 Flyff Universe 中自动化 Ringmaster — 2026 完整指南", description: "使用 Reborn Assistant 在 Flyff Universe 中自动化 Ringmaster 的分步教程：Buff 轮换、Heal Rain、MP 药水，以及根据你的 INT 设置的间隔。", ogLocale: 'zh_CN' },
  ar: { title: "أتمتة Ringmaster في Flyff Universe — دليل 2026 الكامل", description: "دليل خطوة بخطوة لأتمتة Ringmaster في Flyff Universe باستخدام Reborn Assistant: تناوب التعزيزات، Heal Rain، جرعات MP وفواصل زمنية حسب قيمة INT لديك.", ogLocale: 'ar_SA' },
};

const TOOLS_SEO = {
  fr: { title: "Les Meilleurs Outils & Extensions Flyff Universe 2026", description: "Comparatif 2026 des outils Flyff Universe : Flyffipedia, Flyffulator, Madrigal Inside, simulateur de compétences, API officielle et extension de macros.", ogLocale: 'fr_FR' },
  en: { title: "Best Flyff Universe Tools & Extensions in 2026", description: "2026 comparison of Flyff Universe tools: Flyffipedia, Flyffulator, Madrigal Inside, a skill simulator, the official API and a keyboard macro extension.", ogLocale: 'en_US' },
  es: { title: "Las Mejores Herramientas y Extensiones Flyff Universe 2026", description: "Comparativa 2026 de herramientas de Flyff Universe: Flyffipedia, Flyffulator, Madrigal Inside, un simulador de habilidades, la API oficial y una extensión de macros.", ogLocale: 'es_ES' },
  de: { title: "Die Besten Flyff Universe Tools & Erweiterungen 2026", description: "Vergleich 2026 der Flyff Universe Tools: Flyffipedia, Flyffulator, Madrigal Inside, ein Skill-Simulator, die offizielle API und eine Tastatur-Makro-Erweiterung.", ogLocale: 'de_DE' },
  pt: { title: "As Melhores Ferramentas e Extensões para Flyff Universe em 2026", description: "Comparativo 2026 de ferramentas de Flyff Universe: Flyffipedia, Flyffulator, Madrigal Inside, um simulador de habilidades, a API oficial e uma extensão de macros.", ogLocale: 'pt_BR' },
  it: { title: "I Migliori Strumenti ed Estensioni Flyff Universe 2026", description: "Confronto 2026 degli strumenti Flyff Universe: Flyffipedia, Flyffulator, Madrigal Inside, un simulatore di abilità, l'API ufficiale e un'estensione di macro.", ogLocale: 'it_IT' },
  nl: { title: "De beste Flyff Universe-tools & extensies in 2026", description: "Vergelijking 2026 van Flyff Universe-tools: Flyffipedia, Flyffulator, Madrigal Inside, een skillsimulator, de officiële API en een extensie voor toetsenbordmacro's.", ogLocale: 'nl_NL' },
  pl: { title: "Najlepsze Narzędzia i Rozszerzenia Flyff Universe 2026", description: "Porównanie 2026 narzędzi Flyff Universe: Flyffipedia, Flyffulator, Madrigal Inside, symulator umiejętności, oficjalne API i rozszerzenie z makrami klawiatury.", ogLocale: 'pl_PL' },
  ru: { title: "Лучшие Инструменты и Расширения Flyff Universe 2026", description: "Сравнение инструментов Flyff Universe 2026: Flyffipedia, Flyffulator, Madrigal Inside, симулятор навыков, официальный API и расширение с клавиатурными макросами.", ogLocale: 'ru_RU' },
  tr: { title: "2026'da En İyi Flyff Universe Araçları ve Uzantıları", description: "2026 Flyff Universe araçları karşılaştırması: Flyffipedia, Flyffulator, Madrigal Inside, yetenek simülatörü, resmî API ve klavye makro uzantısı.", ogLocale: 'tr_TR' },
  ja: { title: "2026年最高のFlyff Universeツールと拡張機能", description: "2026年版 Flyff Universe ツール比較：Flyffipedia、Flyffulator、Madrigal Inside、スキルシミュレーター、公式API、キーボードマクロ拡張機能。", ogLocale: 'ja_JP' },
  ko: { title: "2026년 최고의 Flyff Universe 도구 및 확장 프로그램", description: "2026 Flyff Universe 도구 비교: Flyffipedia, Flyffulator, Madrigal Inside, 스킬 시뮬레이터, 공식 API, 키보드 매크로 확장 프로그램.", ogLocale: 'ko_KR' },
  tl: { title: "Pinakamahusay na Flyff Universe Tools at Extensions 2026", description: "Paghahambing ng mga tool sa Flyff Universe para sa 2026: Flyffipedia, Flyffulator, Madrigal Inside, skill simulator, opisyal na API at isang keyboard macro extension.", ogLocale: 'tl_PH' },
  zh: { title: "2026年最佳 Flyff Universe 工具与扩展程序", description: "2026 年 Flyff Universe 工具对比：Flyffipedia、Flyffulator、Madrigal Inside、技能模拟器、官方 API 以及键盘宏扩展程序。", ogLocale: 'zh_CN' },
  ar: { title: "أفضل أدوات وامتدادات Flyff Universe لعام 2026", description: "مقارنة 2026 لأدوات Flyff Universe: Flyffipedia وFlyffulator وMadrigal Inside ومحاكي المهارات وواجهة API الرسمية وامتداد ماكرو للوحة المفاتيح.", ogLocale: 'ar_SA' },
};

const GUIDE_SEO = {
  fr: { title: "Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)", description: "Guide complet du Ringmaster sur Flyff Universe : rôle, skills et buffs, builds Full Support, AoE et Hit-and-Run, équipement, rotation, passage en Seraph.", ogLocale: 'fr_FR' },
  en: { title: "Ringmaster Flyff Universe — Complete 2026 Class Guide", description: "Complete Ringmaster guide for Flyff Universe: role, skills and buffs, Full Support, AoE and Hit-and-Run builds, gear, rotation, the road to Seraph.", ogLocale: 'en_US' },
  es: { title: "Ringmaster Flyff Universe — Guía Completa 2026 (Build, Buffs)", description: "Guía completa del Ringmaster en Flyff Universe: rol, skills y buffs, builds Full Support, AoE y Hit-and-Run, equipo, rotación y paso a Seraph.", ogLocale: 'es_ES' },
  de: { title: "Ringmaster Flyff Universe — Kompletter 2026 Klassenguide", description: "Kompletter Ringmaster-Guide für Flyff Universe: Rolle, Skills und Buffs, Full-Support-, AoE- und Hit-and-Run-Builds, Ausrüstung, Rotation, Weg zum Seraph.", ogLocale: 'de_DE' },
  pt: { title: "Ringmaster Flyff Universe — Guia Completo 2026 (Build, Buffs)", description: "Guia completo do Ringmaster no Flyff Universe: papel, skills e buffs, builds Full Support, AoE e Hit-and-Run, equipamento, rotação e evolução para Seraph.", ogLocale: 'pt_BR' },
  it: { title: "Ringmaster Flyff Universe — Guida Completa 2026 (Build, Buff)", description: "Guida completa al Ringmaster su Flyff Universe: ruolo, skill e buff, build Full Support, AoE e Hit-and-Run, equipaggiamento, rotazione e passaggio a Seraph.", ogLocale: 'it_IT' },
  nl: { title: "Ringmaster in Flyff Universe — Complete klassengids 2026", description: "Complete Ringmaster-gids voor Flyff Universe: rol, skills en buffs, Full Support-, AoE- en Hit-and-Run-builds, uitrusting, rotatie en de weg naar Seraph.", ogLocale: 'nl_NL' },
  pl: { title: "Ringmaster Flyff Universe — Kompletny Poradnik 2026", description: "Kompletny poradnik Ringmastera w Flyff Universe: rola, skille i buffy, buildy Full Support, AoE i Hit-and-Run, ekwipunek, rotacja i przejście do klasy Seraph.", ogLocale: 'pl_PL' },
  ru: { title: "Ringmaster Flyff Universe — Полное Руководство 2026", description: "Полное руководство по Ringmaster в Flyff Universe: роль, навыки и баффы, билды Full Support, AoE и Hit-and-Run, экипировка, ротация и переход в Seraph.", ogLocale: 'ru_RU' },
  tr: { title: "Ringmaster Flyff Universe — 2026 Tam Sınıf Rehberi", description: "Flyff Universe için tam Ringmaster rehberi: rol, skill'ler ve buff'lar, Full Support, AoE ve Hit-and-Run build'leri, ekipman, rotasyon ve Seraph'a geçiş.", ogLocale: 'tr_TR' },
  ja: { title: "Ringmaster Flyff Universe — 2026年完全クラスガイド", description: "Flyff Universeの完全Ringmasterガイド: 役割、スキルとバフ、Full Support・AoE・Hit-and-Runビルド、装備、ローテーション、Seraphへの転職まで。", ogLocale: 'ja_JP' },
  ko: { title: "Ringmaster Flyff Universe — 2026 완벽 클래스 가이드", description: "Flyff Universe Ringmaster 완전 가이드: 역할, 스킬과 버프, Full Support·AoE·Hit-and-Run 빌드, 장비, 로테이션, Seraph 전직까지.", ogLocale: 'ko_KR' },
  tl: { title: "Ringmaster Flyff Universe — Kumpletong Gabay 2026 (Build, Buffs, Papel)", description: "Kumpletong Ringmaster guide para sa Flyff Universe: papel, skills at buffs, Full Support, AoE at Hit-and-Run builds, gear, rotation at ang daan patungong Seraph.", ogLocale: 'tl_PH' },
  zh: { title: "Ringmaster Flyff Universe — 2026 完整职业指南", description: "Flyff Universe Ringmaster 完整指南：角色定位、技能与 Buff、Full Support / AoE / Hit-and-Run 加点、装备、循环，以及转职 Seraph。", ogLocale: 'zh_CN' },
  ar: { title: "Ringmaster Flyff Universe — دليل الفئة الكامل 2026", description: "دليل Ringmaster الكامل لـ Flyff Universe: الدور، المهارات والتعزيزات، بناءات Full Support وAoE وHit-and-Run، المعدات، التناوب، والترقية إلى Seraph.", ogLocale: 'ar_SA' },
};

export const LONGTAIL_PAGES = [
  { id: 'automate-rm', source: 'docs/automatiser-ringmaster-flyff-universe.html', slugs: AUTOMATE_SLUGS, seo: AUTOMATE_SEO, content: automateRmContent },
  { id: 'tools-2026',  source: 'docs/meilleurs-outils-flyff-universe-2026.html',   slugs: TOOLS_SLUGS,    seo: TOOLS_SEO,    content: toolsContent },
  { id: 'guide-rm',    source: 'docs/guide-ringmaster-flyff-universe.html',        slugs: GUIDE_SLUGS,    seo: GUIDE_SEO,    content: guideRmContent },
];

/**
 * Standalone bilingual long-tail pages (FR + EN only, no 13-language generation).
 * Listed separately so the sitemap can include them with proper hreflang.
 */
export const BILINGUAL_LONGTAIL_PAGES = [
  {
    id: 'keyboard-shortcuts',
    fr: { slug: 'docs/raccourcis-clavier-flyff-universe.html', title: 'Raccourcis Clavier Flyff Universe — Guide 2026' },
    en: { slug: 'en/docs/flyff-universe-keyboard-shortcuts.html', title: 'Flyff Universe Keyboard Shortcuts — 2026 Guide' },
  },
];
