/**
 * SEO strings per language × per page.
 * Used by build-i18n.mjs to rewrite <title>, meta description, OG/Twitter tags.
 *
 * Pages keyed by their canonical relative path (matching real file location).
 * Each language must define at least the keys present in 'fr' (validated at build time).
 * Missing languages fall back to 'en' → 'fr'.
 *
 * Pattern: keep <title> ≤ 65 chars, description ≤ 165 chars.
 * Brand "Reborn Assistant" always present + market keyword (Flyff Universe / Ringmaster).
 */

export const SEO = {
  fr: {
    'index.html': {
      title: 'Reborn Assistant — Extension Ringmaster pour Flyff Universe',
      description: 'Extension premium pour automatiser votre Ringmaster sur Flyff Universe. Macros configurables, séquences automatiques, 15 langues. Version gratuite disponible.',
      ogLocale: 'fr_FR',
    },
    'docs/index.html': {
      title: 'Documentation Reborn Assistant — Guide Flyff Universe Ringmaster',
      description: 'Documentation complète Reborn Assistant : installation, fonctionnalités, guide Premium, interface et dépannage pour automatiser votre Ringmaster Flyff Universe.',
      ogLocale: 'fr_FR',
    },
    'docs/features.html': {
      title: 'Fonctionnalités Reborn Assistant — Macros Ringmaster Flyff',
      description: 'Toutes les fonctionnalités de Reborn Assistant pour Flyff Universe : macros configurables, séquences automatiques, raccourcis clavier, 6 thèmes, 15 langues.',
      ogLocale: 'fr_FR',
    },
    'docs/interface.html': {
      title: 'Interface & Personnalisation — Reborn Assistant Flyff',
      description: 'Personnalisez Reborn Assistant : 6 thèmes visuels, 15 langues, raccourcis clavier configurables, panneau déplaçable, opacité ajustable.',
      ogLocale: 'fr_FR',
    },
    'docs/premium.html': {
      title: 'Guide Premium Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Maîtrisez les fonctionnalités Premium Reborn Assistant : rotation de séquences automatique, 3 macros personnalisables, macro périodique.',
      ogLocale: 'fr_FR',
    },
    'docs/quickstart.html': {
      title: 'Installer Reborn Assistant — Démarrage Rapide Flyff Universe',
      description: 'Installez et configurez Reborn Assistant en quelques minutes : Chrome Web Store, paramétrage des macros, raccourcis pour Flyff Universe.',
      ogLocale: 'fr_FR',
    },
    'docs/troubleshooting.html': {
      title: 'Dépannage & FAQ Reborn Assistant — Flyff Universe',
      description: 'Solutions aux problèmes courants Reborn Assistant : installation, connexion, licence Premium, macros qui ne se déclenchent pas.',
      ogLocale: 'fr_FR',
    },
    'docs/privacy.html': {
      title: 'Mentions Légales & Confidentialité — Reborn Assistant',
      description: 'Politique de confidentialité, mentions légales, termes de licence et politique de remboursement. Vos données restent 100% locales.',
      ogLocale: 'fr_FR',
    },
  },

  en: {
    'index.html': {
      title: 'Reborn Assistant — Ringmaster Extension for Flyff Universe',
      description: 'Premium browser extension to automate your Ringmaster on Flyff Universe. Configurable macros, automatic sequences, 15 languages. Free version available.',
      ogLocale: 'en_US',
    },
    'docs/index.html': {
      title: 'Reborn Assistant Documentation — Flyff Universe Ringmaster',
      description: 'Complete Reborn Assistant documentation: install, features, Premium guide, interface and troubleshooting to automate your Flyff Universe Ringmaster.',
      ogLocale: 'en_US',
    },
    'docs/features.html': {
      title: 'Reborn Assistant Features — Ringmaster Macros for Flyff',
      description: 'All Reborn Assistant features for Flyff Universe: configurable macros, automatic sequences, keyboard shortcuts, 6 themes, 15 languages. Free & Premium.',
      ogLocale: 'en_US',
    },
    'docs/interface.html': {
      title: 'Interface & Customization — Reborn Assistant Flyff',
      description: 'Customize Reborn Assistant: 6 visual themes, 15 languages, configurable keyboard shortcuts, draggable panel, opacity control.',
      ogLocale: 'en_US',
    },
    'docs/premium.html': {
      title: 'Premium Guide Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Master the Reborn Assistant Premium features: automatic sequence rotation, 3 customizable macros, periodic macro for your Ringmaster.',
      ogLocale: 'en_US',
    },
    'docs/quickstart.html': {
      title: 'Install Reborn Assistant — Quickstart for Flyff Universe',
      description: 'Install and configure Reborn Assistant in minutes: Chrome Web Store, macro setup, shortcuts for Flyff Universe Ringmaster. Step-by-step guide.',
      ogLocale: 'en_US',
    },
    'docs/troubleshooting.html': {
      title: 'Troubleshooting & FAQ Reborn Assistant — Flyff Universe',
      description: 'Solutions to common Reborn Assistant issues: install, login, Premium license, macros not triggering. Full FAQ for Flyff Universe.',
      ogLocale: 'en_US',
    },
    'docs/privacy.html': {
      title: 'Legal & Privacy Policy — Reborn Assistant',
      description: 'Privacy policy, legal notice, license terms and refund policy of Reborn Assistant. Your data stays 100% local.',
      ogLocale: 'en_US',
    },
  },

  es: {
    'index.html': {
      title: 'Reborn Assistant — Extensión Ringmaster para Flyff Universe',
      description: 'Extensión premium para automatizar tu Ringmaster en Flyff Universe. Macros configurables, secuencias automáticas, 15 idiomas. Versión gratuita disponible.',
      ogLocale: 'es_ES',
    },
    'docs/index.html': {
      title: 'Documentación Reborn Assistant — Guía Ringmaster Flyff',
      description: 'Documentación completa de Reborn Assistant: instalación, funcionalidades, guía Premium, interfaz y solución de problemas para Flyff Universe.',
      ogLocale: 'es_ES',
    },
    'docs/features.html': {
      title: 'Funcionalidades Reborn Assistant — Macros Ringmaster Flyff',
      description: 'Todas las funcionalidades de Reborn Assistant para Flyff Universe: macros configurables, secuencias automáticas, atajos de teclado, 6 temas.',
      ogLocale: 'es_ES',
    },
    'docs/interface.html': {
      title: 'Interfaz & Personalización — Reborn Assistant Flyff',
      description: 'Personaliza Reborn Assistant: 6 temas visuales, 15 idiomas, atajos de teclado configurables, panel arrastrable, opacidad ajustable.',
      ogLocale: 'es_ES',
    },
    'docs/premium.html': {
      title: 'Guía Premium Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Domina las funcionalidades Premium de Reborn Assistant: rotación automática de secuencias, 3 macros personalizables, macro periódica.',
      ogLocale: 'es_ES',
    },
    'docs/quickstart.html': {
      title: 'Instalar Reborn Assistant — Inicio Rápido Flyff Universe',
      description: 'Instala y configura Reborn Assistant en minutos: Chrome Web Store, configuración de macros, atajos para Flyff Universe Ringmaster.',
      ogLocale: 'es_ES',
    },
    'docs/troubleshooting.html': {
      title: 'Solución & FAQ Reborn Assistant — Flyff Universe',
      description: 'Soluciones a problemas comunes de Reborn Assistant: instalación, conexión, licencia Premium, macros que no se activan. FAQ completa.',
      ogLocale: 'es_ES',
    },
    'docs/privacy.html': {
      title: 'Aviso Legal & Privacidad — Reborn Assistant',
      description: 'Política de privacidad, aviso legal, términos de licencia y política de reembolso de Reborn Assistant. Tus datos quedan 100% locales.',
      ogLocale: 'es_ES',
    },
  },

  de: {
    'index.html': {
      title: 'Reborn Assistant — Ringmaster-Erweiterung für Flyff Universe',
      description: 'Premium-Browser-Erweiterung zur Automatisierung Ihres Ringmasters in Flyff Universe. Konfigurierbare Makros, automatische Sequenzen, 15 Sprachen.',
      ogLocale: 'de_DE',
    },
    'docs/index.html': {
      title: 'Reborn Assistant Dokumentation — Ringmaster Flyff Universe',
      description: 'Vollständige Reborn Assistant Dokumentation: Installation, Funktionen, Premium-Anleitung, Oberfläche und Fehlerbehebung für Flyff Universe.',
      ogLocale: 'de_DE',
    },
    'docs/features.html': {
      title: 'Reborn Assistant Funktionen — Ringmaster Makros Flyff',
      description: 'Alle Funktionen von Reborn Assistant für Flyff Universe: konfigurierbare Makros, automatische Sequenzen, Tastenkürzel, 6 Themes, 15 Sprachen.',
      ogLocale: 'de_DE',
    },
    'docs/interface.html': {
      title: 'Oberfläche & Anpassung — Reborn Assistant Flyff',
      description: 'Passen Sie Reborn Assistant an: 6 visuelle Themes, 15 Sprachen, konfigurierbare Tastenkürzel, verschiebbares Panel, einstellbare Transparenz.',
      ogLocale: 'de_DE',
    },
    'docs/premium.html': {
      title: 'Premium-Anleitung Reborn Assistant — Ringmaster Flyff',
      description: 'Beherrschen Sie die Premium-Funktionen von Reborn Assistant: automatische Sequenzrotation, 3 anpassbare Makros, periodisches Makro.',
      ogLocale: 'de_DE',
    },
    'docs/quickstart.html': {
      title: 'Reborn Assistant installieren — Schnellstart Flyff Universe',
      description: 'Installieren und konfigurieren Sie Reborn Assistant in wenigen Minuten: Chrome Web Store, Makro-Einrichtung, Tastenkürzel für Flyff Universe.',
      ogLocale: 'de_DE',
    },
    'docs/troubleshooting.html': {
      title: 'Fehlerbehebung & FAQ Reborn Assistant — Flyff Universe',
      description: 'Lösungen für häufige Probleme mit Reborn Assistant: Installation, Anmeldung, Premium-Lizenz, Makros, die nicht auslösen. Vollständige FAQ.',
      ogLocale: 'de_DE',
    },
    'docs/privacy.html': {
      title: 'Impressum & Datenschutz — Reborn Assistant',
      description: 'Datenschutzerklärung, Impressum, Lizenzbedingungen und Rückerstattungsrichtlinie von Reborn Assistant. Ihre Daten bleiben zu 100% lokal.',
      ogLocale: 'de_DE',
    },
  },

  pt: {
    'index.html': {
      title: 'Reborn Assistant — Extensão Ringmaster para Flyff Universe',
      description: 'Extensão premium para automatizar seu Ringmaster no Flyff Universe. Macros configuráveis, sequências automáticas, 15 idiomas. Versão gratuita disponível.',
      ogLocale: 'pt_BR',
    },
    'docs/index.html': {
      title: 'Documentação Reborn Assistant — Guia Ringmaster Flyff',
      description: 'Documentação completa do Reborn Assistant: instalação, funcionalidades, guia Premium, interface e solução de problemas para Flyff Universe.',
      ogLocale: 'pt_BR',
    },
    'docs/features.html': {
      title: 'Funcionalidades Reborn Assistant — Macros Ringmaster Flyff',
      description: 'Todas as funcionalidades do Reborn Assistant para Flyff Universe: macros configuráveis, sequências automáticas, atalhos de teclado, 6 temas.',
      ogLocale: 'pt_BR',
    },
    'docs/interface.html': {
      title: 'Interface & Personalização — Reborn Assistant Flyff',
      description: 'Personalize o Reborn Assistant: 6 temas visuais, 15 idiomas, atalhos de teclado configuráveis, painel arrastável, opacidade ajustável.',
      ogLocale: 'pt_BR',
    },
    'docs/premium.html': {
      title: 'Guia Premium Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Domine as funcionalidades Premium do Reborn Assistant: rotação automática de sequências, 3 macros personalizáveis, macro periódica.',
      ogLocale: 'pt_BR',
    },
    'docs/quickstart.html': {
      title: 'Instalar Reborn Assistant — Início Rápido Flyff Universe',
      description: 'Instale e configure o Reborn Assistant em minutos: Chrome Web Store, configuração de macros, atalhos para Flyff Universe Ringmaster.',
      ogLocale: 'pt_BR',
    },
    'docs/troubleshooting.html': {
      title: 'Solução & FAQ Reborn Assistant — Flyff Universe',
      description: 'Soluções para problemas comuns do Reborn Assistant: instalação, conexão, licença Premium, macros que não disparam. FAQ completa.',
      ogLocale: 'pt_BR',
    },
    'docs/privacy.html': {
      title: 'Avisos Legais & Privacidade — Reborn Assistant',
      description: 'Política de privacidade, avisos legais, termos de licença e política de reembolso do Reborn Assistant. Seus dados ficam 100% locais.',
      ogLocale: 'pt_BR',
    },
  },

  it: {
    'index.html': {
      title: 'Reborn Assistant — Estensione Ringmaster per Flyff Universe',
      description: 'Estensione premium per automatizzare il tuo Ringmaster su Flyff Universe. Macro configurabili, sequenze automatiche, 15 lingue. Versione gratuita disponibile.',
      ogLocale: 'it_IT',
    },
    'docs/index.html': {
      title: 'Documentazione Reborn Assistant — Guida Ringmaster Flyff',
      description: 'Documentazione completa di Reborn Assistant: installazione, funzionalità, guida Premium, interfaccia e risoluzione problemi per Flyff Universe.',
      ogLocale: 'it_IT',
    },
    'docs/features.html': {
      title: 'Funzionalità Reborn Assistant — Macro Ringmaster Flyff',
      description: 'Tutte le funzionalità di Reborn Assistant per Flyff Universe: macro configurabili, sequenze automatiche, scorciatoie da tastiera, 6 temi.',
      ogLocale: 'it_IT',
    },
    'docs/interface.html': {
      title: 'Interfaccia & Personalizzazione — Reborn Assistant Flyff',
      description: 'Personalizza Reborn Assistant: 6 temi visivi, 15 lingue, scorciatoie da tastiera configurabili, pannello trascinabile, opacità regolabile.',
      ogLocale: 'it_IT',
    },
    'docs/premium.html': {
      title: 'Guida Premium Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Padroneggia le funzionalità Premium di Reborn Assistant: rotazione automatica delle sequenze, 3 macro personalizzabili, macro periodica.',
      ogLocale: 'it_IT',
    },
    'docs/quickstart.html': {
      title: 'Installare Reborn Assistant — Avvio Rapido Flyff Universe',
      description: 'Installa e configura Reborn Assistant in pochi minuti: Chrome Web Store, configurazione macro, scorciatoie per Flyff Universe Ringmaster.',
      ogLocale: 'it_IT',
    },
    'docs/troubleshooting.html': {
      title: 'Risoluzione & FAQ Reborn Assistant — Flyff Universe',
      description: 'Soluzioni ai problemi comuni di Reborn Assistant: installazione, connessione, licenza Premium, macro che non si attivano. FAQ completa.',
      ogLocale: 'it_IT',
    },
    'docs/privacy.html': {
      title: 'Note Legali & Privacy — Reborn Assistant',
      description: 'Politica sulla privacy, note legali, termini di licenza e politica di rimborso di Reborn Assistant. I tuoi dati restano 100% locali.',
      ogLocale: 'it_IT',
    },
  },

  nl: {
    'index.html': {
      title: 'Reborn Assistant — Ringmaster-extensie voor Flyff Universe',
      description: 'Premium browserextensie om je Ringmaster in Flyff Universe te automatiseren. Configureerbare macro\'s, automatische reeksen, 15 talen. Gratis versie beschikbaar.',
      ogLocale: 'nl_NL',
    },
    'docs/index.html': {
      title: 'Reborn Assistant Documentatie — Flyff Universe Ringmaster',
      description: 'Volledige Reborn Assistant documentatie: installatie, functies, Premium-gids, interface en probleemoplossing voor Flyff Universe.',
      ogLocale: 'nl_NL',
    },
    'docs/features.html': {
      title: 'Reborn Assistant Functies — Ringmaster Macro\'s voor Flyff',
      description: 'Alle Reborn Assistant functies voor Flyff Universe: configureerbare macro\'s, automatische reeksen, sneltoetsen, 6 thema\'s, 15 talen.',
      ogLocale: 'nl_NL',
    },
    'docs/interface.html': {
      title: 'Interface & Personalisatie — Reborn Assistant Flyff',
      description: 'Pas Reborn Assistant aan: 6 visuele thema\'s, 15 talen, configureerbare sneltoetsen, verplaatsbaar paneel, instelbare transparantie.',
      ogLocale: 'nl_NL',
    },
    'docs/premium.html': {
      title: 'Premium Gids Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Beheers de Premium-functies van Reborn Assistant: automatische reeksrotatie, 3 aanpasbare macro\'s, periodieke macro.',
      ogLocale: 'nl_NL',
    },
    'docs/quickstart.html': {
      title: 'Reborn Assistant installeren — Snelstart Flyff Universe',
      description: 'Installeer en configureer Reborn Assistant in enkele minuten: Chrome Web Store, macro-instellingen, sneltoetsen voor Flyff Universe.',
      ogLocale: 'nl_NL',
    },
    'docs/troubleshooting.html': {
      title: 'Probleemoplossing & FAQ Reborn Assistant — Flyff Universe',
      description: 'Oplossingen voor veelvoorkomende Reborn Assistant problemen: installatie, verbinding, Premium-licentie, macro\'s die niet starten.',
      ogLocale: 'nl_NL',
    },
    'docs/privacy.html': {
      title: 'Juridische Kennisgeving & Privacy — Reborn Assistant',
      description: 'Privacybeleid, juridische kennisgeving, licentievoorwaarden en restitutiebeleid van Reborn Assistant. Je gegevens blijven 100% lokaal.',
      ogLocale: 'nl_NL',
    },
  },

  pl: {
    'index.html': {
      title: 'Reborn Assistant — Rozszerzenie Ringmaster Flyff Universe',
      description: 'Premium rozszerzenie przeglądarki do automatyzacji Ringmastera w Flyff Universe. Konfigurowalne makra, automatyczne sekwencje, 15 języków.',
      ogLocale: 'pl_PL',
    },
    'docs/index.html': {
      title: 'Dokumentacja Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Kompletna dokumentacja Reborn Assistant: instalacja, funkcje, przewodnik Premium, interfejs i rozwiązywanie problemów dla Flyff Universe.',
      ogLocale: 'pl_PL',
    },
    'docs/features.html': {
      title: 'Funkcje Reborn Assistant — Makra Ringmaster Flyff',
      description: 'Wszystkie funkcje Reborn Assistant dla Flyff Universe: konfigurowalne makra, automatyczne sekwencje, skróty klawiszowe, 6 motywów.',
      ogLocale: 'pl_PL',
    },
    'docs/interface.html': {
      title: 'Interfejs & Personalizacja — Reborn Assistant Flyff',
      description: 'Spersonalizuj Reborn Assistant: 6 motywów wizualnych, 15 języków, konfigurowalne skróty klawiszowe, ruchomy panel, regulowana przezroczystość.',
      ogLocale: 'pl_PL',
    },
    'docs/premium.html': {
      title: 'Przewodnik Premium Reborn Assistant — Ringmaster Flyff',
      description: 'Opanuj funkcje Premium Reborn Assistant: automatyczna rotacja sekwencji, 3 konfigurowalne makra, makro okresowe.',
      ogLocale: 'pl_PL',
    },
    'docs/quickstart.html': {
      title: 'Instalacja Reborn Assistant — Szybki Start Flyff Universe',
      description: 'Zainstaluj i skonfiguruj Reborn Assistant w kilka minut: Chrome Web Store, konfiguracja makr, skróty dla Flyff Universe Ringmaster.',
      ogLocale: 'pl_PL',
    },
    'docs/troubleshooting.html': {
      title: 'Rozwiązywanie & FAQ Reborn Assistant — Flyff Universe',
      description: 'Rozwiązania częstych problemów Reborn Assistant: instalacja, logowanie, licencja Premium, niedziałające makra. Pełne FAQ.',
      ogLocale: 'pl_PL',
    },
    'docs/privacy.html': {
      title: 'Informacje Prawne & Prywatność — Reborn Assistant',
      description: 'Polityka prywatności, informacje prawne, warunki licencji i polityka zwrotów Reborn Assistant. Twoje dane pozostają w 100% lokalne.',
      ogLocale: 'pl_PL',
    },
  },

  ru: {
    'index.html': {
      title: 'Reborn Assistant — Расширение Ringmaster для Flyff Universe',
      description: 'Премиум-расширение браузера для автоматизации Ringmaster в Flyff Universe. Настраиваемые макросы, авто-последовательности, 15 языков. Бесплатная версия.',
      ogLocale: 'ru_RU',
    },
    'docs/index.html': {
      title: 'Документация Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Полная документация Reborn Assistant: установка, функции, руководство Premium, интерфейс и устранение неполадок для Flyff Universe.',
      ogLocale: 'ru_RU',
    },
    'docs/features.html': {
      title: 'Функции Reborn Assistant — Макросы Ringmaster Flyff',
      description: 'Все функции Reborn Assistant для Flyff Universe: настраиваемые макросы, авто-последовательности, горячие клавиши, 6 тем, 15 языков.',
      ogLocale: 'ru_RU',
    },
    'docs/interface.html': {
      title: 'Интерфейс & Персонализация — Reborn Assistant Flyff',
      description: 'Настройте Reborn Assistant: 6 визуальных тем, 15 языков, настраиваемые горячие клавиши, перемещаемая панель, регулируемая прозрачность.',
      ogLocale: 'ru_RU',
    },
    'docs/premium.html': {
      title: 'Руководство Premium Reborn Assistant — Ringmaster Flyff',
      description: 'Освойте Premium-функции Reborn Assistant: автоматическая ротация последовательностей, 3 настраиваемых макроса, периодический макрос.',
      ogLocale: 'ru_RU',
    },
    'docs/quickstart.html': {
      title: 'Установка Reborn Assistant — Быстрый Старт Flyff Universe',
      description: 'Установите и настройте Reborn Assistant за минуты: Chrome Web Store, настройка макросов, горячие клавиши для Flyff Universe.',
      ogLocale: 'ru_RU',
    },
    'docs/troubleshooting.html': {
      title: 'Устранение неполадок & FAQ Reborn Assistant — Flyff',
      description: 'Решения распространённых проблем Reborn Assistant: установка, подключение, лицензия Premium, неработающие макросы. Полный FAQ.',
      ogLocale: 'ru_RU',
    },
    'docs/privacy.html': {
      title: 'Юридическая Информация & Конфиденциальность — Reborn Assistant',
      description: 'Политика конфиденциальности, юридическая информация, условия лицензии и политика возврата Reborn Assistant. Ваши данные остаются на 100% локальными.',
      ogLocale: 'ru_RU',
    },
  },

  tr: {
    'index.html': {
      title: 'Reborn Assistant — Flyff Universe için Ringmaster Eklentisi',
      description: 'Flyff Universe\'de Ringmaster\'ınızı otomatikleştirmek için premium tarayıcı eklentisi. Yapılandırılabilir makrolar, otomatik diziler, 15 dil.',
      ogLocale: 'tr_TR',
    },
    'docs/index.html': {
      title: 'Reborn Assistant Belgeleri — Flyff Universe Ringmaster',
      description: 'Tam Reborn Assistant belgeleri: kurulum, özellikler, Premium rehberi, arayüz ve sorun giderme — Flyff Universe Ringmaster için.',
      ogLocale: 'tr_TR',
    },
    'docs/features.html': {
      title: 'Reborn Assistant Özellikleri — Ringmaster Makroları Flyff',
      description: 'Flyff Universe için tüm Reborn Assistant özellikleri: yapılandırılabilir makrolar, otomatik diziler, klavye kısayolları, 6 tema, 15 dil.',
      ogLocale: 'tr_TR',
    },
    'docs/interface.html': {
      title: 'Arayüz & Kişiselleştirme — Reborn Assistant Flyff',
      description: 'Reborn Assistant\'ı kişiselleştirin: 6 görsel tema, 15 dil, yapılandırılabilir kısayollar, sürüklenebilir panel, ayarlanabilir saydamlık.',
      ogLocale: 'tr_TR',
    },
    'docs/premium.html': {
      title: 'Premium Rehberi Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Reborn Assistant Premium özelliklerinde ustalaşın: otomatik dizi rotasyonu, 3 özelleştirilebilir makro, periyodik makro.',
      ogLocale: 'tr_TR',
    },
    'docs/quickstart.html': {
      title: 'Reborn Assistant Kurulumu — Hızlı Başlangıç Flyff Universe',
      description: 'Reborn Assistant\'ı dakikalar içinde kurun ve yapılandırın: Chrome Web Store, makro ayarı, Flyff Universe için kısayollar.',
      ogLocale: 'tr_TR',
    },
    'docs/troubleshooting.html': {
      title: 'Sorun Giderme & SSS Reborn Assistant — Flyff Universe',
      description: 'Yaygın Reborn Assistant sorunlarının çözümleri: kurulum, bağlantı, Premium lisans, çalışmayan makrolar. Tam SSS.',
      ogLocale: 'tr_TR',
    },
    'docs/privacy.html': {
      title: 'Yasal Bildirim & Gizlilik — Reborn Assistant',
      description: 'Reborn Assistant\'ın gizlilik politikası, yasal bildirimi, lisans koşulları ve iade politikası. Verileriniz %100 yerel kalır.',
      ogLocale: 'tr_TR',
    },
  },

  ja: {
    'index.html': {
      title: 'Reborn Assistant — Flyff Universe用Ringmasterエクステンション',
      description: 'Flyff UniverseのRingmasterを自動化するプレミアムブラウザ拡張機能。カスタマイズ可能なマクロ、自動シーケンス、15言語対応。無料版あり。',
      ogLocale: 'ja_JP',
    },
    'docs/index.html': {
      title: 'Reborn Assistantドキュメント — Flyff Universe Ringmaster',
      description: 'Reborn Assistantの完全ドキュメント:インストール、機能、Premiumガイド、インターフェイス、トラブルシューティング。Flyff Universe対応。',
      ogLocale: 'ja_JP',
    },
    'docs/features.html': {
      title: 'Reborn Assistant機能 — Ringmasterマクロ Flyff',
      description: 'Flyff Universe向けReborn Assistantの全機能:カスタマイズ可能なマクロ、自動シーケンス、キーボードショートカット、6テーマ、15言語。',
      ogLocale: 'ja_JP',
    },
    'docs/interface.html': {
      title: 'インターフェイスとカスタマイズ — Reborn Assistant Flyff',
      description: 'Reborn Assistantをカスタマイズ:6つのビジュアルテーマ、15言語、カスタマイズ可能なショートカット、ドラッグ可能なパネル、透明度調整。',
      ogLocale: 'ja_JP',
    },
    'docs/premium.html': {
      title: 'Premiumガイド Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Reborn AssistantのPremium機能をマスター:自動シーケンスローテーション、3つのカスタムマクロ、定期マクロ。',
      ogLocale: 'ja_JP',
    },
    'docs/quickstart.html': {
      title: 'Reborn Assistantインストール — クイックスタート Flyff',
      description: '数分でReborn Assistantをインストール・設定:Chrome Web Store、マクロ設定、Flyff Universe用ショートカット。ステップバイステップ。',
      ogLocale: 'ja_JP',
    },
    'docs/troubleshooting.html': {
      title: 'トラブルシューティング&FAQ Reborn Assistant — Flyff',
      description: 'Reborn Assistantの一般的な問題の解決策:インストール、ログイン、Premiumライセンス、起動しないマクロ。完全なFAQ。',
      ogLocale: 'ja_JP',
    },
    'docs/privacy.html': {
      title: '法的通知&プライバシー — Reborn Assistant',
      description: 'Reborn Assistantのプライバシーポリシー、法的通知、ライセンス条件、返金ポリシー。データは100%ローカルに保持されます。',
      ogLocale: 'ja_JP',
    },
  },

  ko: {
    'index.html': {
      title: 'Reborn Assistant — Flyff Universe Ringmaster 확장 프로그램',
      description: 'Flyff Universe의 Ringmaster를 자동화하는 프리미엄 브라우저 확장 프로그램. 구성 가능한 매크로, 자동 시퀀스, 15개 언어. 무료 버전 제공.',
      ogLocale: 'ko_KR',
    },
    'docs/index.html': {
      title: 'Reborn Assistant 문서 — Flyff Universe Ringmaster',
      description: 'Reborn Assistant 전체 문서: 설치, 기능, 프리미엄 가이드, 인터페이스 및 Flyff Universe에 대한 문제 해결.',
      ogLocale: 'ko_KR',
    },
    'docs/features.html': {
      title: 'Reborn Assistant 기능 — Ringmaster 매크로 Flyff',
      description: 'Flyff Universe용 Reborn Assistant의 모든 기능: 구성 가능한 매크로, 자동 시퀀스, 키보드 단축키, 6가지 테마, 15개 언어.',
      ogLocale: 'ko_KR',
    },
    'docs/interface.html': {
      title: '인터페이스 & 사용자 정의 — Reborn Assistant Flyff',
      description: 'Reborn Assistant 사용자 정의: 6가지 시각적 테마, 15개 언어, 구성 가능한 단축키, 드래그 가능한 패널, 조절 가능한 투명도.',
      ogLocale: 'ko_KR',
    },
    'docs/premium.html': {
      title: '프리미엄 가이드 Reborn Assistant — Ringmaster Flyff',
      description: 'Reborn Assistant의 프리미엄 기능 마스터: 자동 시퀀스 로테이션, 3개의 사용자 정의 매크로, 주기적 매크로.',
      ogLocale: 'ko_KR',
    },
    'docs/quickstart.html': {
      title: 'Reborn Assistant 설치 — 빠른 시작 Flyff Universe',
      description: '몇 분 만에 Reborn Assistant 설치 및 구성: Chrome 웹 스토어, 매크로 설정, Flyff Universe Ringmaster용 단축키.',
      ogLocale: 'ko_KR',
    },
    'docs/troubleshooting.html': {
      title: '문제 해결 & FAQ Reborn Assistant — Flyff Universe',
      description: '일반적인 Reborn Assistant 문제 해결 방법: 설치, 로그인, 프리미엄 라이센스, 작동하지 않는 매크로. 전체 FAQ.',
      ogLocale: 'ko_KR',
    },
    'docs/privacy.html': {
      title: '법적 고지 & 개인정보 보호 — Reborn Assistant',
      description: 'Reborn Assistant의 개인정보 보호정책, 법적 고지, 라이센스 약관 및 환불 정책. 데이터는 100% 로컬에 유지됩니다.',
      ogLocale: 'ko_KR',
    },
  },

  tl: {
    'index.html': {
      title: 'Reborn Assistant — Ringmaster Extension para sa Flyff Universe',
      description: 'Premium browser extension para i-automate ang iyong Ringmaster sa Flyff Universe. Configurable macros, automatic sequences, 15 wika. May libreng version.',
      ogLocale: 'tl_PH',
    },
    'docs/index.html': {
      title: 'Reborn Assistant Documentation — Flyff Universe Ringmaster',
      description: 'Kumpletong dokumentasyon ng Reborn Assistant: installation, mga tampok, gabay sa Premium, interface, at troubleshooting para sa Flyff Universe.',
      ogLocale: 'tl_PH',
    },
    'docs/features.html': {
      title: 'Mga Tampok ng Reborn Assistant — Macros Ringmaster Flyff',
      description: 'Lahat ng tampok ng Reborn Assistant para sa Flyff Universe: configurable macros, automatic sequences, keyboard shortcuts, 6 themes, 15 wika.',
      ogLocale: 'tl_PH',
    },
    'docs/interface.html': {
      title: 'Interface & Customization — Reborn Assistant Flyff',
      description: 'I-customize ang Reborn Assistant: 6 visual themes, 15 wika, configurable shortcuts, draggable panel, adjustable opacity.',
      ogLocale: 'tl_PH',
    },
    'docs/premium.html': {
      title: 'Premium Guide Reborn Assistant — Ringmaster Flyff Universe',
      description: 'Ma-master ang Premium features ng Reborn Assistant: automatic sequence rotation, 3 customizable macros, periodic macro.',
      ogLocale: 'tl_PH',
    },
    'docs/quickstart.html': {
      title: 'I-install ang Reborn Assistant — Quickstart Flyff Universe',
      description: 'I-install at i-configure ang Reborn Assistant sa loob ng ilang minuto: Chrome Web Store, macro setup, shortcuts para sa Flyff Universe.',
      ogLocale: 'tl_PH',
    },
    'docs/troubleshooting.html': {
      title: 'Troubleshooting & FAQ Reborn Assistant — Flyff Universe',
      description: 'Mga solusyon sa karaniwang problema ng Reborn Assistant: installation, login, Premium license, macros na hindi gumagana. Kumpletong FAQ.',
      ogLocale: 'tl_PH',
    },
    'docs/privacy.html': {
      title: 'Legal & Privacy — Reborn Assistant',
      description: 'Privacy policy, legal notice, license terms at refund policy ng Reborn Assistant. Mananatiling 100% lokal ang iyong data.',
      ogLocale: 'tl_PH',
    },
  },

  zh: {
    'index.html': {
      title: 'Reborn Assistant — Flyff Universe Ringmaster 浏览器扩展',
      description: '用于在 Flyff Universe 中自动化 Ringmaster 的高级浏览器扩展。可配置宏、自动序列、15 种语言。提供免费版本。',
      ogLocale: 'zh_CN',
    },
    'docs/index.html': {
      title: 'Reborn Assistant 文档 — Flyff Universe Ringmaster',
      description: 'Reborn Assistant 完整文档:安装、功能、高级版指南、界面和适用于 Flyff Universe 的故障排除。',
      ogLocale: 'zh_CN',
    },
    'docs/features.html': {
      title: 'Reborn Assistant 功能 — Ringmaster 宏 Flyff',
      description: '适用于 Flyff Universe 的 Reborn Assistant 所有功能:可配置宏、自动序列、键盘快捷键、6 种主题、15 种语言。',
      ogLocale: 'zh_CN',
    },
    'docs/interface.html': {
      title: '界面与个性化 — Reborn Assistant Flyff',
      description: '自定义 Reborn Assistant:6 个视觉主题、15 种语言、可配置快捷键、可拖动面板、可调透明度。',
      ogLocale: 'zh_CN',
    },
    'docs/premium.html': {
      title: '高级版指南 Reborn Assistant — Ringmaster Flyff Universe',
      description: '掌握 Reborn Assistant 的高级功能:自动序列轮换、3 个自定义宏、定期宏。',
      ogLocale: 'zh_CN',
    },
    'docs/quickstart.html': {
      title: '安装 Reborn Assistant — 快速入门 Flyff Universe',
      description: '几分钟内安装并配置 Reborn Assistant:Chrome 网上应用店、宏设置、Flyff Universe Ringmaster 的快捷键。',
      ogLocale: 'zh_CN',
    },
    'docs/troubleshooting.html': {
      title: '故障排除与常见问题 Reborn Assistant — Flyff Universe',
      description: 'Reborn Assistant 常见问题的解决方案:安装、登录、高级版许可证、无法触发的宏。完整常见问题解答。',
      ogLocale: 'zh_CN',
    },
    'docs/privacy.html': {
      title: '法律声明与隐私 — Reborn Assistant',
      description: 'Reborn Assistant 的隐私政策、法律声明、许可条款和退款政策。您的数据 100% 保留在本地。',
      ogLocale: 'zh_CN',
    },
  },

  ar: {
    'index.html': {
      title: 'Reborn Assistant — امتداد Ringmaster لـ Flyff Universe',
      description: 'امتداد متصفح بريميوم لأتمتة Ringmaster الخاص بك في Flyff Universe. وحدات ماكرو قابلة للتكوين، تسلسلات تلقائية، 15 لغة. نسخة مجانية متاحة.',
      ogLocale: 'ar_SA',
    },
    'docs/index.html': {
      title: 'وثائق Reborn Assistant — Flyff Universe Ringmaster',
      description: 'وثائق Reborn Assistant الكاملة: التثبيت، الميزات، دليل بريميوم، الواجهة واستكشاف الأخطاء وإصلاحها لـ Flyff Universe.',
      ogLocale: 'ar_SA',
    },
    'docs/features.html': {
      title: 'ميزات Reborn Assistant — ماكرو Ringmaster Flyff',
      description: 'جميع ميزات Reborn Assistant لـ Flyff Universe: وحدات ماكرو قابلة للتكوين، تسلسلات تلقائية، اختصارات لوحة المفاتيح، 6 سمات.',
      ogLocale: 'ar_SA',
    },
    'docs/interface.html': {
      title: 'الواجهة والتخصيص — Reborn Assistant Flyff',
      description: 'تخصيص Reborn Assistant: 6 سمات بصرية، 15 لغة، اختصارات قابلة للتكوين، لوحة قابلة للسحب، شفافية قابلة للتعديل.',
      ogLocale: 'ar_SA',
    },
    'docs/premium.html': {
      title: 'دليل بريميوم Reborn Assistant — Ringmaster Flyff Universe',
      description: 'إتقان ميزات بريميوم Reborn Assistant: دوران التسلسل التلقائي، 3 وحدات ماكرو قابلة للتخصيص، ماكرو دوري.',
      ogLocale: 'ar_SA',
    },
    'docs/quickstart.html': {
      title: 'تثبيت Reborn Assistant — البدء السريع Flyff Universe',
      description: 'قم بتثبيت وتكوين Reborn Assistant في دقائق: Chrome Web Store، إعداد الماكرو، اختصارات Flyff Universe Ringmaster.',
      ogLocale: 'ar_SA',
    },
    'docs/troubleshooting.html': {
      title: 'استكشاف الأخطاء وإصلاحها وأسئلة شائعة Reborn Assistant',
      description: 'حلول لمشاكل Reborn Assistant الشائعة: التثبيت، تسجيل الدخول، ترخيص بريميوم، وحدات الماكرو التي لا تعمل. أسئلة شائعة كاملة.',
      ogLocale: 'ar_SA',
    },
    'docs/privacy.html': {
      title: 'الإشعارات القانونية والخصوصية — Reborn Assistant',
      description: 'سياسة الخصوصية والإشعارات القانونية وشروط الترخيص وسياسة الاسترداد لـ Reborn Assistant. تظل بياناتك محلية بنسبة 100٪.',
      ogLocale: 'ar_SA',
    },
  },
};

/**
 * Get SEO entry for a (lang, page) pair, with fallback to EN then FR.
 */
export function seoFor(lang, page) {
  return SEO[lang]?.[page] || SEO.en?.[page] || SEO.fr?.[page] || { title: '', description: '', ogLocale: lang };
}

export const LANGS = ['fr', 'en', 'es', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ja', 'ko', 'tl', 'zh', 'ar'];

export const PAGES = [
  'index.html',
  'docs/index.html',
  'docs/features.html',
  'docs/interface.html',
  'docs/premium.html',
  'docs/quickstart.html',
  'docs/troubleshooting.html',
  'docs/privacy.html',
];

// Long-tail SEO pages were previously defined here as BONUS_PAGES (FR + EN only).
// They are now fully managed by tools/longtail-i18n.mjs which covers all 15 languages.
