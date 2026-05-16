/**
 * Polish translations for 3 long-tail SEO pages:
 *  - docs/automatiser-ringmaster-flyff-universe.html  → automateRmPl
 *  - docs/meilleurs-outils-flyff-universe-2026.html   → toolsPl
 *  - docs/guide-ringmaster-flyff-universe.html        → guideRmPl
 *
 * Untranslated terms (kept verbatim):
 *   Flyff Universe, Ringmaster, RM, HoP, Beef Up, Heart of Power, Mental Sign,
 *   Speed Pep, Cat's Reflex, Heal Rain, FP, HP, AOE, MP, Reborn Assistant,
 *   Reborn Vision, Premium, FlyffPedia, Madrigal Inside, FlyffOptimizer,
 *   Chrome Web Store, Google Cloud, Gala Lab, Stripe, Glaphan, Asteria, AFK,
 *   GCD, DPS, INT, STA, MMORPG, FWC, DevTools, CTRL+A, CTRL+O, OCR, JWT.
 */

// ─── automate-rm.mjs (PL) ────────────────────────────────────────────────────
export const automateRmPl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Strona główna</a> › <a href="index.html">Dokumentacja</a> › Automatyzacja Ringmastera',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Automatyzacja Ringmastera w Flyff Universe — Kompletny poradnik 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffy, sekwencje, AOE heal, zarządzanie HP/FP: krok po kroku jak zmienić swojego Ringmastera w filar drużyny, nie zarabiając się na śmierć.',

  // TOC
  '◆ Sommaire': '◆ Spis treści',
  'Pourquoi automatiser son Ringmaster': 'Dlaczego warto automatyzować Ringmastera',
  'Prérequis avant d\'automatiser': 'Wymagania wstępne przed automatyzacją',
  'Identifier vos séquences Ringmaster': 'Zidentyfikuj swoje sekwencje Ringmastera',
  'Configurer la rotation de buffs': 'Skonfiguruj rotację buffów',
  'Programmer le Heal périodique': 'Zaprogramuj okresowy Heal',
  'Macros personnalisées (DPS, support, urgence)': 'Niestandardowe makra (DPS, support, awaryjne)',
  'Optimisation et erreurs courantes': 'Optymalizacja i częste błędy',
  'Aspect légal — ce qu\'il faut savoir': 'Aspekt prawny — co warto wiedzieć',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster (często skracany do <strong>RM</strong>) to ikoniczna klasa supportowa w Flyff Universe. Jego rola jest jasna: utrzymywać drużynę przy życiu dzięki buffom (Heart of Power, Beef Up, Mental Sign…), które trwają od 5 do 30 minut w zależności od poziomu, oraz leczyć obrażenia za pomocą Heal Rain w AOE. Na papierze prosta sprawa. W praktyce to jedna z najbardziej męczących klas podczas długiego farmienia: 80% czasu spędzasz na <strong>rebuffowaniu co 5 minut</strong>, <strong>ponawianiu Heal Rain co 10-15 sekund</strong> i <strong>pilnowaniu pasków FP</strong> każdego członka drużyny.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Automatyzacja nie zastępuje twojego osądu. Odciąża twoją klawiaturę od mechanicznych rutyn: pełnej sekwencji rebuffu, okresowego heala, używania mikstur FP. Zostawia ci wolne ręce na <strong>momenty, w których naprawdę się to liczy</strong>: nadciągający wipe, wave, który wymyka się spod kontroli, boss, który celuje najpierw w RM.',
  '💡 Cas d\'usage typique': '💡 Typowy przypadek użycia',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Odpalasz 4-godzinny farm na Glaphan lub Asteria. Bez automatyzacji: 240 minut ÷ 5 minut = 48 cykli ręcznego rebuffu. Z odpowiednio skonfigurowanym Reborn Assistant: 1 cykl, reszta dzieje się w tle. Przejmujesz kontrolę tylko wtedy, gdy zmienia się skład albo ktoś umiera.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Zanim cokolwiek włączysz, postaw solidne fundamenty:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> zainstalowany (wersja darmowa obejmuje tylko podstawowe makro leczenia). Zobacz <a href="quickstart.html">poradnik instalacji</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Twoje buffy Ringmastera przypisane do klawiszy F2 → 0</strong> w logicznej kolejności (najpierw Heart of Power, potem AOE buffy, na końcu single-target).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain na klawiszu § (lub innym dedykowanym)</strong> — to klawisz, który Reborn Assistant będzie wciskał w pętli.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Stosik mikstur FP</strong> w ekwipunku — automatyzacja nie wyczaruje zasobów.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Stabilna strefa farmienia</strong>: unikaj stref z wymuszonymi teleportami albo mobami odpychającymi (rozjeżdżają pozycje i psują AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Nie wszystkie sekwencje są sobie równe. Oto typowa hierarchia builda RM full support:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Sekwencje kluczowe (rotacja co 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — boost STA + atak, niezbędny',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — płaska STA, zwiększa maksymalne HP drużyny',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + boost magiczny dla Mage\'ów / Knightów AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, ogromny dla Blade\'ów / Rangerów',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, przydatny w trudnych strefach',
  'Séquences situationnelles (à activer manuellement)': 'Sekwencje sytuacyjne (włączane ręcznie)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — nigdy na auto, każdorazowo decyzja',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — bonus obrażeń żywiołowych, opcjonalny zależnie od kontekstu',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'To serce systemu. Reborn Assistant potrafi wciskać stałą sekwencję <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> w regularnych odstępach. Oto jak dopasować ją do twojego RM:',
  'Préparer vos slots de séquences': 'Przygotuj sloty na sekwencje',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Przeciągnij swoje sekwencje z paska sekwencji na pasek skrótów Flyffa w tej kolejności:',
  'Touche 1 → Heart of Power': 'Klawisz 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Klawisz 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Klawisz 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Klawisz 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Klawisz 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Klawisze 6 do 0 → twoje pozostałe dostępne buffy lub puste',
  'Activer la rotation dans Reborn Assistant': 'Włącz rotację w Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'W panelu Reborn, zakładka Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Włącz przełącznik <strong>„Rotacja sekwencji"</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Ustaw <strong>interwał między cyklami</strong> na czas trwania najkrótszego buffa (zwykle 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Ustaw <strong>opóźnienie między klawiszami</strong> na 1 sekundę (daje czas na odtworzenie animacji sekwencji)',
  'Tester un cycle complet': 'Przetestuj pełny cykl',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Uruchom skrótem <code>CTRL+A</code>. Obserwuj log aktywności: powinieneś widzieć <em>F2 pressed → 1 pressed → 2 pressed…</em> po kolei, z ~1 sekundą przerwy. Jeśli któraś sekwencja się nie odpala, to najpewniej cooldown albo brak FP — sprawdź wizualnie w grze.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain musi działać równolegle z rotacją buffów. Reborn Assistant oferuje stałe makro okresowe co 15 sekund, idealnie dopasowane do strefy AOE Heal Rain (która trwa około 12-15 sekund).',
  'Assigner Heal Rain à la touche §': 'Przypisz Heal Rain do klawisza §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Domyślnie okresowe makro Reborn Assistant uruchamia klawisz <code>§</code>. Przeciągnij Heal Rain na ten klawisz w Flyffie.',
  'Activer la macro périodique': 'Włącz makro okresowe',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Przełącznik <strong>„Makro okresowe"</strong> w panelu Premium. System będzie wywoływał Heal Rain co 15 sekund, z automatycznym zapamiętaniem.',
  '⚠️ Attention au positionnement': '⚠️ Uwaga na pozycję',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain to AOE wycentrowane na tobie. Jeśli ciągle się ruszasz (kite albo repozycjonowanie), twój Heal Rain nie pokryje DPS-ów. Stój w miejscu albo wyznacz drużynie stały punkt zborny.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Oprócz rotacji i heala, Reborn Assistant Premium oferuje <strong>3 niezależne makra</strong>. Oto jak wykorzystać je dla Ringmastera:',
  'Macro 1 — Pet feeding': 'Makro 1 — Karmienie peta',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Jeśli masz pupila, którego trzeba regularnie karmić, zaprogramuj sekwencję typu <code>k,h</code> (klawisz panelu peta + heal pet) co 30 sekund. Dzięki temu twój pet nie umrze podczas farmienia.',
  'Macro 2 — Stack de FP potions': 'Makro 2 — Stack mikstur FP',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Skonfiguruj sekwencję typu <code>y</code> (klawisz mikstury FP) co 20 sekund, aby utrzymać FP powyżej 80%. Dostosuj do swojego zużycia i tempa Heal Rain.',
  'Macro 3 — Anti-AFK': 'Makro 3 — Anty-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Sekwencja typu <code>up,down</code> lub <code>space</code> co 4-5 minut pozwala uniknąć rozłączenia AFK podczas długiego farmienia w spokojnych momentach. Stosuj z rozwagą.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Zbyt krótkie opóźnienie między klawiszami</strong> — jeśli sekwencje są pomijane, zwiększ opóźnienie do 1,5 lub 2 sekund. Lepszy nieco wolniejszy cykl, ale przechodzący w 100%.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Nie przekraczaj globalnego cooldownu</strong> — Flyff ma GCD (global cooldown). Jeśli spamujesz za szybko, sekwencje znikają w próżni. Domyślne opóźnienie 1 s respektuje ten GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP wysycha w środku cyklu</strong> — twoja rotacja po cichu się zatrzymuje. Włącz makro mikstury FP albo zwiększ INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Członkowie drużyny poza strefą AOE</strong> — okresowy heal leczy tylko graczy w promieniu Heal Rain (~12-15 m). Pogadaj z drużyną: muszą zostać w zasięgu.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Stracony cel po śmierci moba</strong> — dla RM bez znaczenia, ale pilnuj targetów, jeśli masz też sekwencje single-target w rotacji.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Automatyzacja powtarzalnych czynności przez rozszerzenie <strong>może łamać regulamin</strong> niektórych usług growych, w tym Gala Lab dla Flyff Universe. Reborn Assistant <strong>nie czyta pamięci gry, nie wysyła pakietów sieciowych, nie modyfikuje klienta</strong>: to wyłącznie symulacja klawiszy, które wcisnąłbyś ręcznie. Pełną odpowiedzialność za użycie ponosisz ty.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Aby dokładnie zrozumieć, co Reborn Assistant robi (a czego nie robi) od strony technicznej, zajrzyj do <a href="../index.html#faq">FAQ na stronie głównej</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Gotowy uwolnić swojego Ringmastera?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Zainstaluj Reborn Assistant w 30 sekund z Chrome Web Store. 7 dni darmowego okresu próbnego Premium, bez karty kredytowej.',
  'Installer Reborn Assistant': 'Zainstaluj Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Powiązany artykuł',
  '◆ Documentation': '◆ Dokumentacja',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Najlepsze narzędzia i rozszerzenia Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Kompletny poradnik klasy Ringmaster w Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Kompletny poradnik funkcji Premium',

  // Common
  '← Retour aux docs': '← Powrót do dokumentacji',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Zainstaluj Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Dodaj rozszerzenie Reborn Assistant z Chrome Web Store i przypnij je do paska narzędzi.',
  '"Identifier vos séquences Ringmaster"': '"Zidentyfikuj swoje sekwencje Ringmastera"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Spisz swoje kluczowe sekwencje: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep i AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Skonfiguruj rotację sekwencji"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'W Reborn Assistant włącz rotację F2 → 1-9 → 0 → F1 z interwałem 5 minut (typowy czas trwania twoich buffów).',
  '"Programmer le Heal périodique"': '"Zaprogramuj okresowy Heal"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Włącz makro okresowe, aby wyzwalać Heal Rain co 15 sekund w drużynie.',
  '"Lancer l\'automatisation"': '"Uruchom automatyzację"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Wystartuj skrótem CTRL+A, obserwuj log aktywności, dopasuj opóźnienia do animacji swoich sekwencji.',
};

// ─── tools-2026.mjs (PL) ─────────────────────────────────────────────────────
export const toolsPl = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Strona główna</a> › <a href="index.html">Dokumentacja</a> › Najlepsze narzędzia Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'Najlepsze narzędzia i rozszerzenia Flyff Universe w 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Przetestowany i porównany wybór narzędzi, które realnie zmieniają twój gameplay w Flyff Universe: rozszerzenia, tłumacze, kalkulatory, bazy danych.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe to MMORPG, który trzyma się dzięki swojej społeczności: znaczna część użytecznych narzędzi nie pochodzi od wydawcy, ale od samych graczy. Przez 3 miesiące (luty → maj 2026) testowaliśmy najpopularniejsze narzędzia zewnętrzne i wybraliśmy <strong>6 tych, które naprawdę warto sprawdzić</strong>, posortowanych według użyteczności dla regularnego gracza.',

  // Methodology callout
  '📌 Méthodologie': '📌 Metodologia',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Każde narzędzie zostało ocenione według 4 kryteriów: realna użyteczność w codziennej rozgrywce, jakość aktualizacji (nadąża za tempem Flyff Universe), poszanowanie danych użytkownika i łatwość obsługi. Żadnych umów handlowych: tylko Reborn Assistant jest wydawany przez autora tej strony (deklarowana przejrzystość).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Rozszerzenie do automatyzacji Ringmastera',
  '★ Rang I · Notre choix': '★ Miejsce I · Nasz wybór',
  'Version gratuite': 'Wersja darmowa',
  'Premium 2,99€/mois': 'Premium 2,99€/miesiąc',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant to rozszerzenie przeglądarki dedykowane <strong>automatyzacji powtarzalnych czynności</strong> dla graczy Flyff Universe — w szczególności dla klasy Ringmaster, której rotacje buffów są notorycznie męczące. Rozszerzenie symuluje wciśnięcia klawiszy w konfigurowalnych odstępach: rotacja sekwencji co X minut, makro okresowe co 15 sekund dla Heal Rain i do 3 niestandardowych makr.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'Wersja darmowa pokrywa podstawy (auto-heal HP, 6 motywów, 15 języków interfejsu). Wersja Premium odblokowuje pełną rotację, niestandardowe makra i makro okresowe — arsenał, którego oczekuje RM main.',
  '✓ Points forts': '✓ Mocne strony',
  '✗ Points faibles': '✗ Słabe strony',
  '15 langues d\'interface, support international': '15 języków interfejsu, międzynarodowe wsparcie',
  'Données 100% locales (aucun tracking)': 'Dane w 100% lokalne (zero śledzenia)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Konfigurowalne makra, do 3 sekwencji',
  'Mises à jour régulières via Chrome Web Store': 'Regularne aktualizacje przez Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Tylko Chromium (bez Firefoksa)',
  'Premium nécessite compte Google': 'Premium wymaga konta Google',
  '→ Tester Reborn Assistant': '→ Wypróbuj Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Wielojęzyczny tłumacz in-game',
  '★ Rang II': '★ Miejsce II',
  'Gratuit': 'Darmowe',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision rozwiązuje specyficzny problem Flyff Universe: społeczność jest bardzo międzynarodowa (BR, KR, JP, EU) i wielu graczy natrafia na czaty w językach, których nie zna. Reborn Vision to tłumacz in-game, który wykrywa tekst wyświetlany na ekranie i nakłada tłumaczenie w czasie rzeczywistym.',
  'Traduction en temps réel multi-langues': 'Wielojęzyczne tłumaczenie w czasie rzeczywistym',
  '100% gratuit': '100% darmowe',
  'Configuration minimale': 'Minimalna konfiguracja',
  'OCR variable selon les polices': 'OCR zmienne w zależności od czcionek',
  'Consomme un peu de bande passante': 'Zużywa trochę transferu',
  '→ Voir Reborn Vision': '→ Zobacz Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — Referencyjna baza danych',
  '★ Rang III': '★ Miejsce III',
  'Site web': 'Strona internetowa',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia to najbardziej kompletna społecznościowa wiki dla Flyff Universe. Wyszukiwanie przedmiotów po nazwie, dedykowana strona dla każdego moba (dropy, lokalizacja, dawany exp), drzewa questów, informacje o klasach. Niezbędna, gdy utkniesz na queście albo szukasz miejsca farmienia konkretnego przedmiotu.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Aktualizacje społecznościowe, jakość zmienna w zależności od współtwórców, ale ogólnie standard de facto. Obowiązkowa zakładka dla każdego regularnego gracza.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Obliczenia statów i buildów',
  '★ Rang IV': '★ Miejsce IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Kalkulator statów, który uwzględnia twój ekwipunek, jewelry, buffy i daje precyzyjne oszacowanie twojego DPS, przeżywalności albo healing output. Szczególnie przydatny przy zmianie builda lub przy porównywaniu dwóch jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Trochę surowy interfejs, ale solidny wzór matematyczny. Istnieje w kilku wersjach społecznościowych — wybierz najbardziej aktualną.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Społeczność i poradniki strategiczne',
  '★ Rang V': '★ Miejsce V',
  'Site web / Discord': 'Strona / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Nie do końca narzędzie, ale cenne źródło: poradniki buildów per klasa, strategie na bossów, aktualna meta, ekonomia serwera. Treści piszą gracze end-game, co daje perspektywę, której nie znajdziesz w ogólnikowych poradnikach.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Optymalizacja jewelry',
  '★ Rang VI': '★ Miejsce VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Solver, który bierze twój ekwipunek i wylicza optymalną kombinację jewelry maksymalizującą konkretny stat (Atak, HP, Cast Speed itd.). Niszowy, ale piekielnie skuteczny w end-game, gdy każdy % się liczy.',

  // How to choose
  'Comment choisir ?': 'Jak wybrać?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'Powyższa kolejność to nasz subiektywny ranking oparty na częstotliwości użycia przez regularnego gracza. Oto trzy typowe profile, które pomogą ci wybrać:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Dużo farmisz, zwłaszcza jako RM lub Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Priorytet to Reborn Assistant Premium, potem FlyffPedia dla dropów.',
  'Vous jouez avec une guilde internationale': 'Grasz w międzynarodowej gildii',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (tłumacz) + Madrigal Inside (społecznościowy Discord).',
  'Vous êtes end-game et optimisez vos builds': 'Jesteś w end-game i optymalizujesz swoje buildy',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer w połączeniu, plus Reborn Assistant do automatyzacji farmienia materiałów.',

  // Tools to avoid
  'Outils à éviter': 'Narzędzia, których należy unikać',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Nie wszystkie narzędzia reklamowane jako „Flyff Universe" są legalne. Uważaj na programy, które:',
  'Demandent vos identifiants Gala Lab': 'Żądają twoich danych logowania Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'żadne legalne narzędzie nie potrzebuje twojego loginu. To w 100% oszustwa.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Instalują się jako plik wykonywalny .exe Windows',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'bez czytelnej strony prezentacyjnej. Ryzyko keyloggera lub malware\'u.',
  'Promettent du gold gratuit, du level boost ou des items': 'Obiecują darmowe gold, boost levelu lub itemy',
  '. Toujours arnaque ou banwave imminente.': '. Zawsze oszustwo albo nadchodząca banwave.',
  'N\'ont pas de version officielle': 'Nie mają oficjalnej wersji',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'w Chrome Web Store, na GitHubie ani na stronie z jasnymi informacjami prawnymi.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Kryterium, które nie kłamie',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Legalne narzędzie zawsze ma widoczną politykę prywatności, aktywny kanał supportu (Discord, e-mail) oraz wpis w Chrome Web Store lub publiczne repo na GitHubie. Reborn Assistant i Reborn Vision spełniają te 3 warunki.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artykuł zaktualizowany 16 maja 2026.',

  // Common back-link
  '← Retour aux docs': '← Powrót do dokumentacji',
};

