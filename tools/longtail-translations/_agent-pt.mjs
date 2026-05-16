/**
 * Portuguese (pt-BR) translation maps for the three SEO long-tail pages:
 *   - docs/automatiser-ringmaster-flyff-universe.html  → automateRmPt
 *   - docs/meilleurs-outils-flyff-universe-2026.html   → toolsPt
 *   - docs/guide-ringmaster-flyff-universe.html        → guideRmPt
 *
 * Keys = exact FR source phrases (must match HTML body verbatim).
 * Values = pt-BR translations preserving inline HTML tags.
 */

// ─── automateRmPt ─────────────────────────────────────────────────────────────
export const automateRmPt = {
  // Breadcrumb
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Automatiser son Ringmaster':
    '<a href="../index.html">Início</a> › <a href="index.html">Documentação</a> › Automatizar seu Ringmaster',

  // H1 + subtitle
  'Automatiser son Ringmaster sur Flyff Universe — Guide complet 2026':
    'Automatizar seu Ringmaster no Flyff Universe — Guia completo 2026',
  'Buffs, séquences, AOE heal, gestion HP/FP : le tutoriel pas à pas pour transformer votre Ringmaster en pilier de groupe sans y laisser la main.':
    'Buffs, sequências, AOE heal, gestão de HP/FP: o tutorial passo a passo para transformar seu Ringmaster em pilar do grupo sem deixar a mão lá.',

  // TOC
  '◆ Sommaire': '◆ Sumário',
  'Pourquoi automatiser son Ringmaster': 'Por que automatizar seu Ringmaster',
  'Prérequis avant d\'automatiser': 'Pré-requisitos antes de automatizar',
  'Identifier vos séquences Ringmaster': 'Identifique suas sequências Ringmaster',
  'Configurer la rotation de buffs': 'Configure a rotação de buffs',
  'Programmer le Heal périodique': 'Programe o Heal periódico',
  'Macros personnalisées (DPS, support, urgence)': 'Macros personalizadas (DPS, suporte, emergência)',
  'Optimisation et erreurs courantes': 'Otimização e erros frequentes',
  'Aspect légal — ce qu\'il faut savoir': 'Aspecto legal — o que você precisa saber',

  // Section: Pourquoi
  'Le Ringmaster (souvent abrégé <strong>RM</strong>) est la classe support emblématique de Flyff Universe. Son rôle est clair : maintenir le groupe en vie via des buffs (Heart of Power, Beef Up, Mental Sign…) qui durent entre 5 et 30 minutes selon le niveau, et soigner les dégâts via Heal Rain en AOE. Sur le papier, c\'est limpide. En pratique, c\'est l\'une des classes les plus fatigantes à jouer en farm prolongé : vous passez 80% de votre temps à <strong>rebuff toutes les 5 minutes</strong>, à <strong>relancer Heal Rain toutes les 10-15 secondes</strong> et à <strong>maintenir un œil sur les barres FP</strong> de chaque membre du groupe.':
    'O Ringmaster (frequentemente abreviado como <strong>RM</strong>) é a classe de suporte emblemática do Flyff Universe. Seu papel é claro: manter o grupo vivo através de buffs (Heart of Power, Beef Up, Mental Sign…) que duram entre 5 e 30 minutos conforme o nível, e curar os danos com Heal Rain em AOE. No papel, parece simples. Na prática, é uma das classes mais cansativas em farm prolongado: você passa 80% do tempo <strong>rebufando a cada 5 minutos</strong>, <strong>relançando Heal Rain a cada 10-15 segundos</strong> e <strong>ficando de olho nas barras de FP</strong> de cada membro do grupo.',
  'L\'automatisation ne remplace pas votre jugement. Elle décharge votre clavier des routines mécaniques : la séquence de rebuff complète, le heal périodique, l\'utilisation des potions FP. Vous gardez les mains libres pour les <strong>moments où ça compte vraiment</strong> : un wipe imminent, un wave qui dérape, un boss qui shoot le RM en premier.':
    'A automação não substitui seu julgamento. Ela alivia seu teclado das rotinas mecânicas: a sequência completa de rebuff, o heal periódico, o uso de poções de FP. Você mantém as mãos livres para os <strong>momentos que realmente importam</strong>: um wipe iminente, uma wave que descontrola, um boss que mira o RM primeiro.',
  '💡 Cas d\'usage typique': '💡 Caso de uso típico',
  'Vous lancez un farm de 4 heures sur Glaphan ou Asteria. Sans automatisation : 240 minutes ÷ 5 minutes = 48 cycles de rebuff manuel. Avec Reborn Assistant configuré : 1 cycle, le reste tourne en arrière-plan. Vous reprenez la main uniquement si la composition change ou si un membre meurt.':
    'Você inicia uma sessão de farm de 4 horas em Glaphan ou Asteria. Sem automação: 240 minutos ÷ 5 minutos = 48 ciclos de rebuff manual. Com o Reborn Assistant configurado: 1 ciclo, o resto roda em segundo plano. Você só retoma o controle se a composição mudar ou se um membro morrer.',

  // Prérequis
  'Avant d\'activer quoi que ce soit, posez les bases solides :':
    'Antes de ativar qualquer coisa, estabeleça uma base sólida:',
  '<strong>Reborn Assistant Premium</strong> installé (la version gratuite ne couvre que la macro soin de base). Voir le <a href="quickstart.html">guide d\'installation</a>.':
    '<strong>Reborn Assistant Premium</strong> instalado (a versão gratuita cobre apenas a macro de heal básica). Veja o <a href="quickstart.html">guia de instalação</a>.',
  '<strong>Vos buffs Ringmaster assignés aux touches F2 → 0</strong> en suivant un ordre logique (Heart of Power d\'abord, AOE buffs ensuite, single-target en dernier).':
    '<strong>Seus buffs Ringmaster atribuídos às teclas F2 → 0</strong> seguindo uma ordem lógica (Heart of Power primeiro, AOE buffs em seguida, single-target por último).',
  '<strong>Heal Rain sur la touche § (ou autre touche dédiée)</strong> — c\'est la touche que Reborn Assistant déclenchera en boucle.':
    '<strong>Heal Rain na tecla § (ou outra tecla dedicada)</strong> — é a tecla que o Reborn Assistant acionará em loop.',
  '<strong>Une pile de potions FP</strong> dans l\'inventaire — l\'automatisation n\'invente pas les ressources.':
    '<strong>Uma pilha de poções de FP</strong> no inventário — a automação não inventa recursos.',
  '<strong>Une zone de farm stable</strong> : éviter les zones avec téléportations forcées ou mobs qui repoussent (ça décale les positions et casse l\'AOE).':
    '<strong>Uma zona de farm estável</strong>: evite zonas com teleportes forçados ou mobs que empurram (desloca as posições e quebra o AOE).',

  // Identifier vos séquences
  'Toutes les séquences ne sont pas égales. Voici la hiérarchie typique d\'un build RM full support :':
    'Nem todas as sequências são iguais. Esta é a hierarquia típica de um build RM full support:',
  'Séquences essentielles (rotation toutes les 5 min)': 'Sequências essenciais (rotação a cada 5 min)',
  '<strong>Heart of Power (HoP)</strong> — boost STA + attaque, indispensable':
    '<strong>Heart of Power (HoP)</strong> — boost STA + ataque, indispensável',
  '<strong>Beef Up</strong> — STA flat, augmente HP max du groupe':
    '<strong>Beef Up</strong> — STA fixo, aumenta o HP máximo do grupo',
  '<strong>Mental Sign</strong> — INT + boost magique pour les Mages / Knights AOE':
    '<strong>Mental Sign</strong> — INT + boost mágico para Mages / Knights AOE',
  '<strong>Speed Pep</strong> — attack speed, énorme pour les Blades / Rangers':
    '<strong>Speed Pep</strong> — attack speed, enorme para Blades / Rangers',
  '<strong>Cat\'s Reflex</strong> — DODGE, utile en zone difficile':
    '<strong>Cat\'s Reflex</strong> — DODGE, útil em zonas difíceis',
  'Séquences situationnelles (à activer manuellement)': 'Sequências situacionais (ativar manualmente)',
  '<strong>Resurrection</strong> — jamais en auto, situation par situation':
    '<strong>Resurrection</strong> — nunca em auto, caso a caso',
  '<strong>Holy Cross</strong> — bonus dégâts élémentaires, optionnel selon le contexte':
    '<strong>Holy Cross</strong> — bônus de dano elemental, opcional conforme o contexto',

  // Configurer la rotation
  'C\'est le cœur du système. Reborn Assistant peut appuyer sur une séquence fixe <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> à intervalle régulier. Voici comment l\'aligner avec votre RM :':
    'É o coração do sistema. O Reborn Assistant pode pressionar uma sequência fixa <code>F2 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0 → F1</code> em intervalos regulares. Veja como alinhá-la com seu RM:',
  'Préparer vos slots de séquences': 'Preparar seus slots de sequências',
  'Glissez vos séquences depuis la barre de séquences vers la barre de raccourcis Flyff dans cet ordre :':
    'Arraste suas sequências da barra de sequências para a barra de atalhos do Flyff nesta ordem:',
  'Touche 1 → Heart of Power': 'Tecla 1 → Heart of Power',
  'Touche 2 → Beef Up': 'Tecla 2 → Beef Up',
  'Touche 3 → Mental Sign': 'Tecla 3 → Mental Sign',
  'Touche 4 → Speed Pep': 'Tecla 4 → Speed Pep',
  'Touche 5 → Cat\'s Reflex': 'Tecla 5 → Cat\'s Reflex',
  'Touches 6 à 0 → vos autres buffs disponibles ou vide':
    'Teclas 6 a 0 → seus outros buffs disponíveis ou vazias',
  'Activer la rotation dans Reborn Assistant': 'Ativar a rotação no Reborn Assistant',
  'Dans le panneau Reborn, onglet Premium :': 'No painel Reborn, aba Premium:',
  'Activez le toggle <strong>« Rotation Séquences »</strong>':
    'Ative o toggle <strong>"Rotação de Sequências"</strong>',
  'Réglez <strong>l\'intervalle entre cycles</strong> sur la durée du buff le plus court (typiquement 5 min)':
    'Configure o <strong>intervalo entre ciclos</strong> para a duração do buff mais curto (tipicamente 5 min)',
  'Réglez <strong>le délai entre touches</strong> sur 1 seconde (laisse le temps à l\'animation de séquence de se jouer)':
    'Configure o <strong>delay entre teclas</strong> para 1 segundo (dá tempo para a animação da sequência tocar)',
  'Tester un cycle complet': 'Testar um ciclo completo',
  'Lancez avec <code>CTRL+A</code>. Surveillez le log d\'activité : vous devez voir <em>F2 pressed → 1 pressed → 2 pressed…</em> séquentiellement, avec ~1 seconde entre chaque. Si une séquence ne se lance pas, c\'est probablement un cooldown ou une absence de FP — vérifiez visuellement en jeu.':
    'Inicie com <code>CTRL+A</code>. Observe o log de atividade: você deve ver <em>F2 pressed → 1 pressed → 2 pressed…</em> sequencialmente, com ~1 segundo entre cada um. Se uma sequência não disparar, provavelmente é cooldown ou falta de FP — verifique visualmente no jogo.',

  // Heal périodique
  'Le Heal Rain doit tourner en parallèle de la rotation des buffs. Reborn Assistant propose une macro périodique fixe à 15 secondes, parfaitement calibrée pour la zone AOE de Heal Rain (qui dure environ 12-15 secondes).':
    'O Heal Rain deve rodar em paralelo com a rotação de buffs. O Reborn Assistant oferece uma macro periódica fixa de 15 segundos, perfeitamente calibrada para a área AOE do Heal Rain (que dura cerca de 12-15 segundos).',
  'Assigner Heal Rain à la touche §': 'Atribuir Heal Rain à tecla §',
  'Par défaut, la macro périodique de Reborn Assistant déclenche la touche <code>§</code>. Glissez Heal Rain sur cette touche dans Flyff.':
    'Por padrão, a macro periódica do Reborn Assistant aciona a tecla <code>§</code>. Arraste Heal Rain para esta tecla no Flyff.',
  'Activer la macro périodique': 'Ativar a macro periódica',
  'Toggle <strong>« Macro périodique »</strong> dans le panneau Premium. Le système appellera Heal Rain toutes les 15 secondes, avec stockage automatique.':
    'Ative o toggle <strong>"Macro periódica"</strong> no painel Premium. O sistema invocará Heal Rain a cada 15 segundos, com armazenamento automático.',
  '⚠️ Attention au positionnement': '⚠️ Atenção ao posicionamento',
  'Heal Rain est une AOE centrée sur vous. Si vous bougez constamment (kite ou repositionnement), votre Heal Rain ne couvrira pas vos DPS. Restez statique ou définissez un point de rallye fixe pour le groupe.':
    'O Heal Rain é um AOE centrado em você. Se você se movimenta constantemente (kite ou reposicionamento), seu Heal Rain não cobrirá seus DPS. Fique parado ou defina um ponto de encontro fixo para o grupo.',

  // Macros personnalisées
  'En plus de la rotation et du heal, Reborn Assistant Premium offre <strong>3 macros indépendantes</strong>. Voici comment les exploiter pour un Ringmaster :':
    'Além da rotação e do heal, o Reborn Assistant Premium oferece <strong>3 macros independentes</strong>. Veja como aproveitá-las para um Ringmaster:',
  'Macro 1 — Pet feeding': 'Macro 1 — Alimentação do pet',
  'Si vous avez un familier qui demande à manger régulièrement, programmez une séquence type <code>k,h</code> (touche pet panel + heal pet) toutes les 30 secondes. Évite que votre pet meure pendant que vous farmez.':
    'Se você tem um pet que precisa comer regularmente, programe uma sequência tipo <code>k,h</code> (tecla pet panel + heal pet) a cada 30 segundos. Evita que seu pet morra enquanto você farma.',
  'Macro 2 — Stack de FP potions': 'Macro 2 — Stack de poções de FP',
  'Configurez une séquence type <code>y</code> (touche FP potion) toutes les 20 secondes pour maintenir votre FP au-dessus de 80%. Ajustez selon votre consommation et la cadence de Heal Rain.':
    'Configure uma sequência tipo <code>y</code> (tecla FP potion) a cada 20 segundos para manter seu FP acima de 80%. Ajuste conforme seu consumo e a cadência do Heal Rain.',
  'Macro 3 — Anti-AFK': 'Macro 3 — Anti-AFK',
  'Une séquence type <code>up,down</code> ou <code>space</code> toutes les 4-5 minutes permet d\'éviter une déconnexion AFK pendant un farm long en cas de période calme. À utiliser avec discernement.':
    'Uma sequência tipo <code>up,down</code> ou <code>space</code> a cada 4-5 minutos evita uma desconexão AFK durante um farm longo em momentos calmos. Use com critério.',

  // Optimisation
  '<strong>Délai entre touches trop court</strong> — si vos séquences sautent, augmentez le délai entre touches à 1,5 ou 2 secondes. Mieux vaut un cycle un peu plus lent mais qui passe à 100%.':
    '<strong>Delay entre teclas muito curto</strong> — se suas sequências pulam, aumente o delay entre teclas para 1,5 ou 2 segundos. É melhor um ciclo um pouco mais lento mas que execute 100%.',
  '<strong>Cooldown global à ne pas dépasser</strong> — Flyff a un GCD (global cooldown). Si vous spammez trop vite, des séquences sont absorbées dans le vide. Le délai de 1s par défaut respecte ce GCD.':
    '<strong>Não ultrapassar o cooldown global</strong> — Flyff tem um GCD (global cooldown). Se você spammar muito rápido, sequências se perdem no vazio. O delay padrão de 1s respeita esse GCD.',
  '<strong>FP qui sèche au milieu d\'un cycle</strong> — votre rotation s\'arrête silencieusement. Activez la macro FP potion ou augmentez votre INT/MP.':
    '<strong>FP que acaba no meio de um ciclo</strong> — sua rotação para silenciosamente. Ative a macro FP potion ou aumente seu INT/MP.',
  '<strong>Membres du groupe hors zone AOE</strong> — le heal périodique ne soigne que les joueurs dans le rayon de Heal Rain (~12-15m). Communiquez avec le groupe : ils doivent rester à portée.':
    '<strong>Membros do grupo fora da área AOE</strong> — o heal periódico só cura jogadores dentro do raio do Heal Rain (~12-15m). Comunique-se com o grupo: eles precisam ficar no alcance.',
  '<strong>Cible perdue après mort d\'un mob</strong> — pas grave pour le RM, mais surveillez vos targets si vous avez aussi des séquences single-target en rotation.':
    '<strong>Alvo perdido após morte de um mob</strong> — não é grave para o RM, mas fique de olho nos targets se você também tem sequências single-target em rotação.',

  // Aspect légal
  'L\'automatisation des actions répétitives via une extension <strong>peut violer les conditions d\'utilisation</strong> de certains services de jeu, y compris celles de Gala Lab pour Flyff Universe. Reborn Assistant <strong>ne lit pas la mémoire du jeu, n\'envoie pas de paquets réseau, ne modifie pas le client</strong> : c\'est strictement une simulation de touches que vous appuieriez manuellement. Vous restez 100% responsable de l\'usage que vous en faites.':
    'A automação de ações repetitivas via uma extensão <strong>pode violar os termos de uso</strong> de alguns serviços de jogo, incluindo os da Gala Lab para Flyff Universe. O Reborn Assistant <strong>não lê a memória do jogo, não envia pacotes de rede, não modifica o cliente</strong>: é estritamente uma simulação de teclas que você pressionaria manualmente. Você continua 100% responsável pelo uso que faz dela.',
  'Pour comprendre exactement ce que fait (et ne fait pas) Reborn Assistant techniquement, consultez la <a href="../index.html#faq">FAQ de la page principale</a>.':
    'Para entender exatamente o que o Reborn Assistant faz (e não faz) tecnicamente, consulte a <a href="../index.html#faq">FAQ da página principal</a>.',

  // CTA
  'Prêt à libérer votre Ringmaster ?': 'Pronto para libertar seu Ringmaster?',
  'Installez Reborn Assistant en 30 secondes depuis le Chrome Web Store. 7 jours d\'essai Premium gratuits, sans carte bancaire.':
    'Instale o Reborn Assistant em 30 segundos pela Chrome Web Store. 7 dias de teste Premium grátis, sem cartão de crédito.',
  'Installer Reborn Assistant': 'Instalar Reborn Assistant',

  // Related cards
  '◆ Article lié': '◆ Artigo relacionado',
  '◆ Documentation': '◆ Documentação',
  'Les meilleurs outils & extensions Flyff Universe 2026': 'As melhores ferramentas e extensões Flyff Universe 2026',
  'Guide complet de la classe Ringmaster Flyff Universe': 'Guia completo da classe Ringmaster no Flyff Universe',
  'Guide complet des fonctionnalités Premium': 'Guia completo das funcionalidades Premium',

  // Common
  '← Retour aux docs': '← Voltar para a documentação',

  // JSON-LD HowTo
  '"Installer Reborn Assistant"': '"Instalar Reborn Assistant"',
  'Ajoutez l\'extension Reborn Assistant depuis le Chrome Web Store et épinglez-la dans la barre d\'outils.':
    'Adicione a extensão Reborn Assistant pela Chrome Web Store e fixe-a na barra de ferramentas.',
  '"Identifier vos séquences Ringmaster"': '"Identificar suas sequências Ringmaster"',
  'Recensez vos séquences clés : Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep, et l\'AOE Heal (Heal Rain).':
    'Liste suas sequências-chave: Heart of Power (HoP), Beef Up, Mental Sign, Speed Pep e o AOE Heal (Heal Rain).',
  '"Configurer la rotation de séquences"': '"Configurar a rotação de sequências"',
  'Dans Reborn Assistant, activez la rotation F2 → 1-9 → 0 → F1 avec un intervalle de 5 minutes (durée typique de vos buffs).':
    'No Reborn Assistant, ative a rotação F2 → 1-9 → 0 → F1 com um intervalo de 5 minutos (duração típica dos seus buffs).',
  '"Programmer le Heal périodique"': '"Programar o Heal periódico"',
  'Activez la macro périodique pour déclencher Heal Rain toutes les 15 secondes en groupe.':
    'Ative a macro periódica para acionar Heal Rain a cada 15 segundos em grupo.',
  '"Lancer l\'automatisation"': '"Iniciar a automação"',
  'Démarrez avec CTRL+A, surveillez le log d\'activité, ajustez les délais selon les animations de vos séquences.':
    'Inicie com CTRL+A, observe o log de atividade, ajuste os delays conforme as animações das suas sequências.',
};

