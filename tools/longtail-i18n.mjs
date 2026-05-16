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
  fr: { title: "Automatiser son Ringmaster sur Flyff Universe — Guide 2026", description: "Tutoriel complet pour automatiser votre Ringmaster sur Flyff Universe : auto-buff, séquences, AOE heal, gestion HP/FP. Méthode pas à pas avec Reborn Assistant.", ogLocale: 'fr_FR' },
  en: { title: "How to Automate Your Ringmaster on Flyff Universe — 2026 Guide", description: "Complete tutorial to automate your Ringmaster on Flyff Universe: auto-buff, rotations, AOE heal, HP/FP management. Step-by-step with Reborn Assistant.", ogLocale: 'en_US' },
  es: { title: "Automatizar tu Ringmaster en Flyff Universe — Guía 2026", description: "Tutorial completo para automatizar tu Ringmaster en Flyff Universe: auto-buff, secuencias, AOE heal, gestión HP/FP. Paso a paso con Reborn Assistant.", ogLocale: 'es_ES' },
  de: { title: "Ringmaster auf Flyff Universe automatisieren — Guide 2026", description: "Komplettes Tutorial zur Automatisierung Ihres Ringmasters in Flyff Universe: Auto-Buff, Rotationen, AOE-Heal, HP/FP-Management mit Reborn Assistant.", ogLocale: 'de_DE' },
  pt: { title: "Automatizar seu Ringmaster no Flyff Universe — Guia 2026", description: "Tutorial completo para automatizar seu Ringmaster no Flyff Universe: auto-buff, sequências, AOE heal, gerenciamento HP/FP com Reborn Assistant.", ogLocale: 'pt_BR' },
  it: { title: "Automatizzare il Ringmaster su Flyff Universe — Guida 2026", description: "Tutorial completo per automatizzare il tuo Ringmaster su Flyff Universe: auto-buff, sequenze, AOE heal, gestione HP/FP con Reborn Assistant.", ogLocale: 'it_IT' },
  nl: { title: "Je Ringmaster automatiseren op Flyff Universe — Gids 2026", description: "Complete tutorial om je Ringmaster op Flyff Universe te automatiseren: auto-buff, rotaties, AOE heal, HP/FP-beheer met Reborn Assistant.", ogLocale: 'nl_NL' },
  pl: { title: "Automatyzacja Ringmastera w Flyff Universe — Poradnik 2026", description: "Kompletny poradnik automatyzacji Ringmastera w Flyff Universe: auto-buff, sekwencje, AOE heal, zarządzanie HP/FP z Reborn Assistant.", ogLocale: 'pl_PL' },
  ru: { title: "Автоматизация Ringmaster в Flyff Universe — Руководство 2026", description: "Полное руководство по автоматизации Ringmaster в Flyff Universe: авто-баффы, ротации, AOE хил, управление HP/FP с Reborn Assistant.", ogLocale: 'ru_RU' },
  tr: { title: "Flyff Universe'de Ringmaster Otomatikleştirme — 2026 Rehberi", description: "Flyff Universe'de Ringmaster'ınızı otomatikleştirmek için tam rehber: oto-buff, rotasyonlar, AOE heal, HP/FP yönetimi — Reborn Assistant ile.", ogLocale: 'tr_TR' },
  ja: { title: "Flyff UniverseでRingmasterを自動化する — 2026年完全ガイド", description: "Flyff UniverseでRingmasterを自動化する完全チュートリアル: オートバフ、ローテーション、AOEヒール、HP/FP管理 — Reborn Assistantで。", ogLocale: 'ja_JP' },
  ko: { title: "Flyff Universe에서 Ringmaster 자동화 — 2026 완벽 가이드", description: "Flyff Universe에서 Ringmaster를 자동화하는 완전한 튜토리얼: 자동 버프, 로테이션, AOE 힐, HP/FP 관리 — Reborn Assistant로.", ogLocale: 'ko_KR' },
  tl: { title: "I-automate ang Ringmaster sa Flyff Universe — 2026 Gabay", description: "Kumpletong tutorial para i-automate ang Ringmaster mo sa Flyff Universe: auto-buff, sequences, AOE heal, HP/FP management gamit ang Reborn Assistant.", ogLocale: 'tl_PH' },
  zh: { title: "在 Flyff Universe 中自动化 Ringmaster — 2026 完整指南", description: "在 Flyff Universe 中自动化 Ringmaster 的完整教程：自动 Buff、轮换、AOE 治疗、HP/FP 管理 — 使用 Reborn Assistant。", ogLocale: 'zh_CN' },
  ar: { title: "أتمتة Ringmaster في Flyff Universe — دليل 2026 الكامل", description: "دليل كامل لأتمتة Ringmaster في Flyff Universe: تعزيزات تلقائية، تناوبات، شفاء AOE، إدارة HP/FP — مع Reborn Assistant.", ogLocale: 'ar_SA' },
};

