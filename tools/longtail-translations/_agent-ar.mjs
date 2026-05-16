/**
 * Arabic (MSA) translation maps for the 3 long-tail SEO pages.
 * Target: Modern Standard Arabic, gamer-friendly tone.
 * Brand/game terms kept untranslated per agent brief.
 */

// ─── automate-ringmaster ─────────────────────────────────────────────────────
export const automateRmAr = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">الرئيسية</a> › <a href="index.html">التوثيق</a> › أتمتة الـ Ringmaster',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'أتمتة الـ Ringmaster في Flyff Universe — الدليل الشامل 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'التعزيزات، المتتاليات، شفاء AOE، إدارة HP/FP: شرح خطوة بخطوة لتحويل الـ Ringmaster خاصتك إلى ركيزة الفريق دون أن ترهق أصابعك.',

  // TOC
  '◆ Sommaire': '◆ المحتويات',
  'Pourquoi automatiser son Ringmaster': 'لماذا تؤتمت الـ Ringmaster',
  'Prérequis avant d\'automatiser': 'المتطلبات قبل الأتمتة',
  'Identifier vos séquences Ringmaster': 'تحديد متتاليات الـ Ringmaster',
  'Configurer la rotation de buffs': 'إعداد دوران التعزيزات',
  'Programmer le Heal périodique': 'برمجة الشفاء الدوري',
  'Macros personnalisées (DPS, support, urgence)': 'الماكروات المخصصة (DPS، دعم، طوارئ)',
  'Optimisation et erreurs courantes': 'التحسين والأخطاء الشائعة',
  'Aspect légal — ce qu\'il faut savoir': 'الجانب القانوني — ما يجب معرفته',

  // Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'الـ Ringmaster (يُختصر غالباً بـ <strong>RM</strong>) هو الفئة الداعمة الأيقونية في Flyff Universe. دوره واضح: إبقاء الفريق على قيد الحياة عبر تعزيزات (Heart of Power، Beef Up، Mental Sign…) تدوم بين 5 و30 دقيقة حسب المستوى، وشفاء الأضرار عبر Heal Rain بنمط AOE. على الورق، الأمر بسيط. في الواقع، إنها من أكثر الفئات إرهاقاً في جلسات الفارم الطويلة: تقضي 80% من وقتك في <strong>إعادة التعزيز كل 5 دقائق</strong>، و<strong>إعادة إطلاق Heal Rain كل 10-15 ثانية</strong>، و<strong>مراقبة شريط FP</strong> لكل عضو في الفريق.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'الأتمتة لا تستبدل حُكمك. إنها ترفع عن لوحة المفاتيح الروتين الميكانيكي: متتالية إعادة التعزيز الكاملة، الشفاء الدوري، استخدام جرعات FP. تبقى يداك حرّتين للتفاعل مع <strong>اللحظات الحاسمة فعلاً</strong>: wipe وشيك، موجة خرجت عن السيطرة، أو boss يستهدف الـ RM أولاً.',
  '💡 Cas d\'usage typique': '💡 سيناريو استخدام نموذجي',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'تبدأ جلسة فارم مدتها 4 ساعات في Glaphan أو Asteria. بدون أتمتة: 240 دقيقة ÷ 5 دقائق = 48 دورة إعادة تعزيز يدوية. مع Reborn Assistant مضبوطاً: دورة واحدة، والباقي يعمل في الخلفية. لا تتدخل إلا إذا تغيّر تشكيل الفريق أو مات أحد الأعضاء.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'قبل تفعيل أي شيء، ضع الأسس الصلبة:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> مثبّت (النسخة المجانية تغطي ماكرو الشفاء الأساسي فقط). راجع <a href="quickstart.html">دليل التثبيت</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>تعزيزات الـ Ringmaster مُسندة إلى المفاتيح F2 → 0</strong> بترتيب منطقي (Heart of Power أولاً، ثم تعزيزات AOE، وأخيراً تعزيزات الهدف الفردي).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain على المفتاح § (أو مفتاح مخصص آخر)</strong> — هذا هو المفتاح الذي سيُفعّله Reborn Assistant في حلقة متكررة.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>كومة من جرعات FP</strong> في الحقيبة — الأتمتة لا تخترع الموارد.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>منطقة فارم مستقرة</strong>: تجنّب المناطق ذات الانتقال القسري أو الوحوش التي تدفعك للخلف (يُربك المواقع ويُفسد الـ AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'ليست كل المتتاليات متساوية. إليك التسلسل الهرمي النموذجي لـ build RM دعم كامل:',
  'Séquences essentielles (rotation toutes les 5 min)': 'المتتاليات الأساسية (دوران كل 5 دقائق)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — تعزيز STA + الهجوم، لا غنى عنه',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — STA ثابت، يرفع HP الأقصى للفريق',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + تعزيز سحري للـ Mages / Knights AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — سرعة الهجوم، رائع للـ Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE، مفيد في المناطق الصعبة',
  'Séquences situationnelles (à activer manuellement)': 'المتتاليات الظرفية (تُفعَّل يدوياً)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — أبداً تلقائياً، حسب كل حالة',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — إضافة ضرر عنصري، اختياري حسب السياق',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'هذا هو قلب النظام. يستطيع Reborn Assistant الضغط على متتالية ثابتة <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> على فترات منتظمة. إليك كيف توائمها مع الـ RM خاصتك:',
  'Préparer vos slots de séquences': 'تجهيز خانات المتتاليات',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'اسحب متتالياتك من شريط المتتاليات إلى شريط اختصارات Flyff بهذا الترتيب:',
  'Touche 1 → Heart of Power': 'المفتاح 1 → Heart of Power',
  'Touche 2 → Beef Up': 'المفتاح 2 → Beef Up',
  'Touche 3 → Mental Sign': 'المفتاح 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'المفتاح 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'المفتاح 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'المفاتيح 6 إلى 0 → تعزيزاتك الأخرى المتاحة أو فارغة',
  'Activer la rotation dans Reborn Assistant': 'تفعيل الدوران في Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'في لوحة Reborn، تبويب Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'فعّل المفتاح <strong>«دوران المتتاليات»</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'اضبط <strong>الفاصل بين الدورات</strong> على مدة أقصر تعزيز (عادةً 5 دقائق)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'اضبط <strong>التأخير بين المفاتيح</strong> على ثانية واحدة (يمنح الوقت لتشغيل أنيميشن المتتالية)',
  'Tester un cycle complet': 'اختبار دورة كاملة',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'ابدأ بـ <code>CTRL+A</code>. راقب سجل النشاط: يجب أن ترى <em>F2 pressed → 1 pressed → 2 pressed…</em> بالتسلسل، بفاصل ~1 ثانية بين كل ضغطة. إذا لم تنطلق متتالية، فالسبب غالباً cooldown أو نقص FP — تحقق بصرياً داخل اللعبة.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'يجب أن يعمل Heal Rain بالتوازي مع دوران التعزيزات. يقدّم Reborn Assistant ماكرو دورياً ثابتاً كل 15 ثانية، مُعايَراً تماماً لمنطقة AOE الخاصة بـ Heal Rain (التي تدوم حوالي 12-15 ثانية).',
  'Assigner Heal Rain à la touche §': 'إسناد Heal Rain إلى المفتاح §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'افتراضياً، يُفعّل الماكرو الدوري لـ Reborn Assistant المفتاح <code>§</code>. اسحب Heal Rain إلى هذا المفتاح في Flyff.',
  'Activer la macro périodique': 'تفعيل الماكرو الدوري',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'فعّل المفتاح <strong>«الماكرو الدوري»</strong> في لوحة Premium. سيستدعي النظام Heal Rain كل 15 ثانية، مع تخزين تلقائي.',
  '⚠️ Attention au positionnement': '⚠️ انتبه للموقع',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain هو AOE متمركز حولك. إذا تحركت باستمرار (kite أو إعادة تموضع)، فلن يغطي Heal Rain خاصتك الـ DPS. ابقَ ثابتاً أو حدد نقطة تجمّع ثابتة للفريق.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'إضافةً إلى الدوران والشفاء، يوفّر Reborn Assistant Premium <strong>3 ماكروات مستقلة</strong>. إليك كيف تستثمرها لصالح الـ Ringmaster:',
  'Macro 1 — Pet feeding': 'الماكرو 1 — إطعام الحيوان الأليف',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'إذا كان لديك حيوان أليف يحتاج إلى الطعام بانتظام، اضبط متتالية من نوع <code>k,h</code> (مفتاح لوحة الحيوان + شفاء الحيوان) كل 30 ثانية. يمنع موت حيوانك خلال الفارم.',
  'Macro 2 — Stack de FP potions': 'الماكرو 2 — تكديس جرعات FP',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'اضبط متتالية من نوع <code>y</code> (مفتاح جرعة FP) كل 20 ثانية للحفاظ على FP فوق 80%. عدّل حسب استهلاكك وإيقاع Heal Rain.',
  'Macro 3 — Anti-AFK': 'الماكرو 3 — مضاد للـ AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'متتالية من نوع <code>up,down</code> أو <code>space</code> كل 4-5 دقائق تمنع قطع الاتصال بسبب AFK خلال فارم طويل في فترات الهدوء. استخدمها بحكمة.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>التأخير بين المفاتيح قصير جداً</strong> — إذا قفزت متتالياتك، ارفع التأخير بين المفاتيح إلى 1.5 أو 2 ثانية. دورة أبطأ قليلاً لكنها تمرّ 100% أفضل.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>لا تتجاوز الـ Cooldown العالمي</strong> — لدى Flyff نظام GCD (global cooldown). إذا أرسلت المتتاليات بسرعة مفرطة، تُبتلع في الفراغ. التأخير الافتراضي 1 ثانية يحترم هذا الـ GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>نفاد FP في منتصف الدورة</strong> — يتوقف الدوران بصمت. فعّل ماكرو جرعة FP أو ارفع INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>أعضاء الفريق خارج منطقة AOE</strong> — الشفاء الدوري يعالج فقط اللاعبين ضمن نصف قطر Heal Rain (~12-15م). تواصل مع الفريق: عليهم البقاء في المدى.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>فقدان الهدف بعد موت وحش</strong> — لا يضر الـ RM كثيراً، لكن راقب أهدافك إذا كان لديك أيضاً متتاليات single-target في الدوران.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'قد تنتهك أتمتة الإجراءات المتكررة عبر إضافة <strong>شروط استخدام</strong> بعض خدمات الألعاب، بما فيها شروط Gala Lab لـ Flyff Universe. Reborn Assistant <strong>لا يقرأ ذاكرة اللعبة، ولا يرسل حزم شبكة، ولا يعدّل العميل</strong>: إنه حصراً محاكاة لمفاتيح كنت ستضغطها يدوياً. تبقى مسؤولاً 100% عن طريقة استخدامك له.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'لفهم ما يفعله (وما لا يفعله) Reborn Assistant بالضبط من الناحية التقنية، راجع <a href="../index.html#faq">الأسئلة الشائعة في الصفحة الرئيسية</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'جاهز لتحرير الـ Ringmaster خاصتك؟',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'ثبّت Reborn Assistant في 30 ثانية من Chrome Web Store. 7 أيام تجربة Premium مجاناً، دون بطاقة بنكية.',
  'Installer Reborn Assistant': 'تثبيت Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ مقال ذو صلة',
  '◆ Documentation': '◆ التوثيق',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'أفضل أدوات وإضافات Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'الدليل الشامل لفئة Ringmaster في Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'الدليل الشامل لمزايا Premium',

  // Common
  '← Retour aux docs': '← العودة إلى التوثيق',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"تثبيت Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'أضف إضافة Reborn Assistant من Chrome Web Store وثبّتها في شريط الأدوات.',
  '"Identifier vos séquences Ringmaster"': '"تحديد متتاليات الـ Ringmaster"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'أحصِ متتالياتك الأساسية: Heart of Power (HoP)، Beef Up، Mental Sign، Speed Pep، وشفاء AOE (Heal Rain).',
  '"Configurer la rotation de séquences"': '"إعداد دوران المتتاليات"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'في Reborn Assistant، فعّل الدوران F2 → 1-9 → 0 → F1 بفاصل 5 دقائق (المدة النموذجية للتعزيزات).',
  '"Programmer le Heal périodique"': '"برمجة الشفاء الدوري"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'فعّل الماكرو الدوري لإطلاق Heal Rain كل 15 ثانية ضمن الفريق.',
  '"Lancer l\'automatisation"': '"تشغيل الأتمتة"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'ابدأ بـ CTRL+A، راقب سجل النشاط، وعدّل التأخيرات حسب أنيميشن متتالياتك.',
};

