/**
 * Chinese simplified (zh-CN) translations for SEO long-tail pages.
 * - docs/automatiser-ringmaster-flyff-universe.html  → automateRmZh
 * - docs/meilleurs-outils-flyff-universe-2026.html   → toolsZh
 * - docs/guide-ringmaster-flyff-universe.html        → guideRmZh
 *
 * Rules:
 *  - Inline HTML tags kept verbatim
 *  - Untranslated terms: Flyff Universe, Ringmaster, RM, HoP, Beef Up,
 *    Heart of Power, Mental Sign, Speed Pep, Cat's Reflex, Heal Rain,
 *    FP, HP, AOE, MP, Reborn Assistant, Reborn Vision, Premium, FlyffPedia,
 *    Madrigal Inside, FlyffOptimizer, Chrome Web Store, Google Cloud,
 *    Gala Lab, Stripe, Glaphan, Asteria, AFK, GCD, DPS, INT, STA, MMORPG,
 *    FWC, DevTools, CTRL+A, CTRL+O, OCR, JWT
 *  - Tone: natural mainland Chinese gamer voice
 */

// ─── automate-ringmaster ────────────────────────────────────────────────────
export const automateRmZh = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">首页</a> › <a href="index.html">文档</a> › Ringmaster 自动化',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Flyff Universe 上 Ringmaster 自动化 — 2026 完整指南',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buff、技能序列、AOE 治疗、HP/FP 管理:一步步教你把 Ringmaster 打造成队伍核心,而不会让手酸到崩溃。',

  // TOC
  '◆ Sommaire': '◆ 目录',
  'Pourquoi automatiser son Ringmaster': '为什么要自动化 Ringmaster',
  'Prérequis avant d\'automatiser': '自动化之前的准备',
  'Identifier vos séquences Ringmaster': '识别你的 Ringmaster 技能序列',
  'Configurer la rotation de buffs': '配置 buff 轮换',
  'Programmer le Heal périodique': '设置周期性治疗',
  'Macros personnalisées (DPS, support, urgence)': '自定义宏(DPS、辅助、应急)',
  'Optimisation et erreurs courantes': '优化与常见错误',
  'Aspect légal — ce qu\'il faut savoir': '合法性 — 你需要知道的事',

  // Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster(常缩写为 <strong>RM</strong>)是 Flyff Universe 标志性的辅助职业。它的定位很清楚:用 buff(Heart of Power、Beef Up、Mental Sign…)让队伍活下来,这些 buff 根据等级持续 5 到 30 分钟,再用 Heal Rain 的 AOE 治疗回血。纸面上很简单,实战中却是长时间刷怪最累的职业之一:你 80% 的时间都花在 <strong>每 5 分钟重新上 buff</strong>、<strong>每 10-15 秒重新放一次 Heal Rain</strong>、还要 <strong>盯着队伍每个成员的 FP 条</strong>。',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    '自动化不会替你做判断,它只是把键盘上的机械操作接管过去:完整的重新 buff 序列、周期性治疗、嗑 FP 药。你的双手可以解放出来,专心应对 <strong>真正关键的时刻</strong>:即将团灭、一波怪失控、Boss 第一时间锁定 RM。',
  '💡 Cas d\'usage typique': '💡 典型使用场景',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    '你在 Glaphan 或 Asteria 准备刷 4 小时。不开自动化:240 分钟 ÷ 5 分钟 = 48 次手动重 buff。配好 Reborn Assistant:配置 1 次,其余全部后台跑。只有队伍构成变了或者有人倒下时,你才需要接手。',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    '在启用任何功能之前,先把基础打牢:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '已安装 <strong>Reborn Assistant Premium</strong>(免费版只覆盖基础治疗宏)。参考 <a href="quickstart.html">安装指南</a>。',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>把 Ringmaster 的 buff 按逻辑顺序分配到 F2 → 0 键</strong>(Heart of Power 先放,然后是 AOE buff,最后是单体 buff)。',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>把 Heal Rain 放到 § 键(或其他专用键)</strong> — 这就是 Reborn Assistant 循环触发的按键。',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>背包里备一摞 FP 药</strong> — 自动化不会凭空变出资源。',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>选稳定的刷怪点</strong>:避开有强制传送或会击退玩家的怪的区域(位置一乱 AOE 就报废)。',

  // Séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    '不是所有技能序列都同等重要。下面是纯辅助 RM 配装的典型优先级:',
  'Séquences essentielles (rotation toutes les 5 min)': '核心技能序列(每 5 分钟轮换)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — 提升 STA + 攻击,必带',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — 固定 STA 加成,提升全队最大 HP',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + 魔法加成,Mages / AOE Knights 必备',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — 攻速,Blades / Rangers 收益拉满',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — 闪避,难度高的图很有用',
  'Séquences situationnelles (à activer manuellement)': '情境技能序列(手动触发)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — 永远别自动化,看情况手放',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — 元素伤害加成,看情况选用',

  // Rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    '这是整套系统的核心。Reborn Assistant 可以按固定间隔执行 <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> 的按键序列。下面教你怎么对齐你的 RM:',
  'Préparer vos slots de séquences': '准备你的技能槽位',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    '按以下顺序把技能从技能栏拖到 Flyff 快捷栏:',
  'Touche 1 → Heart of Power': '1 键 → Heart of Power',
  'Touche 2 → Beef Up': '2 键 → Beef Up',
  'Touche 3 → Mental Sign': '3 键 → Mental Sign',
  'Touche 4 → Speed Pep': '4 键 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': '5 键 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    '6 到 0 键 → 其他可用 buff 或留空',
  'Activer la rotation dans Reborn Assistant': '在 Reborn Assistant 中开启轮换',
  'Dans le panneau Reborn, onglet Premium :': '在 Reborn 面板的 Premium 选项卡中:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    '打开 <strong>「技能轮换」</strong> 开关',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    '把 <strong>循环间隔</strong> 设成最短 buff 的持续时间(通常是 5 分钟)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    '把 <strong>按键间隔</strong> 设成 1 秒(留出技能动作的播放时间)',
  'Tester un cycle complet': '测试一个完整循环',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    '按 <code>CTRL+A</code> 启动。观察活动日志:应该能看到 <em>F2 pressed → 1 pressed → 2 pressed…</em> 依次出现,每个之间约 1 秒。如果某个技能没释放,多半是冷却中或者没 FP — 进游戏目视确认一下。',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain 需要和 buff 轮换并行运行。Reborn Assistant 提供固定 15 秒的周期性宏,正好匹配 Heal Rain 的 AOE 范围(持续约 12-15 秒)。',
  'Assigner Heal Rain à la touche §': '把 Heal Rain 分配到 § 键',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Reborn Assistant 默认通过 <code>§</code> 键触发周期性宏。把 Heal Rain 拖到 Flyff 里的这个键上。',
  'Activer la macro périodique': '启用周期性宏',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    '在 Premium 面板里打开 <strong>「周期性宏」</strong> 开关。系统会每 15 秒自动施放 Heal Rain,设置自动保存。',
  '⚠️ Attention au positionnement': '⚠️ 注意走位',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain 是以你为中心的 AOE。如果你一直在动(风筝或调位),DPS 会跑出治疗范围。要么保持静止,要么给队伍定一个固定集合点。',

  // Macros
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    '除了轮换和治疗,Reborn Assistant Premium 还提供 <strong>3 个独立宏</strong>。Ringmaster 可以这样用:',
  'Macro 1 — Pet feeding': '宏 1 — 宠物喂养',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    '如果你的宠物需要定期喂食,设一个 <code>k,h</code> 类型的序列(宠物面板键 + 治疗宠物),每 30 秒触发一次。防止你刷怪时宠物饿死。',
  'Macro 2 — Stack de FP potions': '宏 2 — FP 药堆叠',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    '设置一个 <code>y</code> 类型的序列(FP 药快捷键),每 20 秒一次,把 FP 维持在 80% 以上。根据消耗和 Heal Rain 节奏调整。',
  'Macro 3 — Anti-AFK': '宏 3 — 防 AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    '每 4-5 分钟来一次 <code>up,down</code> 或 <code>space</code> 序列,可以在长时间刷怪的平静期避免 AFK 掉线。酌情使用。',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>按键间隔太短</strong> — 如果有技能被跳过,把按键间隔调到 1.5 或 2 秒。慢一点但 100% 触发,比快但漏放强得多。',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>不要突破公共冷却</strong> — Flyff 有 GCD(global cooldown)。按得太快,部分技能会被白白吞掉。默认的 1 秒间隔正好契合这个 GCD。',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>循环中途 FP 见底</strong> — 你的轮换会悄无声息地停下。打开 FP 药宏,或者堆 INT/MP。',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>队员跑出 AOE 范围</strong> — 周期性治疗只覆盖 Heal Rain 半径内(约 12-15 米)的玩家。和队伍打好招呼:他们得待在范围里。',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>怪死后丢失目标</strong> — 对 RM 没什么影响,但如果你的轮换里有单体技能,要留意目标状态。',

  // Légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    '用扩展自动化重复操作 <strong>可能违反某些游戏服务的用户协议</strong>,包括 Gala Lab 对 Flyff Universe 的条款。Reborn Assistant <strong>不读取游戏内存、不发送网络包、不修改客户端</strong>:它纯粹只是模拟你手动会按的那些键。你对使用方式负全部责任。',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    '想确切了解 Reborn Assistant 在技术上做了什么(以及没做什么),请查阅 <a href="../index.html#faq">主页 FAQ</a>。',

  // CTA
  'Prêt à libérer votre Ringmaster ?': '准备好解放你的 Ringmaster 了吗?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    '30 秒在 Chrome Web Store 装好 Reborn Assistant。Premium 免费试用 7 天,无需信用卡。',
  'Installer Reborn Assistant': '安装 Reborn Assistant',

  // Related
  '◆ Article lié': '◆ 相关文章',
  '◆ Documentation': '◆ 文档',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Flyff Universe 2026 最佳工具与扩展',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Flyff Universe Ringmaster 职业完整指南',
  'Guide complet des fonctionnalités Premium': 'Premium 功能完整指南',

  '← Retour aux docs': '← 返回文档',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"安装 Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    '从 Chrome Web Store 安装 Reborn Assistant 扩展,并把它固定到工具栏。',
  '"Identifier vos séquences Ringmaster"': '"识别你的 Ringmaster 技能序列"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    '列出你的核心技能:Heart of Power (HoP)、Beef Up、Mental Sign、Speed Pep,以及 AOE 治疗(Heal Rain)。',
  '"Configurer la rotation de séquences"': '"配置技能轮换"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    '在 Reborn Assistant 中启用 F2 → 1-9 → 0 → F1 轮换,间隔设为 5 分钟(你 buff 的典型持续时间)。',
  '"Programmer le Heal périodique"': '"设置周期性治疗"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    '启用周期性宏,组队时每 15 秒释放一次 Heal Rain。',
  '"Lancer l\'automatisation"': '"启动自动化"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    '按 CTRL+A 启动,观察活动日志,根据技能动作调整按键间隔。',
};

