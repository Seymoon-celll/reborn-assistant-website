/**
 * Translation map for docs/guide-ringmaster-flyff-universe.html
 * See automate-rm.mjs for the conventions.
 */

import { guideRmPt } from './_agent-pt.mjs';
import { guideRmIt } from './_agent-it.mjs';
import { guideRmNl } from './_agent-nl.mjs';
import { guideRmPl } from './_agent-pl.mjs';
import { guideRmRu } from './_agent-ru.mjs';
import { guideRmTr } from './_agent-tr.mjs';
import { guideRmJa } from './_agent-ja.mjs';
import { guideRmKo } from './_agent-ko.mjs';
import { guideRmTl } from './_agent-tl.mjs';
import { guideRmZh } from './_agent-zh.mjs';
import { guideRmAr } from './_agent-ar.mjs';

const fr = {};
const en = {};

const es = {
  // ─── SEO meta ──────────────────────────────────────────────────────────────
  'Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)':
    'Ringmaster Flyff Universe — Guía Completa 2026 (Build, Buffs, Rol)',
  'Guide complet du Ringmaster sur Flyff Universe : rôle, buffs essentiels, builds STA/INT, équipement, rotation, automatisation. Tout pour maîtriser la classe support.':
    'Guía completa del Ringmaster en Flyff Universe: rol, buffs esenciales, builds STA/INT, equipamiento, rotación, automatización. Todo para dominar la clase de soporte.',
  'Ringmaster guide, RM Flyff Universe, classe support Flyff, build Ringmaster, buffs RM, Mentalist vs Ringmaster, FWC RM':
    'guía Ringmaster, RM Flyff Universe, clase soporte Flyff, build Ringmaster, buffs RM, Mentalist vs Ringmaster, FWC RM',
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Guía Completa 2026',
  'Rôle, buffs essentiels, builds, équipement et automatisation : tout pour maîtriser le Ringmaster sur Flyff Universe.':
    'Rol, buffs esenciales, builds, equipamiento y automatización: todo para dominar al Ringmaster en Flyff Universe.',
  'Rôle, buffs, builds et équipement : maîtriser le Ringmaster sur Flyff Universe.':
    'Rol, buffs, builds y equipamiento: dominar al Ringmaster en Flyff Universe.',

  // ─── Breadcrumb / Nav ──────────────────────────────────────────────────────
  '← Retour aux docs': '← Volver a la documentación',
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Inicio</a> › <a href="index.html">Documentación</a> › Guía Ringmaster',

  // ─── H1 + subtitle ─────────────────────────────────────────────────────────
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Rol, buffs, builds, equipamiento, rotación: todo lo que necesitas saber para jugar Ringmaster en Flyff Universe en 2026, desde el nivel 60 hasta el end-game.',

  // ─── Section : Qu'est-ce qu'un Ringmaster ─────────────────────────────────
  'Qu\'est-ce qu\'un Ringmaster ?': '¿Qué es un Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'El <strong>Ringmaster</strong> (RM) es la evolución final de la rama Assist en Flyff Universe. Es <strong>la clase de soporte del juego</strong>: su rol principal no es infligir daño, sino <em>mantener al grupo con vida y hacerlo más poderoso</em> mediante buffs de larga duración y un heal AOE en bucle. Sin Ringmaster, un grupo end-game tarda dos o tres veces más en limpiar una zona — y sobrevive mucho peor a los pulls accidentales.',
  'Quelques caractéristiques qui définissent la classe :':
    'Algunas características que definen la clase:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Buffs de larga duración</strong> (5 a 30 minutos) que potencian las stats del grupo: ataque, defensa, velocidad, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, un AOE que cura con el tiempo a todos los aliados en un radio de ~12-15m',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> de jugador muerto sin penalización de experiencia',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Daño burst personal muy bajo</strong> — el RM no mata nada solo de forma eficaz',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Requiere casi siempre estar en grupo</strong> o tener un alt al que buffear/curar',

  // ─── Section : Le rôle ───────────────────────────────────────────────────
  'Le rôle du Ringmaster en groupe': 'El rol del Ringmaster en grupo',
  'Trois rôles principaux selon le contexte de jeu :':
    'Tres roles principales según el contexto de juego:',
  'Farm rapide (PvE classique)': 'Farm rápido (PvE clásico)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Acompañas a uno o varios DPS en un spot de farm. Tu trabajo: rebuffear cada 5 minutos, lanzar Heal Rain en continuo, vigilar los FP. Muy repetitivo — es exactamente la situación donde la automatización cobra todo su sentido.',
  'Raids & boss': 'Raids y boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Boss con gran burst damage tipo Glaphan, Bang, Aibatt. El ritmo cambia: menos heal periódico, más heals burst manuales, a veces Resurrection que anticipar. La automatización pasa a segundo plano aquí — debes conservar el control.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Competición organizada, metagame ultra-preciso. Los RM ya no son un mero servicio utility: contribuyen a comps optimizadas con timings de buffs sincronizados. Conocer las rotaciones de memoria se vuelve crítico. La automatización puede estar prohibida según las reglas del torneo — siempre verifica.',

  // ─── Section : Les buffs essentiels ──────────────────────────────────────
  'Les buffs essentiels du Ringmaster': 'Los buffs esenciales del Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Estos son los buffs que debes dominar e incluir en tu rotación, ordenados por prioridad:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ Prioridad absoluta · 30 min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost de STA + ataque para todo el grupo. El buff insignia del Ringmaster, a activar primero en la rotación.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ Prioridad alta · 15 min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Aumenta el HP máximo del grupo. Crítico en zonas donde un wipe es posible si un miembro no tiene su cap de HP.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Boost de INT del grupo. Enorme para Mages, Knights AOE y Rangers que usan skills con scaling mágico.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Aumenta la attack speed. Game-changer para Blades y Rangers; menos crítico para Mages.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Boost de dodge. Útil en zonas donde los mobs tienen muchos ataques físicos rápidos.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 seg',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'El AOE de curación centrado en ti. A relanzar en bucle durante todo el farm. Cubre a todos los aliados en un radio de 12-15m.',

  // ─── Section : Build STA vs INT ──────────────────────────────────────────
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — ¿Qué build elegir?',
  'Deux écoles principales en 2026 :': 'Dos escuelas principales en 2026:',
  'Critère': 'Criterio',
  'Build STA Full': 'Build STA Full',
  'Build INT Hybrid': 'Build INT Hybrid',
  'Stats principaux': 'Stats principales',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, INT mínimo requerido para los buffs',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, a veces 30/70 según el nivel',
  'HP / Survie': 'HP / Supervivencia',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Excelente — pool enorme, sobrevive a los pulls accidentales',
  'Moyen — exige plus d\'attention du joueur': 'Medio — exige más atención del jugador',
  'Puissance des heals': 'Potencia de los heals',
  'Correct — suffit pour la plupart des situations': 'Correcto — suficiente para la mayoría de situaciones',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Excelente — Heal Rain y otros heals escalan fuerte con INT',
  'FP pool': 'Pool de FP',
  'Faible — nécessite plus de potions': 'Bajo — requiere más pociones',
  'Élevé — gestion FP plus confortable': 'Alto — gestión FP más cómoda',
  'Recommandé pour': 'Recomendado para',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Jugadores principiantes, farm poco peligroso, RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Jugadores experimentados, raids difíciles, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'El build STA Full sigue siendo el más perdonante y el más jugado. El build INT Hybrid es más exigente pero recompensa con un heal output significativamente superior — un must para el contenido competitivo.',

  // ─── Section : Équipement ───────────────────────────────────────────────
  'Équipement recommandé': 'Equipamiento recomendado',
  'Armes': 'Armas',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (bastón)</strong> — mejor scaling de INT, recomendado para build INT Hybrid',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (vara)</strong> — equilibrado, polivalente',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (escudo)</strong> en off-hand — ganancia de defensa, muy recomendado en STA Full',
  'Armure': 'Armadura',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>Set de jewelry STA</strong> para el build STA Full (Tinerbol, Lord, etc. según nivel)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>Set de jewelry INT</strong> o híbrido STA/INT para el build Hybrid',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Priorizar siempre el set completo</strong> para el bonus de 2/4/6 piezas',
  'Bijoux (jewelry)': 'Joyas (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'La optimización de las joyas es donde el RM pasa de correcto a excelente. Usa una calculadora (ver <a href="meilleurs-outils-flyff-universe-2026.html">nuestro comparativo de herramientas</a>) para identificar la combinación que maximiza tu stat prioritaria según el nivel.',

  // ─── Section : Rotation ─────────────────────────────────────────────────
  'Rotation et gestion du rythme': 'Rotación y gestión del ritmo',
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Una rotación eficaz en farm clásico se resume en 3 timings:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Cada 5 minutos</strong> — rebuff completo del grupo (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Cada 12-15 segundos</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Continuo</strong> — vigilancia de los HP individuales para heals burst de urgencia',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Los dos primeros timings son mecánicos y perfectos para <strong>la automatización</strong>. El tercero requiere tu atención humana. Es el arbitraje clave del Ringmaster moderno: automatizar lo que es repetitivo para <strong>reservar tu energía para los momentos decisivos</strong>.',
  '💡 Tutoriel pratique disponible': '💡 Tutorial práctico disponible',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Hemos redactado un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutorial paso a paso para automatizar tu Ringmaster</a> con Reborn Assistant: configuración de rotaciones, intervalo entre ciclos, macro Heal Rain y errores que evitar.',

  // ─── Section : Ringmaster vs Mentalist ─────────────────────────────────
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — ¿Cuál es la diferencia?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Dos clases de la rama Assist, a menudo confundidas por los principiantes:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, daño personal bajo, indispensable en grupo, poco eficaz en solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = orientación DPS mágico, puede farmear en solo, pierde parte de los buffs de larga duración del RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Si tu intención es jugar en grupo, jugar FWC o ser el "pilar" de una guild → Ringmaster. Si quieres una clase Assist más autónoma en solo → Mentalist.',

  // ─── Section : Erreurs courantes ─────────────────────────────────────────
  'Erreurs courantes de débutant Ringmaster': 'Errores frecuentes de Ringmaster principiante',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>No rebuffear con regularidad</strong> — un buff que falta tras 5 minutos cuesta a veces más que la vida entera del DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Moverse durante Heal Rain</strong> — el AOE no te sigue, los aliados salen del radio',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Build full INT demasiado pronto</strong> — sin pool de HP suficiente, mueres antes de haber lanzado Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Ignorar las pociones FP</strong> — un RM sin FP es un RM inútil',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Intentar hacer DPS</strong> — pierdes tiempo mejor invertido en el heal y los buffs',

  // ─── CTA ────────────────────────────────────────────────────────────────
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Optimiza tu Ringmaster con Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'La extensión premium para automatizar la rotación de buffs, el Heal Rain periódico y tus macros personalizadas. 7 días de prueba gratis sin tarjeta bancaria.',
  'Installer Reborn Assistant': 'Instalar Reborn Assistant',

  // ─── Footer ─────────────────────────────────────────────────────────────
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Guía actualizada el 16 de mayo de 2026 — Flyff Universe (Gala Lab).',
};
const de = {
  // ─── SEO meta ──────────────────────────────────────────────────────────────
  'Ringmaster Flyff Universe — Guide Complet 2026 (Build, Buffs, Rôle)':
    'Ringmaster Flyff Universe — Kompletter Guide 2026 (Build, Buffs, Rolle)',
  'Guide complet du Ringmaster sur Flyff Universe : rôle, buffs essentiels, builds STA/INT, équipement, rotation, automatisation. Tout pour maîtriser la classe support.':
    'Kompletter Ringmaster-Guide für Flyff Universe: Rolle, wichtige Buffs, STA/INT-Builds, Ausrüstung, Rotation, Automatisierung. Alles, um die Support-Klasse zu meistern.',
  'Ringmaster guide, RM Flyff Universe, classe support Flyff, build Ringmaster, buffs RM, Mentalist vs Ringmaster, FWC RM':
    'Ringmaster Guide, RM Flyff Universe, Flyff Support-Klasse, Ringmaster Build, RM Buffs, Mentalist vs Ringmaster, FWC RM',
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Kompletter Guide 2026',
  'Rôle, buffs essentiels, builds, équipement et automatisation : tout pour maîtriser le Ringmaster sur Flyff Universe.':
    'Rolle, wichtige Buffs, Builds, Ausrüstung und Automatisierung: alles, um den Ringmaster in Flyff Universe zu meistern.',
  'Rôle, buffs, builds et équipement : maîtriser le Ringmaster sur Flyff Universe.':
    'Rolle, Buffs, Builds und Ausrüstung: den Ringmaster in Flyff Universe meistern.',

  // ─── Breadcrumb / Nav ──────────────────────────────────────────────────────
  '← Retour aux docs': '← Zurück zur Dokumentation',
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Startseite</a> › <a href="index.html">Dokumentation</a> › Ringmaster-Guide',

  // ─── H1 + subtitle ─────────────────────────────────────────────────────────
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Rolle, Buffs, Builds, Ausrüstung, Rotation: alles, was Sie wissen müssen, um den Ringmaster in Flyff Universe 2026 zu spielen, von Stufe 60 bis ins End-Game.',

  // ─── Section : Qu'est-ce qu'un Ringmaster ─────────────────────────────────
  'Qu\'est-ce qu\'un Ringmaster ?': 'Was ist ein Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'Der <strong>Ringmaster</strong> (RM) ist der finale Aufstieg des Assist-Zweigs in Flyff Universe. Er ist <strong>die Support-Klasse des Spiels</strong>: Seine Hauptaufgabe ist nicht, Schaden zu verursachen, sondern <em>die Gruppe am Leben zu halten und zu stärken</em> durch lang anhaltende Buffs und ein AOE-Heal in Schleife. Ohne Ringmaster braucht eine End-Game-Gruppe zwei- bis dreimal länger, um eine Zone zu clearen — und überlebt unbeabsichtigte Pulls deutlich schlechter.',
  'Quelques caractéristiques qui définissent la classe :':
    'Einige Merkmale, die die Klasse definieren:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Buffs mit langer Dauer</strong> (5 bis 30 Minuten), die die Gruppen-Stats steigern: Angriff, Verteidigung, Geschwindigkeit, Dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, ein AOE, das alle Verbündeten im Radius von ~12-15m über Zeit heilt',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Resurrection</strong> eines toten Spielers ohne Erfahrungsabzug',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Sehr geringer persönlicher Burst-Damage</strong> — der RM tötet allein nichts effizient',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Erfordert fast immer eine Gruppe</strong> oder einen Alt zum Buffen/Heilen',

  // ─── Section : Le rôle ───────────────────────────────────────────────────
  'Le rôle du Ringmaster en groupe': 'Die Rolle des Ringmaster in der Gruppe',
  'Trois rôles principaux selon le contexte de jeu :':
    'Drei Hauptrollen je nach Spielkontext:',
  'Farm rapide (PvE classique)': 'Schnelles Farmen (klassisches PvE)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Sie begleiten einen oder mehrere DPS an einem Farm-Spot. Ihre Aufgabe: alle 5 Minuten rebuffen, Heal Rain dauerhaft casten, die FP überwachen. Sehr repetitiv — genau die Situation, in der Automatisierung ihren Sinn entfaltet.',
  'Raids & boss': 'Raids & Boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Bosse mit hohem Burst-Damage wie Glaphan, Bang, Aibatt. Der Rhythmus ändert sich: weniger periodisches Heal, mehr manuelle Burst-Heals, manchmal Resurrection vorab planen. Automatisierung tritt hier in den Hintergrund — Sie müssen die Kontrolle behalten.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Organisierter Wettbewerb, ultra-präzises Metagame. RMs sind nicht mehr nur Utility: Sie tragen zu optimierten Comps mit synchronisierten Buff-Timings bei. Die Rotationen auswendig zu kennen wird kritisch. Automatisierung kann je nach Turnierregeln verboten sein — stets prüfen.',

  // ─── Section : Les buffs essentiels ──────────────────────────────────────
  'Les buffs essentiels du Ringmaster': 'Die wichtigsten Buffs des Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Hier die Buffs, die Sie beherrschen und in Ihre Rotation aufnehmen sollten, sortiert nach Priorität:',
  'Heart of Power (HoP)': 'Heart of Power (HoP)',
  '★ Priorité absolue · 30 min': '★ Absolute Priorität · 30 Min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'STA + Angriffs-Boost für die gesamte Gruppe. Der Signatur-Buff des Ringmaster, als Erstes in der Rotation zu aktivieren.',
  'Beef Up': 'Beef Up',
  '★ Priorité haute · 15 min': '★ Hohe Priorität · 15 Min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Erhöht das maximale HP der Gruppe. Kritisch in Zonen, in denen ein Wipe möglich ist, wenn ein Mitglied seinen HP-Cap nicht erreicht.',
  'Mental Sign': 'Mental Sign',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'INT-Boost für die Gruppe. Enorm für Mages, AOE-Knights und Rangers, die Skills mit magischem Scaling nutzen.',
  'Speed Pep': 'Speed Pep',
  '15 min': '15 Min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Erhöht die Attack Speed. Game-Changer für Blades und Rangers; weniger kritisch für Mages.',
  'Cat\'s Reflex': 'Cat\'s Reflex',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Dodge-Boost. Nützlich in Zonen, in denen Mobs viele schnelle physische Angriffe haben.',
  'Heal Rain': 'Heal Rain',
  'AOE · ~15 sec': 'AOE · ~15 Sek',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'Das auf Sie zentrierte AOE-Heal. Während des gesamten Farms in Schleife neu zu casten. Deckt alle Verbündeten im Radius von 12-15m ab.',

  // ─── Section : Build STA vs INT ──────────────────────────────────────────
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Welcher Build?',
  'Deux écoles principales en 2026 :': 'Zwei Hauptschulen 2026:',
  'Critère': 'Kriterium',
  'Build STA Full': 'Build STA Full',
  'Build INT Hybrid': 'Build INT Hybrid',
  'Stats principaux': 'Haupt-Stats',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, INT-Minimum für die Buffs',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, manchmal 30/70 je nach Level',
  'HP / Survie': 'HP / Überleben',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Exzellent — riesiger Pool, übersteht unbeabsichtigte Pulls',
  'Moyen — exige plus d\'attention du joueur': 'Mittel — erfordert mehr Aufmerksamkeit des Spielers',
  'Puissance des heals': 'Heal-Stärke',
  'Correct — suffit pour la plupart des situations': 'Solide — reicht für die meisten Situationen',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Exzellent — Heal Rain und andere Heals skalieren stark mit INT',
  'FP pool': 'FP-Pool',
  'Faible — nécessite plus de potions': 'Niedrig — benötigt mehr Tränke',
  'Élevé — gestion FP plus confortable': 'Hoch — komfortableres FP-Management',
  'Recommandé pour': 'Empfohlen für',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Anfänger, ungefährliches Farmen, Solo-Utility-RM',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Erfahrene Spieler, schwierige Raids, FWC, End-Game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'Der Full-STA-Build bleibt der verzeihendste und meistgespielte. Der INT-Hybrid-Build ist anspruchsvoller, belohnt aber mit deutlich höherem Heal-Output — ein Muss für kompetitiven Content.',

  // ─── Section : Équipement ───────────────────────────────────────────────
  'Équipement recommandé': 'Empfohlene Ausrüstung',
  'Armes': 'Waffen',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (Stab)</strong> — bestes INT-Scaling, empfohlen für INT-Hybrid-Build',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick</strong> — ausgewogen, vielseitig',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (Schild)</strong> in der Off-Hand — Defense-Gewinn, dringend empfohlen bei STA Full',
  'Armure': 'Rüstung',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>STA-Jewelry-Set</strong> für den Full-STA-Build (Tinerbol, Lord, je nach Stufe)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>INT-Jewelry-Set</strong> oder STA/INT-Hybrid für den Hybrid-Build',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Immer das komplette Set bevorzugen</strong> für den 2/4/6-Teile-Bonus',
  'Bijoux (jewelry)': 'Schmuck (Jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'Die Jewelry-Optimierung ist der Punkt, an dem ein RM von solide zu exzellent wird. Nutzen Sie einen Rechner (siehe <a href="meilleurs-outils-flyff-universe-2026.html">unseren Tool-Vergleich</a>), um die Kombination zu finden, die Ihre Prioritäts-Stat je nach Stufe maximiert.',

  // ─── Section : Rotation ─────────────────────────────────────────────────
  'Rotation et gestion du rythme': 'Rotation und Rhythmus-Management',
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Eine effiziente Rotation im klassischen Farm lebt von 3 Timings:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>Alle 5 Minuten</strong> — vollständiger Rebuff der Gruppe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>Alle 12-15 Sekunden</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Durchgehend</strong> — Überwachung individueller HP für Notfall-Burst-Heals',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Die ersten beiden Timings sind mechanisch und perfekt für <strong>Automatisierung</strong>. Das dritte erfordert Ihre menschliche Aufmerksamkeit. Das ist der zentrale Trade-off des modernen Ringmaster: das Repetitive automatisieren, um <strong>Ihre Energie für die entscheidenden Momente zu sparen</strong>.',
  '💡 Tutoriel pratique disponible': '💡 Praktisches Tutorial verfügbar',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Wir haben ein <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">Schritt-für-Schritt-Tutorial zur Automatisierung Ihres Ringmaster</a> mit Reborn Assistant verfasst: Rotationen konfigurieren, Intervalle zwischen Zyklen, Heal-Rain-Makro und Fehler, die Sie vermeiden sollten.',

  // ─── Section : Ringmaster vs Mentalist ─────────────────────────────────
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Worin der Unterschied?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Zwei Klassen aus dem Assist-Zweig, von Anfängern oft verwechselt:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = Full Support, geringer persönlicher Damage, unverzichtbar in der Gruppe, im Solo wenig effektiv',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = magische DPS-Ausrichtung, kann solo farmen, verliert einen Teil der langen Buffs des RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Wenn Sie in der Gruppe spielen wollen, FWC spielen wollen oder die „Säule" einer Gilde sein wollen → Ringmaster. Wenn Sie eine Assist-Klasse wollen, die im Solo autonomer ist → Mentalist.',

  // ─── Section : Erreurs courantes ─────────────────────────────────────────
  'Erreurs courantes de débutant Ringmaster': 'Häufige Anfängerfehler beim Ringmaster',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Nicht regelmäßig rebuffen</strong> — ein fehlender Buff nach 5 Minuten kostet manchmal mehr als das gesamte Leben des DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Sich während Heal Rain bewegen</strong> — das AOE folgt nicht, Verbündete verlassen den Radius',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Zu früh auf Full INT</strong> — ohne ausreichenden HP-Pool sterben Sie, bevor Sie Heal Rain casten können',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>FP-Tränke ignorieren</strong> — ein RM ohne FP ist nutzlos',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Damage versuchen</strong> — Sie verlieren Zeit, die besser in Heal und Buffs investiert ist',

  // ─── CTA ────────────────────────────────────────────────────────────────
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Optimieren Sie Ihren Ringmaster mit Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'Die Premium-Erweiterung zur Automatisierung der Buff-Rotation, des periodischen Heal Rain und Ihrer benutzerdefinierten Makros. 7 Tage kostenlose Testphase, keine Kreditkarte.',
  'Installer Reborn Assistant': 'Reborn Assistant installieren',

  // ─── Footer ─────────────────────────────────────────────────────────────
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Guide aktualisiert am 16. Mai 2026 — Flyff Universe (Gala Lab).',
};
const pt = guideRmPt;
const it = guideRmIt;
const nl = guideRmNl;
const pl = guideRmPl;
const ru = guideRmRu;
const tr = guideRmTr;
const ja = guideRmJa;
const ko = guideRmKo;
const tl = guideRmTl;
const zh = guideRmZh;
const ar = guideRmAr;

export const guideRmContent = { fr, en, es, de, pt, it, nl, pl, ru, tr, ja, ko, tl, zh, ar };
