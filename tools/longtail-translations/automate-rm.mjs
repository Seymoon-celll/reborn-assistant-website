/**
 * Translation map for docs/automatiser-ringmaster-flyff-universe.html
 */

import { automateRmPt } from './_agent-pt.mjs';
import { automateRmIt } from './_agent-it.mjs';
import { automateRmNl } from './_agent-nl.mjs';
import { automateRmPl } from './_agent-pl.mjs';
import { automateRmRu } from './_agent-ru.mjs';
import { automateRmTr } from './_agent-tr.mjs';
import { automateRmJa } from './_agent-ja.mjs';
import { automateRmKo } from './_agent-ko.mjs';
import { automateRmTl } from './_agent-tl.mjs';
import { automateRmZh } from './_agent-zh.mjs';
import { automateRmAr } from './_agent-ar.mjs';

const fr = {};
const en = {};

// ─── Spanish ─────────────────────────────────────────────────────────────────
const es = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Inicio</a> › <a href="index.html">Documentación</a> › Automatizar tu Ringmaster',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Automatizar tu Ringmaster en Flyff Universe — Guía completa 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffs, secuencias, AOE heal, gestión HP/FP: el tutorial paso a paso para convertir tu Ringmaster en pilar de grupo sin perder los dedos.',

  // TOC
  '◆ Sommaire': '◆ Índice',
  'Pourquoi automatiser son Ringmaster': 'Por qué automatizar tu Ringmaster',
  'Prérequis avant d\'automatiser': 'Requisitos antes de automatizar',
  'Identifier vos séquences Ringmaster': 'Identifica tus secuencias Ringmaster',
  'Configurer la rotation de buffs': 'Configura la rotación de buffs',
  'Programmer le Heal périodique': 'Programa el Heal periódico',
  'Macros personnalisées (DPS, support, urgence)': 'Macros personalizadas (DPS, soporte, urgencia)',
  'Optimisation et erreurs courantes': 'Optimización y errores frecuentes',
  'Aspect légal — ce qu\'il faut savoir': 'Aspecto legal — lo que debes saber',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'El Ringmaster (a menudo abreviado <strong>RM</strong>) es la clase de soporte emblemática de Flyff Universe. Su rol es claro: mantener al grupo con vida mediante buffs (Heart of Power, Beef Up, Mental Sign…) que duran entre 5 y 30 minutos según el nivel, y curar los daños con Heal Rain en AOE. Sobre el papel, parece sencillo. En la práctica, es una de las clases más agotadoras en farms prolongados: pasas el 80% del tiempo <strong>rebufeando cada 5 minutos</strong>, <strong>relanzando Heal Rain cada 10-15 segundos</strong> y <strong>vigilando las barras de FP</strong> de cada miembro del grupo.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'La automatización no reemplaza tu criterio. Libera tu teclado de las rutinas mecánicas: la secuencia completa de rebuff, el heal periódico, el uso de pociones de FP. Conservas las manos libres para los <strong>momentos que realmente importan</strong>: un wipe inminente, una wave que se complica, un boss que apunta primero al RM.',
  '💡 Cas d\'usage typique': '💡 Caso de uso típico',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Inicias una sesión de farm de 4 horas en Glaphan o Asteria. Sin automatización: 240 minutos ÷ 5 minutos = 48 ciclos de rebuff manual. Con Reborn Assistant configurado: 1 ciclo, el resto corre en segundo plano. Solo retomas el control si cambia la composición o muere algún miembro.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Antes de activar nada, sienta las bases sólidas:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> instalado (la versión gratuita solo cubre la macro de heal básica). Ver la <a href="quickstart.html">guía de instalación</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Tus buffs Ringmaster asignados a las teclas F2 → 0</strong> siguiendo un orden lógico (Heart of Power primero, AOE buffs después, single-target al final).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain en la tecla § (u otra tecla dedicada)</strong> — es la tecla que Reborn Assistant activará en bucle.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Una pila de pociones FP</strong> en el inventario — la automatización no inventa recursos.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Una zona de farm estable</strong>: evita zonas con teleportes forzados o mobs que empujan (descolocan posiciones y rompen el AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'No todas las secuencias son iguales. Esta es la jerarquía típica de un build RM full support:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Secuencias esenciales (rotación cada 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — boost STA + ataque, imprescindible',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — STA fijo, aumenta el HP máximo del grupo',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + boost mágico para Mages / Knights AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, enorme para Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, útil en zonas difíciles',
  'Séquences situationnelles (à activer manuellement)': 'Secuencias situacionales (activar manualmente)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — nunca en auto, caso por caso',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — bonus de daño elemental, opcional según el contexto',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Es el corazón del sistema. Reborn Assistant puede pulsar una secuencia fija <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> a intervalos regulares. Así se alinea con tu RM:',
  'Préparer vos slots de séquences': 'Preparar tus slots de secuencias',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Arrastra tus secuencias desde la barra de secuencias hacia la barra de atajos de Flyff en este orden:',
  'Touche 1 → Heart of Power': 'Tecla 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Tecla 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Tecla 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Tecla 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Tecla 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Teclas 6 a 0 → tus otros buffs disponibles o vacío',
  'Activer la rotation dans Reborn Assistant': 'Activar la rotación en Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'En el panel Reborn, pestaña Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Activa el toggle <strong>«Rotación de secuencias»</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Configura el <strong>intervalo entre ciclos</strong> según la duración del buff más corto (típicamente 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Configura el <strong>retraso entre teclas</strong> a 1 segundo (permite que la animación de secuencia se complete)',
  'Tester un cycle complet': 'Probar un ciclo completo',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Inicia con <code>CTRL+A</code>. Observa el log de actividad: deberías ver <em>F2 pressed → 1 pressed → 2 pressed…</em> secuencialmente, con ~1 segundo entre cada uno. Si una secuencia no se lanza, probablemente sea un cooldown o falta de FP — verifica visualmente en el juego.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain debe correr en paralelo con la rotación de buffs. Reborn Assistant ofrece una macro periódica fija de 15 segundos, perfectamente calibrada para la zona AOE de Heal Rain (que dura unos 12-15 segundos).',
  'Assigner Heal Rain à la touche §': 'Asignar Heal Rain a la tecla §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Por defecto, la macro periódica de Reborn Assistant activa la tecla <code>§</code>. Arrastra Heal Rain a esta tecla en Flyff.',
  'Activer la macro périodique': 'Activar la macro periódica',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Activa el toggle <strong>«Macro periódica»</strong> en el panel Premium. El sistema invocará Heal Rain cada 15 segundos, con almacenamiento automático.',
  '⚠️ Attention au positionnement': '⚠️ Cuidado con la posición',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain es un AOE centrado en ti. Si te mueves constantemente (kite o reposicionamiento), tu Heal Rain no cubrirá a tus DPS. Mantente estático o define un punto de reunión fijo para el grupo.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Además de la rotación y el heal, Reborn Assistant Premium ofrece <strong>3 macros independientes</strong>. Así se aprovechan para un Ringmaster:',
  'Macro 1 — Pet feeding': 'Macro 1 — Alimentación de mascota',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Si tienes una mascota que necesita comer regularmente, programa una secuencia tipo <code>k,h</code> (tecla pet panel + heal pet) cada 30 segundos. Evita que tu mascota muera mientras farmeas.',
  'Macro 2 — Stack de FP potions': 'Macro 2 — Stack de pociones FP',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Configura una secuencia tipo <code>y</code> (tecla FP potion) cada 20 segundos para mantener tu FP por encima del 80%. Ajusta según tu consumo y el ritmo de Heal Rain.',
  'Macro 3 — Anti-AFK': 'Macro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Una secuencia tipo <code>up,down</code> o <code>space</code> cada 4-5 minutos permite evitar una desconexión AFK durante un farm largo en momentos tranquilos. Usar con criterio.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Retraso entre teclas demasiado corto</strong> — si tus secuencias se saltan, aumenta el retraso entre teclas a 1,5 o 2 segundos. Mejor un ciclo algo más lento pero que se ejecute al 100%.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>No superar el cooldown global</strong> — Flyff tiene un GCD (global cooldown). Si haces spam demasiado rápido, las secuencias se pierden. El retraso por defecto de 1 s respeta este GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP que se agota en mitad de un ciclo</strong> — tu rotación se detiene silenciosamente. Activa la macro FP potion o aumenta tu INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Miembros del grupo fuera del AOE</strong> — el heal periódico solo cura a los jugadores dentro del radio de Heal Rain (~12-15m). Comunícate con el grupo: deben mantenerse cerca.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Objetivo perdido tras matar un mob</strong> — no es grave para el RM, pero vigila tus targets si también tienes secuencias single-target en rotación.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'La automatización de acciones repetitivas mediante una extensión <strong>puede violar las condiciones de uso</strong> de algunos servicios de juego, incluidas las de Gala Lab para Flyff Universe. Reborn Assistant <strong>no lee la memoria del juego, no envía paquetes de red, no modifica el cliente</strong>: es estrictamente una simulación de teclas que tú pulsarías manualmente. Mantienes el 100% de la responsabilidad sobre el uso que le das.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Para entender exactamente lo que hace (y no hace) Reborn Assistant a nivel técnico, consulta la <a href="../index.html#faq">FAQ de la página principal</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': '¿Listo para liberar a tu Ringmaster?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Instala Reborn Assistant en 30 segundos desde el Chrome Web Store. 7 días de prueba Premium gratis, sin tarjeta bancaria.',
  'Installer Reborn Assistant': 'Instalar Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Artículo relacionado',
  '◆ Documentation': '◆ Documentación',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Las mejores herramientas y extensiones Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Guía completa de la clase Ringmaster en Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Guía completa de las funcionalidades Premium',

  // Common
  '← Retour aux docs': '← Volver a la documentación',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Instalar Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Añade la extensión Reborn Assistant desde el Chrome Web Store y fíjala en la barra de herramientas.',
  '"Identifier vos séquences Ringmaster"': '"Identificar tus secuencias Ringmaster"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Anota tus secuencias clave: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep y el AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Configurar la rotación de secuencias"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'En Reborn Assistant, activa la rotación F2 → 1-9 → 0 → F1 con un intervalo de 5 minutos (duración típica de tus buffs).',
  '"Programmer le Heal périodique"': '"Programar el Heal periódico"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Activa la macro periódica para lanzar Heal Rain cada 15 segundos en grupo.',
  '"Lancer l\'automatisation"': '"Lanzar la automatización"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Inicia con CTRL+A, observa el log de actividad, ajusta los retrasos según las animaciones de tus secuencias.',
};

// ─── German ──────────────────────────────────────────────────────────────────
const de = {
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Startseite</a> › <a href="index.html">Dokumentation</a> › Ringmaster automatisieren',

  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Ringmaster in Flyff Universe automatisieren — Kompletter Guide 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffs, Sequenzen, AOE-Heal, HP/FP-Management: das Schritt-für-Schritt-Tutorial, das Ihren Ringmaster zur Gruppensäule macht, ohne dass Sie sich daran die Finger verbrennen.',

  '◆ Sommaire': '◆ Inhalt',
  'Pourquoi automatiser son Ringmaster': 'Warum den Ringmaster automatisieren',
  'Prérequis avant d\'automatiser': 'Voraussetzungen vor der Automatisierung',
  'Identifier vos séquences Ringmaster': 'Ihre Ringmaster-Sequenzen identifizieren',
  'Configurer la rotation de buffs': 'Die Buff-Rotation konfigurieren',
  'Programmer le Heal périodique': 'Das periodische Heal programmieren',
  'Macros personnalisées (DPS, support, urgence)': 'Eigene Makros (DPS, Support, Notfall)',
  'Optimisation et erreurs courantes': 'Optimierung und häufige Fehler',
  'Aspect légal — ce qu\'il faut savoir': 'Rechtliche Aspekte — was Sie wissen sollten',

  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'Der Ringmaster (oft als <strong>RM</strong> abgekürzt) ist die Support-Klasse schlechthin in Flyff Universe. Seine Rolle ist klar: die Gruppe durch Buffs (Heart of Power, Beef Up, Mental Sign…), die je nach Stufe zwischen 5 und 30 Minuten halten, am Leben halten und Schaden mit Heal Rain im AOE heilen. Auf dem Papier ist das klar. In der Praxis ist es eine der ermüdendsten Klassen bei langen Farm-Sessions: 80% der Zeit verbringen Sie damit, <strong>alle 5 Minuten zu rebuffen</strong>, <strong>Heal Rain alle 10-15 Sekunden neu zu casten</strong> und die <strong>FP-Leisten</strong> jedes Gruppenmitglieds im Auge zu behalten.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'Automatisierung ersetzt Ihr Urteilsvermögen nicht. Sie nimmt Ihrer Tastatur mechanische Routinen ab: die vollständige Rebuff-Sequenz, das periodische Heal, den Einsatz von FP-Tränken. Ihre Hände bleiben frei für die <strong>Momente, die wirklich zählen</strong>: ein drohender Wipe, eine entgleitende Wave, ein Boss, der den RM zuerst aufs Korn nimmt.',
  '💡 Cas d\'usage typique': '💡 Typischer Anwendungsfall',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Sie starten ein 4-Stunden-Farming auf Glaphan oder Asteria. Ohne Automatisierung: 240 Minuten ÷ 5 Minuten = 48 manuelle Rebuff-Zyklen. Mit konfiguriertem Reborn Assistant: 1 Zyklus, der Rest läuft im Hintergrund. Sie greifen nur ein, wenn sich die Zusammensetzung ändert oder ein Mitglied stirbt.',

  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Bevor Sie etwas aktivieren, schaffen Sie eine solide Basis:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> installiert (die kostenlose Version umfasst nur das Basis-Heal-Makro). Siehe den <a href="quickstart.html">Installations-Guide</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Ihre Ringmaster-Buffs den Tasten F2 → 0</strong> in logischer Reihenfolge zugewiesen (Heart of Power zuerst, AOE-Buffs dann, Single-Target zuletzt).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain auf der Taste § (oder einer anderen dedizierten Taste)</strong> — das ist die Taste, die Reborn Assistant in Schleife auslöst.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Ein Stapel FP-Tränke</strong> im Inventar — Automatisierung erfindet keine Ressourcen.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Eine stabile Farm-Zone</strong>: Vermeiden Sie Zonen mit erzwungenen Teleports oder Mobs, die zurückstoßen (das verschiebt Positionen und bricht den AOE).',

  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Nicht alle Sequenzen sind gleichwertig. So sieht die typische Hierarchie eines Full-Support-RM-Builds aus:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Essentielle Sequenzen (Rotation alle 5 Min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — STA + Angriffs-Boost, unverzichtbar',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — fixes STA, erhöht das Maximal-HP der Gruppe',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + Magie-Boost für Mages / AOE-Knights',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — Attack Speed, riesig für Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, nützlich in schwierigen Zonen',
  'Séquences situationnelles (à activer manuellement)': 'Situative Sequenzen (manuell aktivieren)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — nie automatisch, fallweise',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — elementarer Schadensbonus, je nach Kontext optional',

  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'Das ist das Herzstück des Systems. Reborn Assistant kann in regelmäßigen Abständen eine feste Sequenz <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> drücken. So richten Sie sie auf Ihren RM aus:',
  'Préparer vos slots de séquences': 'Ihre Sequenz-Slots vorbereiten',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Ziehen Sie Ihre Sequenzen aus der Sequenzleiste in die Flyff-Hotkey-Leiste in dieser Reihenfolge:',
  'Touche 1 → Heart of Power': 'Taste 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Taste 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Taste 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Taste 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Taste 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Tasten 6 bis 0 → Ihre weiteren verfügbaren Buffs oder leer',
  'Activer la rotation dans Reborn Assistant': 'Die Rotation in Reborn Assistant aktivieren',
  'Dans le panneau Reborn, onglet Premium :': 'Im Reborn-Panel, Tab Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Aktivieren Sie den Toggle <strong>„Sequenz-Rotation"</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Stellen Sie das <strong>Intervall zwischen Zyklen</strong> auf die Dauer des kürzesten Buffs ein (typisch 5 Min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Stellen Sie die <strong>Verzögerung zwischen Tasten</strong> auf 1 Sekunde ein (lässt die Sequenz-Animation Zeit zum Abspielen)',
  'Tester un cycle complet': 'Einen vollständigen Zyklus testen',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Starten Sie mit <code>STRG+A</code>. Beobachten Sie das Aktivitätsprotokoll: Sie sollten <em>F2 pressed → 1 pressed → 2 pressed…</em> sequenziell sehen, mit ~1 Sekunde dazwischen. Startet eine Sequenz nicht, liegt es wahrscheinlich an einem Cooldown oder fehlendem FP — prüfen Sie visuell im Spiel.',

  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'Heal Rain muss parallel zur Buff-Rotation laufen. Reborn Assistant bietet ein festes periodisches Makro im 15-Sekunden-Takt, perfekt auf die AOE-Zone von Heal Rain abgestimmt (Dauer etwa 12-15 Sekunden).',
  'Assigner Heal Rain à la touche §': 'Heal Rain der Taste § zuweisen',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Standardmäßig löst das periodische Makro von Reborn Assistant die Taste <code>§</code> aus. Ziehen Sie Heal Rain in Flyff auf diese Taste.',
  'Activer la macro périodique': 'Das periodische Makro aktivieren',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Toggle <strong>„Periodisches Makro"</strong> im Premium-Panel. Das System ruft Heal Rain alle 15 Sekunden auf, mit automatischer Speicherung.',
  '⚠️ Attention au positionnement': '⚠️ Auf die Positionierung achten',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'Heal Rain ist ein AOE, das auf Sie zentriert ist. Bewegen Sie sich ständig (Kite oder Repositionierung), deckt Heal Rain Ihre DPS nicht ab. Bleiben Sie statisch oder legen Sie einen festen Sammelpunkt für die Gruppe fest.',

  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Zusätzlich zu Rotation und Heal bietet Reborn Assistant Premium <strong>3 unabhängige Makros</strong>. So nutzen Sie sie für einen Ringmaster:',
  'Macro 1 — Pet feeding': 'Makro 1 — Pet-Fütterung',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Wenn Sie ein Haustier haben, das regelmäßig gefüttert werden muss, programmieren Sie eine Sequenz wie <code>k,h</code> (Pet-Panel-Taste + Heal-Pet) alle 30 Sekunden. Verhindert, dass Ihr Pet beim Farmen stirbt.',
  'Macro 2 — Stack de FP potions': 'Makro 2 — FP-Trank-Stack',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Konfigurieren Sie eine Sequenz wie <code>y</code> (FP-Trank-Taste) alle 20 Sekunden, um Ihr FP über 80% zu halten. Anpassen nach Verbrauch und Heal-Rain-Frequenz.',
  'Macro 3 — Anti-AFK': 'Makro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Eine Sequenz wie <code>up,down</code> oder <code>space</code> alle 4-5 Minuten verhindert ein AFK-Disconnect bei längeren ruhigen Farm-Phasen. Mit Bedacht einsetzen.',

  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Tasten-Verzögerung zu kurz</strong> — wenn Sequenzen ausgelassen werden, erhöhen Sie die Verzögerung zwischen Tasten auf 1,5 oder 2 Sekunden. Lieber ein etwas langsamerer, aber zu 100% durchlaufender Zyklus.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Globalen Cooldown nicht überschreiten</strong> — Flyff hat einen GCD (global cooldown). Spammen Sie zu schnell, werden Sequenzen ins Leere geschluckt. Die Standard-Verzögerung von 1s respektiert diesen GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP geht mitten im Zyklus aus</strong> — Ihre Rotation stoppt lautlos. Aktivieren Sie das FP-Trank-Makro oder erhöhen Sie Ihre INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Gruppenmitglieder außerhalb der AOE-Zone</strong> — das periodische Heal heilt nur Spieler im Heal-Rain-Radius (~12-15m). Kommunizieren Sie mit der Gruppe: Sie müssen in Reichweite bleiben.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Ziel nach Mob-Tod verloren</strong> — für den RM nicht schlimm, aber überwachen Sie Ihre Targets, wenn Sie auch Single-Target-Sequenzen in der Rotation haben.',

  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'Die Automatisierung repetitiver Aktionen über eine Erweiterung <strong>kann gegen die Nutzungsbedingungen</strong> einiger Spieldienste verstoßen, einschließlich derjenigen von Gala Lab für Flyff Universe. Reborn Assistant <strong>liest den Spielspeicher nicht aus, sendet keine Netzwerkpakete und modifiziert den Client nicht</strong>: Es ist strikt eine Simulation von Tasten, die Sie manuell drücken würden. Sie tragen die volle Verantwortung für Ihre Nutzung.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Um genau zu verstehen, was Reborn Assistant technisch tut (und was nicht), lesen Sie die <a href="../index.html#faq">FAQ auf der Hauptseite</a>.',

  'Prêt à libérer votre Ringmaster ?': 'Bereit, Ihren Ringmaster zu befreien?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Installieren Sie Reborn Assistant in 30 Sekunden über den Chrome Web Store. 7 Tage Premium-Testphase gratis, ohne Kreditkarte.',
  'Installer Reborn Assistant': 'Reborn Assistant installieren',

  '◆ Article lié': '◆ Verwandter Artikel',
  '◆ Documentation': '◆ Dokumentation',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'Die besten Flyff-Universe-Tools und -Erweiterungen 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Kompletter Klassen-Guide zum Ringmaster in Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Kompletter Guide zu den Premium-Funktionen',

  '← Retour aux docs': '← Zurück zur Dokumentation',

  '"Installer Reborn Assistant"': '"Reborn Assistant installieren"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Fügen Sie die Reborn-Assistant-Erweiterung über den Chrome Web Store hinzu und heften Sie sie an die Werkzeugleiste an.',
  '"Identifier vos séquences Ringmaster"': '"Ringmaster-Sequenzen identifizieren"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Listen Sie Ihre Schlüssel-Sequenzen auf: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep und den AOE-Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Sequenz-Rotation konfigurieren"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'Aktivieren Sie in Reborn Assistant die Rotation F2 → 1-9 → 0 → F1 mit einem Intervall von 5 Minuten (typische Dauer Ihrer Buffs).',
  '"Programmer le Heal périodique"': '"Periodisches Heal programmieren"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Aktivieren Sie das periodische Makro, um Heal Rain alle 15 Sekunden in der Gruppe auszulösen.',
  '"Lancer l\'automatisation"': '"Automatisierung starten"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Starten Sie mit STRG+A, beobachten Sie das Aktivitätsprotokoll, passen Sie die Verzögerungen an die Animationen Ihrer Sequenzen an.',
};

// ─── 11 other languages — populated by background agents ─────────────────────
const pt = automateRmPt;
const it = automateRmIt;
const nl = automateRmNl;
const pl = automateRmPl;
const ru = automateRmRu;
const tr = automateRmTr;
const ja = automateRmJa;
const ko = automateRmKo;
const tl = automateRmTl;
const zh = automateRmZh;
const ar = automateRmAr;

export const automateRmContent = { fr, en, es, de, pt, it, nl, pl, ru, tr, ja, ko, tl, zh, ar };