// ─── meilleurs-outils-flyff-universe-2026 ───────────────────────────────────
export const toolsZh = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">首页</a> › <a href="index.html">文档</a> › Flyff Universe 最佳工具',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    '2026 年 Flyff Universe 最佳工具与扩展',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    '经过实测对比、真正能改变 Flyff Universe 游戏体验的工具精选:扩展、翻译器、计算器、数据库。',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe 是一款靠社区撑起来的 MMORPG:相当一部分实用工具不是来自官方,而是玩家自己做的。我们花了 3 个月(2026 年 2 月 → 5 月)实测最受欢迎的第三方工具,挑出了 <strong>真正值得一试的 6 款</strong>,按对日常玩家的实用程度排序。',

  // Methodology
  '📌 Méthodologie': '📌 评测方法',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    '每款工具按 4 个标准评估:日常实用度、更新质量(跟得上 Flyff Universe 节奏)、对用户数据的尊重、易用性。没有任何商业合作:只有 Reborn Assistant 是本站作者出品(坦诚说明)。',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Ringmaster 自动化扩展',
  '★ Rang I · Notre choix': '★ 第一名 · 我们的推荐',
  'Version gratuite': '免费版',
  'Premium 2,99€/mois': 'Premium 2.99 欧/月',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant 是一款浏览器扩展,专为 Flyff Universe 玩家 <strong>自动化重复操作</strong> — 尤其是 Ringmaster 这种 buff 轮换臭名昭著繁琐的职业。扩展按可配置的间隔模拟键盘按键:每 X 分钟轮换一次技能序列、Heal Rain 每 15 秒周期性触发宏,以及最多 3 个自定义宏。',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    '免费版覆盖基础功能(HP 自动治疗、6 套主题、15 种界面语言)。Premium 版解锁完整轮换、自定义宏和周期性宏 — RM 主玩家需要的全套武器。',
  '✓ Points forts': '✓ 优点',
  '✗ Points faibles': '✗ 缺点',
  '15 langues d\'interface, support international': '15 种界面语言,国际化支持',
  'Données 100% locales (aucun tracking)': '数据 100% 本地存储(无追踪)',
  'Macros personnalisables jusqu\'à 3 séquences': '最多 3 个自定义宏序列',
  'Mises à jour régulières via Chrome Web Store': '通过 Chrome Web Store 定期更新',
  'Chromium uniquement (pas Firefox)': '仅支持 Chromium(不支持 Firefox)',
  'Premium nécessite compte Google': 'Premium 需要 Google 账号',
  '→ Tester Reborn Assistant': '→ 试用 Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — 游戏内多语言翻译器',
  '★ Rang II': '★ 第二名',
  'Gratuit': '免费',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision 解决了 Flyff Universe 的一个特定问题:社区非常国际化(BR、KR、JP、EU),很多玩家会碰到自己看不懂的聊天语言。Reborn Vision 是一款游戏内翻译器,识别屏幕上显示的文字,实时提供叠加层翻译。',
  'Traduction en temps réel multi-langues': '多语言实时翻译',
  '100% gratuit': '100% 免费',
  'Configuration minimale': '配置简单',
  'OCR variable selon les polices': 'OCR 识别因字体而异',
  'Consomme un peu de bande passante': '会占用一些带宽',
  '→ Voir Reborn Vision': '→ 查看 Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — 权威数据库',
  '★ Rang III': '★ 第三名',
  'Site web': '网站',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia 是 Flyff Universe 最完整的社区 wiki。按名字搜物品、每个怪物都有专属页面(掉落、位置、经验)、任务树、职业信息。卡任务或者想找某个物品的爆点时必备。',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    '协作式更新,质量因贡献者而异,但整体已是事实标准。所有日常玩家都应该收藏。',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — 属性与配装计算器',
  '★ Rang IV': '★ 第四名',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    '一款属性计算器,综合考虑你的装备、首饰、buff,给出 DPS、生存力或治疗量的精确估算。换配装或对比两件首饰时尤其有用。',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    '界面有点朴素,但数学公式扎实。社区有多个版本 — 挑最近更新的那个用。',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — 社区与策略攻略',
  '★ Rang V': '★ 第五名',
  'Site web / Discord': '网站 / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    '严格说不算工具,但是宝贵资源:各职业配装攻略、Boss 策略、当前 meta、服务器经济。内容由 end-game 玩家撰写,提供普通攻略里看不到的视角。',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — 首饰优化',
  '★ Rang VI': '★ 第六名',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    '一款求解器,根据你的装备计算让某个属性(攻击、HP、Cast Speed 等)最大化的首饰组合。小众,但到了 end-game 每一个百分点都重要时,效果惊人。',

  // How to choose
  'Comment choisir ?': '怎么选?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    '上面的顺序是基于日常玩家使用频率的主观排名。下面三个典型画像,帮你定位:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': '你经常刷怪,尤其是 RM 或 Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    '优先 Reborn Assistant Premium,然后用 FlyffPedia 查掉落。',
  'Vous jouez avec une guilde internationale': '你和国际公会一起玩',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision(翻译器)+ Madrigal Inside(社区 Discord)。',
  'Vous êtes end-game et optimisez vos builds': '你已经 end-game,在优化配装',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer 组合使用,再加 Reborn Assistant 自动化材料farm。',

  // Tools to avoid
  'Outils à éviter': '需要避开的工具',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    '不是所有打着 "Flyff Universe" 旗号的工具都正经。警惕这些程序:',
  'Demandent vos identifiants Gala Lab': '索要你的 Gala Lab 账号密码',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    '没有任何正规工具需要你的登录信息。100% 都是骗局。',
  'S\'installent en tant qu\'exécutable .exe Windows': '以 Windows .exe 可执行文件安装',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    '却没有清晰的介绍页面。可能是键盘记录器或恶意软件。',
  'Promettent du gold gratuit, du level boost ou des items': '承诺免费金币、升级或物品',
  '. Toujours arnaque ou banwave imminente.': '。要么是骗局,要么离封号潮不远了。',
  'N\'ont pas de version officielle': '没有官方版本',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    '在 Chrome Web Store、GitHub 或有清晰法律说明的网站上。',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 不会骗人的判断标准',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    '正规工具总会有可见的隐私政策、活跃的客服渠道(Discord、邮件),以及 Chrome Web Store 页面或公开的 GitHub 仓库。Reborn Assistant 和 Reborn Vision 这 3 条全勾。',

  // Footer
  'Article mis à jour le 16 mai 2026.': '本文更新于 2026 年 5 月 16 日。',

  '← Retour aux docs': '← 返回文档',
};