// ─── toolsPt ──────────────────────────────────────────────────────────────────
export const toolsPt = {
  // Breadcrumb + H1 + subtitle
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Meilleurs outils Flyff Universe':
    '<a href="../index.html">Início</a> › <a href="index.html">Documentação</a> › Melhores ferramentas Flyff Universe',
  'Les Meilleurs Outils &amp; Extensions Flyff Universe en 2026':
    'As Melhores Ferramentas e Extensões Flyff Universe em 2026',
  'Sélection testée et comparée des outils qui changent vraiment quelque chose à votre gameplay Flyff Universe : extensions, traducteurs, calculateurs, bases de données.':
    'Seleção testada e comparada das ferramentas que realmente mudam seu gameplay no Flyff Universe: extensões, tradutores, calculadoras, bases de dados.',

  // Intro
  'Flyff Universe est un MMORPG qui tient debout grâce à sa communauté : une partie significative des outils utiles ne vient pas de l\'éditeur, mais des joueurs eux-mêmes. Nous avons testé sur 3 mois (février → mai 2026) les outils tiers les plus populaires et sélectionné les <strong>6 qui valent vraiment le détour</strong>, classés par utilité pour le joueur régulier.':
    'Flyff Universe é um MMORPG que se sustenta graças à sua comunidade: uma parte significativa das ferramentas úteis não vem da editora, mas dos próprios jogadores. Testamos durante 3 meses (fevereiro → maio 2026) as ferramentas de terceiros mais populares e selecionamos as <strong>6 que realmente valem a pena</strong>, classificadas por utilidade para o jogador regular.',

  // Methodology callout
  '📌 Méthodologie': '📌 Metodologia',
  'Chaque outil a été évalué sur 4 critères : utilité réelle dans le gameplay quotidien, qualité de mise à jour (suit le rythme de Flyff Universe), respect des données utilisateur, et facilité d\'usage. Aucun partenariat commercial : seul Reborn Assistant est édité par l\'auteur de ce site (transparence assumée).':
    'Cada ferramenta foi avaliada em 4 critérios: utilidade real no dia a dia, qualidade de atualização (acompanha o ritmo do Flyff Universe), respeito aos dados do usuário e facilidade de uso. Nenhuma parceria comercial: apenas o Reborn Assistant é editado pelo autor deste site (transparência assumida).',

  // Tool 1
  '1. Reborn Assistant — L\'extension d\'automatisation Ringmaster':
    '1. Reborn Assistant — A extensão de automação Ringmaster',
  '★ Rang I · Notre choix': '★ Posição I · Nossa escolha',
  'Version gratuite': 'Versão gratuita',
  'Premium 2,99€/mois': 'Premium 2,99€/mês',
  'Reborn Assistant est une extension de navigateur dédiée à l\'<strong>automatisation des actions répétitives</strong> pour les joueurs Flyff Universe — en particulier la classe Ringmaster, dont les rotations de buffs sont notoirement fastidieuses. L\'extension simule des appuis clavier à intervalles configurables : rotation de séquences toutes les X minutes, macro périodique toutes les 15 secondes pour Heal Rain, et jusqu\'à 3 macros personnalisables.':
    'Reborn Assistant é uma extensão de navegador dedicada à <strong>automação de ações repetitivas</strong> para os jogadores de Flyff Universe — em particular a classe Ringmaster, cujas rotações de buffs são notoriamente tediosas. A extensão simula pressionamentos de tecla em intervalos configuráveis: rotação de sequências a cada X minutos, macro periódica a cada 15 segundos para Heal Rain, e até 3 macros personalizáveis.',
  'La version gratuite couvre les bases (auto-heal HP, 6 thèmes, 15 langues d\'interface). La version Premium débloque la rotation complète, les macros personnalisées et la macro périodique — l\'arsenal qu\'attend un RM main.':
    'A versão gratuita cobre o básico (auto-heal HP, 6 temas, 15 idiomas de interface). A versão Premium desbloqueia a rotação completa, as macros personalizadas e a macro periódica — o arsenal que um RM main espera.',
  '✓ Points forts': '✓ Pontos fortes',
  '✗ Points faibles': '✗ Pontos fracos',
  '15 langues d\'interface, support international': '15 idiomas de interface, suporte internacional',
  'Données 100% locales (aucun tracking)': 'Dados 100% locais (sem tracking)',
  'Macros personnalisables jusqu\'à 3 séquences': 'Macros personalizáveis até 3 sequências',
  'Mises à jour régulières via Chrome Web Store': 'Atualizações regulares via Chrome Web Store',
  'Chromium uniquement (pas Firefox)': 'Apenas Chromium (sem Firefox)',
  'Premium nécessite compte Google': 'Premium requer conta Google',
  '→ Tester Reborn Assistant': '→ Testar Reborn Assistant',

  // Tool 2
  '2. Reborn Vision — Traducteur in-game multi-langues':
    '2. Reborn Vision — Tradutor in-game multi-idiomas',
  '★ Rang II': '★ Posição II',
  'Gratuit': 'Gratuito',
  'Reborn Vision résout un problème spécifique à Flyff Universe : la communauté est très internationale (BR, KR, JP, EU), et beaucoup de joueurs croisent des chats dans des langues qu\'ils ne maîtrisent pas. Reborn Vision est un traducteur in-game qui détecte le texte affiché à l\'écran et propose une traduction overlay en temps réel.':
    'Reborn Vision resolve um problema específico do Flyff Universe: a comunidade é muito internacional (BR, KR, JP, EU), e muitos jogadores cruzam com chats em idiomas que não dominam. Reborn Vision é um tradutor in-game que detecta o texto exibido na tela e propõe uma tradução overlay em tempo real.',
  'Traduction en temps réel multi-langues': 'Tradução em tempo real multi-idiomas',
  '100% gratuit': '100% gratuito',
  'Configuration minimale': 'Configuração mínima',
  'OCR variable selon les polices': 'OCR variável conforme as fontes',
  'Consomme un peu de bande passante': 'Consome um pouco de banda',
  '→ Voir Reborn Vision': '→ Ver Reborn Vision',

  // Tool 3
  '3. FlyffPedia — La base de données de référence':
    '3. FlyffPedia — A base de dados de referência',
  '★ Rang III': '★ Posição III',
  'Site web': 'Site',
  'FlyffPedia est le wiki communautaire le plus complet pour Flyff Universe. Recherche d\'objet par nom, page dédiée par mob (drops, location, exp donnée), arbres de quêtes, infos sur les classes. Indispensable quand vous bloquez sur une quête ou cherchez où farm un objet précis.':
    'FlyffPedia é o wiki comunitário mais completo do Flyff Universe. Busca de item por nome, página dedicada por mob (drops, location, exp dado), árvores de quests, infos sobre as classes. Indispensável quando você trava em uma quest ou procura onde farmar um item específico.',
  'Mises à jour collaboratives, qualité variable selon les contributeurs mais globalement le standard de fait. Bookmark obligatoire pour tout joueur régulier.':
    'Atualizações colaborativas, qualidade variável conforme os contribuidores, mas no geral o padrão de fato. Bookmark obrigatório para qualquer jogador regular.',

  // Tool 4
  '4. Flyff Universe Calculator — Calculs de stats et builds':
    '4. Flyff Universe Calculator — Cálculos de stats e builds',
  '★ Rang IV': '★ Posição IV',
  'Un calculateur de stats qui prend en compte votre équipement, vos jewelry, vos buffs, et vous donne une estimation précise de votre DPS, votre survie ou votre healing output. Particulièrement utile lors d\'un changement de build ou pour comparer deux jewelries.':
    'Uma calculadora de stats que considera seu equipamento, suas jewelries, seus buffs, e te dá uma estimativa precisa do seu DPS, da sua sobrevivência ou do seu healing output. Especialmente útil ao trocar de build ou para comparar duas jewelries.',
  'Interface un peu austère mais formule mathématique solide. Existe en plusieurs versions communautaires — choisissez celle mise à jour le plus récemment.':
    'Interface um pouco austera mas fórmula matemática sólida. Existe em várias versões comunitárias — escolha a atualizada mais recentemente.',

  // Tool 5
  '5. Madrigal Inside — Communauté &amp; guides stratégiques':
    '5. Madrigal Inside — Comunidade e guias estratégicos',
  '★ Rang V': '★ Posição V',
  'Site web / Discord': 'Site / Discord',
  'Pas un outil au sens strict, mais une ressource précieuse : guides de build par classe, stratégies de boss, méta du moment, économie du serveur. Le contenu est rédigé par des joueurs end-game, ce qui donne une perspective qu\'on ne trouve pas dans les guides généralistes.':
    'Não é uma ferramenta em sentido estrito, mas um recurso valioso: guias de build por classe, estratégias de boss, meta do momento, economia do servidor. O conteúdo é redigido por jogadores end-game, o que dá uma perspectiva que não se encontra em guias generalistas.',

  // Tool 6
  '6. FlyffOptimizer — Optimisation jewelry':
    '6. FlyffOptimizer — Otimização de jewelry',
  '★ Rang VI': '★ Posição VI',
  'Un solveur qui prend votre équipement et calcule la combinaison de jewelry optimale pour maximiser un stat précis (Attaque, HP, Cast Speed, etc.). Niche mais redoutablement efficace une fois en end-game, quand chaque % compte.':
    'Um solver que pega seu equipamento e calcula a combinação ótima de jewelry para maximizar um stat específico (Ataque, HP, Cast Speed, etc.). De nicho mas terrivelmente eficaz no end-game, quando cada % conta.',

  // How to choose
  'Comment choisir ?': 'Como escolher?',
  'L\'ordre ci-dessus est notre classement subjectif basé sur la fréquence d\'utilité pour un joueur régulier. Voici trois profils types pour orienter votre choix :':
    'A ordem acima é nossa classificação subjetiva baseada na frequência de utilidade para um jogador regular. Aqui três perfis-tipo para orientar sua escolha:',
  'Vous farmez beaucoup, surtout en RM ou Mentalist': 'Você farma muito, principalmente como RM ou Mentalist',
  'Reborn Assistant Premium en priorité, puis FlyffPedia pour les drops.':
    'Reborn Assistant Premium em prioridade, depois FlyffPedia para os drops.',
  'Vous jouez avec une guilde internationale': 'Você joga com uma guilda internacional',
  'Reborn Vision (traducteur) + Madrigal Inside (Discord communautaire).':
    'Reborn Vision (tradutor) + Madrigal Inside (Discord comunitário).',
  'Vous êtes end-game et optimisez vos builds': 'Você está em end-game e otimiza seus builds',
  'Flyff Universe Calculator + FlyffOptimizer combinés, plus Reborn Assistant pour automatiser le farm des matériaux.':
    'Flyff Universe Calculator + FlyffOptimizer combinados, mais Reborn Assistant para automatizar o farm dos materiais.',

  // Tools to avoid
  'Outils à éviter': 'Ferramentas a evitar',
  'Tous les outils marketés "Flyff Universe" ne sont pas légitimes. Méfiez-vous des programmes qui :':
    'Nem todas as ferramentas vendidas como "Flyff Universe" são legítimas. Desconfie dos programas que:',
  'Demandent vos identifiants Gala Lab': 'Pedem suas credenciais Gala Lab',
  'aucun outil légitime n\'a besoin de votre login. Ce sont des arnaques à 100%.':
    'nenhuma ferramenta legítima precisa do seu login. São golpes 100%.',
  'S\'installent en tant qu\'exécutable .exe Windows': 'Se instalam como executável .exe Windows',
  'sans page de présentation claire. Risque de keylogger ou malware.':
    'sem página de apresentação clara. Risco de keylogger ou malware.',
  'Promettent du gold gratuit, du level boost ou des items': 'Prometem gold grátis, level boost ou itens',
  '. Toujours arnaque ou banwave imminente.': '. Sempre golpe ou banwave iminente.',
  'N\'ont pas de version officielle': 'Não têm versão oficial',
  'sur Chrome Web Store, GitHub ou un site avec mentions légales claires.':
    'na Chrome Web Store, GitHub ou um site com avisos legais claros.',

  // Callout
  '💡 Le critère qui ne ment pas': '💡 O critério que não mente',
  'Un outil légitime a toujours une politique de confidentialité visible, un canal de support actif (Discord, email), et une fiche Chrome Web Store ou un repo GitHub public. Reborn Assistant et Reborn Vision cochent ces 3 cases.':
    'Uma ferramenta legítima sempre tem uma política de privacidade visível, um canal de suporte ativo (Discord, email) e uma página na Chrome Web Store ou um repo GitHub público. Reborn Assistant e Reborn Vision marcam essas 3 caixas.',

  // Footer
  'Article mis à jour le 16 mai 2026.': 'Artigo atualizado em 16 de maio de 2026.',

  // Common back-link
  '← Retour aux docs': '← Voltar para a documentação',
};

