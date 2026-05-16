/**
 * Translation map for docs/meilleurs-outils-flyff-universe-2026.html
 * Phrases must be long enough to be uniquely present in the FR source HTML
 * (avoids accidental partial matches in CSS / script blocks).
 */

import { toolsPt } from './_agent-pt.mjs';
import { toolsIt } from './_agent-it.mjs';
import { toolsNl } from './_agent-nl.mjs';
import { toolsPl } from './_agent-pl.mjs';
import { toolsRu } from './_agent-ru.mjs';
import { toolsTr } from './_agent-tr.mjs';
import { toolsJa } from './_agent-ja.mjs';
import { toolsKo } from './_agent-ko.mjs';
import { toolsTl } from './_agent-tl.mjs';
import { toolsZh } from './_agent-zh.mjs';
import { toolsAr } from './_agent-ar.mjs';

const fr = {};
const en = {};

// ─── Spanish ─────────────────────────────────────────────────────────────────
const es = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Inicio</a> › <a href="index.html">Documentación</a> › Mejores herramientas Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'Las Mejores Herramientas y Extensiones Flyff Universe en 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Selección probada y comparada de las herramientas que realmente cambian tu gameplay en Flyff Universe: extensiones, traductores, calculadoras, bases de datos.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe es un MMORPG que se sostiene gracias a su comunidad: una parte significativa de las herramientas útiles no proviene del editor, sino de los propios jugadores. Hemos probado durante 3 meses (febrero → mayo 2026) las herramientas de terceros más populares y seleccionado las <strong>6 que realmente merecen la pena</strong>, clasificadas por utilidad para el jugador habitual.',

  // Methodology callout
  '📌 Méthodologie': '📌 Metodología',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Cada herramienta fue evaluada según 4 criterios: utilidad real en el día a día, calidad de actualización (sigue el ritmo de Flyff Universe), respeto de los datos del usuario y facilidad de uso. Sin acuerdos comerciales: solo Reborn Assistant es editado por el autor de este sitio (transparencia asumida).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — La extensión de automatización Ringmaster',
  '★ Rang I · Notre choix': '★ Rango I · Nuestra elección',
  'Version gratuite': 'Versión gratuita',
  'Premium 2,99€/mois': 'Premium 2,99€/mes',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant es una extensión de navegador dedicada a la <strong>automatización de acciones repetitivas</strong> para los jugadores de Flyff Universe — en particular la clase Ringmaster, cuyas rotaciones de buffs son notoriamente tediosas. La extensión simula pulsaciones de teclado a intervalos configurables: rotación de secuencias cada X minutos, macro periódica cada 15 segundos para Heal Rain, y hasta 3 macros personalizables.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'La versión gratuita cubre lo básico (auto-heal HP, 6 temas, 15 idiomas de interfaz). La versión Premium desbloquea la rotación completa, las macros personalizables y la macro periódica — el arsenal que espera un RM main.',
  '✓ Points forts': '✓ Puntos fuertes',
  '✗ Points faibles': '✗ Puntos débiles',
  '15 langues d\'interface, support international': '15 idiomas de interfaz, soporte internacional',
  'Données 100% locales (aucun tracking)': 'Datos 100% locales (sin tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Macros personalizables hasta 3 secuencias',
  'Mises à jour régulières via Chrome Web Store': 'Actualizaciones regulares vía Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Solo Chromium (sin Firefox)',
  'Premium nécessite compte Google': 'Premium requiere cuenta Google',
  '→ Tester Reborn Assistant': '→ Probar Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Traductor in-game multi-idioma',
  '★ Rang II': '★ Rango II',
  'Gratuit': 'Gratis',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision resuelve un problema específico de Flyff Universe: la comunidad es muy internacional (BR, KR, JP, EU), y muchos jugadores se cruzan con chats en idiomas que no dominan. Reborn Vision es un traductor in-game que detecta el texto en pantalla y propone una traducción overlay en tiempo real.',
  'Traduction en temps réel multi-langues': 'Traducción en tiempo real multi-idioma',
  '100% gratuit': '100% gratis',
  'Configuration minimale': 'Configuración mínima',
  'OCR variable selon les polices': 'OCR variable según las fuentes',
  'Consomme un peu de bande passante': 'Consume algo de ancho de banda',
  '→ Voir Reborn Vision': '→ Ver Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — La base de datos de referencia',
  '★ Rang III': '★ Rango III',
  'Site web': 'Sitio web',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia es el wiki comunitario más completo para Flyff Universe. Búsqueda de objetos por nombre, página dedicada por mob (drops, ubicación, exp otorgada), árboles de misiones, información de clases. Imprescindible cuando te atascas en una quest o buscas dónde farmear un objeto específico.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Actualizaciones colaborativas, calidad variable según los contribuidores, pero en general el estándar de facto. Bookmark obligatorio para cualquier jugador habitual.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Cálculo de stats y builds',
  '★ Rang IV': '★ Rango IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Una calculadora de stats que tiene en cuenta tu equipo, jewelry, buffs, y te da una estimación precisa de tu DPS, tu supervivencia o tu healing output. Especialmente útil al cambiar de build o para comparar dos piezas de jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Interfaz un poco austera pero fórmula matemática sólida. Existe en varias versiones comunitarias — elige la actualizada más recientemente.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Comunidad y guías estratégicas',
  '★ Rang V': '★ Rango V',
  'Site web / Discord': 'Sitio web / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'No es una herramienta en sentido estricto, pero sí un recurso valioso: guías de build por clase, estrategias de boss, meta del momento, economía del servidor. El contenido está redactado por jugadores end-game, lo que da una perspectiva que no se encuentra en las guías generalistas.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Optimización de jewelry',
  '★ Rang VI': '★ Rango VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Un solver que toma tu equipo y calcula la combinación óptima de jewelry para maximizar un stat concreto (Ataque, HP, Cast Speed, etc.). De nicho pero terriblemente eficaz una vez en end-game, cuando cada % cuenta.',

  // How to choose
  'Comment choisir ?': '¿Cómo elegir?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'El orden anterior es nuestra clasificación subjetiva basada en la frecuencia de utilidad para un jugador habitual. Aquí tres perfiles tipo para orientar tu elección:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Farmeas mucho, sobre todo como RM o Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium en prioridad, luego FlyffPedia para los drops.',
  'Vous jouez avec une guilde internationale': 'Juegas con un clan internacional',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (traductor) + Madrigal Inside (Discord comunitario).',
  'Vous êtes end-game et optimisez vos builds': 'Estás en end-game y optimizas tus builds',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer combinados, más Reborn Assistant para automatizar el farmeo de materiales.',

  // Tools to avoid
  'Outils à éviter': 'Herramientas a evitar',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'No todas las herramientas que se publicitan como "Flyff Universe" son legítimas. Desconfía de los programas que:',
  'Demandent vos identifiants Gala Lab': 'Piden tus credenciales de Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'ninguna herramienta legítima necesita tu login. Son estafas al 100%.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Se instalan como ejecutable .exe de Windows',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'sin página de presentación clara. Riesgo de keylogger o malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Prometen gold gratis, subidas de nivel u objetos',
  '. Toujours arnaque ou banwave imminente.': '. Siempre estafa o banwave inminente.',
  'N\'ont pas de version officielle': 'No tienen una versión oficial',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'en Chrome Web Store, GitHub o un sitio con avisos legales claros.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 El criterio que no miente',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Una herramienta legítima siempre tiene una política de privacidad visible, un canal de soporte activo (Discord, email) y una ficha en Chrome Web Store o un repo público en GitHub. Reborn Assistant y Reborn Vision marcan las 3 casillas.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artículo actualizado el 16 de mayo de 2026.',

  // Common back-link
  '← Retour aux docs': '← Volver a la documentación',
};