// ─── guide-ringmaster ───────────────────────────────────────────────────────
export const guideRmZh = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">首页</a> › <a href="index.html">文档</a> › Ringmaster 指南',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)':
    'Flyff Universe Ringmaster — 2026 完整指南(配装、Buff、定位)',
  'Ringmaster Flyff Universe — Guide Complet 2026': 'Flyff Universe Ringmaster — 2026 完整指南',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    '定位、buff、配装、装备、循环:2026 年在 Flyff Universe 玩 Ringmaster 你需要知道的一切,从 60 级阶段一直到 end-game。',

  // Section 1
  'Qu\'est-ce qu\'un Ringmaster ?': '什么是 Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong>(RM)是 Flyff Universe 中 Assist 分支的最终进阶。它是 <strong>游戏里的辅助职业</strong>:核心定位不是输出,而是 <em>让队伍活下来并变得更强</em>,靠的是长时间持续的 buff 和循环 AOE 治疗。没有 Ringmaster,end-game 队伍清图要多花两到三倍的时间 — 而且抗意外拉怪的能力差得多。',
  'Quelques caractéristiques qui définissent la classe :': '定义这个职业的几个特征:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>长持续时间 buff</strong>(5 到 30 分钟),提升队伍属性:攻击、防御、速度、闪避',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>,持续治疗半径约 12-15 米内所有友军的 AOE',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>复活</strong> 死亡玩家且不损失经验',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>个人爆发伤害极低</strong> — RM 单独杀怪效率很差',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>几乎必须组队</strong>,或者有个小号给你 buff 和治疗',

  // Section 2: rôle
  'Le rôle du Ringmaster en groupe': 'Ringmaster 在队伍中的定位',
  'Trois rôles principaux selon le contexte de jeu :': '根据游戏场景,有三种主要定位:',
  'Farm rapide (PvE classique)': '快速刷怪(经典 PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    '你陪一个或几个 DPS 在刷怪点。你的工作:每 5 分钟重 buff、持续放 Heal Rain、盯着 FP。非常重复 — 这正是自动化最能发挥作用的场景。',
  'Raids & boss': '团本与 Boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    '面对 Glaphan、Bang、Aibatt 这类高爆发 Boss。节奏变了:周期性治疗减少,手动爆发治疗更多,有时还要预判复活时机。自动化退居二线 — 你必须自己掌控。',
  'FWC (Flyff World Championships)': 'FWC(Flyff 世界锦标赛)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    '正式组织的比赛,meta 极其精细。RM 不只是工具人:他们参与优化阵容、同步 buff 时间点。把循环背得滚瓜烂熟变得至关重要。根据赛事规则,自动化可能被禁 — 一定要先确认。',

  // Section 3: buffs
  'Les buffs essentiels du Ringmaster': 'Ringmaster 的核心 buff',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    '下面是你必须掌握并纳入循环的 buff,按优先级排序:',
  '★ Priorité absolue · 30 min': '★ 最高优先级 · 30 分钟',
  '★ Priorité haute · 15 min': '★ 高优先级 · 15 分钟',
  '15 min': '15 分钟',
  'AOE · ~15 sec': 'AOE · 约 15 秒',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    '为全队提升 STA + 攻击。Ringmaster 的招牌 buff,循环里第一个放。',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    '提升全队 HP 上限。在可能团灭的图里,某个队员没拉满 HP 就是致命的。',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    '提升全队 INT。对 Mages、AOE Knights,以及使用魔法系数技能的 Rangers 收益极大。',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    '提升攻速。对 Blades 和 Rangers 是质变;对 Mages 不太关键。',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    '提升闪避。在怪物有大量快速物理攻击的图里很有用。',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    '以你为中心的 AOE 治疗。整个刷怪过程都要循环放。覆盖半径 12-15 米内所有友军。',

  // Section 4: builds
  'Build STA vs INT — Quel build choisir ?': 'STA 还是 INT — 怎么选配装?',
  'Deux écoles principales en 2026 :': '2026 年有两大主流流派:',
  'Critère': '标准',
  'Build STA Full': '纯 STA 配装',
  'Build INT Hybrid': 'INT 混合配装',
  'Stats principaux': '主属性',
  'Full STA, INT minimum requis pour les buffs': '全 STA,只加 buff 所需的最低 INT',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': 'STA/INT 约 50/50,有时 30/70 取决于等级',
  'HP / Survie': 'HP / 生存',
  'Excellent — pool énorme, survit aux pulls accidentels': '优秀 — HP 池巨大,扛得住意外拉怪',
  'Moyen — exige plus d\'attention du joueur': '中等 — 玩家要更专心',
  'Puissance des heals': '治疗强度',
  'Correct — suffit pour la plupart des situations': '尚可 — 大部分情况够用',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': '优秀 — Heal Rain 等治疗对 INT 收益很高',
  'FP pool': 'FP 池',
  'Faible — nécessite plus de potions': '少 — 需要更多药水',
  'Élevé — gestion FP plus confortable': '多 — FP 管理更轻松',
  'Recommandé pour': '推荐给',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': '新手玩家、低风险刷怪、RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': '老手玩家、高难度团本、FWC、end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    '纯 STA 配装容错最高、最多人玩。INT 混合配装要求更高,但回报是治疗量明显更高 — 竞技内容的必选。',

  // Section 5: équipement
  'Équipement recommandé': '推荐装备',
  'Armes': '武器',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff(法杖)</strong> — INT 系数最高,推荐用于 INT 混合配装',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick(短杖)</strong> — 均衡、全能',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield(盾牌)</strong> 副手 — 增加防御,纯 STA 强烈推荐',
  'Armure': '护甲',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>STA 套装首饰</strong> 适用于纯 STA 配装(Tinerbol、Lord 等,按阶段选择)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>INT 套装首饰</strong> 或 STA/INT 混合套装适用于混合配装',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>永远优先凑齐整套</strong> 来吃 2/4/6 件套效果',
  'Bijoux (jewelry)': '首饰(jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    '首饰的优化是 RM 从合格走向优秀的关键。用计算器(见 <a href="meilleurs-outils-flyff-universe-2026.html">我们的工具对比</a>)找出每个阶段能让你优先属性最大化的组合。',

  // Section 6: rotation
  'Rotation et gestion du rythme': '循环与节奏管理',
  'Une rotation efficace en farm classique tient en 3 timings :':
    '经典刷怪的高效循环就靠 3 个时间节点:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>每 5 分钟</strong> — 给全队重新上完整 buff(HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>每 12-15 秒</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>持续</strong> — 盯着个人 HP,随时准备应急爆发治疗',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    '前两个时间节点是机械操作,正好适合 <strong>自动化</strong>。第三个需要人脑判断。这就是现代 Ringmaster 的核心取舍:把重复的交给自动化,<strong>把精力留给决定性的时刻</strong>。',
  '💡 Tutoriel pratique disponible': '💡 配套实操教程',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    '我们写了一篇 <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">用 Reborn Assistant 自动化 Ringmaster 的一步步教程</a>:循环配置、循环间隔、Heal Rain 宏以及要避开的坑。',

  // Section 7: vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — 有什么区别?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Assist 分支下的两个职业,新手常常搞混:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = 纯辅助,个人伤害低,组队必备,solo 效率差',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = 偏向魔法 DPS,可以 solo 刷怪,但失去了 RM 的一部分长效 buff',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    '如果你的目标是组队、打 FWC,或者当公会的"顶梁柱"→ Ringmaster。如果你想要一个更能 solo 的 Assist 职业 → Mentalist。',

  // Section 8: erreurs
  'Erreurs courantes de débutant Ringmaster': 'Ringmaster 新手常见错误',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>不定期重 buff</strong> — 5 分钟后少一个 buff,代价有时比 DPS 整条命还大',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>放 Heal Rain 时移动</strong> — AOE 不会跟着你跑,队友会脱离范围',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>太早纯 INT 配装</strong> — HP 池不够,Heal Rain 还没放出来就死了',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>忽视 FP 药</strong> — 没 FP 的 RM 等于废物',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>试图打输出</strong> — 这些时间花在治疗和 buff 上更划算',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': '用 Reborn Assistant 优化你的 Ringmaster',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Premium 扩展,自动化 buff 轮换、周期性 Heal Rain 和自定义宏。免费试用 7 天,无需信用卡。',
  'Installer Reborn Assistant': '安装 Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    '指南更新于 2026 年 5 月 16 日 — Flyff Universe(Gala Lab)。',

  '← Retour aux docs': '← 返回文档',
};
