/**
 * Japanese translations for the 3 SEO long-tail pages.
 *  - docs/automatiser-ringmaster-flyff-universe.html  → automateRmJa
 *  - docs/meilleurs-outils-flyff-universe-2026.html   → toolsJa
 *  - docs/guide-ringmaster-flyff-universe.html        → guideRmJa
 *
 * Tone: natural Japanese player (です/ます).
 * Untranslated terms: Flyff Universe, Ringmaster, RM, HoP, Beef Up,
 *   Heart of Power, Mental Sign, Speed Pep, Cat's Reflex, Heal Rain,
 *   FP, HP, AOE, MP, Reborn Assistant, Reborn Vision, Premium,
 *   FlyffPedia, Madrigal Inside, FlyffOptimizer, Chrome Web Store,
 *   Google Cloud, Gala Lab, Stripe, Glaphan, Asteria, AFK, GCD,
 *   DPS, INT, STA, MMORPG, FWC, DevTools, CTRL+A, CTRL+O, OCR, JWT,
 *   BR, KR, JP, EU.
 */

// ─── automate-rm ────────────────────────────────────────────────────────────
export const automateRmJa = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">ホーム</a> › <a href="index.html">ドキュメント</a> › Ringmaster を自動化する',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Flyff Universe で Ringmaster を自動化する — 2026年完全ガイド',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'バフ、シーケンス、AOE ヒール、HP/FP 管理。指を疲れさせずに Ringmaster をパーティの柱にするためのステップバイステップ チュートリアルです。',

  // TOC
  '◆ Sommaire': '◆ 目次',
  'Pourquoi automatiser son Ringmaster': 'なぜ Ringmaster を自動化するのか',
  'Prérequis avant d\'automatiser': '自動化の前に必要なもの',
  'Identifier vos séquences Ringmaster': 'Ringmaster のシーケンスを特定する',
  'Configurer la rotation de buffs': 'バフのローテーションを設定する',
  'Programmer le Heal périodique': '定期ヒールを設定する',
  'Macros personnalisées (DPS, support, urgence)': 'カスタムマクロ(DPS、サポート、緊急時)',
  'Optimisation et erreurs courantes': '最適化とよくある失敗',
  'Aspect légal — ce qu\'il faut savoir': '法的側面 — 知っておくべきこと',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster(よく <strong>RM</strong> と略されます)は Flyff Universe の象徴的なサポートクラスです。役割は明確で、レベルに応じて5〜30分持続するバフ(Heart of Power、Beef Up、Mental Sign など)でパーティを生かし続け、Heal Rain で AOE 回復することです。紙の上では分かりやすい。しかし実際は、長時間のファーム中で最も疲れるクラスのひとつです。時間の80%を <strong>5分ごとのリバフ</strong>、<strong>10〜15秒ごとの Heal Rain 再詠唱</strong>、そしてパーティ全員の <strong>FP バーの監視</strong>に費やすことになります。',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    '自動化はあなたの判断を代わるものではありません。機械的なルーチン(完全なリバフシーケンス、定期ヒール、FP ポーションの使用)をキーボードから解放するだけです。あなたの手は <strong>本当に重要な瞬間</strong>のために自由になります。崩壊寸前のパーティ、暴走するウェーブ、RM を真っ先に狙うボスなどです。',
  '💡 Cas d\'usage typique': '💡 典型的な使い方',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Glaphan か Asteria で4時間のファームを始めるとします。自動化なし: 240分 ÷ 5分 = 48回の手動リバフサイクル。Reborn Assistant 設定済み: 1サイクルだけ、残りはバックグラウンドで動きます。編成が変わったりメンバーが死んだときだけ操作を取り戻します。',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    '何かを有効にする前に、しっかりとした土台を整えましょう。',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> をインストール済み(無料版は基本のヒールマクロしかカバーしません)。<a href="quickstart.html">インストールガイド</a>を参照してください。',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Ringmaster のバフを F2 → 0 のキーに割り当て</strong>、論理的な順序にしておきます(Heart of Power が先、AOE バフが次、シングルターゲットが最後)。',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain を § キー(または別の専用キー)に</strong> — Reborn Assistant がループで押すキーです。',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>FP ポーションの束</strong>をインベントリに用意。自動化はリソースを生み出してはくれません。',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>安定したファームゾーン</strong>: 強制テレポートやノックバックする mob のいるゾーンは避けます(位置がずれて AOE が崩れます)。',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'すべてのシーケンスが同じ価値ではありません。フルサポート RM ビルドの典型的な優先順位はこちらです。',
  'Séquences essentielles (rotation toutes les 5 min)': '必須シーケンス(5分ごとのローテーション)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — STA と攻撃力ブースト、必須',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — STA 固定値、パーティの最大 HP を上げます',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + 魔法ブースト、Mage や AOE Knight 向け',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — 攻撃速度、Blade や Ranger には絶大',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — 回避、厳しいゾーンで役立ちます',
  'Séquences situationnelles (à activer manuellement)': '状況別シーケンス(手動で発動)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — 自動化は厳禁、状況ごとに判断',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — 属性ダメージボーナス、状況によってはオプション',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'ここがシステムの心臓部です。Reborn Assistant は <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> の固定シーケンスを定期的に押せます。RM に合わせる方法はこうです。',
  'Préparer vos slots de séquences': 'シーケンススロットを準備する',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'シーケンスバーから Flyff のショートカットバーへ、この順序でシーケンスをドラッグしてください。',
  'Touche 1 → Heart of Power': 'キー 1 → Heart of Power',
  'Touche 2 → Beef Up': 'キー 2 → Beef Up',
  'Touche 3 → Mental Sign': 'キー 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'キー 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'キー 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'キー 6〜0 → 他に利用可能なバフ、または空欄',
  'Activer la rotation dans Reborn Assistant': 'Reborn Assistant でローテーションを有効化',
  'Dans le panneau Reborn, onglet Premium :': 'Reborn パネルの Premium タブで:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    '<strong>「シーケンスローテーション」</strong>のトグルを有効化',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    '<strong>サイクル間隔</strong>を最も短いバフの持続時間に設定(通常は5分)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    '<strong>キー間ディレイ</strong>を1秒に設定(シーケンスのアニメーションが再生される余裕を残します)',
  'Tester un cycle complet': '完全な1サイクルをテスト',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    '<code>CTRL+A</code> で開始します。アクティビティログを確認してください。<em>F2 pressed → 1 pressed → 2 pressed…</em> が順番に、それぞれ約1秒間隔で表示されるはずです。シーケンスが発動しない場合は、おそらくクールダウンか FP 不足です。ゲーム内で目視確認してください。',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain はバフのローテーションと並行して動かす必要があります。Reborn Assistant は15秒固定の定期マクロを提供しており、Heal Rain の AOE ゾーン(約12〜15秒持続)に完璧に合わせて調整されています。',
  'Assigner Heal Rain à la touche §': 'Heal Rain を § キーに割り当てる',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'デフォルトで、Reborn Assistant の定期マクロは <code>§</code> キーを押します。Flyff でこのキーに Heal Rain をドラッグしてください。',
  'Activer la macro périodique': '定期マクロを有効化する',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Premium パネルで <strong>「定期マクロ」</strong>のトグルを有効化します。システムが15秒ごとに Heal Rain を呼び出し、自動保存します。',
  '⚠️ Attention au positionnement': '⚠️ 位置取りに注意',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain はあなたを中心とした AOE です。常に動いていると(カイトや位置取り直し)、Heal Rain は DPS をカバーしません。静止するか、パーティ用の固定集合地点を決めてください。',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'ローテーションとヒールに加えて、Reborn Assistant Premium は <strong>3つの独立マクロ</strong>を提供します。Ringmaster で活かす方法はこちらです。',
  'Macro 1 — Pet feeding': 'マクロ1 — ペットの餌やり',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    '定期的に餌を必要とするペットがいる場合、<code>k,h</code> 型のシーケンス(ペットパネルキー + ペットヒール)を30秒ごとに設定します。ファーム中にペットが死ぬのを防ぎます。',
  'Macro 2 — Stack de FP potions': 'マクロ2 — FP ポーションスタック',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    '<code>y</code> 型のシーケンス(FP ポーションキー)を20秒ごとに設定して、FP を80%以上に保ちます。消費量と Heal Rain の頻度に応じて調整してください。',
  'Macro 3 — Anti-AFK': 'マクロ3 — AFK 対策',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    '<code>up,down</code> や <code>space</code> 型のシーケンスを4〜5分ごとに設定すると、長いファーム中の静かな時間帯に AFK 切断を回避できます。良識を持って使ってください。',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>キー間ディレイが短すぎる</strong> — シーケンスが飛ぶ場合は、キー間ディレイを1.5秒か2秒に増やしてください。少し遅くても100%通るサイクルの方が良いです。',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>グローバルクールダウンを超えてはいけない</strong> — Flyff には GCD(global cooldown)があります。速くスパムしすぎるとシーケンスが空振りに吸い込まれます。デフォルトの1秒ディレイはこの GCD を尊重しています。',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>サイクル途中で FP が枯れる</strong> — ローテーションが静かに止まります。FP ポーションマクロを有効化するか、INT/MP を上げてください。',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>パーティメンバーが AOE 範囲外</strong> — 定期ヒールは Heal Rain の半径(約12〜15m)内のプレイヤーしか回復しません。パーティと連携を取り、範囲内に留まってもらってください。',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>mob を倒したあとターゲットを失う</strong> — RM にとっては大きな問題ではありませんが、シングルターゲットのシーケンスもローテーションに入れている場合はターゲットを監視してください。',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    '拡張機能による繰り返し動作の自動化は、Flyff Universe の Gala Lab を含む一部のゲームサービスの<strong>利用規約に違反する可能性</strong>があります。Reborn Assistant は <strong>ゲームのメモリを読み取らず、ネットワークパケットを送らず、クライアントを改変しません</strong>。手動で押すのと同じキー入力をシミュレートするだけです。使用の責任は100%あなたにあります。',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Reborn Assistant が技術的に何をしているか(していないか)を正確に理解するには、<a href="../index.html#faq">メインページの FAQ</a> をご覧ください。',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Ringmaster を解放する準備はできましたか?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Chrome Web Store から30秒で Reborn Assistant をインストールできます。Premium 7日間無料トライアル、クレジットカード不要。',
  'Installer Reborn Assistant': 'Reborn Assistant をインストール',

  // Related cards
  '◆ Article lié': '◆ 関連記事',
  '◆ Documentation': '◆ ドキュメント',
  'Les meilleurs outils & extensions Flyff Universe 2026': '2026年版 Flyff Universe ベストツール&拡張機能',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Flyff Universe Ringmaster クラス完全ガイド',
  'Guide complet des fonctionnalités Premium': 'Premium 機能の完全ガイド',

  // Common
  '← Retour aux docs': '← ドキュメントに戻る',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Reborn Assistant をインストール"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Chrome Web Store から Reborn Assistant 拡張機能を追加し、ツールバーにピン留めします。',
  '"Identifier vos séquences Ringmaster"': '"Ringmaster のシーケンスを特定する"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    '主要シーケンスを書き出します: Heart of Power (HoP)、Beef Up、Mental Sign、Speed Pep、そして AOE ヒール(Heal Rain)。',
  '"Configurer la rotation de séquences"': '"シーケンスローテーションを設定する"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Reborn Assistant で F2 → 1-9 → 0 → F1 のローテーションを5分間隔(バフの典型的な持続時間)で有効化します。',
  '"Programmer le Heal périodique"': '"定期ヒールを設定する"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    '定期マクロを有効化して、パーティ内で15秒ごとに Heal Rain を発動させます。',
  '"Lancer l\'automatisation"': '"自動化を起動する"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'CTRL+A で開始し、アクティビティログを監視して、シーケンスのアニメーションに合わせてディレイを調整します。',
};