// ─── tools-2026 ──────────────────────────────────────────────────────────────
export const toolsAr = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">الرئيسية</a> › <a href="index.html">التوثيق</a> › أفضل أدوات Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'أفضل الأدوات والإضافات لـ Flyff Universe في 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'مجموعة مُختبَرة ومُقارَنة من الأدوات التي تُحدث فرقاً حقيقياً في تجربتك داخل Flyff Universe: إضافات، مترجمات، حاسبات، قواعد بيانات.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'يقف Flyff Universe على قدميه كـ MMORPG بفضل مجتمعه: جزء كبير من الأدوات المفيدة لا يأتي من الناشر، بل من اللاعبين أنفسهم. اختبرنا على مدى 3 أشهر (فبراير → مايو 2026) أكثر أدوات الطرف الثالث شعبية، واخترنا <strong>الـ 6 التي تستحق فعلاً</strong>، مرتّبة حسب فائدتها للاعب المنتظم.',

  // Methodology
  '📌 Méthodologie': '📌 المنهجية',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'قُيّمت كل أداة وفق 4 معايير: الفائدة الحقيقية في اللعب اليومي، جودة التحديث (تواكب إيقاع Flyff Universe)، احترام بيانات المستخدم، وسهولة الاستخدام. لا شراكات تجارية: فقط Reborn Assistant من إصدار صاحب هذا الموقع (شفافية معلنة).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — إضافة أتمتة الـ Ringmaster',
  '★ Rang I · Notre choix': '★ المرتبة I · اختيارنا',
  'Version gratuite': 'النسخة المجانية',
  'Premium 2,99€/mois': 'Premium 2,99€/شهر',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant إضافة متصفّح مخصصة لـ<strong>أتمتة الإجراءات المتكررة</strong> لدى لاعبي Flyff Universe — خاصةً فئة Ringmaster، التي تُعدّ دورات تعزيزاتها مرهقة بشكل مشهور. تحاكي الإضافة ضغطات لوحة المفاتيح بفواصل قابلة للتعديل: دوران متتاليات كل X دقائق، ماكرو دوري كل 15 ثانية لـ Heal Rain، وحتى 3 ماكروات قابلة للتخصيص.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'تغطي النسخة المجانية الأساسيات (شفاء HP تلقائي، 6 ثيمات، 15 لغة واجهة). تفتح نسخة Premium الدوران الكامل، الماكروات المخصصة، والماكرو الدوري — الترسانة التي يتوقعها أي RM main.',
  '✓ Points forts': '✓ نقاط القوة',
  '✗ Points faibles': '✗ نقاط الضعف',
  '15 langues d\'interface, support international': '15 لغة واجهة، دعم دولي',
  'Données 100% locales (aucun tracking)': 'بيانات محلية 100% (دون أي تتبّع)',
  'Macros personnalisables jusqu\'à 3 séquences': 'ماكروات قابلة للتخصيص حتى 3 متتاليات',
  'Mises à jour régulières via Chrome Web Store': 'تحديثات منتظمة عبر Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Chromium فقط (ليس Firefox)',
  'Premium nécessite compte Google': 'Premium يتطلب حساب Google',
  '→ Tester Reborn Assistant': '→ جرّب Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — مترجم داخل اللعبة متعدد اللغات',
  '★ Rang II': '★ المرتبة II',
  'Gratuit': 'مجاني',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'يحلّ Reborn Vision مشكلة خاصة بـ Flyff Universe: المجتمع دولي جداً (BR، KR، JP، EU)، ويصادف كثير من اللاعبين محادثات بلغات لا يجيدونها. Reborn Vision مترجم داخل اللعبة يكتشف النص المعروض على الشاشة ويقترح ترجمة overlay فورية.',
  'Traduction en temps réel multi-langues': 'ترجمة فورية متعددة اللغات',
  '100% gratuit': 'مجاني 100%',
  'Configuration minimale': 'إعداد بسيط جداً',
  'OCR variable selon les polices': 'OCR متغيّر حسب نوع الخط',
  'Consomme un peu de bande passante': 'يستهلك بعض النطاق الترددي',
  '→ Voir Reborn Vision': '→ زيارة Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — قاعدة البيانات المرجعية',
  '★ Rang III': '★ المرتبة III',
  'Site web': 'موقع ويب',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia هو الويكي المجتمعي الأكثر اكتمالاً لـ Flyff Universe. بحث عن الأغراض بالاسم، صفحة مخصصة لكل وحش (drops، الموقع، EXP الممنوحة)، شجرات المهام، معلومات الفئات. لا غنى عنه عندما تتعثّر في مهمة أو تبحث عن مكان farm لغرض معيّن.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'تحديثات تعاونية، جودة متفاوتة حسب المساهمين، لكنه إجمالاً المعيار الفعلي. Bookmark إلزامي لكل لاعب منتظم.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — حسابات الـ stats والـ builds',
  '★ Rang IV': '★ المرتبة IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'حاسبة stats تأخذ بعين الاعتبار تجهيزك، الـ jewelry، التعزيزات، وتمنحك تقديراً دقيقاً لـ DPS، أو قدرتك على البقاء، أو healing output. مفيدة بشكل خاص عند تغيير الـ build أو المقارنة بين قطعتي jewelry.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'واجهة باردة بعض الشيء لكن المعادلة الرياضية متينة. تتوفر بعدة نسخ مجتمعية — اختر النسخة الأحدث تحديثاً.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — مجتمع وأدلة استراتيجية',
  '★ Rang V': '★ المرتبة V',
  'Site web / Discord': 'موقع ويب / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'ليست أداة بالمعنى الحرفي، بل مورد قيّم: أدلة build لكل فئة، استراتيجيات boss، الميتا الحالية، اقتصاد السيرفر. يُكتب المحتوى من قِبل لاعبي end-game، ما يمنح منظوراً لا تجده في الأدلة العامة.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — تحسين الـ jewelry',
  '★ Rang VI': '★ المرتبة VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'حلّال يأخذ تجهيزك ويحسب التركيبة المثلى من الـ jewelry لتعظيم stat معيّن (الهجوم، HP، Cast Speed، إلخ). متخصصة لكنها فعّالة بشكل مذهل في end-game، حين تحسب كل %.',

  // How to choose
  'Comment choisir ?': 'كيف تختار؟',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'الترتيب أعلاه هو تصنيفنا الذاتي المبني على تكرار الفائدة للاعب المنتظم. إليك ثلاثة نماذج لتوجيه اختيارك:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'تُكثر من الفارم، خاصة كـ RM أو Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium في المقدمة، ثم FlyffPedia لمعرفة الـ drops.',
  'Vous jouez avec une guilde internationale': 'تلعب ضمن guild دولية',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (مترجم) + Madrigal Inside (Discord المجتمع).',
  'Vous êtes end-game et optimisez vos builds': 'أنت في end-game وتحسّن الـ builds خاصتك',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer مجتمعتان، إضافة إلى Reborn Assistant لأتمتة farm المواد.',

  // Tools to avoid
  'Outils à éviter': 'أدوات يجب تجنّبها',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'ليست كل الأدوات المسوَّقة باسم "Flyff Universe" شرعية. احذر من البرامج التي:',
  'Demandent vos identifiants Gala Lab': 'تطلب بيانات تسجيل دخولك في Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'لا تحتاج أي أداة شرعية إلى بيانات دخولك. إنها عمليات احتيال 100%.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'تُثبَّت كملف تنفيذي .exe لـ Windows',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'دون صفحة تعريف واضحة. خطر keylogger أو malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'تعد بـ gold مجاني، level boost، أو أغراض',
  '. Toujours arnaque ou banwave imminente.': '. دائماً احتيال أو موجة banwave وشيكة.',
  'N\'ont pas de version officielle': 'ليس لها نسخة رسمية',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'على Chrome Web Store، أو GitHub، أو موقع بإشعارات قانونية واضحة.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 المعيار الذي لا يكذب',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'لكل أداة شرعية سياسة خصوصية ظاهرة، قناة دعم نشطة (Discord، بريد إلكتروني)، وصفحة على Chrome Web Store أو repo عام على GitHub. Reborn Assistant و Reborn Vision يستوفيان هذه الشروط الثلاثة.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'تم تحديث المقال في 16 مايو 2026.',

  // Common
  '← Retour aux docs': '← العودة إلى التوثيق',
};