const TOOLS_SEO = {
  fr: { title: "Les Meilleurs Outils & Extensions Flyff Universe 2026", description: "Comparatif 2026 des meilleurs outils Flyff Universe : extensions, traducteurs, calculateurs, base de données. Sélection testée pour optimiser votre gameplay.", ogLocale: 'fr_FR' },
  en: { title: "Best Flyff Universe Tools & Extensions in 2026", description: "2026 comparison of the best Flyff Universe tools: extensions, translators, calculators, databases. Tested selection to optimize your gameplay.", ogLocale: 'en_US' },
  es: { title: "Las Mejores Herramientas y Extensiones Flyff Universe 2026", description: "Comparativa 2026 de las mejores herramientas Flyff Universe: extensiones, traductores, calculadoras, bases de datos. Selección probada.", ogLocale: 'es_ES' },
  de: { title: "Die Besten Flyff Universe Tools & Erweiterungen 2026", description: "Vergleich 2026 der besten Flyff Universe Tools: Erweiterungen, Übersetzer, Rechner, Datenbanken. Getestete Auswahl für besseres Gameplay.", ogLocale: 'de_DE' },
  pt: { title: "As Melhores Ferramentas e Extensões Flyff Universe 2026", description: "Comparativo 2026 das melhores ferramentas Flyff Universe: extensões, tradutores, calculadoras, bancos de dados. Seleção testada.", ogLocale: 'pt_BR' },
  it: { title: "I Migliori Strumenti ed Estensioni Flyff Universe 2026", description: "Confronto 2026 dei migliori strumenti Flyff Universe: estensioni, traduttori, calcolatori, database. Selezione testata per il tuo gameplay.", ogLocale: 'it_IT' },
  nl: { title: "De Beste Flyff Universe Tools & Extensies in 2026", description: "Vergelijking 2026 van de beste Flyff Universe tools: extensies, vertalers, calculators, databases. Geteste selectie voor je gameplay.", ogLocale: 'nl_NL' },
  pl: { title: "Najlepsze Narzędzia i Rozszerzenia Flyff Universe 2026", description: "Porównanie 2026 najlepszych narzędzi Flyff Universe: rozszerzenia, tłumacze, kalkulatory, bazy danych. Testowany wybór.", ogLocale: 'pl_PL' },
  ru: { title: "Лучшие Инструменты и Расширения Flyff Universe 2026", description: "Сравнение 2026 лучших инструментов Flyff Universe: расширения, переводчики, калькуляторы, базы данных. Проверенная подборка.", ogLocale: 'ru_RU' },
  tr: { title: "2026'da En İyi Flyff Universe Araçları ve Uzantıları", description: "2026 karşılaştırması: en iyi Flyff Universe araçları — uzantılar, çevirmenler, hesap makineleri, veritabanları. Test edilmiş seçim.", ogLocale: 'tr_TR' },
  ja: { title: "2026年最高のFlyff Universeツールと拡張機能", description: "2026年比較: 最高のFlyff Universeツール — 拡張機能、翻訳機、計算機、データベース。ゲームプレイ最適化のためのテスト済み選定。", ogLocale: 'ja_JP' },
  ko: { title: "2026년 최고의 Flyff Universe 도구 및 확장 프로그램", description: "2026 비교: 최고의 Flyff Universe 도구 — 확장 프로그램, 번역기, 계산기, 데이터베이스. 게임플레이 최적화를 위한 테스트된 선택.", ogLocale: 'ko_KR' },
  tl: { title: "Pinakamahusay na Flyff Universe Tools at Extensions 2026", description: "2026 paghahambing ng pinakamahusay na Flyff Universe tools: extensions, translators, calculators, databases. Sinubukang seleksyon.", ogLocale: 'tl_PH' },
  zh: { title: "2026年最佳 Flyff Universe 工具与扩展程序", description: "2026 比较：最佳 Flyff Universe 工具 — 扩展程序、翻译器、计算器、数据库。经过测试的精选。", ogLocale: 'zh_CN' },
  ar: { title: "أفضل أدوات وامتدادات Flyff Universe لعام 2026", description: "مقارنة 2026 لأفضل أدوات Flyff Universe: امتدادات، مترجمات، حاسبات، قواعد بيانات. اختيار مُختبر لتحسين اللعب.", ogLocale: 'ar_SA' },
};

