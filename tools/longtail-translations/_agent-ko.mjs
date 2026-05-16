/**
 * Korean translation maps for:
 *   - docs/automatiser-ringmaster-flyff-universe.html  → automateRmKo
 *   - docs/meilleurs-outils-flyff-universe-2026.html   → toolsKo
 *   - docs/guide-ringmaster-flyff-universe.html        → guideRmKo
 *
 * Conventions:
 *   - Inline HTML tags are preserved EXACTLY (<strong>, <code>, <a href="...">…</a>, <em>).
 *   - Non-translated terms: Flyff Universe, Ringmaster, RM, HoP, Beef Up,
 *     Heart of Power, Mental Sign, Speed Pep, Cat's Reflex, Heal Rain, FP, HP,
 *     AOE, MP, Reborn Assistant, Reborn Vision, Premium, FlyffPedia,
 *     Madrigal Inside, FlyffOptimizer, Chrome Web Store, Google Cloud, Gala Lab,
 *     Stripe, Glaphan, Asteria, AFK, GCD, DPS, INT, STA, MMORPG, FWC, DevTools,
 *     CTRL+A, CTRL+O, OCR, JWT.
 *   - Korean tone: natural player-facing 합니다체.
 */

// ─── automate-rm (Ringmaster automation tutorial) ────────────────────────────
export const automateRmKo = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">홈</a> › <a href="index.html">문서</a> › Ringmaster 자동화하기',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Flyff Universe에서 Ringmaster 자동화하기 — 2026 완벽 가이드',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    '버프, 시퀀스, AOE 힐, HP/FP 관리: 손가락이 남아나게 두면서 Ringmaster를 파티의 기둥으로 만드는 단계별 튜토리얼입니다.',

  // TOC
  '◆ Sommaire': '◆ 목차',
  'Pourquoi automatiser son Ringmaster': '왜 Ringmaster를 자동화해야 하는가',
  'Prérequis avant d\'automatiser': '자동화 전 준비 사항',
  'Identifier vos séquences Ringmaster': 'Ringmaster 시퀀스 파악하기',
  'Configurer la rotation de buffs': '버프 로테이션 설정하기',
  'Programmer le Heal périodique': '주기 힐 설정하기',
  'Macros personnalisées (DPS, support, urgence)': '커스텀 매크로 (DPS, 서포트, 긴급용)',
  'Optimisation et erreurs courantes': '최적화와 자주 하는 실수',
  'Aspect légal — ce qu\'il faut savoir': '법적 측면 — 반드시 알아야 할 점',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster (보통 <strong>RM</strong>으로 줄여 부름)는 Flyff Universe를 대표하는 서포트 클래스입니다. 역할은 명확합니다. 레벨에 따라 5~30분 지속되는 버프(Heart of Power, Beef Up, Mental Sign 등)로 파티를 살아 있게 유지하고, AOE인 Heal Rain으로 피해를 회복시킵니다. 종이 위에서는 깔끔하지만, 실제로는 장시간 사냥 시 가장 피로한 클래스 중 하나입니다. 시간의 80%를 <strong>5분마다 리버프</strong>하고, <strong>10~15초마다 Heal Rain을 재시전</strong>하며, 파티원 각자의 <strong>FP 바를 감시</strong>하는 데 씁니다.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    '자동화는 여러분의 판단을 대체하지 않습니다. 키보드에서 기계적인 루틴만 덜어줄 뿐입니다. 전체 리버프 시퀀스, 주기 힐, FP 포션 사용 등이 그 대상입니다. 여러분의 손은 <strong>정말 중요한 순간</strong>을 위해 자유로워집니다. 임박한 와이프, 통제 불능이 된 웨이브, RM부터 노리는 보스 등 말입니다.',
  '💡 Cas d\'usage typique': '💡 대표 활용 사례',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Glaphan 또는 Asteria에서 4시간 사냥을 시작한다고 가정해 봅시다. 자동화 없이는 240분 ÷ 5분 = 48번의 수동 리버프 사이클을 해야 합니다. Reborn Assistant를 설정해 두면 1번만 돌리면 나머지는 백그라운드에서 자동 진행됩니다. 파티 구성이 바뀌거나 누군가 죽을 때만 직접 개입하면 됩니다.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    '아무것도 활성화하기 전에, 탄탄한 기반부터 다집니다.',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> 설치 완료 (무료 버전은 기본 힐 매크로만 지원합니다). <a href="quickstart.html">설치 가이드</a>를 참고하세요.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Ringmaster 버프를 F2 → 0번 키에 배치</strong>합니다. 논리적 순서를 따르세요 (Heart of Power 먼저, 그다음 AOE 버프, 마지막에 단일 대상 버프).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain을 § 키(또는 다른 지정 키)에 배치</strong>합니다. Reborn Assistant가 반복적으로 누를 키입니다.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>FP 포션 한 묶음</strong>을 인벤토리에 챙겨두세요. 자동화는 자원을 만들어내지 않습니다.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>안정적인 사냥터</strong>: 강제 텔레포트가 있거나 밀쳐내는 몹이 있는 지역은 피하세요 (위치가 어긋나면 AOE가 깨집니다).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    '모든 시퀀스가 똑같이 중요하지는 않습니다. 풀 서포트 RM 빌드의 일반적인 우선순위는 다음과 같습니다.',
  'Séquences essentielles (rotation toutes les 5 min)': '필수 시퀀스 (5분마다 로테이션)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — STA + 공격력 증가, 필수',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — 고정 STA, 파티 최대 HP 증가',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + 마법 부스트, Mage와 AOE Knight에게 유용',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — 공격 속도, Blade와 Ranger에게는 엄청난 위력',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — 회피, 까다로운 지역에서 유용',
  'Séquences situationnelles (à activer manuellement)': '상황별 시퀀스 (수동 발동)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — 절대 자동화하지 말고 상황에 맞춰 직접 사용',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — 속성 피해 보너스, 상황에 따라 선택 사용',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    '이것이 시스템의 핵심입니다. Reborn Assistant는 일정한 간격으로 <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code>이라는 고정 시퀀스를 누를 수 있습니다. 여러분의 RM에 맞추는 방법은 다음과 같습니다.',
  'Préparer vos slots de séquences': '시퀀스 슬롯 준비하기',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    '시퀀스 바에서 Flyff 단축키 바로 다음 순서로 시퀀스를 드래그합니다.',
  'Touche 1 → Heart of Power': '1번 키 → Heart of Power',
  'Touche 2 → Beef Up': '2번 키 → Beef Up',
  'Touche 3 → Mental Sign': '3번 키 → Mental Sign',
  'Touche 4 → Speed Pep': '4번 키 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': '5번 키 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    '6~0번 키 → 사용 가능한 다른 버프 또는 비워두기',
  'Activer la rotation dans Reborn Assistant': 'Reborn Assistant에서 로테이션 활성화',
  'Dans le panneau Reborn, onglet Premium :': 'Reborn 패널의 Premium 탭에서:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    '<strong>«시퀀스 로테이션»</strong> 토글을 활성화합니다',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    '<strong>사이클 간 간격</strong>을 가장 짧은 버프의 지속시간(보통 5분)에 맞추세요',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    '<strong>키 입력 사이 지연</strong>을 1초로 설정합니다 (시퀀스 애니메이션이 재생될 시간을 줍니다)',
  'Tester un cycle complet': '완전한 사이클 테스트하기',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    '<code>CTRL+A</code>로 시작합니다. 활동 로그를 확인하세요. <em>F2 pressed → 1 pressed → 2 pressed…</em>가 약 1초 간격으로 순차적으로 표시되어야 합니다. 시퀀스가 발동하지 않는다면 쿨다운이거나 FP 부족일 가능성이 큽니다. 게임 내에서 직접 확인하세요.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain은 버프 로테이션과 병행해서 돌아가야 합니다. Reborn Assistant는 15초 고정 주기 매크로를 제공하며, 약 12~15초 지속되는 Heal Rain의 AOE 영역에 정확히 맞춰져 있습니다.',
  'Assigner Heal Rain à la touche §': 'Heal Rain을 § 키에 배치',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    '기본적으로 Reborn Assistant의 주기 매크로는 <code>§</code> 키를 입력합니다. Flyff에서 Heal Rain을 이 키로 드래그하세요.',
  'Activer la macro périodique': '주기 매크로 활성화',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Premium 패널에서 <strong>«주기 매크로»</strong> 토글을 켭니다. 시스템이 15초마다 Heal Rain을 자동 발동하고 결과를 자동 저장합니다.',
  '⚠️ Attention au positionnement': '⚠️ 위치 선정에 주의',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain은 시전자 중심 AOE입니다. 끊임없이 움직이면(키팅이나 재배치) DPS를 커버하지 못합니다. 정지 상태를 유지하거나 파티원의 집결 지점을 고정해 두세요.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Reborn Assistant Premium은 로테이션과 힐 외에도 <strong>독립적인 매크로 3개</strong>를 제공합니다. Ringmaster용으로 활용하는 방법은 다음과 같습니다.',
  'Macro 1 — Pet feeding': '매크로 1 — 펫 먹이주기',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    '정기적으로 먹이를 줘야 하는 펫이 있다면 30초마다 <code>k,h</code> 같은 시퀀스(펫 패널 키 + 힐 펫)를 설정하세요. 사냥 중에 펫이 죽는 일을 막아줍니다.',
  'Macro 2 — Stack de FP potions': '매크로 2 — FP 포션 연속 사용',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    '<code>y</code>(FP 포션 키) 같은 시퀀스를 20초마다 설정해 FP를 80% 이상으로 유지합니다. 소비량과 Heal Rain 빈도에 맞춰 조정하세요.',
  'Macro 3 — Anti-AFK': '매크로 3 — AFK 방지',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    '<code>up,down</code> 또는 <code>space</code> 같은 시퀀스를 4~5분마다 입력하면 한산한 구간에서도 장시간 사냥 중 AFK 연결 끊김을 막을 수 있습니다. 신중하게 사용하세요.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>키 입력 간 지연이 너무 짧음</strong> — 시퀀스가 건너뛰어진다면 키 간 지연을 1.5초나 2초로 늘리세요. 다소 느려도 100% 완수되는 사이클이 더 낫습니다.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>글로벌 쿨다운을 무시하지 말 것</strong> — Flyff에는 GCD(global cooldown)가 있습니다. 너무 빨리 연타하면 시퀀스가 허공으로 사라집니다. 기본 1초 지연은 이 GCD를 존중합니다.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>사이클 도중 FP가 고갈됨</strong> — 로테이션이 조용히 멈춥니다. FP 포션 매크로를 활성화하거나 INT/MP를 늘리세요.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>AOE 범위 밖에 있는 파티원</strong> — 주기 힐은 Heal Rain 반경(약 12~15m) 내 플레이어만 회복시킵니다. 파티원과 소통해서 사정거리 안에 머물게 하세요.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>몹 처치 후 타깃이 사라짐</strong> — RM에게는 큰 문제가 아니지만, 단일 대상 시퀀스도 로테이션에 포함돼 있다면 타깃을 주시하세요.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    '확장 프로그램을 통한 반복 작업 자동화는 Flyff Universe에 대한 Gala Lab의 약관을 포함해 일부 게임 서비스의 <strong>이용약관을 위반할 수 있습니다</strong>. Reborn Assistant는 <strong>게임 메모리를 읽지 않으며, 네트워크 패킷을 전송하지 않고, 클라이언트를 수정하지 않습니다</strong>. 오로지 사용자가 수동으로 누를 키 입력을 시뮬레이션할 뿐입니다. 사용에 대한 책임은 전적으로 사용자에게 있습니다.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Reborn Assistant가 기술적으로 무엇을 하는지(그리고 무엇을 하지 않는지) 정확히 알고 싶다면 <a href="../index.html#faq">메인 페이지의 FAQ</a>를 확인하세요.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Ringmaster를 자유롭게 만들 준비가 되셨나요?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Chrome Web Store에서 30초 만에 Reborn Assistant를 설치하세요. Premium 7일 무료 체험, 신용카드 등록 없이 가능합니다.',
  'Installer Reborn Assistant': 'Reborn Assistant 설치하기',

  // Related cards
  '◆ Article lié': '◆ 관련 글',
  '◆ Documentation': '◆ 문서',
  'Les meilleurs outils & extensions Flyff Universe 2026': '2026년 Flyff Universe 최고의 도구와 확장 프로그램',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Flyff Universe Ringmaster 클래스 완벽 가이드',
  'Guide complet des fonctionnalités Premium': 'Premium 기능 완벽 가이드',

  // Common
  '← Retour aux docs': '← 문서로 돌아가기',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Reborn Assistant 설치하기"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Chrome Web Store에서 Reborn Assistant 확장 프로그램을 추가하고 도구 모음에 고정하세요.',
  '"Identifier vos séquences Ringmaster"': '"Ringmaster 시퀀스 파악하기"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    '핵심 시퀀스를 정리합니다: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, 그리고 AOE 힐(Heal Rain).',
  '"Configurer la rotation de séquences"': '"시퀀스 로테이션 설정하기"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Reborn Assistant에서 F2 → 1-9 → 0 → F1 로테이션을 5분 간격(버프의 일반적인 지속 시간)으로 활성화하세요.',
  '"Programmer le Heal périodique"': '"주기 힐 설정하기"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    '주기 매크로를 활성화하여 파티에서 15초마다 Heal Rain을 발동시키세요.',
  '"Lancer l\'automatisation"': '"자동화 시작하기"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'CTRL+A로 시작하고, 활동 로그를 확인하며, 시퀀스 애니메이션에 맞춰 지연을 조정하세요.',
};

