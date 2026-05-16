/**
 * Turkish (tr) translations for the 3 SEO long-tail pages.
 *
 * Sources :
 *   - docs/automatiser-ringmaster-flyff-universe.html
 *   - docs/meilleurs-outils-flyff-universe-2026.html
 *   - docs/guide-ringmaster-flyff-universe.html
 *
 * Convention : la clé est la phrase française exacte présente dans le HTML
 * (balises inline HTML préservées à l'identique), la valeur est la traduction
 * turque. Les termes techniques restent non traduits (Flyff Universe, Ringmaster,
 * RM, HoP, Beef Up, Heart of Power, Mental Sign, Speed Pep, Cat's Reflex,
 * Heal Rain, FP, HP, AOE, MP, Reborn Assistant, Reborn Vision, Premium,
 * FlyffPedia, Madrigal Inside, FlyffOptimizer, Chrome Web Store, Google Cloud,
 * Gala Lab, Stripe, Glaphan, Asteria, AFK, GCD, DPS, INT, STA, MMORPG, FWC,
 * DevTools, CTRL+A, CTRL+O, OCR, JWT).
 */

// ─── automatiser-ringmaster-flyff-universe.html ─────────────────────────────
export const automateRmTr = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Ana Sayfa</a> › <a href="index.html">Dokümantasyon</a> › Ringmaster\'ı Otomatikleştirme',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Flyff Universe\'de Ringmaster\'ı Otomatikleştirme — Kapsamlı 2026 Rehberi',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buff\'lar, sekanslar, AOE heal, HP/FP yönetimi: Ringmaster\'ınızı parmaklarınızı yormadan grubun direği haline getirecek adım adım rehber.',

  // TOC
  '◆ Sommaire': '◆ İçindekiler',
  'Pourquoi automatiser son Ringmaster': 'Ringmaster\'ı neden otomatikleştirmeli',
  'Prérequis avant d\'automatiser': 'Otomatikleştirmeden önce gereksinimler',
  'Identifier vos séquences Ringmaster': 'Ringmaster sekanslarınızı belirleyin',
  'Configurer la rotation de buffs': 'Buff rotasyonunu yapılandırın',
  'Programmer le Heal périodique': 'Periyodik Heal\'i programlayın',
  'Macros personnalisées (DPS, support, urgence)': 'Özel makrolar (DPS, destek, acil durum)',
  'Optimisation et erreurs courantes': 'Optimizasyon ve sık yapılan hatalar',
  'Aspect légal — ce qu\'il faut savoir': 'Yasal durum — bilmeniz gerekenler',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Ringmaster (genellikle <strong>RM</strong> olarak kısaltılır) Flyff Universe\'in simge destek sınıfıdır. Görevi açıktır: seviyeye göre 5 ila 30 dakika süren buff\'larla (Heart of Power, Beef Up, Mental Sign…) grubu hayatta tutmak ve Heal Rain AOE ile hasarı iyileştirmek. Kağıt üzerinde basit görünür. Pratikte ise uzun farm seanslarında oynanması en yorucu sınıflardan biridir: zamanınızın %80\'ini <strong>her 5 dakikada bir rebuff yapmak</strong>, <strong>Heal Rain\'i her 10-15 saniyede yeniden başlatmak</strong> ve grubun her üyesinin <strong>FP barlarını izlemek</strong> ile geçirirsiniz.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Otomasyon, sizin muhakemenizin yerini almaz. Klavyenizi mekanik rutinlerden kurtarır: tam rebuff sekansı, periyodik heal, FP iksiri kullanımı. Elleriniz <strong>gerçekten önemli anlar</strong> için serbest kalır: yaklaşan bir wipe, kontrolden çıkan bir wave, önce RM\'yi hedef alan bir boss.',
  '💡 Cas d\'usage typique': '💡 Tipik kullanım senaryosu',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Glaphan veya Asteria\'da 4 saatlik bir farm seansı başlatıyorsunuz. Otomasyon olmadan: 240 dakika ÷ 5 dakika = 48 manuel rebuff döngüsü. Yapılandırılmış Reborn Assistant ile: 1 döngü, gerisi arka planda çalışır. Yalnızca grup kompozisyonu değişirse veya bir üye ölürse kontrolü geri alırsınız.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Herhangi bir şeyi etkinleştirmeden önce sağlam temeller atın:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> kurulu olmalı (ücretsiz sürüm yalnızca temel heal makrosunu kapsar). <a href="quickstart.html">Kurulum rehberine</a> bakın.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Ringmaster buff\'larınız F2 → 0 tuşlarına atanmış</strong>, mantıklı bir sırayla (önce Heart of Power, sonra AOE buff\'lar, en son single-target).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain § tuşunda (veya başka bir özel tuşta)</strong> — Reborn Assistant\'ın döngü halinde tetikleyeceği tuş budur.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Envanterde bir yığın FP iksiri</strong> — otomasyon kaynakları sıfırdan üretmez.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Stabil bir farm bölgesi</strong>: zorunlu ışınlanmaların veya geri iten mob\'ların olduğu alanlardan kaçının (pozisyonları kaydırır ve AOE\'yi bozar).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Tüm sekanslar eşit değildir. İşte tam destek RM build\'inin tipik hiyerarşisi:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Temel sekanslar (her 5 dk\'da rotasyon)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — STA + saldırı boost\'u, vazgeçilmez',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — sabit STA, grubun maks HP\'sini artırır',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — Mage\'lar / AOE Knight\'lar için INT + büyü boost\'u',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, Blade\'ler / Ranger\'lar için müthiş',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, zor bölgelerde işe yarar',
  'Séquences situationnelles (à activer manuellement)': 'Duruma bağlı sekanslar (manuel olarak etkinleştir)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — asla otomatik değil, duruma göre',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — element hasarı bonusu, bağlama göre opsiyonel',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Sistemin kalbi burada. Reborn Assistant, düzenli aralıklarla sabit bir <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> sekansına basabilir. RM\'nizle hizalamak için:',
  'Préparer vos slots de séquences': 'Sekans slot\'larınızı hazırlayın',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Sekanslarınızı sekans barından Flyff kısayol barına şu sırayla sürükleyin:',
  'Touche 1 → Heart of Power': 'Tuş 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Tuş 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Tuş 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Tuş 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Tuş 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Tuş 6\'dan 0\'a → diğer mevcut buff\'larınız veya boş',
  'Activer la rotation dans Reborn Assistant': 'Reborn Assistant\'ta rotasyonu etkinleştirin',
  'Dans le panneau Reborn, onglet Premium :': 'Reborn panelinde, Premium sekmesi:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    '<strong>«Sekans Rotasyonu»</strong> anahtarını etkinleştirin',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    '<strong>Döngüler arası aralığı</strong> en kısa buff\'ın süresine ayarlayın (genellikle 5 dk)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    '<strong>Tuşlar arası gecikmeyi</strong> 1 saniyeye ayarlayın (sekans animasyonunun oynaması için zaman bırakır)',
  'Tester un cycle complet': 'Tam bir döngüyü test edin',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    '<code>CTRL+A</code> ile başlatın. Aktivite log\'unu izleyin: ardışık olarak <em>F2 pressed → 1 pressed → 2 pressed…</em> görmelisiniz, her birinin arasında ~1 saniye. Bir sekans çalışmazsa muhtemelen cooldown veya FP eksikliğidir — oyunda görsel olarak doğrulayın.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain, buff rotasyonuyla paralel çalışmalıdır. Reborn Assistant, Heal Rain\'in AOE alanına (yaklaşık 12-15 saniye sürer) tam olarak ayarlanmış sabit 15 saniyelik bir periyodik makro sunar.',
  'Assigner Heal Rain à la touche §': 'Heal Rain\'i § tuşuna atayın',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Varsayılan olarak, Reborn Assistant\'ın periyodik makrosu <code>§</code> tuşunu tetikler. Flyff\'te Heal Rain\'i bu tuşa sürükleyin.',
  'Activer la macro périodique': 'Periyodik makroyu etkinleştirin',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Premium panelinde <strong>«Periyodik Makro»</strong> anahtarını açın. Sistem Heal Rain\'i her 15 saniyede bir otomatik olarak çağıracaktır.',
  '⚠️ Attention au positionnement': '⚠️ Pozisyonlanmaya dikkat',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain üzerinize merkezlenmiş bir AOE\'dir. Sürekli hareket ederseniz (kite veya yeniden konumlanma), Heal Rain\'iniz DPS\'leri kapsamaz. Sabit kalın veya grup için sabit bir toplanma noktası belirleyin.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Rotasyon ve heal\'in yanı sıra Reborn Assistant Premium, <strong>3 bağımsız makro</strong> sunar. Ringmaster için bunları nasıl değerlendirilir:',
  'Macro 1 — Pet feeding': 'Makro 1 — Pet besleme',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Düzenli yemek isteyen bir pet\'iniz varsa, her 30 saniyede bir <code>k,h</code> tipi bir sekans (pet panel tuşu + heal pet) programlayın. Siz farm yaparken pet\'inizin ölmesini önler.',
  'Macro 2 — Stack de FP potions': 'Makro 2 — FP iksiri yığını',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'FP\'nizi %80\'in üzerinde tutmak için her 20 saniyede bir <code>y</code> tipi bir sekans (FP iksiri tuşu) yapılandırın. Tüketiminize ve Heal Rain temposuna göre ayarlayın.',
  'Macro 3 — Anti-AFK': 'Makro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Her 4-5 dakikada bir <code>up,down</code> veya <code>space</code> tipi bir sekans, sakin bir dönemde uzun bir farm sırasında AFK bağlantı kesilmesini önler. Sağduyuyla kullanın.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Tuşlar arası gecikme çok kısa</strong> — sekanslarınız atlanırsa tuşlar arası gecikmeyi 1,5 veya 2 saniyeye çıkarın. %100 tamamlanan biraz daha yavaş bir döngü daha iyidir.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Global cooldown\'u aşmayın</strong> — Flyff\'in bir GCD\'si vardır (global cooldown). Çok hızlı spam yaparsanız sekanslar boşa düşer. Varsayılan 1 sn gecikme bu GCD\'ye uyar.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>Döngünün ortasında FP\'nin tükenmesi</strong> — rotasyonunuz sessizce durur. FP iksiri makrosunu etkinleştirin veya INT/MP\'nizi artırın.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>AOE alanı dışındaki grup üyeleri</strong> — periyodik heal yalnızca Heal Rain menzilindeki oyuncuları iyileştirir (~12-15m). Grupla iletişim kurun: menzil içinde kalmalıdırlar.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Bir mob öldükten sonra hedef kaybı</strong> — RM için sorun değil, ancak rotasyonda single-target sekanslarınız varsa hedeflerinizi izleyin.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Tekrarlayan eylemlerin bir uzantı aracılığıyla otomatikleştirilmesi, Flyff Universe için Gala Lab\'inkiler dahil bazı oyun hizmetlerinin <strong>kullanım koşullarını ihlal edebilir</strong>. Reborn Assistant <strong>oyunun belleğini okumaz, ağ paketleri göndermez, istemciyi değiştirmez</strong>: yalnızca elle basacağınız tuşları simüle eder. Yapılan kullanımdan %100 siz sorumlusunuz.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Reborn Assistant\'ın teknik olarak tam olarak ne yaptığını (ve ne yapmadığını) anlamak için <a href="../index.html#faq">ana sayfanın SSS bölümüne</a> bakın.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Ringmaster\'ınızı özgürleştirmeye hazır mısınız?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Reborn Assistant\'ı Chrome Web Store\'dan 30 saniyede kurun. Kredi kartı gerekmez, 7 gün ücretsiz Premium deneme.',
  'Installer Reborn Assistant': 'Reborn Assistant\'ı Kur',

  // Related cards
  '◆ Article lié': '◆ İlgili makale',
  '◆ Documentation': '◆ Dokümantasyon',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Flyff Universe 2026\'nın en iyi araçları ve uzantıları',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Flyff Universe Ringmaster sınıfı tam rehberi',
  'Guide complet des fonctionnalités Premium': 'Premium özelliklerinin tam rehberi',

  // Common
  '← Retour aux docs': '← Dokümantasyona dön',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Reborn Assistant\'ı Kur"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Reborn Assistant uzantısını Chrome Web Store\'dan ekleyin ve araç çubuğuna sabitleyin.',
  '"Identifier vos séquences Ringmaster"': '"Ringmaster sekanslarınızı belirleyin"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Anahtar sekanslarınızı listeleyin: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep ve AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Sekans rotasyonunu yapılandırın"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Reborn Assistant\'ta F2 → 1-9 → 0 → F1 rotasyonunu 5 dakikalık bir aralıkla (buff\'larınızın tipik süresi) etkinleştirin.',
  '"Programmer le Heal périodique"': '"Periyodik Heal\'i programlayın"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Grupta her 15 saniyede bir Heal Rain\'i tetiklemek için periyodik makroyu etkinleştirin.',
  '"Lancer l\'automatisation"': '"Otomasyonu başlatın"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'CTRL+A ile başlatın, aktivite log\'unu izleyin, gecikmeleri sekans animasyonlarınıza göre ayarlayın.',
};