// ─── German ──────────────────────────────────────────────────────────────────
const de = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Startseite</a> › <a href="index.html">Dokumentation</a> › Beste Flyff-Universe-Tools',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'Die Besten Tools und Erweiterungen für Flyff Universe in 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Getestete und verglichene Auswahl an Tools, die Ihr Flyff-Universe-Gameplay wirklich verändern: Erweiterungen, Übersetzer, Rechner, Datenbanken.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe ist ein MMORPG, das durch seine Community lebt: Ein erheblicher Teil der nützlichen Tools stammt nicht vom Entwickler, sondern von den Spielern selbst. Wir haben über 3 Monate (Februar → Mai 2026) die beliebtesten Drittanbieter-Tools getestet und die <strong>6 wirklich lohnenswerten</strong> ausgewählt, sortiert nach Nutzen für den regelmäßigen Spieler.',

  // Methodology callout
  '📌 Méthodologie': '📌 Methodik',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Jedes Tool wurde anhand von 4 Kriterien bewertet: tatsächlicher Nutzen im Alltag, Update-Qualität (hält Schritt mit Flyff Universe), Schutz der Nutzerdaten und Benutzerfreundlichkeit. Keine kommerziellen Partnerschaften: Nur Reborn Assistant wird vom Autor dieser Seite herausgegeben (bewusste Transparenz).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Die Ringmaster-Automatisierungs-Erweiterung',
  '★ Rang I · Notre choix': '★ Rang I · Unsere Wahl',
  'Version gratuite': 'Kostenlose Version',
  'Premium 2,99€/mois': 'Premium 2,99€/Monat',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant ist eine Browser-Erweiterung zur <strong>Automatisierung repetitiver Aktionen</strong> für Flyff-Universe-Spieler — speziell für die Klasse Ringmaster, deren Buff-Rotationen notorisch mühsam sind. Die Erweiterung simuliert Tastenanschläge in konfigurierbaren Intervallen: Sequenz-Rotation alle X Minuten, periodisches Makro alle 15 Sekunden für Heal Rain und bis zu 3 anpassbare Makros.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'Die kostenlose Version deckt die Grundlagen ab (Auto-Heal HP, 6 Themes, 15 Oberflächensprachen). Die Premium-Version schaltet die vollständige Rotation, anpassbare Makros und das periodische Makro frei — das Arsenal, das ein RM-Main erwartet.',
  '✓ Points forts': '✓ Stärken',
  '✗ Points faibles': '✗ Schwächen',
  '15 langues d\'interface, support international': '15 Oberflächensprachen, internationale Unterstützung',
  'Données 100% locales (aucun tracking)': 'Daten zu 100% lokal (kein Tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Anpassbare Makros bis zu 3 Sequenzen',
  'Mises à jour régulières via Chrome Web Store': 'Regelmäßige Updates über den Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Nur Chromium (kein Firefox)',
  'Premium nécessite compte Google': 'Premium erfordert ein Google-Konto',
  '→ Tester Reborn Assistant': '→ Reborn Assistant ausprobieren',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Mehrsprachiger In-Game-Übersetzer',
  '★ Rang II': '★ Rang II',
  'Gratuit': 'Kostenlos',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision löst ein spezifisches Problem von Flyff Universe: Die Community ist sehr international (BR, KR, JP, EU), und viele Spieler treffen auf Chats in Sprachen, die sie nicht beherrschen. Reborn Vision ist ein In-Game-Übersetzer, der den auf dem Bildschirm angezeigten Text erkennt und eine Echtzeit-Overlay-Übersetzung bietet.',
  'Traduction en temps réel multi-langues': 'Mehrsprachige Echtzeit-Übersetzung',
  '100% gratuit': '100% kostenlos',
  'Configuration minimale': 'Minimale Konfiguration',
  'OCR variable selon les polices': 'OCR-Qualität schwankt je nach Schriftart',
  'Consomme un peu de bande passante': 'Verbraucht etwas Bandbreite',
  '→ Voir Reborn Vision': '→ Reborn Vision ansehen',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — Die Referenz-Datenbank',
  '★ Rang III': '★ Rang III',
  'Site web': 'Webseite',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia ist das umfassendste Community-Wiki für Flyff Universe. Itemsuche per Namen, eigene Seiten pro Mob (Drops, Spawn-Ort, gewährte EXP), Questbäume, Klassen-Infos. Unverzichtbar, wenn Sie an einer Quest hängen oder einen bestimmten Gegenstand farmen wollen.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Kollaborative Aktualisierungen, variable Qualität je nach Mitwirkenden, aber insgesamt der De-facto-Standard. Pflicht-Lesezeichen für jeden regelmäßigen Spieler.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Statistik- und Build-Berechnungen',
  '★ Rang IV': '★ Rang IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Ein Stat-Rechner, der Ausrüstung, Jewelry und Buffs berücksichtigt und Ihnen eine präzise Schätzung Ihres DPS, Ihrer Überlebensfähigkeit oder Ihres Heal-Outputs liefert. Besonders nützlich bei einem Build-Wechsel oder dem Vergleich zweier Jewelry-Teile.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Etwas spartanische Oberfläche, aber solide mathematische Formel. Es gibt mehrere Community-Versionen — wählen Sie die zuletzt aktualisierte.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Community &amp; Strategie-Guides',
  '★ Rang V': '★ Rang V',
  'Site web / Discord': 'Webseite / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Kein Tool im engeren Sinn, aber eine wertvolle Ressource: Build-Guides pro Klasse, Boss-Strategien, aktuelles Meta, Server-Wirtschaft. Die Inhalte werden von End-Game-Spielern verfasst, was eine Perspektive bietet, die man in allgemeinen Guides nicht findet.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Jewelry-Optimierung',
  '★ Rang VI': '★ Rang VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Ein Solver, der Ihre Ausrüstung nimmt und die optimale Jewelry-Kombination zur Maximierung eines bestimmten Stats berechnet (Angriff, HP, Cast Speed usw.). Nischenprodukt, aber im End-Game ungemein effektiv, wenn jeder Prozent zählt.',

  // How to choose
  'Comment choisir ?': 'Wie auswählen?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'Die obige Reihenfolge ist unsere subjektive Rangliste basierend auf der Nutzungshäufigkeit für einen regelmäßigen Spieler. Hier drei Profile zur Orientierung:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Sie farmen viel, vor allem als RM oder Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium hat Priorität, dann FlyffPedia für Drops.',
  'Vous jouez avec une guilde internationale': 'Sie spielen in einer internationalen Gilde',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (Übersetzer) + Madrigal Inside (Community-Discord).',
  'Vous êtes end-game et optimisez vos builds': 'Sie sind im End-Game und optimieren Ihre Builds',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer kombiniert, plus Reborn Assistant zur Automatisierung des Material-Farmens.',

  // Tools to avoid
  'Outils à éviter': 'Tools, die zu vermeiden sind',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Nicht alle als "Flyff Universe" beworbenen Tools sind seriös. Vorsicht bei Programmen, die:',
  'Demandent vos identifiants Gala Lab': 'Ihre Gala-Lab-Anmeldedaten verlangen',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'Kein seriöses Tool benötigt Ihre Login-Daten. Das sind zu 100% Betrugsversuche.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Als Windows-.exe-Datei installiert werden',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'ohne klare Produktseite. Risiko von Keyloggern oder Malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Kostenloses Gold, Level-Boosts oder Items versprechen',
  '. Toujours arnaque ou banwave imminente.': '. Immer ein Betrug oder eine bevorstehende Banwelle.',
  'N\'ont pas de version officielle': 'Keine offizielle Version haben',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'im Chrome Web Store, auf GitHub oder einer Seite mit klaren Rechtshinweisen.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Das Kriterium, das nicht lügt',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Ein seriöses Tool hat immer eine sichtbare Datenschutzerklärung, einen aktiven Support-Kanal (Discord, E-Mail) und einen Chrome-Web-Store-Eintrag oder ein öffentliches GitHub-Repo. Reborn Assistant und Reborn Vision erfüllen alle 3 Punkte.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artikel aktualisiert am 16. Mai 2026.',

  // Common back-link
  '← Retour aux docs': '← Zurück zur Dokumentation',
};

// ─── 11 other languages — populated by background agents ─────────────────────
const pt = toolsPt;
const it = toolsIt;
const nl = toolsNl;
const pl = toolsPl;
const ru = toolsRu;
const tr = toolsTr;
const ja = toolsJa;
const ko = toolsKo;
const tl = toolsTl;
const zh = toolsZh;
const ar = toolsAr;

export const toolsContent = { fr, en, es, de, pt, it, nl, pl, ru, tr, ja, ko, tl, zh, ar };