// ─── tools-2026 (Best Flyff Universe tools 2026) ─────────────────────────────
export const toolsKo = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">홈</a> › <a href="index.html">문서</a> › Flyff Universe 최고의 도구',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    '2026년 Flyff Universe 최고의 도구와 확장 프로그램',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Flyff Universe 플레이를 실제로 바꿔주는 도구들을 직접 테스트하고 비교한 셀렉션입니다. 확장 프로그램, 번역기, 계산기, 데이터베이스를 다룹니다.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe는 커뮤니티 덕분에 유지되는 MMORPG입니다. 유용한 도구의 상당수는 퍼블리셔가 아니라 플레이어들 손에서 나옵니다. 3개월(2026년 2월 → 5월) 동안 가장 인기 있는 서드파티 도구들을 직접 테스트해, <strong>정말 가치 있는 6개</strong>를 일반 플레이어의 효용 순으로 추렸습니다.',

  // Methodology callout
  '📌 Méthodologie': '📌 평가 방식',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    '각 도구를 4가지 기준으로 평가했습니다. 일상 게임플레이에서의 실제 유용성, 업데이트 품질(Flyff Universe의 흐름을 따라가는지), 사용자 데이터 존중, 그리고 사용 편의성입니다. 상업적 제휴는 없습니다. 단, Reborn Assistant만 본 사이트 운영자가 만든 도구임을 명시합니다 (투명성 차원).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Ringmaster 자동화 확장 프로그램',
  '★ Rang I · Notre choix': '★ 1위 · 추천 선택',
  'Version gratuite': '무료 버전',
  'Premium 2,99€/mois': 'Premium 월 2,99€',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant는 Flyff Universe 플레이어를 위한 <strong>반복 작업 자동화</strong>에 특화된 브라우저 확장 프로그램입니다. 특히 버프 로테이션이 악명 높게 지루한 Ringmaster 클래스를 겨냥합니다. 사용자가 설정한 간격으로 키 입력을 시뮬레이션합니다. X분마다 시퀀스 로테이션, 15초마다 Heal Rain용 주기 매크로, 그리고 최대 3개의 커스텀 매크로까지 지원합니다.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    '무료 버전은 기본 기능(HP 자동 회복, 6가지 테마, 15개 인터페이스 언어)을 제공합니다. Premium은 전체 로테이션, 커스텀 매크로, 주기 매크로를 해금합니다. RM 메인 유저가 기대하는 모든 무기를 갖춘 셈입니다.',
  '✓ Points forts': '✓ 장점',
  '✗ Points faibles': '✗ 단점',
  '15 langues d\'interface, support international': '15개 인터페이스 언어, 글로벌 지원',
  'Données 100% locales (aucun tracking)': '100% 로컬 데이터 (추적 없음)',
  'Macros personnalisables jusqu\'à 3 séquences': '최대 3개 시퀀스의 커스텀 매크로',
  'Mises à jour régulières via Chrome Web Store': 'Chrome Web Store를 통한 정기 업데이트',
  'Chromium uniquement (pas Firefox)': 'Chromium 전용 (Firefox 미지원)',
  'Premium nécessite compte Google': 'Premium은 Google 계정 필요',
  '→ Tester Reborn Assistant': '→ Reborn Assistant 사용해보기',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — 다국어 인게임 번역기',
  '★ Rang II': '★ 2위',
  'Gratuit': '무료',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision은 Flyff Universe만의 특수한 문제를 해결합니다. 커뮤니티가 매우 국제적(브라질, 한국, 일본, 유럽)이라 많은 플레이어가 모르는 언어의 채팅을 마주칩니다. Reborn Vision은 화면에 표시된 텍스트를 감지해 실시간 오버레이 번역을 제공하는 인게임 번역기입니다.',
  'Traduction en temps réel multi-langues': '다국어 실시간 번역',
  '100% gratuit': '100% 무료',
  'Configuration minimale': '간단한 설정',
  'OCR variable selon les polices': '폰트에 따라 OCR 품질 변동',
  'Consomme un peu de bande passante': '약간의 대역폭 사용',
  '→ Voir Reborn Vision': '→ Reborn Vision 보기',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — 대표적인 데이터베이스',
  '★ Rang III': '★ 3위',
  'Site web': '웹사이트',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia는 Flyff Universe에서 가장 충실한 커뮤니티 위키입니다. 이름으로 아이템 검색, 몹별 전용 페이지(드롭, 출현 위치, 제공 경험치), 퀘스트 트리, 클래스 정보까지 제공합니다. 퀘스트에 막히거나 특정 아이템을 어디서 파밍할지 찾을 때 반드시 필요합니다.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    '협업 기반 업데이트로 기여자에 따라 품질 편차가 있지만, 전반적으로 사실상의 표준입니다. 일반 플레이어라면 반드시 즐겨찾기 해두세요.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — 스탯과 빌드 계산기',
  '★ Rang IV': '★ 4위',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    '장비, 쥬얼리, 버프를 모두 반영해 DPS, 생존력, 힐량을 정확히 추정해주는 스탯 계산기입니다. 빌드를 바꿀 때나 두 쥬얼리를 비교할 때 특히 유용합니다.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    '인터페이스는 다소 투박하지만 수학적 공식은 견고합니다. 커뮤니티 버전이 여러 개 있으니, 가장 최근에 업데이트된 것을 선택하세요.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — 커뮤니티 및 전략 가이드',
  '★ Rang V': '★ 5위',
  'Site web / Discord': '웹사이트 / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    '엄밀히 말해 도구는 아니지만 매우 귀중한 자원입니다. 클래스별 빌드 가이드, 보스 공략, 현재 메타, 서버 경제 정보가 담겨 있습니다. 콘텐츠를 엔드게임 플레이어들이 작성하므로 일반 가이드에서는 볼 수 없는 관점을 얻을 수 있습니다.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — 쥬얼리 최적화',
  '★ Rang VI': '★ 6위',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    '여러분의 장비를 입력받아 특정 스탯(공격력, HP, 캐스팅 속도 등)을 최대화하는 최적 쥬얼리 조합을 계산해주는 솔버입니다. 틈새 도구지만 1%까지 따지는 엔드게임에서는 가공할 위력을 발휘합니다.',

  // How to choose
  'Comment choisir ?': '어떻게 선택할까요?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    '위 순서는 일반 플레이어의 사용 빈도를 기준으로 한 주관적 순위입니다. 선택을 돕기 위해 3가지 대표 프로필을 소개합니다.',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': '특히 RM이나 Mentalist로 사냥을 많이 하는 경우',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium을 최우선으로, 드롭 정보용으로는 FlyffPedia를 추천합니다.',
  'Vous jouez avec une guilde internationale': '국제 길드에서 플레이하는 경우',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (번역기) + Madrigal Inside (커뮤니티 Discord).',
  'Vous êtes end-game et optimisez vos builds': '엔드게임에서 빌드를 최적화하는 경우',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator와 FlyffOptimizer 조합, 그리고 재료 파밍 자동화를 위한 Reborn Assistant.',

  // Tools to avoid
  'Outils à éviter': '피해야 할 도구',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    '"Flyff Universe"라는 이름으로 홍보되는 모든 도구가 정상적인 것은 아닙니다. 다음과 같은 프로그램은 경계하세요.',
  'Demandent vos identifiants Gala Lab': 'Gala Lab 계정 정보를 요구',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    '정상적인 도구는 절대 로그인 정보를 요구하지 않습니다. 100% 사기입니다.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Windows .exe 실행 파일로 설치',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    '명확한 소개 페이지가 없는 경우. 키로거나 멀웨어 위험이 있습니다.',
  'Promettent du gold gratuit, du level boost ou des items': '무료 골드, 레벨업 부스트, 아이템 약속',
  '. Toujours arnaque ou banwave imminente.': '. 항상 사기이거나 곧 닥칠 밴웨이브의 신호입니다.',
  'N\'ont pas de version officielle': '공식 버전이 없음',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'Chrome Web Store, GitHub 또는 명확한 법적 고지가 있는 사이트에서 찾을 수 없는 경우입니다.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 거짓말하지 않는 기준',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    '정상적인 도구는 항상 공개된 개인정보 처리방침, 활발한 지원 채널(Discord, 이메일), 그리고 Chrome Web Store 등록 페이지나 공개 GitHub 저장소를 갖추고 있습니다. Reborn Assistant와 Reborn Vision은 이 3가지를 모두 충족합니다.',

  // Footer
  'Article mis à jour le 16 mai 2026.': '2026년 5월 16일에 업데이트된 글입니다.',

  // Common back-link
  '← Retour aux docs': '← 문서로 돌아가기',
};