// ─── tools-2026 ──────────────────────────────────────────────────────────────
export const toolsJa = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">ホーム</a> › <a href="index.html">ドキュメント</a> › Flyff Universe ベストツール',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    '2026年版 Flyff Universe ベストツール&拡張機能',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Flyff Universe のゲームプレイを本当に変えてくれるツールのテスト・比較セレクション。拡張機能、翻訳ツール、計算機、データベースなど。',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe はコミュニティのおかげで成り立っている MMORPG です。便利なツールの大部分は運営ではなくプレイヤー自身から生まれています。私たちは3か月間(2026年2月〜5月)、最も人気のあるサードパーティ製ツールをテストし、定期的にプレイする人にとって役立つ順に <strong>本当に試す価値のある6本</strong>を選びました。',

  // Methodology callout
  '📌 Méthodologie': '📌 評価方法',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    '各ツールは4つの基準で評価しました。日々のゲームプレイでの実用性、アップデートの質(Flyff Universe のペースに追従しているか)、ユーザーデータの取り扱い、そして使いやすさです。商業提携は一切なし。Reborn Assistant のみ当サイト著者の制作物です(透明性を明示します)。',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Ringmaster 自動化拡張機能',
  '★ Rang I · Notre choix': '★ ランク I · 編集部の一押し',
  'Version gratuite': '無料版',
  'Premium 2,99€/mois': 'Premium 月額2.99€',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant は Flyff Universe プレイヤー向けの <strong>繰り返し動作の自動化</strong>に特化したブラウザ拡張機能です。特にバフローテーションが非常に煩雑な Ringmaster クラスを対象としています。この拡張は設定可能な間隔でキー入力をシミュレートします。X 分ごとのシーケンスローテーション、Heal Rain 用の15秒ごとの定期マクロ、最大3つのカスタムマクロが利用できます。',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    '無料版は基本機能をカバーします(自動 HP ヒール、6つのテーマ、15言語の UI)。Premium 版では完全なローテーション、カスタムマクロ、定期マクロが解放されます。RM メインプレイヤーが期待する装備一式です。',
  '✓ Points forts': '✓ 長所',
  '✗ Points faibles': '✗ 短所',
  '15 langues d\'interface, support international': '15言語の UI、国際的なサポート',
  'Données 100% locales (aucun tracking)': 'データは100%ローカル(トラッキングなし)',
  'Macros personnalisables jusqu\'à 3 séquences': 'カスタムマクロは最大3シーケンス',
  'Mises à jour régulières via Chrome Web Store': 'Chrome Web Store 経由で定期的にアップデート',
  'Chromium uniquement (pas Firefox)': 'Chromium のみ(Firefox 非対応)',
  'Premium nécessite compte Google': 'Premium には Google アカウントが必要',
  '→ Tester Reborn Assistant': '→ Reborn Assistant を試す',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — 多言語対応のゲーム内翻訳ツール',
  '★ Rang II': '★ ランク II',
  'Gratuit': '無料',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision は Flyff Universe 特有の問題を解決します。コミュニティは非常に国際的(BR、KR、JP、EU)で、多くのプレイヤーが自分の分からない言語のチャットに出くわします。Reborn Vision は画面に表示されたテキストを検出し、リアルタイムでオーバーレイ翻訳を提示するゲーム内翻訳ツールです。',
  'Traduction en temps réel multi-langues': '多言語のリアルタイム翻訳',
  '100% gratuit': '100%無料',
  'Configuration minimale': '最小限の設定',
  'OCR variable selon les polices': 'フォントによって OCR の精度が変動',
  'Consomme un peu de bande passante': '帯域幅を少し消費します',
  '→ Voir Reborn Vision': '→ Reborn Vision を見る',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — リファレンスのデータベース',
  '★ Rang III': '★ ランク III',
  'Site web': 'ウェブサイト',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia は Flyff Universe 最大のコミュニティ wiki です。アイテム名検索、mob ごとの専用ページ(ドロップ、出現場所、獲得 EXP)、クエストツリー、クラス情報など。クエストに詰まったり、特定のアイテムをどこでファームすべきか調べるときに必須です。',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    '共同更新のため、貢献者によって品質に差はありますが、全体としては事実上の標準です。定期的にプレイするなら必須ブックマーク。',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — ステータスとビルドの計算',
  '★ Rang IV': '★ ランク IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    '装備、jewelry、バフを考慮し、DPS、生存性、ヒール出力を正確に推定してくれるステータス計算機です。ビルド変更時や2つの jewelry を比較したいときに特に役立ちます。',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'UI はやや無骨ですが、数式は堅実です。複数のコミュニティ版が存在します — 最新のアップデートのものを選んでください。',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — コミュニティと戦略ガイド',
  '★ Rang V': '★ ランク V',
  'Site web / Discord': 'ウェブサイト / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    '厳密にはツールではありませんが、貴重なリソースです。クラス別ビルドガイド、ボス攻略、現在のメタ、サーバー経済など。エンドゲームプレイヤーが書いた内容なので、汎用ガイドにはない視点が得られます。',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — jewelry の最適化',
  '★ Rang VI': '★ ランク VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'あなたの装備を入力すると、特定のステータス(攻撃、HP、Cast Speed など)を最大化する最適な jewelry の組み合わせを計算してくれるソルバーです。ニッチですが、1%が結果を左右するエンドゲームでは驚くほど効果的です。',

  // How to choose
  'Comment choisir ?': 'どう選ぶ?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    '上記の順位は、定期的なプレイヤーにとっての有用性の頻度に基づく主観的なランキングです。選択の参考になる3つのプロフィールはこちらです。',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'RM や Mentalist でよくファームする方',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'まず Reborn Assistant Premium、続いてドロップ確認用に FlyffPedia。',
  'Vous jouez avec une guilde internationale': '国際的なギルドでプレイする方',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision(翻訳)+ Madrigal Inside(コミュニティ Discord)。',
  'Vous êtes end-game et optimisez vos builds': 'エンドゲームでビルドを最適化したい方',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator と FlyffOptimizer の組み合わせ、加えて素材ファームの自動化に Reborn Assistant。',

  // Tools to avoid
  'Outils à éviter': '避けるべきツール',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    '「Flyff Universe」を謳うツールがすべて正規とは限りません。以下のプログラムには注意してください。',
  'Demandent vos identifiants Gala Lab': 'Gala Lab の認証情報を要求するもの',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    '正規のツールがログイン情報を要求することはありません。100%詐欺です。',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Windows の .exe 実行ファイルとしてインストールするもの',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    '明確な紹介ページがない場合、キーロガーやマルウェアのリスクがあります。',
  'Promettent du gold gratuit, du level boost ou des items': '無料 gold、レベルブースト、アイテムを約束するもの',
  '. Toujours arnaque ou banwave imminente.': '。常に詐欺か、間もなく BAN ウェーブが来ます。',
  'N\'ont pas de version officielle': '公式版がないもの',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'Chrome Web Store、GitHub、または明確な法的表記のあるサイトに存在しないもの。',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 嘘をつかない基準',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    '正規のツールには必ず、目に見えるプライバシーポリシー、活発なサポートチャネル(Discord、メール)、そして Chrome Web Store のページか公開された GitHub リポジトリがあります。Reborn Assistant と Reborn Vision はこの3条件をすべて満たしています。',

  // Footer
  'Article mis à jour le 16 mai 2026.': '記事更新日: 2026年5月16日。',

  // Common back-link
  '← Retour aux docs': '← ドキュメントに戻る',
};