const GUIDE_SEO = {
  fr: { title: "Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)", description: "Guide complet du Ringmaster sur Flyff Universe : rôle, buffs essentiels, builds STA/INT, équipement, rotation, automatisation. Tout pour maîtriser la classe support.", ogLocale: 'fr_FR' },
  en: { title: "Ringmaster Flyff Universe — Complete 2026 Class Guide", description: "Complete Ringmaster guide for Flyff Universe: role, essential buffs, STA/INT builds, gear, rotation, automation. Everything to master the support class.", ogLocale: 'en_US' },
  es: { title: "Ringmaster Flyff Universe — Guía Completa 2026 (Build, Buffs)", description: "Guía completa del Ringmaster en Flyff Universe: rol, buffs esenciales, builds STA/INT, equipo, rotación, automatización. Domina la clase de soporte.", ogLocale: 'es_ES' },
  de: { title: "Ringmaster Flyff Universe — Kompletter 2026 Klassenguide", description: "Kompletter Ringmaster-Guide für Flyff Universe: Rolle, wichtige Buffs, STA/INT-Builds, Ausrüstung, Rotation, Automatisierung. Meistere die Supportklasse.", ogLocale: 'de_DE' },
  pt: { title: "Ringmaster Flyff Universe — Guia Completo 2026 (Build, Buffs)", description: "Guia completo do Ringmaster no Flyff Universe: papel, buffs essenciais, builds STA/INT, equipamento, rotação, automação. Domine a classe de suporte.", ogLocale: 'pt_BR' },
  it: { title: "Ringmaster Flyff Universe — Guida Completa 2026 (Build, Buff)", description: "Guida completa al Ringmaster su Flyff Universe: ruolo, buff essenziali, build STA/INT, equipaggiamento, rotazione, automazione. Padroneggia la classe di supporto.", ogLocale: 'it_IT' },
  nl: { title: "Ringmaster Flyff Universe — Complete 2026 Klassengids", description: "Complete Ringmaster-gids voor Flyff Universe: rol, essentiële buffs, STA/INT-builds, uitrusting, rotatie, automatisering. Beheers de support class.", ogLocale: 'nl_NL' },
  pl: { title: "Ringmaster Flyff Universe — Kompletny Poradnik 2026", description: "Kompletny poradnik Ringmastera w Flyff Universe: rola, kluczowe buffy, buildy STA/INT, ekwipunek, rotacja, automatyzacja. Opanuj klasę wsparcia.", ogLocale: 'pl_PL' },
  ru: { title: "Ringmaster Flyff Universe — Полное Руководство 2026", description: "Полное руководство по Ringmaster в Flyff Universe: роль, основные баффы, билды STA/INT, экипировка, ротация, автоматизация. Освойте класс поддержки.", ogLocale: 'ru_RU' },
  tr: { title: "Ringmaster Flyff Universe — 2026 Tam Sınıf Rehberi", description: "Flyff Universe için tam Ringmaster rehberi: rol, temel buff'lar, STA/INT build'leri, ekipman, rotasyon, otomasyon. Destek sınıfına hâkim olun.", ogLocale: 'tr_TR' },
  ja: { title: "Ringmaster Flyff Universe — 2026年完全クラスガイド", description: "Flyff Universeの完全Ringmasterガイド: 役割、必須バフ、STA/INTビルド、装備、ローテーション、自動化。サポートクラスをマスター。", ogLocale: 'ja_JP' },
  ko: { title: "Ringmaster Flyff Universe — 2026 완벽 클래스 가이드", description: "Flyff Universe Ringmaster 완전 가이드: 역할, 필수 버프, STA/INT 빌드, 장비, 로테이션, 자동화. 서포트 클래스를 마스터하세요.", ogLocale: 'ko_KR' },
  tl: { title: "Ringmaster Flyff Universe — Kumpletong 2026 Class Guide", description: "Kumpletong Ringmaster guide para sa Flyff Universe: papel, mahahalagang buffs, STA/INT builds, gear, rotation, automation. Master ang support class.", ogLocale: 'tl_PH' },
  zh: { title: "Ringmaster Flyff Universe — 2026 完整职业指南", description: "Flyff Universe Ringmaster 完整指南：角色、必备 Buff、STA/INT 加点、装备、循环、自动化。掌握辅助职业。", ogLocale: 'zh_CN' },
  ar: { title: "Ringmaster Flyff Universe — دليل الفئة الكامل 2026", description: "دليل Ringmaster الكامل لـ Flyff Universe: الدور، التعزيزات الأساسية، بناءات STA/INT، المعدات، التناوب، الأتمتة. أتقن فئة الدعم.", ogLocale: 'ar_SA' },
};

export const LONGTAIL_PAGES = [
  { id: 'automate-rm', source: 'docs/automatiser-ringmaster-flyff-universe.html', slugs: AUTOMATE_SLUGS, seo: AUTOMATE_SEO, content: automateRmContent },
  { id: 'tools-2026',  source: 'docs/meilleurs-outils-flyff-universe-2026.html',   slugs: TOOLS_SLUGS,    seo: TOOLS_SEO,    content: toolsContent },
  { id: 'guide-rm',    source: 'docs/guide-ringmaster-flyff-universe.html',        slugs: GUIDE_SLUGS,    seo: GUIDE_SEO,    content: guideRmContent },
];