// ─── guide-rm (Ringmaster class guide) ───────────────────────────────────────
export const guideRmKo = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">홈</a> › <a href="index.html">문서</a> › Ringmaster 가이드',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Flyff Universe Ringmaster — 2026 완벽 가이드',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    '역할, 버프, 빌드, 장비, 로테이션까지. 60레벨 구간부터 엔드게임까지 2026년 Flyff Universe에서 Ringmaster를 플레이하기 위해 알아야 할 모든 것입니다.',

  // H2 sections
  'Qu\'est-ce qu\'un Ringmaster ?': 'Ringmaster란 무엇인가?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong>(RM)는 Flyff Universe에서 Assist 계열의 최종 전직 클래스입니다. <strong>게임을 대표하는 서포트 클래스</strong>로, 주된 역할은 피해를 가하는 것이 아니라 <em>장시간 버프와 반복적인 AOE 힐로 파티를 살아 있게 유지하고 더 강하게 만드는 것</em>입니다. Ringmaster가 없는 엔드게임 파티는 같은 지역을 클리어하는 데 2~3배의 시간이 걸리고, 우발적인 풀에서 훨씬 더 쉽게 무너집니다.',
  'Quelques caractéristiques qui définissent la classe :': '이 클래스를 정의하는 몇 가지 특징입니다.',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '파티 스탯(공격력, 방어력, 속도, 회피)을 끌어올리는 <strong>장시간 버프</strong>(5~30분)',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '약 12~15m 반경 내 모든 아군을 지속 회복하는 AOE <strong>Heal Rain</strong>',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '경험치 페널티 없이 사망한 플레이어를 되살리는 <strong>Resurrection</strong>',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>매우 낮은 개인 순간 화력</strong> — RM은 혼자서는 효율적으로 아무것도 잡지 못합니다',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>거의 항상 파티 플레이가 필요</strong>하며, 혹은 버프와 힐을 줄 부캐가 있어야 합니다',

  // Rôle en groupe
  'Le rôle du Ringmaster en groupe': '파티에서의 Ringmaster 역할',
  'Trois rôles principaux selon le contexte de jeu :': '플레이 상황에 따라 3가지 주요 역할이 있습니다.',
  'Farm rapide (PvE classique)': '빠른 사냥 (일반 PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    '한 명 이상의 DPS를 사냥터에서 보조합니다. 할 일은 5분마다 리버프, Heal Rain 연속 시전, FP 모니터링입니다. 매우 반복적이며, 자동화가 진가를 발휘하는 정확한 상황입니다.',
  'Raids & boss': '레이드 및 보스',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Glaphan, Bang, Aibatt처럼 폭딜이 강한 보스가 대상입니다. 리듬이 달라집니다. 주기 힐은 줄고 수동 폭힐이 늘어나며, 때로는 Resurrection을 미리 예측해야 합니다. 자동화는 뒷전이 됩니다. 직접 컨트롤해야 합니다.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    '공식 대회이며 메타가 극도로 정교합니다. 여기서 RM은 단순한 유틸리티가 아니라, 동기화된 버프 타이밍으로 최적화된 조합에 기여합니다. 로테이션을 외우는 것이 매우 중요해집니다. 대회 규정에 따라 자동화는 금지될 수 있으니 반드시 사전에 확인하세요.',

  // Buffs
  'Les buffs essentiels du Ringmaster': 'Ringmaster의 필수 버프',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    '반드시 숙지하고 로테이션에 포함해야 할 버프들을 우선순위 순으로 정리합니다.',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ 최우선 · 30분',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    '파티 전원의 STA와 공격력을 증가시킵니다. Ringmaster의 시그니처 버프이며 로테이션 맨 앞에 와야 합니다.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ 높은 우선순위 · 15분',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    '파티의 최대 HP를 증가시킵니다. HP 한계에 도달하지 못한 구성원이 있을 경우 와이프가 일어날 수 있는 지역에서 매우 중요합니다.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    '파티의 INT를 증가시킵니다. Mage, AOE Knight, 마법 스킬 스케일링을 활용하는 Ranger에게 엄청난 위력을 발휘합니다.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15분',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    '공격 속도를 증가시킵니다. Blade와 Ranger에게는 판도를 바꾸는 버프이며 Mage에게는 중요도가 낮습니다.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    '회피 증가. 몹들이 빠른 물리 공격을 자주 사용하는 지역에서 유용합니다.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · 약 15초',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    '시전자 중심의 AOE 힐입니다. 사냥 내내 반복해서 재시전해야 합니다. 12~15m 반경의 모든 아군을 커버합니다.',

  // Build
  'Build STA vs INT — Quel build choisir ?': '빌드 STA vs INT — 어느 빌드를 선택할까?',
  'Deux écoles principales en 2026 :': '2026년 기준 주요한 두 가지 학파가 있습니다.',
  'Critère': '기준',
  'Build STA Full': '풀 STA 빌드',
  'Build INT Hybrid': 'INT 하이브리드 빌드',
  'Stats principaux': '주요 스탯',
  'Full STA, INT minimum requis pour les buffs': '풀 STA, INT는 버프에 필요한 최소치만',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': 'STA/INT 약 50/50, 레벨에 따라 30/70까지',
  'HP / Survie': 'HP / 생존력',
  'Excellent — pool énorme, survit aux pulls accidentels':
    '훌륭함 — HP 풀이 거대해 우발적인 풀에도 살아남음',
  'Moyen — exige plus d\'attention du joueur': '보통 — 플레이어의 더 많은 주의가 필요',
  'Puissance des heals': '힐량',
  'Correct — suffit pour la plupart des situations': '괜찮음 — 대부분의 상황에 충분',
  'Excellent — Heal Rain et autres heals scalent fort sur INT':
    '훌륭함 — Heal Rain과 다른 힐들이 INT에 크게 비례',
  'FP pool': 'FP 풀',
  'Faible — nécessite plus de potions': '낮음 — 포션이 더 많이 필요',
  'Élevé — gestion FP plus confortable': '높음 — FP 관리가 훨씬 편함',
  'Recommandé pour': '추천 대상',
  'Joueurs débutants, farm peu dangereux, RM solo-utility':
    '초보 플레이어, 위험도 낮은 사냥, 솔로 유틸리티 RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game':
    '숙련 플레이어, 어려운 레이드, FWC, 엔드게임',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    '풀 STA 빌드는 여전히 가장 너그럽고 가장 많이 플레이됩니다. INT 하이브리드 빌드는 더 까다롭지만 압도적으로 높은 힐량으로 보상받습니다. 경쟁 콘텐츠라면 필수입니다.',

  // Équipement
  'Équipement recommandé': '추천 장비',
  'Armes': '무기',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (지팡이)</strong> — 최고의 INT 스케일링, INT 하이브리드 빌드에 추천',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent': '<strong>Stick (스틱)</strong> — 균형 잡힌 다용도 무기',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '오프핸드에 <strong>Shield (방패)</strong> — 방어력 증가, 풀 STA 빌드에 강력 추천',
  'Armure': '방어구',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '풀 STA 빌드용 <strong>STA 쥬얼리 세트</strong> (구간에 따라 Tinerbol, Lord 등)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '하이브리드 빌드용 <strong>INT 쥬얼리 세트</strong> 또는 STA/INT 혼합 세트',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '2/4/6 부위 세트 보너스를 위해 <strong>항상 세트 완성을 우선</strong>하세요',
  'Bijoux (jewelry)': '쥬얼리',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    '쥬얼리 최적화는 RM이 "괜찮은 수준"에서 "탁월한 수준"으로 도약하는 지점입니다. 계산기(<a href="meilleurs-outils-flyff-universe-2026.html">도구 비교</a> 참조)를 사용해 구간별로 우선 스탯을 최대화하는 조합을 찾으세요.',

  // Rotation
  'Rotation et gestion du rythme': '로테이션과 페이스 관리',
  'Une rotation efficace en farm classique tient en 3 timings :':
    '일반 사냥에서 효율적인 로테이션은 3가지 타이밍으로 구성됩니다.',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>5분마다</strong> — 파티 풀 리버프 (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>12~15초마다</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>상시</strong> — 긴급 폭힐을 위한 개별 HP 모니터링',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    '앞의 두 타이밍은 기계적이며 <strong>자동화</strong>에 완벽하게 들어맞습니다. 세 번째는 인간의 주의가 필요합니다. 이것이 현대 Ringmaster의 핵심 트레이드오프입니다. 반복 작업은 자동화하고, <strong>여러분의 에너지는 결정적인 순간을 위해 아껴두세요</strong>.',

  // Callout
  '💡 Tutoriel pratique disponible': '💡 실습 튜토리얼 제공',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Reborn Assistant로 <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">Ringmaster를 자동화하는 단계별 튜토리얼</a>을 따로 작성했습니다. 로테이션 설정, 사이클 간격, Heal Rain 매크로, 피해야 할 실수까지 다룹니다.',

  // RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — 차이점은?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    '둘 다 Assist 계열의 클래스이며 초보자들이 자주 혼동합니다.',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = 풀 서포트, 개인 화력 낮음, 파티에서는 필수, 솔로에서는 비효율적',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = 마법 DPS 지향, 솔로 사냥 가능, RM의 장시간 버프 일부를 잃음',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    '파티 플레이, FWC 출전, 또는 길드의 "기둥" 역할이 목표라면 Ringmaster를 선택하세요. 솔로에서 더 자율적인 Assist 클래스를 원한다면 Mentalist를 고르세요.',

  // Erreurs
  'Erreurs courantes de débutant Ringmaster': '초보 Ringmaster의 흔한 실수',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>정기적으로 리버프하지 않음</strong> — 5분 뒤 빠진 버프 하나가 때로는 DPS 한 명의 목숨보다 더 큰 대가를 치르게 합니다',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Heal Rain 중에 이동</strong> — AOE는 따라 움직이지 않으므로 아군이 범위에서 벗어납니다',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>너무 일찍 풀 INT 빌드로 전환</strong> — 충분한 HP 풀 없이는 Heal Rain을 시전하기도 전에 죽습니다',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>FP 포션을 무시</strong> — FP 없는 RM은 쓸모없는 RM입니다',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>DPS를 시도</strong> — 힐과 버프에 투자해야 할 시간을 낭비하게 됩니다',

  // CTA box
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Reborn Assistant로 Ringmaster를 최적화하세요',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    '버프 로테이션, 주기적 Heal Rain, 그리고 커스텀 매크로를 자동화하는 프리미엄 확장 프로그램입니다. 신용카드 없이 7일 무료 체험.',
  'Installer Reborn Assistant': 'Reborn Assistant 설치하기',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    '2026년 5월 16일 업데이트된 가이드 — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← 문서로 돌아가기',
};
