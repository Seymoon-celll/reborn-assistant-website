/**
 * Russian (ru) translations for the three SEO long-tail pages.
 *
 *   - automateRmRu : docs/automatiser-ringmaster-flyff-universe.html
 *   - toolsRu      : docs/meilleurs-outils-flyff-universe-2026.html
 *   - guideRmRu    : docs/guide-ringmaster-flyff-universe.html
 *
 * Keys = exact French source phrases (must match HTML byte-for-byte).
 * Values = natural Russian rendering for Flyff Universe gamers.
 *
 * Untranslated brand / gameplay terms kept as-is:
 *   Flyff Universe, Ringmaster, RM, HoP, Beef Up, Heart of Power, Mental Sign,
 *   Speed Pep, Cat's Reflex, Heal Rain, FP, HP, AOE, MP, INT, STA, DPS, GCD,
 *   MMORPG, FWC, AFK, OCR, JWT, BR, KR, JP, EU, DevTools, CTRL+A, CTRL+O,
 *   Reborn Assistant, Reborn Vision, Premium, FlyffPedia, Madrigal Inside,
 *   FlyffOptimizer, Chrome Web Store, Google Cloud, Gala Lab, Stripe,
 *   Glaphan, Asteria.
 */

// ─── docs/automatiser-ringmaster-flyff-universe.html ─────────────────────────
export const automateRmRu = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Главная</a> › <a href="index.html">Документация</a> › Автоматизация Ringmaster',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Автоматизация Ringmaster в Flyff Universe — полный гайд 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Баффы, последовательности, AOE-хил, контроль HP/FP: пошаговое руководство, чтобы превратить Ringmaster в опору пати, не убивая пальцы.',

  // TOC
  '◆ Sommaire': '◆ Содержание',
  'Pourquoi automatiser son Ringmaster': 'Зачем автоматизировать Ringmaster',
  'Prérequis avant d\'automatiser': 'Что нужно подготовить заранее',
  'Identifier vos séquences Ringmaster': 'Определите свои Ringmaster-последовательности',
  'Configurer la rotation de buffs': 'Настройте ротацию баффов',
  'Programmer le Heal périodique': 'Настройте периодический Heal',
  'Macros personnalisées (DPS, support, urgence)': 'Пользовательские макросы (DPS, поддержка, экстренные)',
  'Optimisation et erreurs courantes': 'Оптимизация и типичные ошибки',
  'Aspect légal — ce qu\'il faut savoir': 'Юридический аспект — что нужно знать',

  // Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster (часто пишут просто <strong>RM</strong>) — это знаковый саппорт-класс Flyff Universe. Его задача предельно ясна: держать пати живой за счёт баффов (Heart of Power, Beef Up, Mental Sign…), которые длятся от 5 до 30 минут в зависимости от уровня, и закрывать урон через AOE-хил Heal Rain. На бумаге всё просто. На практике это один из самых выматывающих классов на долгом фарме: 80% времени вы <strong>перебафливаете пати каждые 5 минут</strong>, <strong>перезапускаете Heal Rain каждые 10-15 секунд</strong> и <strong>следите за полосами FP</strong> каждого члена группы.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Автоматизация не подменяет вашу голову. Она снимает с клавиатуры механическую рутину: полную ротацию баффов, периодический хил, использование FP-зелий. Руки остаются свободными для <strong>моментов, когда это реально важно</strong>: надвигающийся вайп, волна, выходящая из-под контроля, босс, который первым делом снимает RM.',
  '💡 Cas d\'usage typique': '💡 Типичный сценарий',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Вы запускаете 4-часовой фарм на Glaphan или Asteria. Без автоматизации: 240 минут ÷ 5 минут = 48 ручных циклов баффов. С настроенным Reborn Assistant: 1 цикл, всё остальное крутится в фоне. Вы возвращаетесь к управлению только если меняется состав или кто-то умирает.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Перед тем как что-то включать, заложите крепкий фундамент:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> установлен (в бесплатной версии работает только базовый хил-макрос). Смотрите <a href="quickstart.html">гайд по установке</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Баффы Ringmaster развешаны по клавишам F2 → 0</strong> в логическом порядке (Heart of Power первым, AOE-баффы следом, single-target в конце).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain на клавише § (или другой выделенной)</strong> — именно её Reborn Assistant будет жать по кругу.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Стопка FP-зелий</strong> в инвентаре — автоматизация ресурсы из воздуха не достанет.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Стабильная зона фарма</strong>: избегайте локаций с принудительной телепортацией или мобов с откидыванием (это сбивает позиционирование и ломает AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Не все скиллы равноценны. Вот типичная иерархия для билда RM full support:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Базовые скиллы (ротация раз в 5 минут)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — буст STA + атаки, обязательный',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — фиксированная STA, поднимает максимум HP пати',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + магический буст для магов и AOE-найтов',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — скорость атаки, огромный профит для Blade и Ranger',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, полезен в опасных зонах',
  'Séquences situationnelles (à activer manuellement)': 'Ситуативные скиллы (включать вручную)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — никогда не в авторежиме, только по ситуации',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — бонус к стихийному урону, опционально по контексту',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Это сердце системы. Reborn Assistant может нажимать фиксированную последовательность <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> через равные интервалы. Вот как привязать её к вашему RM:',
  'Préparer vos slots de séquences': 'Подготовьте слоты скиллов',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Перетащите скиллы из панели скиллов в хоткей-бар Flyff в следующем порядке:',
  'Touche 1 → Heart of Power': 'Клавиша 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Клавиша 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Клавиша 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Клавиша 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Клавиша 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Клавиши 6-0 → другие доступные баффы или пусто',
  'Activer la rotation dans Reborn Assistant': 'Включите ротацию в Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'В панели Reborn, вкладка Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Включите переключатель <strong>«Ротация скиллов»</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Задайте <strong>интервал между циклами</strong> по длительности самого короткого баффа (обычно 5 минут)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Задайте <strong>задержку между клавишами</strong> в 1 секунду (даёт время отыграть анимации скиллов)',
  'Tester un cycle complet': 'Протестируйте полный цикл',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Запустите через <code>CTRL+A</code>. Следите за логом активности: вы должны видеть <em>F2 pressed → 1 pressed → 2 pressed…</em> последовательно, с интервалом ~1 секунда. Если какой-то скилл не срабатывает — скорее всего, это кулдаун или нехватка FP. Проверьте визуально в игре.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain должен крутиться параллельно с ротацией баффов. Reborn Assistant предлагает периодический макрос с фиксированным интервалом 15 секунд, идеально откалиброванный под AOE-зону Heal Rain (она держится около 12-15 секунд).',
  'Assigner Heal Rain à la touche §': 'Назначьте Heal Rain на клавишу §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'По умолчанию периодический макрос Reborn Assistant нажимает клавишу <code>§</code>. Перетащите Heal Rain на эту клавишу в Flyff.',
  'Activer la macro périodique': 'Включите периодический макрос',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Переключатель <strong>«Периодический макрос»</strong> в панели Premium. Система будет вызывать Heal Rain каждые 15 секунд, с автоматическим запоминанием состояния.',
  '⚠️ Attention au positionnement': '⚠️ Следите за позиционированием',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain — это AOE, центрированный на вас. Если вы постоянно двигаетесь (кайт или перестановки), ваш Heal Rain не накроет DPS. Стойте на месте или назначьте фиксированную точку сбора для пати.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Помимо ротации и хила, Reborn Assistant Premium даёт <strong>3 независимых макроса</strong>. Вот как выжать из них максимум для Ringmaster:',
  'Macro 1 — Pet feeding': 'Макрос 1 — Кормление пета',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Если у вас есть пет, которого нужно регулярно кормить, настройте последовательность вроде <code>k,h</code> (клавиша панели пета + лечение пета) каждые 30 секунд. Пет не сдохнет, пока вы фармите.',
  'Macro 2 — Stack de FP potions': 'Макрос 2 — Стак FP-зелий',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Настройте последовательность типа <code>y</code> (клавиша FP-зелья) каждые 20 секунд, чтобы держать FP выше 80%. Подгоняйте по своему расходу и частоте Heal Rain.',
  'Macro 3 — Anti-AFK': 'Макрос 3 — Анти-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Последовательность вида <code>up,down</code> или <code>space</code> каждые 4-5 минут спасает от AFK-дисконнекта в спокойные моменты долгого фарма. Использовать с умом.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Слишком короткая задержка между клавишами</strong> — если скиллы проскакивают, поднимите задержку до 1,5 или 2 секунд. Лучше чуть более медленный цикл, который отрабатывает на 100%.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Не превышайте глобальный кулдаун</strong> — в Flyff есть GCD (global cooldown). Если спамить слишком быстро, скиллы уходят в никуда. Дефолтная задержка в 1 с укладывается в этот GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP кончается посреди цикла</strong> — ротация молча останавливается. Включите макрос на FP-зелья или подкачайте INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Союзники вне зоны AOE</strong> — периодический хил лечит только игроков в радиусе Heal Rain (~12-15 м). Договоритесь с пати: они должны держаться в зоне.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Цель потеряна после смерти моба</strong> — для RM это не критично, но следите за таргетами, если в ротации есть single-target скиллы.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Автоматизация повторяющихся действий через расширение <strong>может нарушать условия использования</strong> некоторых игровых сервисов, в том числе Gala Lab для Flyff Universe. Reborn Assistant <strong>не читает память игры, не отправляет сетевые пакеты, не модифицирует клиент</strong>: это строго симуляция клавиш, которые вы могли бы нажимать вручную. Ответственность за использование на 100% остаётся за вами.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Чтобы точно понимать, что Reborn Assistant делает (и чего не делает) технически, загляните в <a href="../index.html#faq">FAQ на главной странице</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Готовы развязать руки своему Ringmaster?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Установите Reborn Assistant за 30 секунд из Chrome Web Store. 7 дней Premium-пробника бесплатно, без привязки карты.',
  'Installer Reborn Assistant': 'Установить Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Связанная статья',
  '◆ Documentation': '◆ Документация',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Лучшие инструменты и расширения для Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Полный гайд по классу Ringmaster в Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Полный гайд по возможностям Premium',

  // Common
  '← Retour aux docs': '← Назад к документации',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Установить Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Добавьте расширение Reborn Assistant из Chrome Web Store и закрепите его на панели инструментов.',
  '"Identifier vos séquences Ringmaster"': '"Определить свои Ringmaster-последовательности"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Перечислите ключевые скиллы: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep и AOE-хил (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Настроить ротацию скиллов"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'В Reborn Assistant включите ротацию F2 → 1-9 → 0 → F1 с интервалом 5 минут (типичная длительность ваших баффов).',
  '"Programmer le Heal périodique"': '"Настроить периодический Heal"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Включите периодический макрос, чтобы Heal Rain срабатывал каждые 15 секунд в пати.',
  '"Lancer l\'automatisation"': '"Запустить автоматизацию"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Запустите через CTRL+A, следите за логом активности, подгоняйте задержки под анимации своих скиллов.',
};

