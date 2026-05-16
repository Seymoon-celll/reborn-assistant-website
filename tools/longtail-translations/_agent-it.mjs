/**
 * Italian translation maps for the 3 long-tail SEO pages.
 * Mirrors the structure of the Spanish maps in tools-2026.mjs / automate-rm.mjs.
 */

// ─── automatiser-ringmaster-flyff-universe.html ──────────────────────────────
export const automateRmIt = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentazione</a> › Automatizzare il tuo Ringmaster',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Automatizzare il tuo Ringmaster su Flyff Universe — Guida completa 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buff, sequenze, AOE heal, gestione HP/FP: il tutorial passo passo per trasformare il tuo Ringmaster in un pilastro del gruppo senza lasciarci le dita.',

  // TOC
  '◆ Sommaire': '◆ Indice',
  'Pourquoi automatiser son Ringmaster': 'Perché automatizzare il tuo Ringmaster',
  'Prérequis avant d\'automatiser': 'Requisiti prima di automatizzare',
  'Identifier vos séquences Ringmaster': 'Identifica le tue sequenze Ringmaster',
  'Configurer la rotation de buffs': 'Configura la rotazione dei buff',
  'Programmer le Heal périodique': 'Programma l\'Heal periodico',
  'Macros personnalisées (DPS, support, urgence)': 'Macro personalizzate (DPS, supporto, emergenza)',
  'Optimisation et erreurs courantes': 'Ottimizzazione ed errori comuni',
  'Aspect légal — ce qu\'il faut savoir': 'Aspetto legale — cosa devi sapere',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Il Ringmaster (spesso abbreviato in <strong>RM</strong>) è la classe support per eccellenza di Flyff Universe. Il suo ruolo è chiaro: mantenere il gruppo in vita tramite buff (Heart of Power, Beef Up, Mental Sign…) che durano tra 5 e 30 minuti a seconda del livello, e curare i danni con Heal Rain in AOE. Sulla carta è lineare. In pratica è una delle classi più stancanti nei farm prolungati: passi l\'80% del tempo a <strong>rebuffare ogni 5 minuti</strong>, a <strong>rilanciare Heal Rain ogni 10-15 secondi</strong> e a <strong>tenere d\'occhio le barre FP</strong> di ogni membro del gruppo.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'L\'automazione non sostituisce il tuo giudizio. Libera la tastiera dalle routine meccaniche: la sequenza completa di rebuff, l\'heal periodico, l\'uso delle pozioni FP. Tieni le mani libere per i <strong>momenti che contano davvero</strong>: un wipe imminente, una wave che sfugge di mano, un boss che prende di mira il RM per primo.',
  '💡 Cas d\'usage typique': '💡 Caso d\'uso tipico',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Avvii una sessione di farm di 4 ore su Glaphan o Asteria. Senza automazione: 240 minuti ÷ 5 minuti = 48 cicli di rebuff manuali. Con Reborn Assistant configurato: 1 ciclo, il resto gira in background. Riprendi il controllo solo se cambia la composizione o muore un membro.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Prima di attivare qualsiasi cosa, getta basi solide:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> installato (la versione gratuita copre solo la macro di heal base). Consulta la <a href="quickstart.html">guida di installazione</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>I tuoi buff Ringmaster assegnati ai tasti F2 → 0</strong> seguendo un ordine logico (Heart of Power per primo, AOE buff a seguire, single-target per ultimi).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain sul tasto § (o un altro tasto dedicato)</strong> — è il tasto che Reborn Assistant attiverà in loop.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Uno stack di pozioni FP</strong> nell\'inventario — l\'automazione non inventa risorse.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Una zona di farm stabile</strong>: evita zone con teletrasporti forzati o mob che respingono (sballano le posizioni e rompono l\'AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Non tutte le sequenze sono uguali. Ecco la gerarchia tipica di una build RM full support:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Sequenze essenziali (rotazione ogni 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — boost STA + attacco, indispensabile',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — STA fisso, aumenta l\'HP massimo del gruppo',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + boost magico per Mage / Knight AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, enorme per Blade / Ranger',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, utile nelle zone difficili',
  'Séquences situationnelles (à activer manuellement)': 'Sequenze situazionali (da attivare manualmente)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — mai in auto, caso per caso',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — bonus danni elementali, opzionale a seconda del contesto',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'È il cuore del sistema. Reborn Assistant può premere una sequenza fissa <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> a intervalli regolari. Ecco come allinearla al tuo RM:',
  'Préparer vos slots de séquences': 'Prepara i tuoi slot di sequenze',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Trascina le tue sequenze dalla barra delle sequenze alla barra delle scorciatoie di Flyff in quest\'ordine:',
  'Touche 1 → Heart of Power': 'Tasto 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Tasto 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Tasto 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Tasto 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Tasto 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Tasti da 6 a 0 → gli altri buff disponibili o vuoti',
  'Activer la rotation dans Reborn Assistant': 'Attivare la rotazione in Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'Nel pannello Reborn, scheda Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Attiva il toggle <strong>«Rotazione sequenze»</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Imposta l\'<strong>intervallo tra i cicli</strong> sulla durata del buff più corto (tipicamente 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Imposta il <strong>ritardo tra i tasti</strong> a 1 secondo (lascia il tempo all\'animazione della sequenza di completarsi)',
  'Tester un cycle complet': 'Testare un ciclo completo',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Avvia con <code>CTRL+A</code>. Osserva il log di attività: devi vedere <em>F2 pressed → 1 pressed → 2 pressed…</em> in sequenza, con ~1 secondo tra uno e l\'altro. Se una sequenza non parte, probabilmente è un cooldown o mancanza di FP — verifica visivamente in gioco.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain deve girare in parallelo alla rotazione dei buff. Reborn Assistant offre una macro periodica fissa di 15 secondi, perfettamente calibrata sull\'area AOE di Heal Rain (che dura circa 12-15 secondi).',
  'Assigner Heal Rain à la touche §': 'Assegnare Heal Rain al tasto §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Per default, la macro periodica di Reborn Assistant attiva il tasto <code>§</code>. Trascina Heal Rain su questo tasto in Flyff.',
  'Activer la macro périodique': 'Attivare la macro periodica',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Attiva il toggle <strong>«Macro periodica»</strong> nel pannello Premium. Il sistema richiamerà Heal Rain ogni 15 secondi, con archiviazione automatica.',
  '⚠️ Attention au positionnement': '⚠️ Attenzione al posizionamento',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain è un AOE centrato su di te. Se ti muovi continuamente (kite o riposizionamento), il tuo Heal Rain non coprirà i DPS. Resta fermo o definisci un punto di raduno fisso per il gruppo.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Oltre alla rotazione e all\'heal, Reborn Assistant Premium offre <strong>3 macro indipendenti</strong>. Ecco come sfruttarle per un Ringmaster:',
  'Macro 1 — Pet feeding': 'Macro 1 — Alimentazione pet',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Se hai un familiare che chiede da mangiare regolarmente, programma una sequenza tipo <code>k,h</code> (tasto pet panel + heal pet) ogni 30 secondi. Evita che il tuo pet muoia mentre farmi.',
  'Macro 2 — Stack de FP potions': 'Macro 2 — Stack di pozioni FP',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Configura una sequenza tipo <code>y</code> (tasto FP potion) ogni 20 secondi per mantenere i tuoi FP sopra l\'80%. Regola in base al consumo e alla cadenza di Heal Rain.',
  'Macro 3 — Anti-AFK': 'Macro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Una sequenza tipo <code>up,down</code> o <code>space</code> ogni 4-5 minuti consente di evitare una disconnessione AFK durante un farm lungo nei momenti tranquilli. Da usare con criterio.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Ritardo tra i tasti troppo breve</strong> — se le tue sequenze saltano, aumenta il ritardo tra i tasti a 1,5 o 2 secondi. Meglio un ciclo un po\' più lento ma che vada al 100%.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Non superare il cooldown globale</strong> — Flyff ha un GCD (global cooldown). Se spammi troppo veloce, le sequenze si perdono nel vuoto. Il ritardo di 1s di default rispetta questo GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP che si esaurisce a metà ciclo</strong> — la tua rotazione si ferma silenziosamente. Attiva la macro FP potion o aumenta INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Membri del gruppo fuori dall\'area AOE</strong> — l\'heal periodico cura solo i giocatori nel raggio di Heal Rain (~12-15m). Comunica con il gruppo: devono restare a portata.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Bersaglio perso dopo la morte di un mob</strong> — non è grave per il RM, ma controlla i tuoi target se hai anche sequenze single-target in rotazione.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'L\'automazione di azioni ripetitive tramite estensione <strong>può violare i termini di servizio</strong> di alcuni servizi di gioco, compresi quelli di Gala Lab per Flyff Universe. Reborn Assistant <strong>non legge la memoria del gioco, non invia pacchetti di rete, non modifica il client</strong>: è strettamente una simulazione dei tasti che premeresti manualmente. Resti responsabile al 100% dell\'uso che ne fai.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Per capire esattamente cosa fa (e cosa non fa) Reborn Assistant a livello tecnico, consulta le <a href="../index.html#faq">FAQ della pagina principale</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Pronto a liberare il tuo Ringmaster?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Installa Reborn Assistant in 30 secondi dal Chrome Web Store. 7 giorni di prova Premium gratuiti, senza carta di credito.',
  'Installer Reborn Assistant': 'Installa Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Articolo correlato',
  '◆ Documentation': '◆ Documentazione',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'I migliori strumenti e estensioni Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Guida completa della classe Ringmaster di Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Guida completa delle funzionalità Premium',

  // Common
  '← Retour aux docs': '← Torna alla documentazione',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Installa Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Aggiungi l\'estensione Reborn Assistant dal Chrome Web Store e fissala nella barra degli strumenti.',
  '"Identifier vos séquences Ringmaster"': '"Identifica le tue sequenze Ringmaster"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Elenca le tue sequenze chiave: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep e l\'AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Configura la rotazione delle sequenze"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'In Reborn Assistant, attiva la rotazione F2 → 1-9 → 0 → F1 con un intervallo di 5 minuti (durata tipica dei tuoi buff).',
  '"Programmer le Heal périodique"': '"Programma l\'Heal periodico"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Attiva la macro periodica per lanciare Heal Rain ogni 15 secondi in gruppo.',
  '"Lancer l\'automatisation"': '"Avvia l\'automazione"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Avvia con CTRL+A, osserva il log di attività, regola i ritardi in base alle animazioni delle tue sequenze.',
};