// ─── meilleurs-outils-flyff-universe-2026.html ──────────────────────────────
export const toolsTr = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Ana Sayfa</a> › <a href="index.html">Dokümantasyon</a> › En İyi Flyff Universe Araçları',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    '2026\'nın En İyi Flyff Universe Araçları ve Uzantıları',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Flyff Universe oyun deneyiminizi gerçekten değiştiren araçların test edilmiş ve karşılaştırılmış seçkisi: uzantılar, çevirmenler, hesaplayıcılar, veritabanları.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe, topluluğu sayesinde ayakta duran bir MMORPG\'dir: faydalı araçların büyük bir kısmı yayıncıdan değil, doğrudan oyunculardan gelir. 3 ay boyunca (Şubat → Mayıs 2026) en popüler üçüncü taraf araçları test ettik ve düzenli oyuncu için faydalarına göre sıralanmış, <strong>gerçekten denemeye değer 6 tanesini</strong> seçtik.',

  // Methodology callout
  '📌 Méthodologie': '📌 Metodoloji',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Her araç 4 kriter üzerinden değerlendirildi: günlük oyun deneyimindeki gerçek faydası, güncelleme kalitesi (Flyff Universe\'in temposunu yakalıyor mu), kullanıcı verilerine saygısı ve kullanım kolaylığı. Hiçbir ticari ortaklık yok: yalnızca Reborn Assistant bu sitenin yazarı tarafından yayınlanıyor (üstlenilmiş şeffaflık).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — Ringmaster otomasyon uzantısı',
  '★ Rang I · Notre choix': '★ Sıra I · Bizim seçimimiz',
  'Version gratuite': 'Ücretsiz sürüm',
  'Premium 2,99€/mois': 'Premium 2,99€/ay',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant, Flyff Universe oyuncuları için <strong>tekrarlayan eylemlerin otomasyonuna</strong> ayrılmış bir tarayıcı uzantısıdır — özellikle buff rotasyonları meşhur derecede sıkıcı olan Ringmaster sınıfı için. Uzantı, yapılandırılabilir aralıklarla klavye basışlarını simüle eder: her X dakikada bir sekans rotasyonu, Heal Rain için her 15 saniyede bir periyodik makro ve 3 adede kadar özelleştirilebilir makro.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'Ücretsiz sürüm temelleri kapsar (otomatik HP heal, 6 tema, 15 arayüz dili). Premium sürüm tam rotasyonu, özel makroları ve periyodik makroyu açar — bir RM main\'in beklediği cephanelik.',
  '✓ Points forts': '✓ Güçlü yönler',
  '✗ Points faibles': '✗ Zayıf yönler',
  '15 langues d\'interface, support international': '15 arayüz dili, uluslararası destek',
  'Données 100% locales (aucun tracking)': 'Veriler %100 yerel (hiç takip yok)',
  'Macros personnalisables jusqu\'à 3 séquences': '3 sekansa kadar özelleştirilebilir makrolar',
  'Mises à jour régulières via Chrome Web Store': 'Chrome Web Store üzerinden düzenli güncellemeler',
  'Chromium uniquement (pas Firefox)': 'Yalnızca Chromium (Firefox yok)',
  'Premium nécessite compte Google': 'Premium, Google hesabı gerektirir',
  '→ Tester Reborn Assistant': '→ Reborn Assistant\'ı dene',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Çok dilli oyun içi çevirmen',
  '★ Rang II': '★ Sıra II',
  'Gratuit': 'Ücretsiz',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision, Flyff Universe\'e özgü bir sorunu çözer: topluluk son derece uluslararasıdır (BR, KR, JP, EU) ve birçok oyuncu hakim olmadığı dillerde sohbetlerle karşılaşır. Reborn Vision, ekranda görüntülenen metni algılayan ve gerçek zamanlı overlay çeviri sunan bir oyun içi çevirmendir.',
  'Traduction en temps réel multi-langues': 'Çok dilli gerçek zamanlı çeviri',
  '100% gratuit': '%100 ücretsiz',
  'Configuration minimale': 'Asgari yapılandırma',
  'OCR variable selon les polices': 'Yazı tipine göre değişken OCR',
  'Consomme un peu de bande passante': 'Biraz bant genişliği tüketir',
  '→ Voir Reborn Vision': '→ Reborn Vision\'ı gör',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — Referans veritabanı',
  '★ Rang III': '★ Sıra III',
  'Site web': 'Web sitesi',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia, Flyff Universe için en kapsamlı topluluk wiki\'sidir. İsme göre eşya araması, her mob için özel sayfa (drop\'lar, konum, verilen exp), quest ağaçları, sınıf bilgileri. Bir quest\'te takıldığınızda veya belirli bir eşyayı nerede farm edeceğinizi ararken vazgeçilmez.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'İşbirlikçi güncellemeler, katılımcılara göre değişken kalite, ancak genel olarak fiili standart. Düzenli her oyuncu için zorunlu bookmark.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Stat ve build hesaplamaları',
  '★ Rang IV': '★ Sıra IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Ekipmanınızı, jewelry\'lerinizi ve buff\'larınızı hesaba katan ve size DPS\'nizin, dayanıklılığınızın veya healing output\'unuzun kesin bir tahminini veren bir stat hesaplayıcısı. Özellikle bir build değişikliğinde veya iki jewelry\'yi karşılaştırmak için kullanışlıdır.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Arayüz biraz sade ancak matematiksel formül sağlam. Birden fazla topluluk sürümü mevcut — en son güncellenmiş olanını seçin.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Topluluk ve stratejik rehberler',
  '★ Rang V': '★ Sıra V',
  'Site web / Discord': 'Web sitesi / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Tam anlamıyla bir araç değil ama değerli bir kaynak: sınıf bazında build rehberleri, boss stratejileri, güncel meta, sunucu ekonomisi. İçerik end-game oyuncular tarafından yazılmıştır, bu da genel rehberlerde bulunmayan bir perspektif sunar.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Jewelry optimizasyonu',
  '★ Rang VI': '★ Sıra VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Ekipmanınızı alıp belirli bir stat\'i (Saldırı, HP, Cast Speed, vb.) maksimize etmek için en uygun jewelry kombinasyonunu hesaplayan bir solver. Niş ama end-game\'de her % önemli olduğunda son derece etkili.',

  // How to choose
  'Comment choisir ?': 'Nasıl seçmeli?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'Yukarıdaki sıralama, düzenli bir oyuncu için fayda sıklığına dayalı öznel sıralamamızdır. Seçiminizi yönlendirmek için üç tipik profil:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Çok farm yapıyorsunuz, özellikle RM veya Mentalist olarak',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Öncelik Reborn Assistant Premium, sonra drop\'lar için FlyffPedia.',
  'Vous jouez avec une guilde internationale': 'Uluslararası bir guild ile oynuyorsunuz',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (çevirmen) + Madrigal Inside (topluluk Discord\'u).',
  'Vous êtes end-game et optimisez vos builds': 'End-game\'desiniz ve build\'lerinizi optimize ediyorsunuz',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer birlikte, artı materyal farm\'ını otomatikleştirmek için Reborn Assistant.',

  // Tools to avoid
  'Outils à éviter': 'Kaçınılacak araçlar',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    '"Flyff Universe" olarak pazarlanan tüm araçlar meşru değildir. Şu özellikteki programlardan kaçının:',
  'Demandent vos identifiants Gala Lab': 'Gala Lab kimlik bilgilerinizi isteyen',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'hiçbir meşru aracın login\'inize ihtiyacı yoktur. Bunlar %100 dolandırıcılıktır.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Windows .exe çalıştırılabilir olarak yüklenen',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'net bir tanıtım sayfası olmadan. Keylogger veya malware riski.',
  'Promettent du gold gratuit, du level boost ou des items': 'Ücretsiz gold, level boost veya eşya vaat eden',
  '. Toujours arnaque ou banwave imminente.': '. Her zaman dolandırıcılık veya yaklaşan banwave.',
  'N\'ont pas de version officielle': 'Resmi bir sürümü olmayan',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'Chrome Web Store\'da, GitHub\'da veya net yasal bildirimleri olan bir sitede.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 Yalan söylemeyen kriter',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Meşru bir aracın her zaman görünür bir gizlilik politikası, aktif bir destek kanalı (Discord, e-posta) ve bir Chrome Web Store kaydı veya açık bir GitHub repo\'su vardır. Reborn Assistant ve Reborn Vision bu 3 kutuyu da işaretler.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Makale 16 Mayıs 2026\'da güncellendi.',

  // Common back-link
  '← Retour aux docs': '← Dokümantasyona dön',
};

// ─── guide-ringmaster-flyff-universe.html ───────────────────────────────────
export const guideRmTr = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Ana Sayfa</a> › <a href="index.html">Dokümantasyon</a> › Ringmaster Rehberi',
  'Ringmaster Flyff Universe — Guide Complet 2026': 'Flyff Universe Ringmaster — Kapsamlı 2026 Rehberi',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Rol, buff\'lar, build\'ler, ekipman, rotasyon: 2026\'da Flyff Universe\'de Ringmaster oynamak için, seviye 60\'tan end-game\'e kadar bilmeniz gereken her şey.',

  // Qu'est-ce qu'un Ringmaster
  'Qu\'est-ce qu\'un Ringmaster ?': 'Ringmaster nedir?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    '<strong>Ringmaster</strong> (RM), Flyff Universe\'deki Assist dalının son ilerlemesidir. <strong>Oyunun destek sınıfıdır</strong>: temel rolü hasar vermek değil, uzun süreli buff\'lar ve döngülü AOE heal aracılığıyla bir <em>grubu hayatta tutmak ve onu daha güçlü kılmaktır</em>. Ringmaster olmadan bir end-game grubu, bir bölgeyi temizlemek için iki ila üç kat daha fazla zaman harcar — ve kazara pull\'lara karşı çok daha kötü hayatta kalır.',
  'Quelques caractéristiques qui définissent la classe :': 'Sınıfı tanımlayan bazı özellikler:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Uzun süreli buff\'lar</strong> (5 ila 30 dakika) grup stat\'larını boost eder: saldırı, savunma, hız, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, ~12-15m yarıçaptaki tüm müttefikleri sürekli iyileştiren bir AOE',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    'Deneyim cezası olmadan ölü oyuncuyu <strong>diriltme</strong>',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Çok düşük kişisel burst hasarı</strong> — RM tek başına hiçbir şeyi verimli öldüremez',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Neredeyse her zaman grupta olmayı</strong> veya buff/heal yapılacak bir alt karakter gerektirir',

  // Le rôle du Ringmaster en groupe
  'Le rôle du Ringmaster en groupe': 'Grupta Ringmaster\'ın rolü',
  'Trois rôles principaux selon le contexte de jeu :': 'Oyun bağlamına göre üç ana rol:',
  'Farm rapide (PvE classique)': 'Hızlı farm (klasik PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Bir farm noktasında bir veya daha fazla DPS\'e eşlik edersiniz. İşiniz: her 5 dakikada bir rebuff, sürekli Heal Rain başlatmak, FP\'leri izlemek. Çok tekrarlı — otomasyonun tam anlam kazandığı durum tam olarak budur.',
  'Raids & boss': 'Raid\'ler ve boss\'lar',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Glaphan, Bang, Aibatt gibi yüksek burst hasarlı boss\'lar. Tempo değişir: daha az periyodik heal, daha fazla manuel burst heal, bazen önceden hazırlanmış Resurrection. Otomasyon burada ikinci plana düşer — kontrolü siz tutmalısınız.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Organize edilmiş bir rekabet, ultra hassas metagame. RM\'ler artık sadece bir utility hizmeti değildir: senkronize buff timing\'leri ile optimize edilmiş kompozisyonlara katkıda bulunurlar. Rotasyonları ezbere bilmek kritik hale gelir. Otomasyon, bir turnuvanın kurallarına göre yasaklanabilir — her zaman doğrulayın.',

  // Buffs essentiels
  'Les buffs essentiels du Ringmaster': 'Ringmaster\'ın temel buff\'ları',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Önceliğe göre sıralanmış, ustalaşmanız ve rotasyonunuza dahil etmeniz gereken buff\'lar:',
  '★ Priorité absolue · 30 min': '★ Mutlak öncelik · 30 dk',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Tüm grup için STA + saldırı boost\'u. Ringmaster\'ın imza buff\'ı, rotasyonun ilk etkinleştirilenidir.',
  '★ Priorité haute · 15 min': '★ Yüksek öncelik · 15 dk',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Grubun maks HP\'sini artırır. Bir üyenin HP cap\'i yoksa wipe\'ın mümkün olduğu bölgelerde kritik.',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Grubun INT boost\'u. Mage\'lar, AOE Knight\'lar ve büyü scaling skill\'leri kullanan Ranger\'lar için müthiş.',
  '15 min': '15 dk',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Attack speed\'i artırır. Blade\'ler ve Ranger\'lar için oyun değiştirici; Mage\'lar için daha az kritik.',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Dodge boost\'u. Mob\'ların çok sayıda hızlı fiziksel saldırısının olduğu bölgelerde işe yarar.',
  'AOE · ~15 sec': 'AOE · ~15 sn',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'Üzerinize merkezlenmiş heal AOE\'si. Tüm farm boyunca döngü halinde yeniden başlatılır. 12-15m yarıçapındaki tüm müttefikleri kapsar.',

  // Build STA vs INT
  'Build STA vs INT — Quel build choisir ?': 'STA vs INT Build — Hangi build\'i seçmeli?',
  'Deux écoles principales en 2026 :': '2026\'da iki ana ekol:',
  'Critère': 'Kriter',
  'Build STA Full': 'Tam STA Build',
  'Build INT Hybrid': 'Hibrit INT Build',
  'Stats principaux': 'Ana stat\'lar',
  'Full STA, INT minimum requis pour les buffs': 'Tam STA, buff\'lar için minimum gerekli INT',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, seviyeye göre bazen 30/70',
  'HP / Survie': 'HP / Hayatta kalma',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Mükemmel — devasa pool, kazara pull\'lara dayanır',
  'Moyen — exige plus d\'attention du joueur': 'Orta — oyuncudan daha fazla dikkat ister',
  'Puissance des heals': 'Heal gücü',
  'Correct — suffit pour la plupart des situations': 'Yeterli — çoğu durum için yeterlidir',
  'Excellent — Heal Rain et autres heals scalent fort sur INT':
    'Mükemmel — Heal Rain ve diğer heal\'ler INT ile güçlü ölçeklenir',
  'FP pool': 'FP havuzu',
  'Faible — nécessite plus de potions': 'Düşük — daha fazla iksir gerektirir',
  'Élevé — gestion FP plus confortable': 'Yüksek — daha rahat FP yönetimi',
  'Recommandé pour': 'Şunlar için önerilir',
  'Joueurs débutants, farm peu dangereux, RM solo-utility':
    'Yeni başlayan oyuncular, az tehlikeli farm, solo-utility RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game':
    'Deneyimli oyuncular, zor raid\'ler, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'Tam STA build\'i en bağışlayıcı ve en çok oynanan olmaya devam eder. Hibrit INT build\'i daha zorlayıcıdır ancak önemli ölçüde daha yüksek heal output\'u ile ödüllendirir — rekabetçi içerik için olmazsa olmaz.',

  // Équipement
  'Équipement recommandé': 'Önerilen ekipman',
  'Armes': 'Silahlar',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (asa)</strong> — en iyi INT scaling\'i, hibrit INT build için önerilir',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (sopa)</strong> — dengeli, çok yönlü',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    'Off-hand\'de <strong>Shield (kalkan)</strong> — savunma kazancı, tam STA için kesinlikle önerilir',
  'Armure': 'Zırh',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    'Tam STA build\'i için <strong>STA jewelry seti</strong> (seviyeye göre Tinerbol, Lord, vb.)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    'Hibrit build için <strong>INT jewelry seti</strong> veya hibrit STA/INT',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '2/4/6 parça bonusu için <strong>her zaman tam seti tercih edin</strong>',
  'Bijoux (jewelry)': 'Mücevherler (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Mücevher optimizasyonu, RM\'nin yeterliden mükemmele geçtiği yerdir. Seviyenize göre öncelikli stat\'inizi maksimize eden kombinasyonu belirlemek için bir hesaplayıcı kullanın (<a href="meilleurs-outils-flyff-universe-2026.html">araç karşılaştırmamıza</a> bakın).',

  // Rotation
  'Rotation et gestion du rythme': 'Rotasyon ve tempo yönetimi',
  'Une rotation efficace en farm classique tient en 3 timings :': 'Klasik farm\'da etkili bir rotasyon 3 timing\'e dayanır:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Her 5 dakikada bir</strong> — grubun tam rebuff\'ı (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Her 12-15 saniyede bir</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Sürekli</strong> — acil burst heal\'ler için bireysel HP izleme',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'İlk iki timing mekaniktir ve <strong>otomasyon</strong> için mükemmeldir. Üçüncüsü insan dikkatinizi gerektirir. Modern Ringmaster\'ın temel dengesi budur: tekrarlayanı otomatikleştirip <strong>enerjinizi belirleyici anlar için saklamak</strong>.',
  '<strong>💡 Tutoriel pratique disponible</strong>': '<strong>💡 Pratik eğitim mevcut</strong>',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Reborn Assistant ile <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">Ringmaster\'ınızı otomatikleştirmek için adım adım bir eğitim</a> hazırladık: rotasyon yapılandırması, döngüler arası aralık, Heal Rain makrosu ve kaçınılacak hatalar.',

  // RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Ne fark var?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Yeni başlayanların sıklıkla karıştırdığı, Assist dalından iki sınıf:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = tam destek, düşük kişisel hasar, grupta vazgeçilmez, solo\'da az etkili',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = büyü DPS odaklı, solo farm yapabilir, RM\'nin uzun süreli buff\'larının bir kısmını kaybeder',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Niyetiniz grupta oynamak, FWC oynamak veya bir guild\'in "direği" olmaksa → Ringmaster. Solo\'da daha bağımsız bir Assist sınıfı istiyorsanız → Mentalist.',

  // Erreurs courantes
  'Erreurs courantes de débutant Ringmaster': 'Acemi Ringmaster\'ın sık yaptığı hatalar',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Düzenli rebuff yapmamak</strong> — 5 dakika sonra eksik bir buff bazen DPS\'in tüm canından daha pahalıya mal olur',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Heal Rain sırasında hareket etmek</strong> — AOE takip etmez, müttefikler menzilden çıkar',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Çok erken full INT build</strong> — yeterli HP havuzu olmadan Heal Rain\'i başlatmadan ölürsünüz',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>FP iksirlerini ihmal etmek</strong> — FP\'siz bir RM, işe yaramaz bir RM\'dir',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>DPS yapmaya çalışmak</strong> — heal ve buff\'lara yatırılması daha iyi olan zamanı kaybedersiniz',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Reborn Assistant ile Ringmaster\'ınızı optimize edin',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Buff rotasyonunu, periyodik Heal Rain\'i ve özel makrolarınızı otomatikleştirmek için premium uzantı. Kredi kartı gerekmez, 7 gün ücretsiz deneme.',
  'Installer Reborn Assistant': 'Reborn Assistant\'ı Kur',

  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Rehber 16 Mayıs 2026\'da güncellendi — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← Dokümantasyona dön',
};
