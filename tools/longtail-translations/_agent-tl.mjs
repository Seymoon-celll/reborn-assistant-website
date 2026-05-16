/**
 * Tagalog (Filipino) translations for the 3 SEO long-tail pages.
 *
 * Style: natural Filipino gamer tone, Taglish accepted for technical terms.
 * Non-translated terms (kept verbatim): Flyff Universe, Ringmaster, RM, HoP,
 * Beef Up, Heart of Power, Mental Sign, Speed Pep, Cat's Reflex, Heal Rain,
 * FP, HP, AOE, MP, Reborn Assistant, Reborn Vision, Premium, FlyffPedia,
 * Madrigal Inside, FlyffOptimizer, Chrome Web Store, Google Cloud, Gala Lab,
 * Stripe, Glaphan, Asteria, AFK, GCD, DPS, INT, STA, MMORPG, FWC, DevTools,
 * CTRL+A, CTRL+O, OCR, JWT.
 */

// ─── automate-rm.mjs (Automatiser son Ringmaster) ───────────────────────────
export const automateRmTl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Dokumentasyon</a> › I-automate ang Ringmaster mo',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'I-automate ang Ringmaster mo sa Flyff Universe — Kumpletong gabay 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffs, sequences, AOE heal, pamamahala ng HP/FP: ang step-by-step tutorial para gawing haligi ng party ang Ringmaster mo nang hindi nababalde ang kamay.',

  // TOC
  '◆ Sommaire': '◆ Talaan ng Nilalaman',
  'Pourquoi automatiser son Ringmaster': 'Bakit i-automate ang Ringmaster mo',
  'Prérequis avant d\'automatiser': 'Mga kailangan bago mag-automate',
  'Identifier vos séquences Ringmaster': 'Kilalanin ang mga sequence ng Ringmaster mo',
  'Configurer la rotation de buffs': 'I-set up ang buff rotation',
  'Programmer le Heal périodique': 'I-program ang periodic Heal',
  'Macros personnalisées (DPS, support, urgence)': 'Custom macros (DPS, support, emergency)',
  'Optimisation et erreurs courantes': 'Optimization at mga karaniwang pagkakamali',
  'Aspect légal — ce qu\'il faut savoir': 'Legal aspect — ang dapat mong malaman',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ang Ringmaster (madalas pinapaikli bilang <strong>RM</strong>) ang signature support class ng Flyff Universe. Malinaw ang papel niya: panatilihing buhay ang party gamit ang mga buff (Heart of Power, Beef Up, Mental Sign…) na tumatagal ng 5 hanggang 30 minuto depende sa level, at i-heal ang damage gamit ang Heal Rain na AOE. Sa papel, parang simple lang. Sa totoong laro, isa ito sa pinakanakakapagod na class sa mahabang farm: 80% ng oras mo ay nasa <strong>rebuff kada 5 minuto</strong>, <strong>pag-recast ng Heal Rain kada 10-15 segundo</strong> at <strong>pagbabantay sa FP bars</strong> ng bawat party member.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Hindi pinapalitan ng automation ang pasya mo. Inaalis lang nito sa keyboard mo ang mga mechanical routine: ang buong rebuff sequence, ang periodic heal, ang paggamit ng FP potions. Malaya ang kamay mo para sa <strong>mga sandaling talagang importante</strong>: papalapit na wipe, wave na nasisira, boss na unang tumitira sa RM.',
  '💡 Cas d\'usage typique': '💡 Tipikal na use case',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Magsisimula kang mag-farm ng 4 oras sa Glaphan o Asteria. Walang automation: 240 minuto ÷ 5 minuto = 48 manual rebuff cycles. May naka-setup na Reborn Assistant: 1 cycle lang, ang iba ay tumatakbo sa background. Babalikan mo lang ito kapag nagbago ang composition o may namatay na miyembro.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Bago mag-activate ng anuman, ilatag muna ang matibay na pundasyon:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> naka-install (ang free version ay basic heal macro lang ang sakop). Tingnan ang <a href="quickstart.html">installation guide</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Ang Ringmaster buffs mo ay naka-assign sa mga key F2 → 0</strong> sa logical order (Heart of Power muna, AOE buffs sumunod, single-target sa huli).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain sa key § (o ibang dedicated key)</strong> — ito ang key na pauulit-ulit i-trigger ng Reborn Assistant.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Isang stack ng FP potions</strong> sa inventory — hindi nag-iimbento ng resources ang automation.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Isang stable na farming zone</strong>: iwasan ang mga lugar na may forced teleports o mga mob na nagpapatumba (gumugulo ang posisyon at nasisira ang AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Hindi pantay-pantay ang lahat ng sequence. Eto ang tipikal na hierarchy ng full support RM build:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Essential sequences (rotation kada 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — boost ng STA + attack, hindi maaaring mawala',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — flat STA, pinapataas ang max HP ng party',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + magic boost para sa Mages / Knights AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, sobrang lakas para sa Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, kapaki-pakinabang sa mahirap na zone',
  'Séquences situationnelles (à activer manuellement)': 'Situational sequences (manual activation)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — hinding-hindi sa auto, kada sitwasyon iba',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — elemental damage bonus, opsyonal depende sa konteksto',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Ito ang puso ng sistema. Kayang i-press ng Reborn Assistant ang fixed sequence <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> sa regular na interval. Eto kung paano i-align sa RM mo:',
  'Préparer vos slots de séquences': 'Ihanda ang sequence slots mo',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'I-drag ang mga sequence mo mula sa sequence bar papunta sa Flyff hotkey bar sa ganitong order:',
  'Touche 1 → Heart of Power': 'Key 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Key 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Key 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Key 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Key 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Mga key 6 hanggang 0 → ibang available na buffs mo o iwanang blangko',
  'Activer la rotation dans Reborn Assistant': 'I-activate ang rotation sa Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'Sa Reborn panel, sa Premium tab:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'I-on ang toggle <strong>"Sequence Rotation"</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'I-set ang <strong>interval kada cycle</strong> sa duration ng pinakamaikling buff (kadalasan 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'I-set ang <strong>delay kada key</strong> sa 1 segundo (para may oras na matapos ang sequence animation)',
  'Tester un cycle complet': 'Subukan ang buong cycle',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'I-start gamit ang <code>CTRL+A</code>. Bantayan ang activity log: dapat makita mo ang <em>F2 pressed → 1 pressed → 2 pressed…</em> nang sunud-sunod, may ~1 segundo sa pagitan. Kung hindi nag-cast ang isang sequence, malamang cooldown o kulang ang FP — tingnan sa loob ng laro.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Dapat tumakbo ang Heal Rain kasabay ng buff rotation. May fixed periodic macro ang Reborn Assistant kada 15 segundo, perpektong naka-calibrate para sa AOE zone ng Heal Rain (na tumatagal ng halos 12-15 segundo).',
  'Assigner Heal Rain à la touche §': 'I-assign ang Heal Rain sa key §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'By default, ang periodic macro ng Reborn Assistant ay nagti-trigger ng key <code>§</code>. I-drag ang Heal Rain sa key na ito sa Flyff.',
  'Activer la macro périodique': 'I-activate ang periodic macro',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'I-on ang toggle <strong>"Periodic Macro"</strong> sa Premium panel. Tatawag ang sistema ng Heal Rain kada 15 segundo, may automatic storage.',
  '⚠️ Attention au positionnement': '⚠️ Mag-ingat sa positioning',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'AOE ang Heal Rain na naka-center sa iyo. Kung palaging gumagalaw ka (kiting o repositioning), hindi macocover ng Heal Rain mo ang DPS mo. Manatiling stationary o magtakda ng fixed rally point para sa party.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Bukod sa rotation at heal, may <strong>3 independent macros</strong> ang Reborn Assistant Premium. Eto kung paano gamitin para sa Ringmaster:',
  'Macro 1 — Pet feeding': 'Macro 1 — Pagpapakain ng pet',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Kung may pet ka na regular kumakain, mag-program ng sequence tulad ng <code>k,h</code> (pet panel key + heal pet) kada 30 segundo. Iniiwasan nito mamatay ang pet mo habang nag-fa-farm.',
  'Macro 2 — Stack de FP potions': 'Macro 2 — FP potions stack',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'I-setup ang sequence tulad ng <code>y</code> (FP potion key) kada 20 segundo para manatili ang FP mo sa itaas ng 80%. I-adjust depende sa consumption mo at sa pace ng Heal Rain.',
  'Macro 3 — Anti-AFK': 'Macro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Ang sequence tulad ng <code>up,down</code> o <code>space</code> kada 4-5 minuto ay umiiwas sa AFK disconnect sa mahabang farm tuwing tahimik. Gamitin nang may bait.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Masyadong maikli ang delay kada key</strong> — kung lumalaktaw ang mga sequence mo, dagdagan ang delay kada key sa 1.5 o 2 segundo. Mas okay ang mas mabagal na cycle pero 100% pumapasok.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Huwag lalagpasan ang global cooldown</strong> — may GCD (global cooldown) ang Flyff. Kung sobrang bilis mag-spam, nawawala sa hangin ang mga sequence. Ang default na 1s delay ay rumirespeto sa GCD na ito.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>Nauubusan ng FP sa gitna ng cycle</strong> — tahimik na huminto ang rotation mo. I-activate ang FP potion macro o dagdagan ang INT/MP mo.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Mga party member na nasa labas ng AOE zone</strong> — ang periodic heal ay para lang sa mga player na nasa loob ng Heal Rain radius (~12-15m). Mag-usap sa party: dapat manatili sa loob ng range.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Nawawala ang target pagkamatay ng mob</strong> — hindi malaking issue para sa RM, pero bantayan ang targets mo kung may single-target sequences ka rin sa rotation.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Ang pag-automate ng paulit-ulit na aksyon sa pamamagitan ng extension ay <strong>maaaring lumabag sa terms of use</strong> ng ilang game service, kasama ang sa Gala Lab para sa Flyff Universe. Ang Reborn Assistant ay <strong>hindi bumabasa ng game memory, hindi nagpapadala ng network packets, hindi binabago ang client</strong>: simulation lang ito ng mga key na ikaw mismo ang magpipindot. 100% responsable ka sa kung paano ito gagamitin.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Para maintindihan ang ginagawa (at hindi ginagawa) ng Reborn Assistant sa technical na paraan, basahin ang <a href="../index.html#faq">FAQ sa main page</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Handa nang palayain ang Ringmaster mo?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'I-install ang Reborn Assistant sa loob ng 30 segundo mula sa Chrome Web Store. 7 araw na libreng Premium trial, walang credit card.',
  'Installer Reborn Assistant': 'I-install ang Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Kaugnay na artikulo',
  '◆ Documentation': '◆ Dokumentasyon',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Ang pinakamahuhusay na tools at extensions ng Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Kumpletong gabay sa Ringmaster class ng Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Kumpletong gabay sa Premium features',

  // Common
  '← Retour aux docs': '← Bumalik sa docs',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"I-install ang Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Idagdag ang Reborn Assistant extension mula sa Chrome Web Store at i-pin sa toolbar.',
  '"Identifier vos séquences Ringmaster"': '"Kilalanin ang mga Ringmaster sequence mo"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Ilista ang mga key sequence mo: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, at ang AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"I-configure ang sequence rotation"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Sa Reborn Assistant, i-activate ang rotation F2 → 1-9 → 0 → F1 na may 5 minutong interval (tipikal na duration ng buffs mo).',
  '"Programmer le Heal périodique"': '"I-program ang periodic Heal"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'I-activate ang periodic macro para mag-trigger ng Heal Rain kada 15 segundo sa party.',
  '"Lancer l\'automatisation"': '"I-launch ang automation"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Magsimula gamit ang CTRL+A, bantayan ang activity log, i-adjust ang delays depende sa animation ng sequences mo.',
};

// ─── tools-2026.mjs (Meilleurs outils Flyff Universe 2026) ──────────────────
export const toolsTl = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Home</a> › <a href="index.html">Dokumentasyon</a> › Pinakamahuhusay na tools ng Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'Ang Pinakamahuhusay na Tools at Extensions ng Flyff Universe sa 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Sinubukan at ikinumpara na pagpili ng mga tool na talagang nagbabago sa gameplay mo sa Flyff Universe: extensions, translators, calculators, databases.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Ang Flyff Universe ay isang MMORPG na buhay dahil sa community niya: malaking bahagi ng mga kapaki-pakinabang na tool ay hindi galing sa publisher kundi sa mga player mismo. Sinubok namin sa loob ng 3 buwan (Pebrero → Mayo 2026) ang mga pinakapopular na third-party tools at pinili ang <strong>6 na talagang sulit subukan</strong>, naka-rank ayon sa pakinabang para sa regular na player.',

  // Methodology callout
  '📌 Méthodologie': '📌 Pamamaraan',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Ang bawat tool ay sinuri sa 4 na criteria: totoong pakinabang sa pang-araw-araw na gameplay, kalidad ng pag-update (sumusubaybay sa Flyff Universe), respeto sa user data, at dali ng paggamit. Walang commercial partnership: tanging ang Reborn Assistant lang ang inilathala ng author ng site na ito (transparent kami).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Ang Ringmaster automation extension',
  '★ Rang I · Notre choix': '★ Rank I · Ang pili namin',
  'Version gratuite': 'Libreng bersyon',
  'Premium 2,99€/mois': 'Premium 2,99€/buwan',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Ang Reborn Assistant ay isang browser extension na nakatuon sa <strong>pag-automate ng paulit-ulit na aksyon</strong> para sa mga Flyff Universe player — lalo na sa Ringmaster class na kilalang nakakapagod ang buff rotation. Sinisimulate ng extension ang mga keypress sa configurable na interval: sequence rotation kada X minuto, periodic macro kada 15 segundo para sa Heal Rain, at hanggang 3 customizable macros.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'Ang libreng bersyon ay sapat na para sa basic (auto-heal HP, 6 themes, 15 wika ng interface). Ang Premium ay nag-uunlock ng buong rotation, customizable macros at ang periodic macro — ang buong arsenal na hinahanap ng RM main.',
  '✓ Points forts': '✓ Mga lakas',
  '✗ Points faibles': '✗ Mga kahinaan',
  '15 langues d\'interface, support international': '15 wika ng interface, internasyonal na suporta',
  'Données 100% locales (aucun tracking)': 'Data 100% lokal (walang tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Customizable macros hanggang 3 sequences',
  'Mises à jour régulières via Chrome Web Store': 'Regular na updates via Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Chromium lang (walang Firefox)',
  'Premium nécessite compte Google': 'Kailangan ng Google account ang Premium',
  '→ Tester Reborn Assistant': '→ Subukan ang Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Multi-language in-game translator',
  '★ Rang II': '★ Rank II',
  'Gratuit': 'Libre',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Nilulutas ng Reborn Vision ang isang partikular na problema ng Flyff Universe: napaka-international ng community (BR, KR, JP, EU), at maraming player ang nakakatagpo ng chat sa wikang hindi nila kabisado. Ang Reborn Vision ay in-game translator na nakikilala ang text sa screen at nag-aalok ng real-time overlay translation.',
  'Traduction en temps réel multi-langues': 'Real-time multi-language translation',
  '100% gratuit': '100% libre',
  'Configuration minimale': 'Minimal na configuration',
  'OCR variable selon les polices': 'Pabagu-bago ang OCR depende sa font',
  'Consomme un peu de bande passante': 'May kaunting konsumo ng bandwidth',
  '→ Voir Reborn Vision': '→ Tingnan ang Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — Ang reference database',
  '★ Rang III': '★ Rank III',
  'Site web': 'Website',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'Ang FlyffPedia ang pinakakumpletong community wiki para sa Flyff Universe. Item search by name, dedicated page kada mob (drops, location, exp na binibigay), quest trees, class info. Hindi maaaring mawala kapag stuck ka sa isang quest o naghahanap ng farm spot para sa partikular na item.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Collaborative ang updates, pabagu-bago ang kalidad depende sa contributors pero sa kabuuan ang de facto standard ito. Obligadong bookmark para sa lahat ng regular na player.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Stats at build calculation',
  '★ Rang IV': '★ Rank IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Isang stats calculator na isinasaalang-alang ang equipment, jewelry, at buffs mo, at nagbibigay ng tumpak na estimation ng DPS, survival, o healing output mo. Lalo na kapaki-pakinabang kapag nagbabago ka ng build o nagkukumpara ng dalawang jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Medyo plain ang interface pero matibay ang mathematical formula. May ilang community version — piliin ang pinakabagong na-update.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Community at strategic guides',
  '★ Rang V': '★ Rank V',
  'Site web / Discord': 'Website / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Hindi isang tool sa istriktong kahulugan, pero mahalagang resource: build guides kada class, boss strategies, current meta, server economy. Ang content ay isinulat ng mga end-game player, kaya nagbibigay ng perspective na hindi makukuha sa mga generic guide.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Jewelry optimization',
  '★ Rang VI': '★ Rank VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Isang solver na kinukuha ang equipment mo at kinakalkula ang optimal jewelry combination para i-maximize ang partikular na stat (Attack, HP, Cast Speed, atbp.). Niche pero sobrang epektibo pagdating sa end-game, kapag bawat % ay mahalaga.',

  // How to choose
  'Comment choisir ?': 'Paano pumili?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'Ang order sa itaas ay subjective ranking namin base sa frequency ng pakinabang sa regular na player. Eto ang tatlong tipikal na profile para gabayan ang pagpili mo:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Madalas kang nag-fa-farm, lalo na bilang RM o Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Una sa lahat ang Reborn Assistant Premium, tapos FlyffPedia para sa drops.',
  'Vous jouez avec une guilde internationale': 'Naglalaro ka sa isang international guild',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (translator) + Madrigal Inside (community Discord).',
  'Vous êtes end-game et optimisez vos builds': 'End-game ka na at ino-optimize ang builds mo',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer pinagsama, plus Reborn Assistant para i-automate ang farm ng materials.',

  // Tools to avoid
  'Outils à éviter': 'Mga tool na dapat iwasan',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Hindi lahat ng tool na nagma-market bilang "Flyff Universe" ay lehitimo. Mag-ingat sa mga program na:',
  'Demandent vos identifiants Gala Lab': 'Humihingi ng Gala Lab credentials mo',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'walang lehitimong tool ang nangangailangan ng login mo. 100% scam ito.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Nag-i-install bilang Windows .exe executable',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'na walang malinaw na presentation page. Risk ng keylogger o malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Nangangako ng libreng gold, level boost o items',
  '. Toujours arnaque ou banwave imminente.': '. Lagi itong scam o paparating na banwave.',
  'N\'ont pas de version officielle': 'Walang official version',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'sa Chrome Web Store, GitHub o site na may malinaw na legal notice.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Ang criterion na hindi nagsisinungaling',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Ang lehitimong tool ay laging may visible na privacy policy, isang aktibong support channel (Discord, email), at isang Chrome Web Store listing o public GitHub repo. Nakakatugma ang Reborn Assistant at Reborn Vision sa tatlong ito.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artikulong na-update noong 16 Mayo 2026.',

  // Common back-link
  '← Retour aux docs': '← Bumalik sa docs',
};

// ─── guide-rm.mjs (Guide complet du Ringmaster) ─────────────────────────────
export const guideRmTl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Dokumentasyon</a> › Gabay sa Ringmaster',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Kumpletong Gabay 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Papel, buffs, builds, equipment, rotation: lahat ng dapat malaman para maglaro bilang Ringmaster sa Flyff Universe sa 2026, mula sa tier 60 hanggang sa end-game.',

  // H2: Qu'est-ce qu'un Ringmaster
  'Qu\'est-ce qu\'un Ringmaster ?': 'Ano ba ang Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'Ang <strong>Ringmaster</strong> (RM) ang final advancement ng Assist branch sa Flyff Universe. Ito ang <strong>support class ng laro</strong>: ang pangunahing papel niya ay hindi mag-deal ng damage, kundi <em>panatilihing buhay ang party at gawing mas malakas</em> gamit ang long-duration buffs at paulit-ulit na AOE heal. Kung walang Ringmaster, ang end-game party ay tumatagal ng dalawa hanggang tatlong beses para mag-clear ng zone — at hindi gaanong matatag sa accidental pulls.',
  'Quelques caractéristiques qui définissent la classe :': 'Ilang katangian na nagde-define sa class:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Long-duration buffs</strong> (5 hanggang 30 minuto) na nagbo-boost sa stats ng party: attack, defense, speed, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, isang AOE na nag-he-heal over time sa lahat ng allies sa loob ng ~12-15m radius',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> ng namatay na player nang walang experience penalty',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Sobrang baba ng personal burst damage</strong> — walang mapapatay nang mag-isa ang RM nang epektibo',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Halos palagi kailangang nasa party</strong> o kaya may alt na bu-buffer/he-healin',

  // H2: Le rôle du Ringmaster en groupe
  'Le rôle du Ringmaster en groupe': 'Ang papel ng Ringmaster sa party',
  'Trois rôles principaux selon le contexte de jeu :': 'Tatlong pangunahing papel depende sa konteksto ng laro:',

  'Farm rapide (PvE classique)': 'Mabilis na farm (klasikong PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Sinasamahan mo ang isa o higit pang DPS sa isang farming spot. Ang trabaho mo: mag-rebuff kada 5 minuto, mag-cast ng Heal Rain nang tuluy-tuloy, bantayan ang FP. Sobrang paulit-ulit — ito mismo ang sitwasyon kung saan tama ang automation.',

  'Raids & boss': 'Raids at boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Mga boss na may malaking burst damage tulad ng Glaphan, Bang, Aibatt. Nagbabago ang ritmo: mas kaunting periodic heal, mas maraming manual burst heals, minsan kailangang anticipate ang Resurrection. Pumupunta sa second priority ang automation dito — dapat ikaw ang humahawak.',

  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Naka-organize na competition, sobrang precise ang metagame. Hindi na lang utility service ang mga RM: nagko-contribute sila sa optimized compositions na may synchronized buff timings. Critical na alam mo nang husto ang rotations. Maaaring ipagbawal ang automation depende sa rules ng tournament — laging tingnan.',

  // H2: Buffs essentiels
  'Les buffs essentiels du Ringmaster': 'Ang essential buffs ng Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Eto ang mga buff na dapat mong i-master at isama sa rotation mo, naka-rank ayon sa prioridad:',

  '★ Priorité absolue · 30 min': '★ Absolutong prioridad · 30 min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost ng STA + attack para sa buong party. Ang signature buff ng Ringmaster, ina-activate bilang una sa rotation.',
  '★ Priorité haute · 15 min': '★ Mataas na prioridad · 15 min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Pinapataas ang max HP ng party. Critical sa mga zone kung saan posible ang wipe kapag walang HP cap ang isang miyembro.',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'INT boost para sa party. Sobrang laki para sa Mages, Knights AOE, at Rangers na gumagamit ng skills na magic-scaling.',
  '15 min': '15 min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Pinapataas ang attack speed. Game-changer para sa Blades at Rangers; hindi gaanong kailangan para sa Mages.',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Dodge boost. Kapaki-pakinabang sa mga zone na may maraming mabilis na physical attacks ang mga mob.',
  'AOE · ~15 sec': 'AOE · ~15 sec',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'Ang AOE heal na naka-center sa iyo. Pauulit-ulit ica-cast habang nag-fa-farm. Sakop nito ang lahat ng allies sa loob ng 12-15m radius.',

  // H2: Build STA vs INT
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Aling build ang pipiliin?',
  'Deux écoles principales en 2026 :': 'Dalawang pangunahing school sa 2026:',
  'Critère': 'Criterion',
  'Build STA Full': 'Full STA Build',
  'Build INT Hybrid': 'Hybrid INT Build',
  '<strong>Stats principaux</strong>': '<strong>Pangunahing stats</strong>',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, minimum INT para sa buffs',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, minsan 30/70 depende sa level',
  '<strong>HP / Survie</strong>': '<strong>HP / Survival</strong>',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Excellent — sobrang laking pool, nakakaligtas sa accidental pulls',
  'Moyen — exige plus d\'attention du joueur': 'Katamtaman — nangangailangan ng mas maraming atensyon mula sa player',
  '<strong>Puissance des heals</strong>': '<strong>Lakas ng heals</strong>',
  'Correct — suffit pour la plupart des situations': 'Tama — sapat para sa karamihan ng sitwasyon',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Excellent — Heal Rain at iba pang heals ay malakas na nag-sca-scale sa INT',
  '<strong>FP pool</strong>': '<strong>FP pool</strong>',
  'Faible — nécessite plus de potions': 'Mababa — nangangailangan ng mas maraming potions',
  'Élevé — gestion FP plus confortable': 'Mataas — mas komportable ang pamamahala ng FP',
  '<strong>Recommandé pour</strong>': '<strong>Inirerekomenda para sa</strong>',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Mga baguhang player, hindi delikadong farm, solo-utility RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Mga seasoned na player, mahihirap na raid, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'Ang Full STA build ang pinakamadaling i-handle at pinaka-laro. Ang Hybrid INT build ay mas mahirap pero nagbibigay ng makabuluhang mas mataas na heal output — must-have para sa competitive content.',

  // H2: Équipement
  'Équipement recommandé': 'Inirerekomendang equipment',
  'Armes': 'Sandata',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff</strong> — pinakamahusay na INT scaling, rekomendado para sa Hybrid INT build',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick</strong> — balanse, multi-purpose',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield</strong> sa off-hand — dagdag na defense, mahigpit na inirerekomenda sa Full STA',
  'Armure': 'Armor',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>STA jewelry set</strong> para sa Full STA build (Tinerbol, Lord, atbp. depende sa tier)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>INT jewelry set</strong> o hybrid STA/INT para sa Hybrid build',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Laging unahin ang kumpletong set</strong> para sa 2/4/6 piece bonus',
  'Bijoux (jewelry)': 'Mga alahas (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Sa optimization ng jewelry nagiging excellent ang RM mula sa katamtaman. Gumamit ng calculator (tingnan ang <a href="meilleurs-outils-flyff-universe-2026.html">tools comparison namin</a>) para malaman ang combination na nagma-maximize sa priority stat mo depende sa tier.',

  // H2: Rotation
  'Rotation et gestion du rythme': 'Rotation at pamamahala ng pace',
  'Une rotation efficace en farm classique tient en 3 timings :': 'Ang epektibong rotation sa klasikong farm ay nasa 3 timings:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Kada 5 minuto</strong> — kumpletong rebuff ng party (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Kada 12-15 segundo</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Tuluy-tuloy</strong> — pagbabantay ng individual HP para sa emergency burst heals',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Ang unang dalawang timing ay mekanikal at perpekto para sa <strong>automation</strong>. Ang pangatlo ay nangangailangan ng pansin ng tao. Ito ang key trade-off ng modernong Ringmaster: i-automate ang paulit-ulit para <strong>mapanatili ang energy mo para sa mga decisive na sandali</strong>.',

  '💡 Tutoriel pratique disponible': '💡 May available na praktikal na tutorial',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Sumulat kami ng <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">step-by-step tutorial para i-automate ang Ringmaster mo</a> gamit ang Reborn Assistant: pag-set up ng rotations, interval kada cycle, Heal Rain macro at mga pagkakamaling dapat iwasan.',

  // H2: RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Ano ang pagkakaiba?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Dalawang class ng Assist branch, madalas pinagkakamalan ng mga baguhan:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, mababang personal damage, hindi maaaring mawala sa party, hindi gaanong epektibo solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = magic DPS orientation, kayang mag-farm nang solo, nawawalan ng ibang long-duration buffs ng RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Kung ang gusto mo ay maglaro sa party, maglaro ng FWC, o maging "haligi" ng isang guild → Ringmaster. Kung gusto mo ng mas autonomous na Assist class sa solo → Mentalist.',

  // H2: Erreurs courantes
  'Erreurs courantes de débutant Ringmaster': 'Mga karaniwang pagkakamali ng baguhang Ringmaster',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Hindi regular na nag-re-rebuff</strong> — ang kulang na buff pagkatapos ng 5 minuto ay minsan mas mahal pa kaysa sa buong buhay ng DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Gumagalaw habang Heal Rain</strong> — hindi sumusunod ang AOE, lumalabas ng radius ang mga ally',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Full INT build nang masyadong maaga</strong> — walang sapat na HP pool, mamamatay ka bago pa makapag-cast ng Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Pagwawalang-bahala sa FP potions</strong> — ang RM na walang FP ay walang silbing RM',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Pagtangkang mag-DPS</strong> — sinasayang mo ang oras na mas mainam i-invest sa heal at buffs',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'I-optimize ang Ringmaster mo gamit ang Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Ang premium extension para i-automate ang buff rotation, ang periodic Heal Rain at ang custom macros mo. 7 araw na libreng trial nang walang credit card.',
  'Installer Reborn Assistant': 'I-install ang Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Gabay na na-update noong 16 Mayo 2026 — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← Bumalik sa docs',
};