// ─── meilleurs-outils-flyff-universe-2026.html ───────────────────────────────
export const toolsIt = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentazione</a> › Migliori strumenti Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'I Migliori Strumenti ed Estensioni per Flyff Universe nel 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Selezione testata e confrontata degli strumenti che cambiano davvero il tuo gameplay su Flyff Universe: estensioni, traduttori, calcolatori, database.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe è un MMORPG che si regge grazie alla sua community: una parte significativa degli strumenti utili non viene dall\'editore, ma dai giocatori stessi. Abbiamo testato per 3 mesi (febbraio → maggio 2026) gli strumenti di terze parti più popolari e selezionato i <strong>6 che meritano davvero attenzione</strong>, classificati per utilità per il giocatore abituale.',

  // Methodology callout
  '📌 Méthodologie': '📌 Metodologia',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Ogni strumento è stato valutato su 4 criteri: utilità reale nel gameplay quotidiano, qualità degli aggiornamenti (segue il ritmo di Flyff Universe), rispetto dei dati utente e facilità d\'uso. Nessuna partnership commerciale: solo Reborn Assistant è pubblicato dall\'autore di questo sito (trasparenza dichiarata).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — L\'estensione di automazione per Ringmaster',
  '★ Rang I · Notre choix': '★ Rango I · La nostra scelta',
  'Version gratuite': 'Versione gratuita',
  'Premium 2,99€/mois': 'Premium 2,99€/mese',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant è un\'estensione del browser dedicata all\'<strong>automazione delle azioni ripetitive</strong> per i giocatori Flyff Universe — in particolare la classe Ringmaster, le cui rotazioni di buff sono notoriamente snervanti. L\'estensione simula la pressione di tasti a intervalli configurabili: rotazione di sequenze ogni X minuti, macro periodica ogni 15 secondi per Heal Rain e fino a 3 macro personalizzabili.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'La versione gratuita copre le basi (auto-heal HP, 6 temi, 15 lingue di interfaccia). La versione Premium sblocca la rotazione completa, le macro personalizzate e la macro periodica — l\'arsenale che un RM main si aspetta.',
  '✓ Points forts': '✓ Punti di forza',
  '✗ Points faibles': '✗ Punti deboli',
  '15 langues d\'interface, support international': '15 lingue di interfaccia, supporto internazionale',
  'Données 100% locales (aucun tracking)': 'Dati 100% locali (nessun tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Macro personalizzabili fino a 3 sequenze',
  'Mises à jour régulières via Chrome Web Store': 'Aggiornamenti regolari tramite Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Solo Chromium (no Firefox)',
  'Premium nécessite compte Google': 'Premium richiede un account Google',
  '→ Tester Reborn Assistant': '→ Prova Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Traduttore in-game multilingua',
  '★ Rang II': '★ Rango II',
  'Gratuit': 'Gratuito',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision risolve un problema specifico di Flyff Universe: la community è molto internazionale (BR, KR, JP, EU) e molti giocatori incrociano chat in lingue che non padroneggiano. Reborn Vision è un traduttore in-game che rileva il testo visualizzato a schermo e propone una traduzione overlay in tempo reale.',
  'Traduction en temps réel multi-langues': 'Traduzione in tempo reale multilingua',
  '100% gratuit': '100% gratuito',
  'Configuration minimale': 'Configurazione minima',
  'OCR variable selon les polices': 'OCR variabile a seconda dei font',
  'Consomme un peu de bande passante': 'Consuma un po\' di banda',
  '→ Voir Reborn Vision': '→ Scopri Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — Il database di riferimento',
  '★ Rang III': '★ Rango III',
  'Site web': 'Sito web',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia è la wiki community più completa per Flyff Universe. Ricerca di oggetti per nome, pagina dedicata per mob (drop, posizione, exp data), alberi delle quest, info sulle classi. Indispensabile quando ti blocchi su una quest o cerchi dove farmare un oggetto specifico.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Aggiornamenti collaborativi, qualità variabile a seconda dei contributori ma complessivamente lo standard de facto. Bookmark obbligatorio per ogni giocatore abituale.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Calcoli di stat e build',
  '★ Rang IV': '★ Rango IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Un calcolatore di stat che tiene conto di equipaggiamento, jewelry e buff, e ti fornisce una stima precisa del tuo DPS, della sopravvivenza o dell\'healing output. Particolarmente utile durante un cambio di build o per confrontare due pezzi di jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Interfaccia un po\' spartana ma formula matematica solida. Esiste in più versioni community — scegli quella aggiornata più di recente.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Community e guide strategiche',
  '★ Rang V': '★ Rango V',
  'Site web / Discord': 'Sito web / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Non è uno strumento in senso stretto, ma una risorsa preziosa: guide di build per classe, strategie sui boss, meta del momento, economia del server. I contenuti sono scritti da giocatori end-game, il che offre una prospettiva che non si trova nelle guide generaliste.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Ottimizzazione jewelry',
  '★ Rang VI': '★ Rango VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Un solver che prende il tuo equipaggiamento e calcola la combinazione di jewelry ottimale per massimizzare uno stat specifico (Attacco, HP, Cast Speed, ecc.). Di nicchia ma terribilmente efficace una volta in end-game, quando ogni % conta.',

  // How to choose
  'Comment choisir ?': 'Come scegliere?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'L\'ordine qui sopra è la nostra classifica soggettiva basata sulla frequenza di utilità per un giocatore abituale. Ecco tre profili tipo per orientare la tua scelta:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Farmi molto, soprattutto come RM o Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium in priorità, poi FlyffPedia per i drop.',
  'Vous jouez avec une guilde internationale': 'Giochi con una gilda internazionale',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (traduttore) + Madrigal Inside (Discord community).',
  'Vous êtes end-game et optimisez vos builds': 'Sei in end-game e ottimizzi le tue build',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer combinati, più Reborn Assistant per automatizzare il farm dei materiali.',

  // Tools to avoid
  'Outils à éviter': 'Strumenti da evitare',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Non tutti gli strumenti pubblicizzati come "Flyff Universe" sono legittimi. Diffida dei programmi che:',
  'Demandent vos identifiants Gala Lab': 'Chiedono le tue credenziali Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'nessuno strumento legittimo ha bisogno del tuo login. Sono truffe al 100%.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Si installano come eseguibile .exe Windows',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'senza una pagina di presentazione chiara. Rischio di keylogger o malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Promettono gold gratis, level boost o item',
  '. Toujours arnaque ou banwave imminente.': '. Sempre truffa o banwave imminente.',
  'N\'ont pas de version officielle': 'Non hanno una versione ufficiale',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'su Chrome Web Store, GitHub o un sito con note legali chiare.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Il criterio che non mente',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Uno strumento legittimo ha sempre una policy sulla privacy visibile, un canale di supporto attivo (Discord, email) e una scheda Chrome Web Store o un repo GitHub pubblico. Reborn Assistant e Reborn Vision spuntano queste 3 caselle.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Articolo aggiornato il 16 maggio 2026.',

  // Common back-link
  '← Retour aux docs': '← Torna alla documentazione',
};