// ─── guide-ringmaster (body phrases) ─────────────────────────────────────────
export const guideRmAr = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">الرئيسية</a> › <a href="index.html">التوثيق</a> › دليل Ringmaster',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster في Flyff Universe — الدليل الشامل 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'الدور، التعزيزات، الـ builds، التجهيز، الدوران: كل ما تحتاجه للعب Ringmaster في Flyff Universe عام 2026، من المستوى 60 حتى end-game.',

  // Qu'est-ce qu'un Ringmaster
  'Qu\'est-ce qu\'un Ringmaster ?': 'ما هو الـ Ringmaster؟',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'الـ <strong>Ringmaster</strong> (RM) هو الترقية النهائية لفرع Assist في Flyff Universe. إنه <strong>فئة الدعم في اللعبة</strong>: دوره الأساسي ليس إلحاق الضرر، بل <em>إبقاء الفريق على قيد الحياة وجعله أقوى</em> عبر تعزيزات طويلة الأمد وشفاء AOE في حلقة متكررة. بدون Ringmaster، يستغرق فريق end-game ضعف أو ثلاثة أضعاف الوقت لإنهاء منطقة — ويصمد بشكل أسوأ بكثير أمام pulls العَرَضية.',

  'Quelques caractéristiques qui définissent la classe :': 'بعض السمات التي تُعرّف هذه الفئة:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>تعزيزات طويلة الأمد</strong> (من 5 إلى 30 دقيقة) تُحسّن stats الفريق: الهجوم، الدفاع، السرعة، dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>، AOE يشفي بمرور الوقت كل الحلفاء ضمن نصف قطر ~12-15م',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> لإعادة لاعب ميت دون عقوبة خبرة',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>burst damage شخصي ضعيف جداً</strong> — الـ RM لا يقتل بمفرده بكفاءة',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>يكاد يتطلب دائماً اللعب في فريق</strong> أو وجود حساب alt تُعزّزه وتشفيه',

  // Le rôle du Ringmaster en groupe
  'Le rôle du Ringmaster en groupe': 'دور الـ Ringmaster داخل الفريق',
  'Trois rôles principaux selon le contexte de jeu :': 'ثلاثة أدوار رئيسية حسب سياق اللعب:',
  'Farm rapide (PvE classique)': 'فارم سريع (PvE تقليدي)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'ترافق DPS واحداً أو أكثر في نقطة فارم. مهمتك: إعادة التعزيز كل 5 دقائق، إطلاق Heal Rain باستمرار، ومراقبة الـ FP. مكرر جداً — هذا بالضبط السياق الذي تأخذ فيه الأتمتة معناها الكامل.',
  'Raids & boss': 'الـ Raids والـ boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'boss بضربات burst damage كبيرة من نوع Glaphan، Bang، Aibatt. يتغير الإيقاع: شفاء دوري أقل، وشفاءات burst يدوية أكثر، وأحياناً Resurrection بحاجة لاستباق. تتراجع الأتمتة هنا للمرتبة الثانية — عليك إمساك الزمام.',
  'FWC (Flyff World Championships)': 'FWC (بطولات Flyff العالمية)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'منافسة منظّمة، metagame دقيق للغاية. لم يعد الـ RM مجرد خدمة utility: بل يساهم في تشكيلات مُحسَّنة بتزامن دقيق لتوقيتات التعزيزات. حفظ الدورات عن ظهر قلب يصبح أمراً حاسماً. قد تُحظَر الأتمتة وفق قوانين بعض البطولات — تحقق دائماً.',

  // Les buffs essentiels
  'Les buffs essentiels du Ringmaster': 'التعزيزات الأساسية للـ Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'إليك التعزيزات التي عليك إتقانها وإدراجها في دورانك، مرتّبة حسب الأولوية:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ أولوية قصوى · 30 دقيقة',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'تعزيز STA + الهجوم للفريق كله. التعزيز المميّز للـ Ringmaster، يُفعَّل أولاً في الدوران.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ أولوية عالية · 15 دقيقة',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'يرفع HP الأقصى للفريق. حاسم في المناطق التي يمكن أن يحدث فيها wipe إذا لم يبلغ أحد الأعضاء سقف HP.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'تعزيز INT للفريق. مذهل لـ Mages، Knights AOE، والـ Rangers الذين يعتمدون على skills بسلَّم سحري.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 دقيقة',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'يرفع attack speed. مغيِّر للعبة للـ Blades والـ Rangers؛ أقل حسماً للـ Mages.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'تعزيز dodge. مفيد في المناطق التي يملك فيها الوحوش هجمات فيزيائية سريعة كثيرة.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 ثانية',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'شفاء AOE متمركز حولك. يُعاد إطلاقه في حلقة متكررة طوال الفارم. يغطي كل الحلفاء ضمن نصف قطر 12-15م.',

  // Build STA vs INT
  'Build STA vs INT — Quel build choisir ?': 'Build STA مقابل INT — أيّ build تختار؟',
  'Deux écoles principales en 2026 :': 'مدرستان رئيسيتان في 2026:',
  'Critère': 'المعيار',
  'Build STA Full': 'Build STA كامل',
  'Build INT Hybrid': 'Build INT هجين',
  '<strong>Stats principaux</strong>': '<strong>الـ stats الأساسية</strong>',
  'Full STA, INT minimum requis pour les buffs': 'STA كامل، مع الحد الأدنى من INT اللازم للتعزيزات',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT، أحياناً 30/70 حسب المستوى',
  '<strong>HP / Survie</strong>': '<strong>HP / القدرة على البقاء</strong>',
  'Excellent — pool énorme, survit aux pulls accidentels': 'ممتاز — pool هائل، يصمد أمام pulls العرضية',
  'Moyen — exige plus d\'attention du joueur': 'متوسط — يتطلب انتباهاً أكبر من اللاعب',
  '<strong>Puissance des heals</strong>': '<strong>قوة الشفاءات</strong>',
  'Correct — suffit pour la plupart des situations': 'مقبول — يكفي لمعظم الحالات',
  'Excellent — Heal Rain et autres heals scalent fort sur INT':
    'ممتاز — Heal Rain وباقي الشفاءات تتوسّع بقوة مع INT',
  '<strong>FP pool</strong>': '<strong>مخزون FP</strong>',
  'Faible — nécessite plus de potions': 'منخفض — يستلزم جرعات أكثر',
  'Élevé — gestion FP plus confortable': 'مرتفع — إدارة FP أكثر راحة',
  '<strong>Recommandé pour</strong>': '<strong>يُنصح به لـ</strong>',
  'Joueurs débutants, farm peu dangereux, RM solo-utility':
    'اللاعبون المبتدئون، فارم منخفض الخطورة، RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game':
    'لاعبون متمرسون، raids صعبة، FWC، end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'يبقى build STA كامل الأكثر تسامحاً والأكثر شيوعاً. أما build INT الهجين فهو أكثر تطلّباً، لكنه يكافئك بـ heal output أعلى بوضوح — لا غنى عنه للمحتوى التنافسي.',

  // Équipement
  'Équipement recommandé': 'التجهيز الموصى به',
  'Armes': 'الأسلحة',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (عصا)</strong> — أفضل scaling INT، يُنصح به لـ build INT الهجين',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (عصا قصيرة)</strong> — متوازن، متعدد الاستخدامات',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (درع)</strong> في اليد الثانية — يزيد الدفاع، يُنصح به بقوة في STA كامل',
  'Armure': 'الدروع',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>طقم jewelry STA</strong> لـ build STA كامل (Tinerbol، Lord، إلخ حسب المستوى)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>طقم jewelry INT</strong> أو هجين STA/INT لـ build الهجين',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>فضّل دائماً الطقم الكامل</strong> لمكافأة 2/4/6 قطع',
  'Bijoux (jewelry)': 'المجوهرات (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'تحسين المجوهرات هو ما ينقل الـ RM من المقبول إلى الممتاز. استخدم حاسبة (راجع <a href="meilleurs-outils-flyff-universe-2026.html">مقارنتنا للأدوات</a>) لتحديد التركيبة التي تعظّم stat الأولوية لديك حسب المستوى.',

  // Rotation
  'Rotation et gestion du rythme': 'الدوران وإدارة الإيقاع',
  'Une rotation efficace en farm classique tient en 3 timings :':
    'يقوم الدوران الفعّال في الفارم التقليدي على 3 توقيتات:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>كل 5 دقائق</strong> — إعادة تعزيز كاملة للفريق (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>كل 12-15 ثانية</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>باستمرار</strong> — مراقبة HP الفردية لشفاءات burst طارئة',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'التوقيتان الأولان ميكانيكيان ومثاليان لـ<strong>الأتمتة</strong>. أما الثالث فيتطلب انتباهك البشري. هذا هو التحكيم الجوهري للـ Ringmaster الحديث: أتمت ما هو متكرر <strong>لتحفظ طاقتك للحظات الحاسمة</strong>.',
  '💡 Tutoriel pratique disponible': '💡 شرح عملي متاح',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'كتبنا <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">شرحاً خطوة بخطوة لأتمتة الـ Ringmaster خاصتك</a> باستخدام Reborn Assistant: إعداد الدورات، الفاصل بين الدورات، ماكرو Heal Rain، والأخطاء التي يجب تجنّبها.',

  // RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster مقابل Mentalist — ما الفرق؟',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'فئتان من فرع Assist، يخلط بينهما المبتدئون كثيراً:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = دعم كامل، ضرر شخصي منخفض، لا غنى عنه في الفريق، قليل الفعالية بمفرده',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = توجّه DPS سحري، يستطيع الفارم منفرداً، يفقد جزءاً من تعزيزات الـ RM طويلة الأمد',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'إذا كانت نيتك اللعب في فريق، أو خوض FWC، أو أن تكون "ركيزة" guild → Ringmaster. إذا أردت فئة Assist أكثر استقلالية بمفردك → Mentalist.',

  // Erreurs débutant
  'Erreurs courantes de débutant Ringmaster': 'الأخطاء الشائعة لمبتدئي Ringmaster',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>عدم إعادة التعزيز بانتظام</strong> — تعزيز مفقود بعد 5 دقائق يكلّف أحياناً أكثر من حياة الـ DPS كاملة',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>التحرك أثناء Heal Rain</strong> — الـ AOE لا يتبعك، فيخرج الحلفاء من نصف القطر',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>build INT كامل مبكراً جداً</strong> — دون pool HP كافٍ، تموت قبل أن تطلق Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>تجاهل جرعات FP</strong> — RM بلا FP هو RM عديم الفائدة',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>محاولة DPS</strong> — تُهدر وقتاً يُستثمر بشكل أفضل في الشفاء والتعزيزات',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'حسّن الـ Ringmaster خاصتك مع Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'الإضافة premium لأتمتة دوران التعزيزات، Heal Rain الدوري، وماكروات مخصصة. 7 أيام تجربة مجانية دون بطاقة بنكية.',
  'Installer Reborn Assistant': 'تثبيت Reborn Assistant',
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'تم تحديث الدليل في 16 مايو 2026 — Flyff Universe (Gala Lab).',

  // Common
  '← Retour aux docs': '← العودة إلى التوثيق',
};