// ─── guide-ringmaster ───────────────────────────────────────────────────────
export const guideRmJa = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">ホーム</a> › <a href="index.html">ドキュメント</a> › Ringmaster ガイド',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Flyff Universe Ringmaster — 2026年完全ガイド',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    '役割、バフ、ビルド、装備、ローテーション。レベル60帯からエンドゲームまで、2026年の Flyff Universe で Ringmaster をプレイするために知っておくべきすべて。',

  // Sections
  'Qu\'est-ce qu\'un Ringmaster ?': 'Ringmaster とは?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong>(RM)は Flyff Universe の Assist 系統の最終転職先です。<strong>ゲームのサポートクラス</strong>であり、主な役割はダメージを与えることではなく、長時間バフと AOE ヒールのループによって <em>パーティを生存させ強化すること</em>です。Ringmaster がいないと、エンドゲームのパーティは1ゾーンをクリアするのに2〜3倍の時間がかかり、不測の pull にも遥かに弱くなります。',
  'Quelques caractéristiques qui définissent la classe :': 'クラスを定義するいくつかの特徴。',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>長時間バフ</strong>(5〜30分)でパーティのステータスを底上げ: 攻撃、防御、速度、回避',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>、半径約12〜15m 内のすべての味方を継続回復する AOE',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '経験値ペナルティなしで死亡プレイヤーを <strong>Resurrection</strong>',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>個人のバーストダメージは非常に低い</strong> — RM 単独では効率よく敵を倒せません',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>ほぼ常にパーティでのプレイが前提</strong>、もしくはバフ・回復対象のサブキャラが必要',

  'Le rôle du Ringmaster en groupe': 'パーティ内での Ringmaster の役割',
  'Trois rôles principaux selon le contexte de jeu :': 'プレイ状況に応じた3つの主な役割。',
  'Farm rapide (PvE classique)': '高速ファーム(通常 PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    '1人または複数の DPS をファームスポットでサポートします。仕事は5分ごとのリバフ、Heal Rain の継続詠唱、FP の監視です。とても反復的で、まさに自動化が真価を発揮する場面です。',
  'Raids & boss': 'レイドとボス',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Glaphan、Bang、Aibatt のように大きなバーストダメージを持つボス。リズムが変わります。定期ヒールは減り、手動のバーストヒールが増え、ときには Resurrection を予測する必要も。ここでは自動化は二次的で、自分で操作を握る必要があります。',
  'FWC (Flyff World Championships)': 'FWC(Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    '公式大会、超精密なメタゲーム。RM は単なるユーティリティ要員ではなく、バフタイミングを同期させた最適化編成に貢献します。ローテーションを暗記しているかどうかが重要になります。大会のルールによっては自動化が禁止されることがあるので、必ず確認してください。',

  'Les buffs essentiels du Ringmaster': 'Ringmaster の必須バフ',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    '優先度順に、習得してローテーションに組み込むべきバフはこちらです。',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ 最優先 · 30分',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'パーティ全員に STA と攻撃力ブースト。Ringmaster の代名詞バフで、ローテーションの最初に発動します。',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ 高優先度 · 15分',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'パーティの最大 HP を増やします。1人でも HP キャップに達していないと崩壊しうるゾーンでは必須です。',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'パーティの INT ブースト。Mage、AOE Knight、魔法スケールのスキルを使う Ranger には絶大な効果。',
  'Speed Pep': 'Speed Pep',
  '15 min': '15分',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    '攻撃速度を上昇。Blade と Ranger には game-changer、Mage にはそれほど重要ではありません。',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    '回避ブースト。素早い物理攻撃を多く持つ mob のゾーンで役立ちます。',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · 約15秒',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'あなたを中心とした AOE ヒール。ファーム中ずっとループで再詠唱します。半径12〜15m 以内の味方全員をカバーします。',

  'Build STA vs INT — Quel build choisir ?': 'STA ビルド vs INT ビルド — どちらを選ぶ?',
  'Deux écoles principales en 2026 :': '2026年の主流は2つの流派です。',
  'Critère': '基準',
  'Build STA Full': 'STA フルビルド',
  'Build INT Hybrid': 'INT ハイブリッドビルド',
  '<strong>Stats principaux</strong>': '<strong>メインステータス</strong>',
  'Full STA, INT minimum requis pour les buffs': 'STA フル、INT はバフ発動に必要な最低限',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': 'STA/INT 約50/50、レベルにより30/70になることも',
  '<strong>HP / Survie</strong>': '<strong>HP / 生存性</strong>',
  'Excellent — pool énorme, survit aux pulls accidentels': '優秀 — プールが大きく、不測の pull でも生存',
  'Moyen — exige plus d\'attention du joueur': '普通 — プレイヤーの注意力をより要求',
  '<strong>Puissance des heals</strong>': '<strong>ヒール威力</strong>',
  'Correct — suffit pour la plupart des situations': '十分 — 大半の状況には足ります',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': '優秀 — Heal Rain などのヒールは INT に強くスケール',
  '<strong>FP pool</strong>': '<strong>FP プール</strong>',
  'Faible — nécessite plus de potions': '低い — より多くのポーションが必要',
  'Élevé — gestion FP plus confortable': '高い — FP 管理がより楽',
  '<strong>Recommandé pour</strong>': '<strong>推奨対象</strong>',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': '初心者、危険の少ないファーム、ソロユーティリティ RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': '経験者、難関レイド、FWC、エンドゲーム',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'STA フルビルドは最も寛容で最も普及している型です。INT ハイブリッドは要求が高い反面、ヒール出力で大きな見返りがあります — 競技コンテンツには必須です。',

  'Équipement recommandé': '推奨装備',
  'Armes': '武器',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff(杖)</strong> — INT スケールが最高、INT ハイブリッドビルド向け',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick(ステッキ)</strong> — バランス型、汎用',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    'オフハンドに <strong>Shield(盾)</strong> — 防御力アップ、STA フルでは強く推奨',
  'Armure': '防具',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    'STA フル向けの <strong>STA セット jewelry</strong>(Tinerbol、Lord などレベル帯に応じて)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    'ハイブリッド向けの <strong>INT セット jewelry</strong>、もしくは STA/INT 混合',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '2/4/6ピースのセットボーナスを得るため、<strong>常に完全セットを優先</strong>',
  'Bijoux (jewelry)': 'アクセサリ(jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'jewelry の最適化が RM を「十分」から「優秀」へ引き上げる場所です。レベル帯に応じて優先ステータスを最大化する組み合わせを特定するには、計算機をご利用ください(<a href="meilleurs-outils-flyff-universe-2026.html">ツール比較記事</a>参照)。',

  'Rotation et gestion du rythme': 'ローテーションとリズム管理',
  'Une rotation efficace en farm classique tient en 3 timings :':
    '通常ファームでの効率的なローテーションは3つのタイミングで成り立ちます。',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>5分ごと</strong> — パーティの完全リバフ(HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>12〜15秒ごと</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>常時</strong> — 緊急バーストヒールに備えて個別 HP を監視',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    '最初の2つのタイミングは機械的で <strong>自動化</strong>に最適。3つ目は人間の注意力を要求します。これが現代の Ringmaster の鍵となる判断です。反復作業を自動化して、<strong>決定的な瞬間にエネルギーを残す</strong>ことです。',
  '<strong>💡 Tutoriel pratique disponible</strong>': '<strong>💡 実践チュートリアルあり</strong>',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Reborn Assistant で <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">Ringmaster を自動化するためのステップバイステップ チュートリアル</a>を用意しました。ローテーション設定、サイクル間隔、Heal Rain マクロ、避けるべきミスまで網羅しています。',

  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — 何が違う?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Assist 系統の2クラスで、初心者によく混同されます。',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = フルサポート、個人ダメージは低い、パーティでは必須、ソロでは非効率',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = 魔法 DPS 寄り、ソロでファーム可能、RM の長時間バフの一部を失う',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'パーティプレイ、FWC、ギルドの「柱」になりたいなら → Ringmaster。ソロで自立した Assist 系クラスが欲しいなら → Mentalist。',

  'Erreurs courantes de débutant Ringmaster': 'Ringmaster 初心者によくあるミス',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>定期的にリバフしない</strong> — 5分経過後の欠けたバフが、DPS の一生分より高くつくことがあります',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Heal Rain 中に動く</strong> — AOE は追従せず、味方が範囲外に出ます',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>早すぎる INT フルビルド</strong> — HP プールが足りないと、Heal Rain を撃つ前に死にます',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>FP ポーションを無視する</strong> — FP のない RM は役立たずの RM',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>DPS をしようとする</strong> — ヒールとバフに使うべき時間を浪費するだけです',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Reborn Assistant で Ringmaster を最適化',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'バフローテーション、定期 Heal Rain、カスタムマクロを自動化するプレミアム拡張機能。クレジットカード不要、7日間無料トライアル。',
  'Installer Reborn Assistant': 'Reborn Assistant をインストール',
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'ガイド更新日: 2026年5月16日 — Flyff Universe (Gala Lab)。',

  // Common back-link
  '← Retour aux docs': '← ドキュメントに戻る',
};