// ─── guide-ringmaster (PL) ───────────────────────────────────────────────────
export const guideRmPl = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Strona główna</a> › <a href="index.html">Dokumentacja</a> › Poradnik Ringmastera',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026': 'Ringmaster Flyff Universe — Kompletny poradnik 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Rola, buffy, buildy, ekwipunek, rotacja: wszystko, co musisz wiedzieć, aby grać Ringmasterem w Flyff Universe w 2026, od poziomu 60 aż po end-game.',

  // Section titles
  'Qu\'est-ce qu\'un Ringmaster ?': 'Czym jest Ringmaster?',
  'Le rôle du Ringmaster en groupe': 'Rola Ringmastera w drużynie',
  'Les buffs essentiels du Ringmaster': 'Kluczowe buffy Ringmastera',
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Który wybrać?',
  'Équipement recommandé': 'Polecany ekwipunek',
  'Rotation et gestion du rythme': 'Rotacja i zarządzanie tempem',
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Jaka różnica?',
  'Erreurs courantes de débutant Ringmaster': 'Częste błędy początkujących Ringmasterów',

  // Intro
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong> (RM) to ostateczna ścieżka rozwoju gałęzi Assist w Flyff Universe. To <strong>klasa supportowa gry</strong>: jej główną rolą nie jest zadawanie obrażeń, lecz <em>utrzymywanie drużyny przy życiu i wzmacnianie jej</em> długimi buffami i AOE healem w pętli. Bez Ringmastera drużynie end-game zajmuje dwa-trzy razy więcej czasu, by zaklarować strefę — i znacznie gorzej znosi przypadkowe pulle.',

  'Quelques caractéristiques qui définissent la classe :': 'Kilka cech definiujących tę klasę:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Długie buffy</strong> (od 5 do 30 minut) wzmacniające staty drużyny: atak, obrona, prędkość, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, AOE leczące w czasie wszystkich sojuszników w promieniu ~12-15 m',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> martwego gracza bez kary za utratę doświadczenia',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Bardzo niski własny burst damage</strong> — RM samodzielnie nikogo skutecznie nie ubije',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Niemal zawsze wymaga grania w drużynie</strong> albo posiadania alta do buffowania/leczenia',

  // Roles
  'Trois rôles principaux selon le contexte de jeu :': 'Trzy główne role w zależności od kontekstu gry:',
  'Farm rapide (PvE classique)': 'Szybki farm (klasyczne PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Towarzyszysz jednemu lub kilku DPS-om w miejscu farmienia. Twoje zadanie: rebuff co 5 minut, ciągłe rzucanie Heal Rain, pilnowanie FP. Bardzo powtarzalne — to dokładnie sytuacja, w której automatyzacja nabiera sensu.',
  'Raids & boss': 'Raidy i bossowie',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Bossowie z dużym burst damage typu Glaphan, Bang, Aibatt. Tempo się zmienia: mniej okresowego heala, więcej ręcznych heali burst, czasem Resurrection do przewidzenia. Automatyzacja schodzi tu na drugi plan — musisz zachować kontrolę.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Zorganizowana rywalizacja, ultra-precyzyjna metagra. RM-y nie są już tylko utility: współtworzą zoptymalizowane składy z zsynchronizowanymi czasami buffów. Znanie rotacji na pamięć staje się kluczowe. Automatyzacja może być zabroniona regulaminem turnieju — zawsze sprawdź.',

  // Buffs section
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Oto buffy, które musisz opanować i włączyć do swojej rotacji, posortowane według priorytetu:',
  '★ Priorité absolue · 30 min': '★ Absolutny priorytet · 30 min',
  '★ Priorité haute · 15 min': '★ Wysoki priorytet · 15 min',
  '15 min': '15 min',
  'AOE · ~15 sec': 'AOE · ~15 s',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost STA + ataku dla całej drużyny. Znakowy buff Ringmastera, aktywowany jako pierwszy w rotacji.',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Zwiększa maksymalne HP drużyny. Krytyczny w strefach, gdzie wipe jest możliwy, jeśli ktoś nie ma swojego capa HP.',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Boost INT drużyny. Ogromny dla Mage\'ów, Knightów AOE i Rangerów używających skilli skalujących się magicznie.',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Zwiększa attack speed. Game-changer dla Blade\'ów i Rangerów; mniej krytyczny dla Mage\'ów.',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Boost dodge. Przydatny w strefach, gdzie moby mają dużo szybkich ataków fizycznych.',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'Lecznicze AOE wycentrowane na tobie. Do ponawiania w pętli przez cały farm. Obejmuje wszystkich sojuszników w promieniu 12-15 m.',

  // Build table
  'Deux écoles principales en 2026 :': 'Dwie główne szkoły w 2026:',
  'Critère': 'Kryterium',
  'Build STA Full': 'Build STA Full',
  'Build INT Hybrid': 'Build INT Hybrid',
  '<strong>Stats principaux</strong>': '<strong>Główne staty</strong>',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, minimum INT wymagane do buffów',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, czasem 30/70 zależnie od poziomu',
  '<strong>HP / Survie</strong>': '<strong>HP / Przeżywalność</strong>',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Świetna — ogromny pool, przeżywa przypadkowe pulle',
  'Moyen — exige plus d\'attention du joueur': 'Średnia — wymaga większej uwagi gracza',
  '<strong>Puissance des heals</strong>': '<strong>Siła heali</strong>',
  'Correct — suffit pour la plupart des situations': 'Poprawna — wystarcza w większości sytuacji',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Świetna — Heal Rain i inne heale mocno skalują się z INT',
  '<strong>FP pool</strong>': '<strong>Pool FP</strong>',
  'Faible — nécessite plus de potions': 'Niski — wymaga więcej mikstur',
  'Élevé — gestion FP plus confortable': 'Wysoki — wygodniejsze zarządzanie FP',
  '<strong>Recommandé pour</strong>': '<strong>Polecane dla</strong>',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Początkujący gracze, mało ryzykowny farm, RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Doświadczeni gracze, trudne raidy, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'Build STA Full jest nadal najbardziej wybaczający i najczęściej grany. Build INT Hybrid jest bardziej wymagający, ale wynagradza znacząco wyższym heal output — must have w treściach kompetytywnych.',

  // Equipment
  'Armes': 'Bronie',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (kostur)</strong> — najlepsze skalowanie INT, polecany do builda INT Hybrid',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (laska)</strong> — zbalansowany, wszechstronny',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (tarcza)</strong> w off-handzie — przyrost defense, mocno polecany w STA Full',
  'Armure': 'Zbroja',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>Set jewelry STA</strong> dla builda STA Full (Tinerbol, Lord itp. zależnie od poziomu)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>Set jewelry INT</strong> albo hybryda STA/INT dla builda Hybrid',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Zawsze stawiaj na pełny set</strong> dla bonusu 2/4/6 części',
  'Bijoux (jewelry)': 'Biżuteria (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Optymalizacja biżuterii to miejsce, w którym RM przechodzi z poprawnego do doskonałego. Użyj kalkulatora (zobacz <a href="meilleurs-outils-flyff-universe-2026.html">nasze porównanie narzędzi</a>), by zidentyfikować kombinację maksymalizującą twój priorytetowy stat na danym poziomie.',

  // Rotation
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Skuteczna rotacja w klasycznym farmie sprowadza się do 3 timingów:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Co 5 minut</strong> — pełny rebuff drużyny (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Co 12-15 sekund</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Ciągle</strong> — kontrola indywidualnych HP pod awaryjne heale burst',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Pierwsze dwa timingi są mechaniczne i idealnie nadają się do <strong>automatyzacji</strong>. Trzeci wymaga twojej ludzkiej uwagi. To kluczowy kompromis nowoczesnego Ringmastera: zautomatyzować to, co powtarzalne, aby <strong>zachować energię na decydujące momenty</strong>.',

  // Callout
  '💡 Tutoriel pratique disponible': '💡 Dostępny praktyczny poradnik',

  // Mentalist comparison
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Dwie klasy gałęzi Assist, często mylone przez początkujących:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, niski własny damage, niezbędny w drużynie, mało skuteczny w solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = orientacja na magiczny DPS, potrafi farmić solo, traci część długich buffów RM-a',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Jeśli zamierzasz grać w drużynie, w FWC albo być „filarem" gildii → Ringmaster. Jeśli chcesz klasy Assist bardziej samodzielnej w solo → Mentalist.',

  // Common errors
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Brak regularnego rebuffu</strong> — brakujący buff po 5 minutach kosztuje czasem więcej niż całe życie DPS-a',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Ruszanie się podczas Heal Rain</strong> — AOE nie podąża, sojusznicy wychodzą z promienia',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Zbyt wczesny build full INT</strong> — bez wystarczającego poolu HP umrzesz, zanim zdążysz rzucić Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Ignorowanie mikstur FP</strong> — RM bez FP to bezużyteczny RM',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Próby DPS-owania</strong> — tracisz czas, który lepiej zainwestować w heale i buffy',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Zoptymalizuj swojego Ringmastera z Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Rozszerzenie premium do automatyzacji rotacji buffów, okresowego Heal Rain i twoich niestandardowych makr. 7 dni darmowego okresu próbnego bez karty kredytowej.',
  'Installer Reborn Assistant': 'Zainstaluj Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Poradnik zaktualizowany 16 maja 2026 — Flyff Universe (Gala Lab).',

  // Common back-link
  '← Retour aux docs': '← Powrót do dokumentacji',
};