// ─── docs/meilleurs-outils-flyff-universe-2026.html ──────────────────────────
export const toolsRu = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Главная</a> › <a href="index.html">Документация</a> › Лучшие инструменты Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'Лучшие инструменты и расширения для Flyff Universe в 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Проверенная и сравнённая подборка инструментов, которые реально меняют ваш геймплей в Flyff Universe: расширения, переводчики, калькуляторы, базы данных.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe — это MMORPG, который держится на своём сообществе: значительная часть полезных инструментов сделана не издателем, а самими игроками. Мы тестировали 3 месяца (февраль → май 2026) самые популярные сторонние инструменты и отобрали <strong>6 действительно стоящих</strong>, отсортированных по полезности для регулярного игрока.',

  // Methodology callout
  '📌 Méthodologie': '📌 Методология',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Каждый инструмент оценивался по 4 критериям: реальная польза в ежедневной игре, качество обновлений (поспевает за Flyff Universe), уважение к пользовательским данным и удобство использования. Никаких коммерческих партнёрств: только Reborn Assistant выпускается автором этого сайта (прозрачность открыто заявлена).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — расширение для автоматизации Ringmaster',
  '★ Rang I · Notre choix': '★ Ранг I · Наш выбор',
  'Version gratuite': 'Бесплатная версия',
  'Premium 2,99€/mois': 'Premium 2,99€/месяц',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant — это браузерное расширение для <strong>автоматизации повторяющихся действий</strong> игроков Flyff Universe, особенно класса Ringmaster, ротации баффов которого общеизвестно изматывают. Расширение симулирует нажатия клавиш с настраиваемыми интервалами: ротация скиллов раз в X минут, периодический макрос каждые 15 секунд для Heal Rain и до 3 настраиваемых пользовательских макросов.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'Бесплатная версия закрывает базу (авто-хил HP, 6 тем, 15 языков интерфейса). Версия Premium открывает полную ротацию, пользовательские макросы и периодический макрос — арсенал, которого ждёт каждый RM-мейн.',
  '✓ Points forts': '✓ Сильные стороны',
  '✗ Points faibles': '✗ Слабые стороны',
  '15 langues d\'interface, support international': '15 языков интерфейса, международная поддержка',
  'Données 100% locales (aucun tracking)': 'Данные на 100% локальны (никакого трекинга)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Настраиваемые макросы — до 3 последовательностей',
  'Mises à jour régulières via Chrome Web Store': 'Регулярные обновления через Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Только Chromium (без Firefox)',
  'Premium nécessite compte Google': 'Premium требует аккаунт Google',
  '→ Tester Reborn Assistant': '→ Попробовать Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — внутриигровой мультиязычный переводчик',
  '★ Rang II': '★ Ранг II',
  'Gratuit': 'Бесплатно',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision решает специфическую для Flyff Universe проблему: коммьюнити крайне международное (BR, KR, JP, EU), и многие игроки сталкиваются с чатом на языках, которыми не владеют. Reborn Vision — это внутриигровой переводчик, который распознаёт текст на экране и выдаёт перевод в виде оверлея в реальном времени.',
  'Traduction en temps réel multi-langues': 'Перевод в реальном времени на несколько языков',
  '100% gratuit': '100% бесплатно',
  'Configuration minimale': 'Минимальная настройка',
  'OCR variable selon les polices': 'Качество OCR зависит от шрифтов',
  'Consomme un peu de bande passante': 'Расходует немного трафика',
  '→ Voir Reborn Vision': '→ Посмотреть Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — эталонная база данных',
  '★ Rang III': '★ Ранг III',
  'Site web': 'Сайт',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia — самая полная вики-энциклопедия от коммьюнити по Flyff Universe. Поиск предметов по названию, отдельная страница на каждого моба (дроп, локация, выдаваемый опыт), деревья квестов, информация по классам. Незаменимо, когда вы застряли на квесте или ищете, где фармить конкретный предмет.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Обновления силами сообщества, качество местами разное, но в целом это де-факто стандарт. Обязательная закладка для любого регулярного игрока.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — расчёт статов и билдов',
  '★ Rang IV': '★ Ранг IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Калькулятор статов, который учитывает ваш шмот, jewelry, баффы и выдаёт точную оценку вашего DPS, выживаемости или healing output. Особенно полезен при смене билда или сравнении двух комплектов jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Интерфейс суховат, но математика крепкая. Существует в нескольких версиях от коммьюнити — выбирайте самую свежую.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — комьюнити и стратегические гайды',
  '★ Rang V': '★ Ранг V',
  'Site web / Discord': 'Сайт / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Не инструмент в строгом смысле, но крайне ценный ресурс: гайды по билдам каждого класса, стратегии на боссов, актуальная мета, экономика сервера. Контент пишут end-game игроки, что даёт ракурс, которого нет в общих гайдах.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — оптимизация jewelry',
  '★ Rang VI': '★ Ранг VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Солвер, который берёт ваш шмот и считает оптимальную комбинацию jewelry для максимизации конкретного стата (Атака, HP, Cast Speed и т.д.). Нишевой, но беспощадно эффективный в end-game, когда каждый процент на счету.',

  // How to choose
  'Comment choisir ?': 'Как выбрать?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'Порядок выше — это наш субъективный рейтинг по частоте полезности для регулярного игрока. Вот три типичных профиля, чтобы сориентироваться:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Вы много фармите, особенно за RM или Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium в первую очередь, затем FlyffPedia для дропа.',
  'Vous jouez avec une guilde internationale': 'Вы играете в международной гильдии',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (переводчик) + Madrigal Inside (Discord коммьюнити).',
  'Vous êtes end-game et optimisez vos builds': 'Вы в end-game и оптимизируете билды',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer в связке, плюс Reborn Assistant для автоматизации фарма материалов.',

  // Tools to avoid
  'Outils à éviter': 'Чего стоит избегать',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Не все инструменты, продвигаемые под брендом «Flyff Universe», легитимны. Опасайтесь программ, которые:',
  'Demandent vos identifiants Gala Lab': 'Просят ваши данные от Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'ни одному легитимному инструменту не нужен ваш логин. Это 100% развод.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Ставятся как Windows-исполняемый файл .exe',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'без внятной страницы-визитки. Риск кейлоггера или малвари.',
  'Promettent du gold gratuit, du level boost ou des items': 'Обещают бесплатный gold, прокачку уровня или предметы',
  '. Toujours arnaque ou banwave imminente.': '. Всегда скам или скорый бан-волна.',
  'N\'ont pas de version officielle': 'Не имеют официальной версии',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'в Chrome Web Store, на GitHub или на сайте с понятными юридическими реквизитами.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Критерий, который не врёт',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'У легитимного инструмента всегда есть видимая политика конфиденциальности, активный канал поддержки (Discord, email) и страница в Chrome Web Store или публичный репозиторий на GitHub. Reborn Assistant и Reborn Vision проставляют все 3 галочки.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Статья обновлена 16 мая 2026.',

  // Common
  '← Retour aux docs': '← Назад к документации',
};