// ─── guideRmPt ────────────────────────────────────────────────────────────────
export const guideRmPt = {
  // Back-link + Breadcrumb
  '← Retour aux docs': '← Voltar para a documentação',
  '<a href="../index.html">Accueil</a> › <a href="index.html">Documentation</a> › Guide Ringmaster':
    '<a href="../index.html">Início</a> › <a href="index.html">Documentação</a> › Guia Ringmaster',

  // H1 + subtitle
  'Ringmaster Flyff Universe — Guide Complet 2026':
    'Ringmaster Flyff Universe — Guia Completo 2026',
  'Rôle, buffs, builds, équipement, rotation : tout ce qu\'il faut savoir pour jouer Ringmaster sur Flyff Universe en 2026, du palier 60 jusqu\'à l\'end-game.':
    'Papel, buffs, builds, equipamento, rotação: tudo o que você precisa saber para jogar de Ringmaster no Flyff Universe em 2026, do nível 60 até o end-game.',

  // H2 + intro
  'Qu\'est-ce qu\'un Ringmaster ?': 'O que é um Ringmaster?',
  'Le <strong>Ringmaster</strong> (RM) est l\'avancement final de la branche Assist sur Flyff Universe. C\'est <strong>la classe support du jeu</strong> : son rôle principal n\'est pas d\'infliger des dégâts, mais de <em>maintenir un groupe en vie et de le rendre plus puissant</em> via des buffs longue durée et un heal AOE en boucle. Sans Ringmaster, un groupe end-game prend deux à trois fois plus de temps à clear une zone — et survit beaucoup moins bien aux pulls accidentels.':
    'O <strong>Ringmaster</strong> (RM) é o avanço final da linha Assist no Flyff Universe. É <strong>a classe de suporte do jogo</strong>: seu papel principal não é infligir dano, mas <em>manter um grupo vivo e torná-lo mais poderoso</em> via buffs de longa duração e um heal AOE em loop. Sem Ringmaster, um grupo end-game leva duas a três vezes mais tempo para limpar uma área — e sobrevive muito pior a pulls acidentais.',
  'Quelques caractéristiques qui définissent la classe :': 'Algumas características que definem a classe:',
  '<strong>Buffs longue durée</strong> (5 à 30 minutes) qui boostent les stats du groupe : attaque, défense, vitesse, dodge':
    '<strong>Buffs de longa duração</strong> (5 a 30 minutos) que aumentam os stats do grupo: ataque, defesa, velocidade, dodge',
  '<strong>Heal Rain</strong>, une AOE qui soigne sur la durée tous les alliés dans un rayon de ~12-15m':
    '<strong>Heal Rain</strong>, um AOE que cura ao longo do tempo todos os aliados num raio de ~12-15m',
  '<strong>Résurrection</strong> de joueur mort sans pénalité d\'expérience':
    '<strong>Ressurreição</strong> de jogador morto sem penalidade de experiência',
  '<strong>Très faible burst damage personnel</strong> — le RM ne tue rien tout seul efficacement':
    '<strong>Burst damage pessoal muito fraco</strong> — o RM não mata nada sozinho com eficiência',
  '<strong>Demande presque toujours d\'être en groupe</strong> ou bien d\'avoir un alt à buffer/soigner':
    '<strong>Exige quase sempre estar em grupo</strong> ou ter um alt para bufar/curar',

  // H2 rôle
  'Le rôle du Ringmaster en groupe': 'O papel do Ringmaster em grupo',
  'Trois rôles principaux selon le contexte de jeu :': 'Três papéis principais conforme o contexto de jogo:',
  'Farm rapide (PvE classique)': 'Farm rápido (PvE clássico)',
  'Vous accompagnez un ou plusieurs DPS sur un spot de farm. Votre travail : rebuff toutes les 5 minutes, lancer Heal Rain en continu, surveiller les FP. Très répétitif — c\'est exactement la situation où l\'automatisation prend tout son sens.':
    'Você acompanha um ou vários DPS em um spot de farm. Seu trabalho: rebuff a cada 5 minutos, lançar Heal Rain continuamente, vigiar o FP. Muito repetitivo — é exatamente a situação onde a automação faz total sentido.',
  'Raids & boss': 'Raids & boss',
  'Boss avec gros burst damage type Glaphan, Bang, Aibatt. Le rythme change : moins de heal périodique, plus de heals burst manuels, parfois Resurrection à anticiper. L\'automatisation passe en second plan ici — vous devez garder la main.':
    'Bosses com burst damage alto tipo Glaphan, Bang, Aibatt. O ritmo muda: menos heal periódico, mais heals burst manuais, às vezes Resurrection a antecipar. A automação fica em segundo plano aqui — você precisa manter o controle.',
  'FWC (Flyff World Championships)': 'FWC (Flyff World Championships)',
  'Compétition organisée, métagame ultra-précis. Les RM ne sont plus juste un service utility : ils contribuent à des compos optimisées avec timings de buffs synchronisés. Connaître les rotations par cœur devient critique. L\'automatisation peut être bannie selon les règles d\'un tournoi — toujours vérifier.':
    'Competição organizada, metagame ultra-preciso. Os RMs não são mais só um serviço utility: contribuem para comps otimizadas com timings de buffs sincronizados. Conhecer as rotações de cor torna-se crítico. A automação pode ser banida conforme as regras de um torneio — sempre verifique.',

  // H2 buffs
  'Les buffs essentiels du Ringmaster': 'Os buffs essenciais do Ringmaster',
  'Voici les buffs que vous devez maîtriser et inclure dans votre rotation, classés par priorité :':
    'Estes são os buffs que você precisa dominar e incluir na sua rotação, classificados por prioridade:',
  '★ Priorité absolue · 30 min': '★ Prioridade absoluta · 30 min',
  'Boost STA + attaque pour tout le groupe. Le buff signature du Ringmaster, à activer en premier de la rotation.':
    'Boost STA + ataque para todo o grupo. O buff assinatura do Ringmaster, a ativar primeiro na rotação.',
  '★ Priorité haute · 15 min': '★ Prioridade alta · 15 min',
  'Augmente le HP max du groupe. Critique sur les zones où un wipe est possible si un membre n\'a pas son cap HP.':
    'Aumenta o HP máximo do grupo. Crítico em zonas onde um wipe é possível se um membro não estiver no cap de HP.',
  'Boost INT du groupe. Énorme pour les Mages, Knights AOE, et les Rangers qui utilisent des skills à scaling magique.':
    'Boost INT do grupo. Enorme para Mages, Knights AOE e Rangers que usam skills com scaling mágico.',
  '15 min': '15 min',
  'Augmente l\'attack speed. Game-changer pour Blades et Rangers ; moins critique pour Mages.':
    'Aumenta o attack speed. Game-changer para Blades e Rangers; menos crítico para Mages.',
  'Boost de dodge. Utile sur les zones où les mobs ont beaucoup d\'attaques physiques rapides.':
    'Boost de dodge. Útil em zonas onde os mobs têm muitos ataques físicos rápidos.',
  'AOE · ~15 sec': 'AOE · ~15 seg',
  'L\'AOE soin centrée sur vous. À relancer en boucle pendant tout le farm. Couvre tous les alliés dans un rayon de 12-15m.':
    'O AOE de cura centrado em você. Relançar em loop durante todo o farm. Cobre todos os aliados num raio de 12-15m.',

  // H2 build
  'Build STA vs INT — Quel build choisir ?': 'Build STA vs INT — Qual build escolher?',
  'Deux écoles principales en 2026 :': 'Duas escolas principais em 2026:',
  'Critère': 'Critério',
  'Build STA Full': 'Build STA Full',
  'Build INT Hybrid': 'Build INT Hybrid',
  'Stats principaux': 'Stats principais',
  'Full STA, INT minimum requis pour les buffs': 'Full STA, INT mínimo necessário para os buffs',
  '~50/50 STA/INT, parfois 30/70 selon le niveau': '~50/50 STA/INT, às vezes 30/70 conforme o nível',
  'HP / Survie': 'HP / Sobrevivência',
  'Excellent — pool énorme, survit aux pulls accidentels': 'Excelente — pool enorme, sobrevive a pulls acidentais',
  'Moyen — exige plus d\'attention du joueur': 'Médio — exige mais atenção do jogador',
  'Puissance des heals': 'Potência dos heals',
  'Correct — suffit pour la plupart des situations': 'Correto — basta para a maioria das situações',
  'Excellent — Heal Rain et autres heals scalent fort sur INT': 'Excelente — Heal Rain e outros heals escalam forte com INT',
  'FP pool': 'Pool de FP',
  'Faible — nécessite plus de potions': 'Baixo — exige mais poções',
  'Élevé — gestion FP plus confortable': 'Alto — gestão de FP mais confortável',
  'Recommandé pour': 'Recomendado para',
  'Joueurs débutants, farm peu dangereux, RM solo-utility': 'Jogadores iniciantes, farm pouco perigoso, RM solo-utility',
  'Joueurs expérimentés, raids difficiles, FWC, end-game': 'Jogadores experientes, raids difíceis, FWC, end-game',
  'Le build STA Full reste le plus pardonnant et le plus joué. Le build INT Hybrid est plus exigeant mais récompense par un heal output significativement supérieur — un must pour le contenu compétitif.':
    'O build STA Full continua sendo o mais perdoador e o mais jogado. O build INT Hybrid é mais exigente mas recompensa com um heal output significativamente superior — obrigatório para conteúdo competitivo.',

  // H2 équipement
  'Équipement recommandé': 'Equipamento recomendado',
  'Armes': 'Armas',
  '<strong>Staff (bâton)</strong> — meilleur scaling INT, recommandé pour build INT Hybrid':
    '<strong>Staff (cajado)</strong> — melhor scaling INT, recomendado para build INT Hybrid',
  '<strong>Stick (canne)</strong> — équilibré, polyvalent':
    '<strong>Stick (varinha)</strong> — equilibrado, versátil',
  '<strong>Shield (bouclier)</strong> en off-hand — gain de defense, fortement recommandé en STA Full':
    '<strong>Shield (escudo)</strong> em off-hand — ganho de defesa, fortemente recomendado em STA Full',
  'Armure': 'Armadura',
  '<strong>Set jewelry STA</strong> pour le build STA Full (Tinerbol, Lord, etc. selon palier)':
    '<strong>Set jewelry STA</strong> para o build STA Full (Tinerbol, Lord, etc. conforme o nível)',
  '<strong>Set jewelry INT</strong> ou hybride STA/INT pour le build Hybrid':
    '<strong>Set jewelry INT</strong> ou híbrido STA/INT para o build Hybrid',
  '<strong>Toujours privilégier le set complet</strong> pour le bonus 2/4/6 pièces':
    '<strong>Sempre priorize o set completo</strong> para o bônus 2/4/6 peças',
  'Bijoux (jewelry)': 'Joias (jewelry)',
  'L\'optimisation des bijoux est où le RM passe du correct à l\'excellent. Utilisez un calculateur (voir <a href="meilleurs-outils-flyff-universe-2026.html">notre comparatif d\'outils</a>) pour identifier la combinaison qui maximise votre stat prioritaire selon le palier.':
    'A otimização das joias é onde o RM passa de correto para excelente. Use uma calculadora (veja <a href="meilleurs-outils-flyff-universe-2026.html">nosso comparativo de ferramentas</a>) para identificar a combinação que maximiza seu stat prioritário conforme o nível.',

  // H2 rotation
  'Rotation et gestion du rythme': 'Rotação e gestão do ritmo',
  'Une rotation efficace en farm classique tient en 3 timings :':
    'Uma rotação eficaz em farm clássico se resume a 3 timings:',
  '<strong>Toutes les 5 minutes</strong> — rebuff complet du groupe (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)':
    '<strong>A cada 5 minutos</strong> — rebuff completo do grupo (HoP → Beef Up → Mental Sign → Speed Pep → Cat\'s Reflex)',
  '<strong>Toutes les 12-15 secondes</strong> — Heal Rain':
    '<strong>A cada 12-15 segundos</strong> — Heal Rain',
  '<strong>Continu</strong> — surveillance des HP individuels pour heals burst d\'urgence':
    '<strong>Contínuo</strong> — monitoramento dos HP individuais para heals burst de emergência',
  'Les deux premiers timings sont mécaniques et parfaits pour <strong>l\'automatisation</strong>. Le troisième demande votre attention humaine. C\'est l\'arbitrage clé du Ringmaster moderne : automatiser ce qui est répétitif pour <strong>garder votre énergie pour les moments décisifs</strong>.':
    'Os dois primeiros timings são mecânicos e perfeitos para <strong>a automação</strong>. O terceiro exige sua atenção humana. É o arbitragem-chave do Ringmaster moderno: automatizar o que é repetitivo para <strong>guardar sua energia para os momentos decisivos</strong>.',
  '💡 Tutoriel pratique disponible': '💡 Tutorial prático disponível',
  'Nous avons rédigé un <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutoriel pas à pas pour automatiser votre Ringmaster</a> avec Reborn Assistant : configuration des rotations, intervalle entre cycles, macro Heal Rain et erreurs à éviter.':
    'Escrevemos um <a href="automatiser-ringmaster-flyff-universe.html" style="color:var(--gold);">tutorial passo a passo para automatizar seu Ringmaster</a> com Reborn Assistant: configuração das rotações, intervalo entre ciclos, macro Heal Rain e erros a evitar.',

  // H2 RM vs Mentalist
  'Ringmaster vs Mentalist — Quelle différence ?': 'Ringmaster vs Mentalist — Qual a diferença?',
  'Deux classes de la branche Assist, souvent confondues par les débutants :':
    'Duas classes da linha Assist, frequentemente confundidas pelos iniciantes:',
  '<strong>Ringmaster</strong> = full support, faible damage personnel, indispensable en groupe, peu efficace en solo':
    '<strong>Ringmaster</strong> = full support, baixo damage pessoal, indispensável em grupo, pouco eficaz no solo',
  '<strong>Mentalist</strong> = orientation DPS magique, peut farmer en solo, perd une partie des buffs longue durée du RM':
    '<strong>Mentalist</strong> = orientação DPS mágico, pode farmar solo, perde parte dos buffs de longa duração do RM',
  'Si votre intent est de jouer en groupe, jouer FWC, ou être le "pilier" d\'une guilde → Ringmaster. Si vous voulez une classe Assist plus autonome en solo → Mentalist.':
    'Se sua intenção é jogar em grupo, jogar FWC ou ser o "pilar" de uma guilda → Ringmaster. Se você quer uma classe Assist mais autônoma no solo → Mentalist.',

  // H2 erreurs
  'Erreurs courantes de débutant Ringmaster': 'Erros comuns de iniciante Ringmaster',
  '<strong>Ne pas rebuff régulièrement</strong> — un buff manquant après 5 minutes coûte parfois plus que la vie entière du DPS':
    '<strong>Não rebufar regularmente</strong> — um buff faltando após 5 minutos custa às vezes mais que a vida inteira do DPS',
  '<strong>Bouger pendant Heal Rain</strong> — l\'AOE ne suit pas, les alliés sortent du rayon':
    '<strong>Se mover durante o Heal Rain</strong> — o AOE não acompanha, os aliados saem do raio',
  '<strong>Build full INT trop tôt</strong> — sans pool HP suffisant, vous mourez avant d\'avoir lancé Heal Rain':
    '<strong>Build full INT cedo demais</strong> — sem pool de HP suficiente, você morre antes de lançar o Heal Rain',
  '<strong>Ignorer les potions FP</strong> — un RM sans FP est un RM inutile':
    '<strong>Ignorar as poções de FP</strong> — um RM sem FP é um RM inútil',
  '<strong>Tenter de DPS</strong> — vous perdez du temps mieux investi dans le heal et les buffs':
    '<strong>Tentar dar DPS</strong> — você perde tempo melhor investido no heal e nos buffs',

  // CTA
  'Optimisez votre Ringmaster avec Reborn Assistant': 'Otimize seu Ringmaster com Reborn Assistant',
  'L\'extension premium pour automatiser la rotation de buffs, le Heal Rain périodique et vos macros personnalisées. 7 jours d\'essai gratuit sans carte bancaire.':
    'A extensão premium para automatizar a rotação de buffs, o Heal Rain periódico e suas macros personalizadas. 7 dias de teste grátis sem cartão de crédito.',
  'Installer Reborn Assistant': 'Instalar Reborn Assistant',

  // Footer
  'Guide mis à jour le 16 mai 2026 — Flyff Universe (Gala Lab).':
    'Guia atualizado em 16 de maio de 2026 — Flyff Universe (Gala Lab).',
};
