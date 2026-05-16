/**
 * Dutch (nl) translations for the 3 long-tail SEO pages:
 *   - docs/automatiser-ringmaster-flyff-universe.html  → automateRmNl
 *   - docs/meilleurs-outils-flyff-universe-2026.html   → toolsNl
 *   - docs/guide-ringmaster-flyff-universe.html        → guideRmNl
 *
 * Author voice: professional FR→NL translator, gaming-savvy tone for Dutch
 * Flyff Universe players. HTML inline tags preserved verbatim. Game terms,
 * skill names and brand names left untranslated per instructions.
 */

// ─── automateRmNl ────────────────────────────────────────────────────────────
export const automateRmNl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentatie</a> › Je Ringmaster automatiseren',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Je Ringmaster automatiseren in Flyff Universe — Volledige gids 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffs, sequences, AOE heal, HP/FP-beheer: de stap-voor-stap tutorial om van je Ringmaster de steunpilaar van de groep te maken zonder je vingers eraan te branden.',

  // TOC
  '◆ Sommaire': '◆ Inhoud',
  'Pourquoi automatiser son Ringmaster': 'Waarom je Ringmaster automatiseren',
  'Prérequis avant d\'automatiser': 'Voorwaarden voor automatisering',
  'Identifier vos séquences Ringmaster': 'Je Ringmaster-sequences identificeren',
  'Configurer la rotation de buffs': 'De buff-rotatie configureren',
  'Programmer le Heal périodique': 'De periodieke Heal instellen',
  'Macros personnalisées (DPS, support, urgence)': 'Eigen macro\'s (DPS, support, noodgeval)',
  'Optimisation et erreurs courantes': 'Optimalisatie en veelgemaakte fouten',
  'Aspect légal — ce qu\'il faut savoir': 'Juridisch aspect — wat je moet weten',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'De Ringmaster (vaak afgekort als <strong>RM</strong>) is de iconische support-class van Flyff Universe. Zijn rol is duidelijk: de groep in leven houden met buffs (Heart of Power, Beef Up, Mental Sign…) die afhankelijk van het niveau tussen 5 en 30 minuten duren, en schade genezen via Heal Rain in AOE. Op papier glashelder. In de praktijk een van de meest vermoeiende classes tijdens lange farm-sessies: 80% van je tijd ben je bezig met <strong>elke 5 minuten rebuffen</strong>, <strong>Heal Rain elke 10-15 seconden opnieuw casten</strong> en <strong>de FP-balken</strong> van elk groepslid in de gaten houden.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Automatisering vervangt je oordeelsvermogen niet. Ze ontlast je toetsenbord van mechanische routines: de volledige rebuff-reeks, de periodieke heal, het gebruik van FP-potions. Je houdt je handen vrij voor de <strong>momenten die echt tellen</strong>: een dreigende wipe, een wave die uit de hand loopt, een boss die de RM als eerste target.',
  '💡 Cas d\'usage typique': '💡 Typisch gebruik',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Je start een farm-sessie van 4 uur op Glaphan of Asteria. Zonder automatisering: 240 minuten ÷ 5 minuten = 48 handmatige rebuff-cycli. Met geconfigureerde Reborn Assistant: 1 cyclus, de rest draait op de achtergrond. Je grijpt alleen in wanneer de samenstelling verandert of een lid sterft.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Voordat je iets activeert, leg eerst een stevige basis:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> geïnstalleerd (de gratis versie dekt alleen de basis-heal-macro). Zie de <a href="quickstart.html">installatiegids</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Je Ringmaster-buffs toegewezen aan de toetsen F2 → 0</strong> in een logische volgorde (Heart of Power eerst, daarna AOE-buffs, single-target als laatste).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain op de toets § (of een andere toegewezen toets)</strong> — dit is de toets die Reborn Assistant in een lus zal indrukken.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Een stapel FP-potions</strong> in je inventaris — automatisering tovert geen resources tevoorschijn.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Een stabiele farm-zone</strong>: vermijd zones met geforceerde teleports of mobs die wegduwen (dat verschuift posities en breekt de AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Niet alle sequences zijn gelijkwaardig. Dit is de typische hiërarchie van een full-support RM-build:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Essentiële sequences (rotatie elke 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — STA + aanvalsboost, onmisbaar',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — vaste STA, verhoogt de max HP van de groep',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + magie-boost voor Mages / AOE-Knights',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, enorm voor Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, nuttig in lastige zones',
  'Séquences situationnelles (à activer manuellement)': 'Situationele sequences (handmatig activeren)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — nooit automatisch, geval per geval',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — bonus elementaire schade, optioneel afhankelijk van context',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Dit is het hart van het systeem. Reborn Assistant kan op regelmatige intervallen een vaste reeks <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> indrukken. Zo stem je dat af op je RM:',
  'Préparer vos slots de séquences': 'Je sequence-slots voorbereiden',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Sleep je sequences van de sequence-balk naar de Flyff-hotkeybalk in deze volgorde:',
  'Touche 1 → Heart of Power': 'Toets 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Toets 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Toets 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Toets 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Toets 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Toetsen 6 t/m 0 → je overige beschikbare buffs of leeg',
  'Activer la rotation dans Reborn Assistant': 'De rotatie activeren in Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'In het Reborn-paneel, tab Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Zet de toggle <strong>"Sequence-rotatie"</strong> aan',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Stel het <strong>interval tussen cycli</strong> in op de duur van de kortste buff (meestal 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Stel de <strong>vertraging tussen toetsen</strong> in op 1 seconde (geeft de sequence-animatie tijd om af te spelen)',
  'Tester un cycle complet': 'Een volledige cyclus testen',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Start met <code>CTRL+A</code>. Houd het activiteitslog in de gaten: je hoort <em>F2 pressed → 1 pressed → 2 pressed…</em> achter elkaar te zien, met ~1 seconde ertussen. Als een sequence niet start, is dat waarschijnlijk een cooldown of FP-tekort — verifieer dit visueel in-game.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain moet parallel draaien aan de buff-rotatie. Reborn Assistant biedt een vaste periodieke macro van 15 seconden, perfect afgestemd op de AOE-zone van Heal Rain (die ongeveer 12-15 seconden duurt).',
  'Assigner Heal Rain à la touche §': 'Heal Rain toewijzen aan de toets §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Standaard activeert de periodieke macro van Reborn Assistant de toets <code>§</code>. Sleep Heal Rain in Flyff naar deze toets.',
  'Activer la macro périodique': 'De periodieke macro activeren',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Toggle <strong>"Periodieke macro"</strong> in het Premium-paneel. Het systeem roept Heal Rain elke 15 seconden aan, met automatische opslag.',
  '⚠️ Attention au positionnement': '⚠️ Let op je positie',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain is een AOE gecentreerd op jou. Als je voortdurend beweegt (kiten of herpositioneren), dekt je Heal Rain je DPS niet. Blijf stilstaan of leg een vast verzamelpunt vast voor de groep.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Naast de rotatie en de heal biedt Reborn Assistant Premium <strong>3 onafhankelijke macro\'s</strong>. Zo benut je ze voor een Ringmaster:',
  'Macro 1 — Pet feeding': 'Macro 1 — Pet voeren',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Heb je een pet die regelmatig moet eten? Programmeer dan een reeks zoals <code>k,h</code> (toets pet-paneel + heal pet) elke 30 seconden. Voorkomt dat je pet sterft tijdens het farmen.',
  'Macro 2 — Stack de FP potions': 'Macro 2 — FP-potion stack',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Stel een reeks zoals <code>y</code> in (toets FP-potion) elke 20 seconden om je FP boven de 80% te houden. Pas aan op basis van je verbruik en het tempo van Heal Rain.',
  'Macro 3 — Anti-AFK': 'Macro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Een reeks zoals <code>up,down</code> of <code>space</code> elke 4-5 minuten voorkomt een AFK-disconnect tijdens een lange farm op rustige momenten. Gebruik met beleid.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Te korte vertraging tussen toetsen</strong> — als sequences worden overgeslagen, verhoog de vertraging tussen toetsen naar 1,5 of 2 seconden. Liever een iets langzamere cyclus die wel 100% doorloopt.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Globale cooldown niet overschrijden</strong> — Flyff heeft een GCD (global cooldown). Spam je te snel, dan worden sequences in het niets opgeslokt. De standaardvertraging van 1s respecteert deze GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP raakt op midden in een cyclus</strong> — je rotatie stopt geruisloos. Activeer de FP-potion-macro of verhoog je INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Groepsleden buiten de AOE-zone</strong> — de periodieke heal geneest alleen spelers binnen de Heal Rain-radius (~12-15m). Communiceer met de groep: ze moeten in bereik blijven.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Target verloren nadat een mob sterft</strong> — niet erg voor de RM, maar houd je targets in de gaten als je ook single-target sequences in je rotatie hebt.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Het automatiseren van repetitieve handelingen via een extensie <strong>kan in strijd zijn met de gebruiksvoorwaarden</strong> van bepaalde spelletjesdiensten, inclusief die van Gala Lab voor Flyff Universe. Reborn Assistant <strong>leest geen spelgeheugen uit, verstuurt geen netwerkpakketten en past de client niet aan</strong>: het simuleert strikt de toetsen die je handmatig zou indrukken. Je blijft voor 100% verantwoordelijk voor het gebruik dat je ervan maakt.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Lees de <a href="../index.html#faq">FAQ op de hoofdpagina</a> om precies te begrijpen wat Reborn Assistant technisch wel (en niet) doet.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Klaar om je Ringmaster te bevrijden?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Installeer Reborn Assistant in 30 seconden via de Chrome Web Store. 7 dagen Premium-proefperiode gratis, zonder creditcard.',
  'Installer Reborn Assistant': 'Reborn Assistant installeren',

  // Related cards
  '◆ Article lié': '◆ Verwant artikel',
  '◆ Documentation': '◆ Documentatie',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'De beste Flyff Universe tools & extensies 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Volledige gids van de Ringmaster-class in Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Volledige gids van de Premium-functies',

  // Common
  '← Retour aux docs': '← Terug naar de documentatie',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Reborn Assistant installeren"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Voeg de Reborn Assistant-extensie toe via de Chrome Web Store en zet hem vast in de werkbalk.',
  '"Identifier vos séquences Ringmaster"': '"Je Ringmaster-sequences identificeren"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Inventariseer je belangrijkste sequences: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep en de AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Sequence-rotatie configureren"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Activeer in Reborn Assistant de rotatie F2 → 1-9 → 0 → F1 met een interval van 5 minuten (typische duur van je buffs).',
  '"Programmer le Heal périodique"': '"Periodieke Heal instellen"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Activeer de periodieke macro om Heal Rain elke 15 seconden in de groep af te vuren.',
  '"Lancer l\'automatisation"': '"De automatisering starten"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Start met CTRL+A, houd het activiteitslog in de gaten en stem de vertragingen af op de animaties van je sequences.',
};

// ─── toolsNl ─────────────────────────────────────────────────────────────────
export const toolsNl = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentatie</a> › Beste Flyff Universe tools',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'De Beste Tools en Extensies voor Flyff Universe in 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Geteste en vergeleken selectie van tools die je Flyff Universe-gameplay echt veranderen: extensies, vertalers, calculators, databases.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe is een MMORPG die overeind blijft dankzij zijn community: een groot deel van de nuttige tools komt niet van de uitgever, maar van de spelers zelf. We hebben drie maanden lang (februari → mei 2026) de populairste third-party tools getest en de <strong>6 die echt de moeite waard zijn</strong> geselecteerd, gerangschikt naar nut voor de regelmatige speler.',

  // Methodology callout
  '📌 Méthodologie': '📌 Methodologie',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Elke tool is beoordeeld op 4 criteria: reëel nut in de dagelijkse gameplay, updatekwaliteit (houdt het tempo van Flyff Universe bij), respect voor gebruikersgegevens en gebruiksgemak. Geen commerciële samenwerkingen: alleen Reborn Assistant wordt uitgegeven door de auteur van deze site (bewuste transparantie).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — De automatiseringsextensie voor Ringmaster',
  '★ Rang I · Notre choix': '★ Rang I · Onze keuze',
  'Version gratuite': 'Gratis versie',
  'Premium 2,99€/mois': 'Premium 2,99€/maand',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant is een browserextensie voor de <strong>automatisering van repetitieve handelingen</strong> bij Flyff Universe-spelers — in het bijzonder de Ringmaster-class, waarvan de buff-rotaties berucht saai zijn. De extensie simuleert toetsaanslagen met instelbare intervallen: sequence-rotatie elke X minuten, periodieke macro elke 15 seconden voor Heal Rain, en tot 3 aanpasbare macro\'s.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'De gratis versie dekt de basis (auto-heal HP, 6 thema\'s, 15 interfacetalen). De Premium-versie ontgrendelt de volledige rotatie, de aangepaste macro\'s en de periodieke macro — het arsenaal dat een RM-main verwacht.',
  '✓ Points forts': '✓ Sterke punten',
  '✗ Points faibles': '✗ Zwakke punten',
  '15 langues d\'interface, support international': '15 interfacetalen, internationale ondersteuning',
  'Données 100% locales (aucun tracking)': 'Gegevens 100% lokaal (geen tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Aanpasbare macro\'s tot 3 sequences',
  'Mises à jour régulières via Chrome Web Store': 'Regelmatige updates via de Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Alleen Chromium (geen Firefox)',
  'Premium nécessite compte Google': 'Premium vereist een Google-account',
  '→ Tester Reborn Assistant': '→ Reborn Assistant proberen',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Meertalige in-game vertaler',
  '★ Rang II': '★ Rang II',
  'Gratuit': 'Gratis',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision lost een typisch Flyff Universe-probleem op: de community is zeer internationaal (BR, KR, JP, EU), en veel spelers komen chats tegen in talen die ze niet beheersen. Reborn Vision is een in-game vertaler die de tekst op het scherm detecteert en een overlay-vertaling in realtime aanbiedt.',
  'Traduction en temps réel multi-langues': 'Meertalige vertaling in realtime',
  '100% gratuit': '100% gratis',
  'Configuration minimale': 'Minimale configuratie',
  'OCR variable selon les polices': 'OCR varieert per lettertype',
  'Consomme un peu de bande passante': 'Verbruikt wat bandbreedte',
  '→ Voir Reborn Vision': '→ Reborn Vision bekijken',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — De referentiedatabase',
  '★ Rang III': '★ Rang III',
  'Site web': 'Website',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia is de meest complete community-wiki voor Flyff Universe. Item zoeken op naam, eigen pagina per mob (drops, locatie, gegeven exp), questbomen, klasse-info. Onmisbaar wanneer je vastloopt op een quest of zoekt waar je een specifiek item kunt farmen.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Collaboratieve updates, kwaliteit wisselt per bijdrager maar in totaal de de-facto standaard. Verplichte bookmark voor elke regelmatige speler.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Stat- en buildberekeningen',
  '★ Rang IV': '★ Rang IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Een stat-calculator die je equipment, jewelry en buffs meeneemt en je een nauwkeurige schatting geeft van je DPS, je overlevingskans of je healing output. Vooral handig bij een buildwijziging of om twee jewelry-sets te vergelijken.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Wat sobere interface, maar de wiskunde erachter is solide. Bestaat in meerdere communityversies — kies de meest recent bijgewerkte.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Community &amp; strategische gidsen',
  '★ Rang V': '★ Rang V',
  'Site web / Discord': 'Website / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Geen tool in de strikte zin, maar wel een waardevolle bron: build-gidsen per class, boss-strategieën, de huidige meta, server-economie. De inhoud wordt geschreven door end-game spelers, wat een perspectief geeft dat je in algemene gidsen niet vindt.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Jewelry-optimalisatie',
  '★ Rang VI': '★ Rang VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Een solver die je equipment neemt en de optimale jewelry-combinatie berekent om een specifieke stat te maximaliseren (Aanval, HP, Cast Speed, etc.). Een niche, maar bij end-game razend effectief, wanneer elke % telt.',

  // How to choose
  'Comment choisir ?': 'Hoe kies je?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'De volgorde hierboven is onze subjectieve ranglijst, gebaseerd op de gebruiksfrequentie voor een regelmatige speler. Hier drie typeprofielen om je keuze te sturen:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Je farmt veel, vooral als RM of Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium als prioriteit, daarna FlyffPedia voor de drops.',
  'Vous jouez avec une guilde internationale': 'Je speelt in een internationale guild',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (vertaler) + Madrigal Inside (community-Discord).',
  'Vous êtes end-game et optimisez vos builds': 'Je zit in end-game en optimaliseert je builds',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer gecombineerd, plus Reborn Assistant om het farmen van materialen te automatiseren.',

  // Tools to avoid
  'Outils à éviter': 'Tools om te vermijden',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Niet alle tools die als "Flyff Universe" worden aangeprezen zijn betrouwbaar. Wees op je hoede voor programma\'s die:',
  'Demandent vos identifiants Gala Lab': 'Om je Gala Lab-inloggegevens vragen',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'geen enkele betrouwbare tool heeft je login nodig. Dit zijn 100% scams.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Zich installeren als een Windows-.exe-bestand',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'zonder duidelijke presentatiepagina. Risico op keyloggers of malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Gratis gold, level-boosts of items beloven',
  '. Toujours arnaque ou banwave imminente.': '. Altijd een scam of een naderende banwave.',
  'N\'ont pas de version officielle': 'Geen officiële versie hebben',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'op de Chrome Web Store, GitHub of een site met duidelijke juridische vermeldingen.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Het criterium dat niet liegt',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Een betrouwbare tool heeft altijd een zichtbaar privacybeleid, een actief supportkanaal (Discord, e-mail) en een Chrome Web Store-pagina of een publieke GitHub-repo. Reborn Assistant en Reborn Vision vinken deze 3 vakjes aan.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artikel bijgewerkt op 16 mei 2026.',

  // Common back-link
  '← Retour aux docs': '← Terug naar de documentatie',
};

// ─── guideRmNl ───────────────────────────────────────────────────────────────
export const guideRmNl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentatie</a> › Ringmaster-gids',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Volledige gids 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Rol, buffs, builds, equipment, rotatie: alles wat je moet weten om Ringmaster te spelen in Flyff Universe in 2026, van level 60 tot end-game.',

  // H2 titles
  'Qu\'est-ce qu\'un Ringmaster ?': 'Wat is een Ringmaster?',
  'Le rôle du Ringmaster en groupe': 'De rol van de Ringmaster in een groep',
  'Les buffs essentiels du Ringmaster': 'De essentiële buffs van de Ringmaster',
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Welke build kies je?',
  'Équipement recommandé': 'Aanbevolen equipment',
  'Rotation et gestion du rythme': 'Rotatie en ritmebeheer',
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Wat is het verschil?',
  'Erreurs courantes de débutant Ringmaster': 'Veelgemaakte beginnersfouten als Ringmaster',

  // Intro paragraphs
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'De <strong>Ringmaster</strong> (RM) is de eindpromotie van de Assist-tak in Flyff Universe. Het is <strong>de support-class van het spel</strong>: zijn hoofdrol is niet schade aanrichten, maar <em>een groep in leven houden en sterker maken</em> via buffs van lange duur en een AOE-heal in loop. Zonder Ringmaster doet een end-game groep er twee tot drie keer langer over om een zone te clearen — en overleeft veel slechter de accidentele pulls.',
  'Quelques caractéristiques qui définissent la classe :':
    'Enkele kenmerken die de class definiëren:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Langdurige buffs</strong> (5 tot 30 minuten) die de groepsstats opkrikken: aanval, verdediging, snelheid, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, een AOE die alle bondgenoten in een straal van ~12-15m geneest gedurende de tijd',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> van een gestorven speler zonder ervaringspunten-penalty',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Zeer lage persoonlijke burst damage</strong> — de RM doodt in z\'n eentje niets efficiënt',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Vereist bijna altijd dat je in een groep speelt</strong>, of dat je een alt hebt om te buffen/genezen',

  // Roles
  'Trois rôles principaux selon le contexte de jeu :':
    'Drie hoofdrollen afhankelijk van de speelcontext:',
  'Farm rapide (PvE classique)': 'Snel farmen (klassieke PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Je vergezelt een of meer DPS\'ers op een farm-spot. Je taak: elke 5 minuten rebuffen, doorlopend Heal Rain casten, de FP in de gaten houden. Heel repetitief — precies de situatie waarin automatisering al haar nut bewijst.',
  'Raids & boss': 'Raids & bosses',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Bosses met hoge burst damage zoals Glaphan, Bang, Aibatt. Het tempo verandert: minder periodieke heal, meer handmatige burst-heals, soms Resurrection te anticiperen. Automatisering komt hier op de tweede plaats — je moet de touwtjes in handen houden.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Georganiseerde competitie, ultranauwkeurige meta-game. RM\'s zijn niet langer slechts een utility-service: ze dragen bij aan geoptimaliseerde teamcomposities met gesynchroniseerde buff-timings. De rotaties uit het hoofd kennen wordt cruciaal. Automatisering kan volgens toernooireglement verboden zijn — altijd controleren.',

  // Buffs
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Dit zijn de buffs die je onder de knie moet hebben en in je rotatie moet opnemen, gerangschikt op prioriteit:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ Absolute prioriteit · 30 min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost STA + aanval voor de hele groep. De handtekening-buff van de Ringmaster, als eerste in de rotatie te activeren.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ Hoge prioriteit · 15 min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Verhoogt de max HP van de groep. Cruciaal in zones waar een wipe mogelijk is als een lid niet zijn HP-cap heeft.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Boost INT van de groep. Enorm voor Mages, AOE-Knights en Rangers die skills met magische scaling gebruiken.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Verhoogt de attack speed. Game-changer voor Blades en Rangers; minder cruciaal voor Mages.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Boost de dodge. Nuttig in zones waar mobs veel snelle fysieke aanvallen hebben.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 sec',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'De heal-AOE gecentreerd op jou. Doorlopend opnieuw te casten tijdens de farm. Dekt alle bondgenoten binnen een straal van 12-15m.',

  // Build table
  'Deux écoles principales en 2026 :': 'Twee hoofdscholen in 2026:',
  'Critère': 'Criterium',
  'Build STA Full': 'Full STA-build',
  'Build INT Hybrid': 'Hybride INT-build',
  'Stats principaux': 'Hoofdstats',
  'Full STA, INT minimum requis pour les buffs': 'Volledig STA, INT minimaal vereist voor de buffs',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, soms 30/70 afhankelijk van het level',
  'HP / Survie': 'HP / Overleving',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Uitstekend — enorme pool, overleeft accidentele pulls',
  'Moyen — exige plus d\'attention du joueur': 'Gemiddeld — vraagt meer aandacht van de speler',
  'Puissance des heals': 'Kracht van de heals',
  'Correct — suffit pour la plupart des situations': 'Acceptabel — voldoet in de meeste situaties',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Uitstekend — Heal Rain en andere heals schalen sterk op INT',
  'FP pool': 'FP pool',
  'Faible — nécessite plus de potions': 'Laag — vereist meer potions',
  'Élevé — gestion FP plus confortable': 'Hoog — comfortabeler FP-beheer',
  'Recommandé pour': 'Aanbevolen voor',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Beginnende spelers, ongevaarlijk farmen, solo-utility RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Ervaren spelers, lastige raids, FWC, end-game',

  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'De Full STA-build blijft de meest vergevingsgezinde en meest gespeelde. De hybride INT-build is veeleisender, maar beloont met een aanzienlijk hogere heal-output — een must voor competitieve content.',

  // Equipment
  'Armes': 'Wapens',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (staf)</strong> — beste INT-scaling, aanbevolen voor de hybride INT-build',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick</strong> — uitgebalanceerd, veelzijdig',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (schild)</strong> in off-hand — winst aan defense, sterk aanbevolen bij Full STA',
  'Armure': 'Armor',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>STA-jewelry set</strong> voor de Full STA-build (Tinerbol, Lord, etc. afhankelijk van level)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>INT-jewelry set</strong> of hybride STA/INT voor de hybride build',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Geef altijd de voorkeur aan de volledige set</strong> voor de 2/4/6-piece bonus',
  'Bijoux (jewelry)': 'Sieraden (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Bij de optimalisatie van sieraden gaat de RM van acceptabel naar uitstekend. Gebruik een calculator (zie <a href="meilleurs-outils-flyff-universe-2026.html">onze tool-vergelijking</a>) om de combinatie te vinden die je prioriteit-stat maximaliseert op jouw level.',

  // Rotation
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Een efficiënte rotatie tijdens klassiek farmen rust op 3 timings:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Elke 5 minuten</strong> — volledige rebuff van de groep (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Elke 12-15 seconden</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Doorlopend</strong> — bewaken van individuele HP voor burst-heals in noodgevallen',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'De eerste twee timings zijn mechanisch en perfect voor <strong>automatisering</strong>. De derde vraagt om je menselijke aandacht. Dat is de sleutelafweging van de moderne Ringmaster: automatiseren wat repetitief is om <strong>je energie te bewaren voor de beslissende momenten</strong>.',

  '<strong>💡 Tutoriel pratique disponible</strong>':
    '<strong>💡 Praktische tutorial beschikbaar</strong>',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'We hebben een <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">stap-voor-stap tutorial geschreven om je Ringmaster te automatiseren</a> met Reborn Assistant: configuratie van rotaties, interval tussen cycli, Heal Rain-macro en valkuilen om te vermijden.',

  // Ringmaster vs Mentalist
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Twee classes uit de Assist-tak, vaak door beginners verwisseld:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, lage persoonlijke damage, onmisbaar in een groep, weinig efficiënt solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = magische DPS-oriëntatie, kan solo farmen, verliest een deel van de langdurige buffs van de RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Als je bedoeling is om in groepen te spelen, FWC te spelen, of de "steunpilaar" van een guild te zijn → Ringmaster. Wil je een Assist-class die zelfstandiger is solo → Mentalist.',

  // Mistakes
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Niet regelmatig rebuffen</strong> — een ontbrekende buff na 5 minuten kost soms meer dan het hele leven van de DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Bewegen tijdens Heal Rain</strong> — de AOE volgt niet, de bondgenoten verlaten de radius',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Te vroeg een full INT-build</strong> — zonder voldoende HP-pool sterf je voor je Heal Rain hebt kunnen casten',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>FP-potions negeren</strong> — een RM zonder FP is een nutteloze RM',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>DPS proberen te zijn</strong> — je verliest tijd die je beter in heals en buffs steekt',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Optimaliseer je Ringmaster met Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'De premium-extensie om je buff-rotatie, de periodieke Heal Rain en je eigen macro\'s te automatiseren. 7 dagen gratis proefperiode zonder creditcard.',
  'Installer Reborn Assistant': 'Reborn Assistant installeren',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Gids bijgewerkt op 16 mei 2026 — Flyff Universe (Gala Lab).',

  // Back link
  '← Retour aux docs': '← Terug naar de documentatie',
};