// ─── docs/guide-ringmaster-flyff-universe.html ───────────────────────────────
export const guideRmRu = {
  // <title> + meta
  'Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)':
    'Ringmaster Flyff Universe — полный гайд 2026 (билд, баффы, роль)',
  'Guide complet du Ringmaster sur Flyff Universe : rôle, buffs essentiels, builds STA/INT, équipement, rotation, automatisation. Tout pour maîtriser la classe support.':
    'Полный гайд по Ringmaster в Flyff Universe: роль, ключевые баффы, билды STA/INT, экипировка, ротация, автоматизация. Всё для освоения саппорт-класса.',
  'Ringmaster guide, RM Flyff Universe, classe support Flyff, build Ringmaster, buffs RM, Mentalist vs Ringmaster, FWC RM':
    'Ringmaster гайд, RM Flyff Universe, саппорт-класс Flyff, билд Ringmaster, баффы RM, Mentalist vs Ringmaster, FWC RM',
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — полный гайд 2026',
  'Rôle, buffs essentiels, builds, équipement et automatisation : tout pour maîtriser le Ringmaster sur Flyff Universe.':
    'Роль, ключевые баффы, билды, экипировка и автоматизация: всё для освоения Ringmaster в Flyff Universe.',
  'Rôle, buffs, builds et équipement : maîtriser le Ringmaster sur Flyff Universe.':
    'Роль, баффы, билды и экипировка: освоить Ringmaster в Flyff Universe.',

  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Главная</a> › <a href="index.html">Документация</a> › Гайд Ringmaster',

  // Subtitle
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Роль, баффы, билды, экипировка, ротация: всё, что нужно знать, чтобы играть Ringmaster в Flyff Universe в 2026 — от 60-го уровня и до end-game.',

  // H2: Qu'est-ce qu'un Ringmaster ?
  'Qu\'est-ce qu\'un Ringmaster ?': 'Кто такой Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong> (RM) — это финальная ступень ветки Assist в Flyff Universe. Это <strong>главный саппорт-класс игры</strong>: его задача не наносить урон, а <em>держать пати живой и делать её сильнее</em> через долгие баффы и зацикленный AOE-хил. Без Ringmaster end-game пати тратит в 2-3 раза больше времени на зачистку зоны и куда хуже переживает случайные пулы.',
  'Quelques caractéristiques qui définissent la classe :': 'Несколько ключевых характеристик класса:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Долгие баффы</strong> (от 5 до 30 минут), которые качают статы пати: атака, защита, скорость, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong> — AOE, который лечит всех союзников в радиусе ~12-15 м на протяжении длительности',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Воскрешение</strong> погибшего игрока без потери опыта',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Крайне слабый личный burst damage</strong> — RM в одиночку никого толком не убивает',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Почти всегда требует быть в пати</strong> или иметь альта под баффы/хил',

  // H2: Rôle en groupe
  'Le rôle du Ringmaster en groupe': 'Роль Ringmaster в пати',
  'Trois rôles principaux selon le contexte de jeu :': 'Три основные роли в зависимости от контекста игры:',
  'Farm rapide (PvE classique)': 'Быстрый фарм (классический PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Вы сопровождаете одного или нескольких DPS на фарм-споте. Ваша работа: перебафливать каждые 5 минут, держать Heal Rain в непрерывном режиме, следить за FP. Очень рутинно — именно та ситуация, где автоматизация раскрывается на полную.',
  'Raids & boss': 'Рейды и боссы',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Боссы с большим burst damage вроде Glaphan, Bang, Aibatt. Ритм меняется: меньше периодического хила, больше ручных burst-хилов, иногда нужно заранее держать Resurrection. Автоматизация отходит на второй план — нужно держать управление в руках.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Официальные соревнования, мета выверена до мелочей. RM здесь уже не просто утилити-сервис: он часть оптимизированных составов с синхронными таймингами баффов. Знание ротаций наизусть становится критичным. Автоматизация может быть запрещена правилами турнира — всегда проверяйте.',

  // H2: Buffs essentiels
  'Les buffs essentiels du Ringmaster': 'Ключевые баффы Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Вот баффы, которые нужно освоить и включить в ротацию, отсортированы по приоритету:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ Абсолютный приоритет · 30 мин',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Буст STA + атаки на всю пати. Фирменный бафф Ringmaster, поднимать первым в ротации.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ Высокий приоритет · 15 мин',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Поднимает максимум HP пати. Критично в зонах, где возможен вайп, если у кого-то не выкручен HP-кап.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Буст INT пати. Огромный плюс для магов, AOE-найтов и Ranger, использующих скиллы с магическим скейлом.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 мин',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Поднимает attack speed. Game-changer для Blade и Ranger; для магов менее критичен.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Буст dodge. Полезен в зонах, где мобы часто и быстро бьют физикой.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 сек',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'AOE-хил с центром на вас. Перезапускать в цикле в течение всего фарма. Накрывает всех союзников в радиусе 12-15 м.',

  // H2: Build STA vs INT
  'Build STA vs INT — Quel build choisir ?': 'Билд STA против INT — какой выбрать?',
  'Deux écoles principales en 2026 :': 'В 2026 году существуют две основные школы:',
  'Critère': 'Критерий',
  'Build STA Full': 'Билд Full STA',
  'Build INT Hybrid': 'Билд INT Hybrid',
  '<strong>Stats principaux</strong>': '<strong>Основные статы</strong>',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, минимум INT для работы баффов',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, иногда 30/70 в зависимости от уровня',
  '<strong>HP / Survie</strong>': '<strong>HP / Выживаемость</strong>',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Отлично — огромный пул, переживает случайные пулы',
  'Moyen — exige plus d\'attention du joueur': 'Средне — требует больше внимания игрока',
  '<strong>Puissance des heals</strong>': '<strong>Сила хилов</strong>',
  'Correct — suffit pour la plupart des situations': 'Норм — хватает в большинстве ситуаций',
  'Excellent — Heal Rain et autres heals scalent fort sur INT':
    'Отлично — Heal Rain и другие хилы сильно скейлятся от INT',
  '<strong>FP pool</strong>': '<strong>Пул FP</strong>',
  'Faible — nécessite plus de potions': 'Низкий — нужно больше зелий',
  'Élevé — gestion FP plus confortable': 'Высокий — управлять FP заметно комфортнее',
  '<strong>Recommandé pour</strong>': '<strong>Рекомендован для</strong>',
  'Joueurs débutants, farm peu dangereux, RM solo-utility':
    'Новичков, безопасного фарма, RM как solo-утилити',
  'Joueurs expérimentés, raids difficiles, FWC, end-game':
    'Опытных игроков, сложных рейдов, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'Билд Full STA остаётся самым прощающим и самым популярным. INT Hybrid требовательнее, но окупается заметно более высоким heal output — must для соревновательного контента.',

  // H2: Équipement
  'Équipement recommandé': 'Рекомендуемая экипировка',
  'Armes': 'Оружие',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (посох)</strong> — лучший скейл от INT, рекомендуется для билда INT Hybrid',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (трость)</strong> — сбалансированный, универсальный',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (щит)</strong> в off-hand — прирост защиты, настоятельно рекомендуется для Full STA',
  'Armure': 'Броня',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>Сет jewelry STA</strong> для билда Full STA (Tinerbol, Lord и т.д. по уровню)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>Сет jewelry INT</strong> или гибрид STA/INT для билда Hybrid',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Всегда отдавайте предпочтение полному сету</strong> ради бонуса 2/4/6 предметов',
  'Bijoux (jewelry)': 'Украшения (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Оптимизация украшений — это место, где RM переходит из «нормально» в «отлично». Используйте калькулятор (см. <a href="meilleurs-outils-flyff-universe-2026.html">наш обзор инструментов</a>), чтобы найти комбинацию, максимизирующую приоритетный стат под ваш уровень.',

  // H2: Rotation
  'Rotation et gestion du rythme': 'Ротация и управление темпом',
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Эффективная ротация в классическом фарме держится на 3 таймингах:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Каждые 5 минут</strong> — полный ребафф пати (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Каждые 12-15 секунд</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Непрерывно</strong> — слежка за индивидуальными HP для экстренных burst-хилов',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Первые два тайминга механические и идеально подходят под <strong>автоматизацию</strong>. Третий требует вашего человеческого внимания. Это ключевой компромисс современного Ringmaster: автоматизировать рутину, чтобы <strong>сохранить энергию для решающих моментов</strong>.',
  '<strong>💡 Tutoriel pratique disponible</strong>': '<strong>💡 Доступен практический туториал</strong>',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Мы написали <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">пошаговый туториал по автоматизации Ringmaster</a> через Reborn Assistant: настройка ротаций, интервал между циклами, макрос Heal Rain и типичные ошибки.',

  // H2: RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — в чём разница?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Два класса ветки Assist, которые новички часто путают:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, низкий личный урон, незаменим в пати, малоэффективен в соло',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = ориентация на магический DPS, может фармить в соло, теряет часть долгих баффов RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Если ваша цель — играть в пати, идти в FWC или быть «опорой» гильдии → Ringmaster. Если хотите более автономный Assist-класс для соло → Mentalist.',

  // H2: Erreurs courantes
  'Erreurs courantes de débutant Ringmaster': 'Типичные ошибки новичка Ringmaster',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Не перебафливать вовремя</strong> — отвалившийся через 5 минут бафф порой стоит дороже всей жизни DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Двигаться во время Heal Rain</strong> — AOE не следует за вами, союзники вылетают из радиуса',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Слишком ранний билд full INT</strong> — без достаточного пула HP вы умрёте раньше, чем успеете запустить Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Игнорировать FP-зелья</strong> — RM без FP — это бесполезный RM',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Пытаться выступать в роли DPS</strong> — вы теряете время, которое стоило вложить в хил и баффы',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Прокачайте Ringmaster с Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Premium-расширение для автоматизации ротации баффов, периодического Heal Rain и пользовательских макросов. 7 дней пробника бесплатно, без привязки карты.',
  'Installer Reborn Assistant': 'Установить Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Гайд обновлён 16 мая 2026 — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← Назад к документации',
};