// ─── guide-ringmaster-flyff-universe.html ────────────────────────────────────
export const guideRmIt = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Home</a> › <a href="index.html">Documentazione</a> › Guida Ringmaster',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Guida Completa 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Ruolo, buff, build, equipaggiamento, rotazione: tutto ciò che devi sapere per giocare Ringmaster su Flyff Universe nel 2026, dal livello 60 fino all\'end-game.',

  // H2 + paragraphs: Qu'est-ce qu'un Ringmaster
  'Qu\'est-ce qu\'un Ringmaster ?': 'Cos\'è un Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'Il <strong>Ringmaster</strong> (RM) è l\'avanzamento finale della branca Assist su Flyff Universe. È <strong>la classe support del gioco</strong>: il suo ruolo principale non è infliggere danni, ma <em>mantenere un gruppo in vita e renderlo più potente</em> tramite buff di lunga durata e un heal AOE in loop. Senza un Ringmaster, un gruppo end-game impiega due o tre volte più tempo a ripulire una zona — e sopravvive molto peggio ai pull accidentali.',
  'Quelques caractéristiques qui définissent la classe :': 'Alcune caratteristiche che definiscono la classe:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Buff di lunga durata</strong> (da 5 a 30 minuti) che potenziano le stat del gruppo: attacco, difesa, velocità, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, un AOE che cura nel tempo tutti gli alleati in un raggio di ~12-15m',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrezione</strong> di un giocatore morto senza penalità di esperienza',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Burst damage personale molto debole</strong> — il RM non uccide nulla da solo in modo efficace',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Richiede quasi sempre di essere in gruppo</strong> oppure di avere un alt da buffare/curare',

  // H2: Le rôle du Ringmaster en groupe
  'Le rôle du Ringmaster en groupe': 'Il ruolo del Ringmaster in gruppo',
  'Trois rôles principaux selon le contexte de jeu :': 'Tre ruoli principali a seconda del contesto di gioco:',
  'Farm rapide (PvE classique)': 'Farm rapido (PvE classico)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Accompagni uno o più DPS su uno spot di farm. Il tuo lavoro: rebuffare ogni 5 minuti, lanciare Heal Rain in continuazione, monitorare gli FP. Molto ripetitivo — è esattamente la situazione in cui l\'automazione ha il suo senso pieno.',
  'Raids & boss': 'Raid e boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Boss con grossi burst damage tipo Glaphan, Bang, Aibatt. Il ritmo cambia: meno heal periodico, più heal burst manuali, a volte Resurrezione da anticipare. L\'automazione passa in secondo piano qui — devi mantenere il controllo.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Competizione organizzata, metagame ultra-preciso. I RM non sono più solo un servizio utility: contribuiscono a composizioni ottimizzate con timing di buff sincronizzati. Conoscere le rotazioni a memoria diventa critico. L\'automazione può essere vietata secondo le regole di un torneo — verifica sempre.',

  // H2: Les buffs essentiels
  'Les buffs essentiels du Ringmaster': 'I buff essenziali del Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Ecco i buff che devi padroneggiare e includere nella tua rotazione, classificati per priorità:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ Priorità assoluta · 30 min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost STA + attacco per tutto il gruppo. Il buff signature del Ringmaster, da attivare per primo nella rotazione.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ Priorità alta · 15 min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Aumenta l\'HP massimo del gruppo. Critico nelle zone dove un wipe è possibile se un membro non ha il suo cap HP.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Boost INT del gruppo. Enorme per Mage, Knight AOE e Ranger che usano skill con scaling magico.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Aumenta l\'attack speed. Game-changer per Blade e Ranger; meno critico per i Mage.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Boost di dodge. Utile nelle zone dove i mob hanno molti attacchi fisici rapidi.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 sec',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'L\'AOE di cura centrato su di te. Da rilanciare in loop per tutto il farm. Copre tutti gli alleati in un raggio di 12-15m.',

  // H2: Build STA vs INT
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Quale build scegliere?',
  'Deux écoles principales en 2026 :': 'Due scuole principali nel 2026:',
  'Critère': 'Criterio',
  'Build STA Full': 'Build STA Full',
  'Build INT Hybrid': 'Build INT Hybrid',
  'Stats principaux': 'Stat principali',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, INT minima richiesta per i buff',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, a volte 30/70 a seconda del livello',
  'HP / Survie': 'HP / Sopravvivenza',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Eccellente — pool enorme, sopravvive ai pull accidentali',
  'Moyen — exige plus d\'attention du joueur': 'Medio — richiede più attenzione dal giocatore',
  'Puissance des heals': 'Potenza degli heal',
  'Correct — suffit pour la plupart des situations': 'Corretto — sufficiente per la maggior parte delle situazioni',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Eccellente — Heal Rain e altri heal scalano molto con INT',
  'FP pool': 'Pool FP',
  'Faible — nécessite plus de potions': 'Basso — richiede più pozioni',
  'Élevé — gestion FP plus confortable': 'Elevato — gestione FP più comoda',
  'Recommandé pour': 'Consigliato per',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Giocatori alle prime armi, farm poco pericoloso, RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Giocatori esperti, raid difficili, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'La build STA Full resta la più indulgente e la più giocata. La build INT Hybrid è più esigente ma ricompensa con un heal output significativamente superiore — un must per i contenuti competitivi.',

  // H2: Équipement
  'Équipement recommandé': 'Equipaggiamento consigliato',
  'Armes': 'Armi',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (bastone)</strong> — miglior scaling INT, consigliato per la build INT Hybrid',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (canna)</strong> — equilibrato, versatile',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (scudo)</strong> in off-hand — guadagno di difesa, fortemente consigliato in STA Full',
  'Armure': 'Armatura',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>Set jewelry STA</strong> per la build STA Full (Tinerbol, Lord, ecc. a seconda del livello)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>Set jewelry INT</strong> o ibrido STA/INT per la build Hybrid',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Privilegia sempre il set completo</strong> per il bonus 2/4/6 pezzi',
  'Bijoux (jewelry)': 'Gioielli (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'L\'ottimizzazione dei gioielli è ciò che fa passare il RM dal corretto all\'eccellente. Usa un calcolatore (vedi il <a href="meilleurs-outils-flyff-universe-2026.html">nostro comparativo di strumenti</a>) per identificare la combinazione che massimizza la tua stat prioritaria a seconda del livello.',

  // H2: Rotation
  'Rotation et gestion du rythme': 'Rotazione e gestione del ritmo',
  'Une rotation efficace en farm classique tient en 3 timings :': 'Una rotazione efficace in farm classico si regge su 3 timing:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Ogni 5 minuti</strong> — rebuff completo del gruppo (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Ogni 12-15 secondi</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Continuo</strong> — sorveglianza degli HP individuali per heal burst d\'emergenza',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'I primi due timing sono meccanici e perfetti per <strong>l\'automazione</strong>. Il terzo richiede la tua attenzione umana. È il compromesso chiave del Ringmaster moderno: automatizzare ciò che è ripetitivo per <strong>conservare le tue energie per i momenti decisivi</strong>.',
  '💡 Tutoriel pratique disponible': '💡 Tutorial pratico disponibile',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Abbiamo scritto un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutorial passo passo per automatizzare il tuo Ringmaster</a> con Reborn Assistant: configurazione delle rotazioni, intervallo tra i cicli, macro Heal Rain ed errori da evitare.',

  // H2: Ringmaster vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Qual è la differenza?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Due classi della branca Assist, spesso confuse dai principianti:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, basso damage personale, indispensabile in gruppo, poco efficace in solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = orientato al DPS magico, può farmare in solo, perde una parte dei buff di lunga durata del RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Se il tuo intento è giocare in gruppo, giocare FWC o essere il "pilastro" di una gilda → Ringmaster. Se vuoi una classe Assist più autonoma in solo → Mentalist.',

  // H2: Erreurs courantes
  'Erreurs courantes de débutant Ringmaster': 'Errori comuni del Ringmaster alle prime armi',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Non rebuffare regolarmente</strong> — un buff mancante dopo 5 minuti a volte costa più dell\'intera vita del DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Muoversi durante Heal Rain</strong> — l\'AOE non ti segue, gli alleati escono dal raggio',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Build full INT troppo presto</strong> — senza un pool HP sufficiente, muori prima di aver lanciato Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Ignorare le pozioni FP</strong> — un RM senza FP è un RM inutile',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Tentare di fare DPS</strong> — perdi tempo che è meglio investire in heal e buff',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Ottimizza il tuo Ringmaster con Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'L\'estensione premium per automatizzare la rotazione dei buff, il Heal Rain periodico e le tue macro personalizzate. 7 giorni di prova gratis senza carta di credito.',
  'Installer Reborn Assistant': 'Installa Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Guida aggiornata il 16 maggio 2026 — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← Torna alla documentazione',
};
