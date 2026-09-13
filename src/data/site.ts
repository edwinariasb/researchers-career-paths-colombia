export type Lang = "en" | "es" | "fr";

export const supportedLangs: Lang[] = ["en", "es", "fr"];

export const summary = {
  researchers: 38472,
  uniquePatterns: 2532,
  trajectoryTypes: 5,
  stock2025: 25478,
  rounds: [2013, 2014, 2015, 2017, 2019, 2022, 2025],
};

export const flows = [
  { period: "2013→2014", entry: 3485, reentry: 0, exit: 3216, net: 269 },
  { period: "2014→2015", entry: 2584, reentry: 609, exit: 1429, net: 1764 },
  { period: "2015→2017", entry: 3909, reentry: 942, exit: 1890, net: 2961 },
  { period: "2017→2019", entry: 5900, reentry: 945, exit: 3049, net: 3796 },
  { period: "2019→2022", entry: 6342, reentry: 1445, exit: 3492, net: 4295 },
  { period: "2022→2025", entry: 8243, reentry: 1630, exit: 5489, net: 4384 },
];

export const typologies = [
  { key: "t1", pct: 42.6, band: ["sp", "nr", "jun", "jun", "assoc", "assoc", "assoc"] },
  { key: "t2", pct: 25.2, band: ["sp", "sp", "sp", "nr", "nr", "jun", "assoc"] },
  { key: "t3", pct: 12.1, band: ["jun", "jun", "assoc", "assoc", "senior", "senior", "senior"] },
  { key: "t4", pct: 10.7, band: ["nr", "jun", "nr", "jun", "assoc", "nr", "assoc"] },
  { key: "t5", pct: 9.4, band: ["jun", "jun", "jun", "assoc", "assoc", "jun", "assoc"] },
];

export const stateColors: Record<string, string> = {
  sp: "#FFFFFF",
  nr: "#F2F3F5",
  jun: "#8A8A8A",
  assoc: "#4C78A8",
  senior: "#F58518",
  emeritus: "#54A24B",
};

export const messages = {
  en: {
    nav: { project: "Project", trajectories: "Trajectories", results: "Results", methods: "Methods", policy: "Policy", poster: "Poster" },
    hero: {
      eyebrow: "OECD Blue Sky Forum 2026 · Colombia",
      title: "Evolution of researchers’ trajectories in the Colombian STI system",
      subtitle: "A capacity-based approach using Sequence Analysis",
      body: "A longitudinal view of how scientific careers enter, persist, transform, interrupt and return across seven recognition rounds between 2013 and 2025.",
      primary: "Explore trajectories",
      secondary: "Methods & data"
    },
    overview: {
      title: "The system at a glance",
      subtitle: "From repeated assessments to a longitudinal representation of scientific careers.",
      cards: ["Researchers", "Unique sequence patterns", "Trajectory types", "Recognised in 2025"]
    },
    panel: {
      title: "From snapshots to trajectories",
      body: "Recognition rounds are reorganised as individual sequences so that each researcher can be followed through time.",
      rowA: "Progressive consolidation",
      rowB: "Intermittent recognition",
      rowC: "Late incorporation",
      state: "Recognition state"
    },
    methods: {
      title: "Analytical workflow",
      subtitle: "Administrative records become longitudinal evidence through a reproducible sequence-analysis pipeline.",
      steps: [
        ["Data sources", "Recognition rounds, CV information, institutional records and bibliographic sources"],
        ["Harmonisation", "Identity matching, state coding, missing-data treatment and time alignment"],
        ["Longitudinal panel", "38,472 researchers observed across seven assessment rounds"],
        ["Sequence analysis", "Optimal Matching distances and clustering of recurrent patterns"],
        ["Five trajectory types", "Comparison by sex, field, institution and education"],
        ["Policy indicators", "Persistence, interruption, return and consolidation of scientific capacity"]
      ]
    },
    states: {
      title: "Researchers move through the system",
      subtitle: "Recognition is treated as a temporary state within a scientific career trajectory.",
      chips: ["Entry", "Persistence", "Promotion", "Downgrade", "Exit", "Re-entry"]
    },
    stockflow: {
      title: "Stock is not flow",
      leftTitle: "Stock",
      leftText: "How many researchers are recognised at a given assessment?",
      rightTitle: "Flow",
      rightText: "Who enters, exits, returns, remains or changes category between assessments?",
      punch: "Stocks describe size. Flows reveal how careers evolve."
    },
    flows: {
      title: "Growth with substantial mobility",
      subtitle: "The net balance is positive in every interval, while exits and re-entries become increasingly visible.",
      entry: "Entry", reentry: "Re-entry", exit: "Exit", net: "Net change",
      caveat: "Assessment intervals differ in duration. Absolute transition counts should not be interpreted as annual rates."
    },
    typologies: {
      title: "2,532 observed patterns, five recurring trajectory types",
      subtitle: "Sequence analysis summarises heterogeneous career histories into a small number of recurrent longitudinal configurations.",
      names: {
        t1: "Intermediate/late incorporation with partial continuity",
        t2: "Very late incorporation, mainly 2025",
        t3: "Consolidation in higher categories",
        t4: "Intermittent recognition and return",
        t5: "Early recognition with mixed stability"
      },
      exit: "34.1% experienced at least one exit",
      reentry: "22.2% experienced at least one re-entry"
    },
    dimensions: {
      title: "A multidimensional view of scientific capacity",
      subtitle: "Recognition trajectories can be interpreted alongside sociodemographic, educational, institutional and production dimensions.",
      labels: ["Sociodemographic", "Education", "Institution / sector", "Scientific production", "Recognition"]
    },
    policy: {
      title: "Why this matters for STI policy",
      items: [
        ["Longitudinal indicators", "Complement cross-sectional assessments with evidence on career continuity and change."],
        ["Early signals", "Identify interruption, return and loss of recognition before they disappear in aggregate stocks."],
        ["Differentiated policy", "Use trajectory types to design interventions for distinct career configurations."],
        ["Interoperable information systems", "Link CV, administrative, institutional and bibliometric sources to monitor scientific capacities over time."]
      ]
    },
    poster: {
      title: "OECD Blue Sky Forum 2026 poster",
      body: "This website extends the poster by making the longitudinal logic, flows and trajectory types easier to explore.",
      button: "Poster PDF — add file"
    },
    footer: "Longitudinal analysis of researchers’ trajectories in the Colombian STI system · 2013–2025"
  },
  es: {
    nav: { project: "Proyecto", trajectories: "Trayectorias", results: "Resultados", methods: "Métodos", policy: "Política", poster: "Póster" },
    hero: {
      eyebrow: "OECD Blue Sky Forum 2026 · Colombia",
      title: "Evolución de las trayectorias de los investigadores en el sistema colombiano de CTI",
      subtitle: "Un enfoque basado en capacidades mediante análisis de secuencias",
      body: "Una mirada longitudinal a la forma en que las carreras científicas entran, permanecen, se transforman, se interrumpen y retornan a través de siete convocatorias entre 2013 y 2025.",
      primary: "Explorar trayectorias",
      secondary: "Métodos y datos"
    },
    overview: {
      title: "El sistema de un vistazo",
      subtitle: "De evaluaciones repetidas a una representación longitudinal de las carreras científicas.",
      cards: ["Investigadores", "Patrones de secuencia únicos", "Tipologías de trayectoria", "Reconocidos en 2025"]
    },
    panel: {
      title: "De fotografías a trayectorias",
      body: "Las convocatorias se reorganizan como secuencias individuales para seguir a cada investigador a lo largo del tiempo.",
      rowA: "Consolidación progresiva",
      rowB: "Reconocimiento intermitente",
      rowC: "Incorporación tardía",
      state: "Estado de reconocimiento"
    },
    methods: {
      title: "Flujo analítico",
      subtitle: "Los registros administrativos se transforman en evidencia longitudinal mediante un proceso reproducible de análisis de secuencias.",
      steps: [
        ["Fuentes de datos", "Convocatorias de reconocimiento, CV, registros institucionales y fuentes bibliográficas"],
        ["Armonización", "Vinculación de identidades, codificación de estados, tratamiento de faltantes y alineación temporal"],
        ["Panel longitudinal", "38.472 investigadores observados en siete momentos de evaluación"],
        ["Análisis de secuencias", "Distancias Optimal Matching y agrupamiento de patrones recurrentes"],
        ["Cinco tipologías", "Comparación por sexo, área, institución y formación"],
        ["Indicadores de política", "Permanencia, interrupción, retorno y consolidación de capacidades científicas"]
      ]
    },
    states: {
      title: "Los investigadores se mueven dentro del sistema",
      subtitle: "El reconocimiento se interpreta como un estado temporal dentro de una trayectoria científica.",
      chips: ["Entrada", "Permanencia", "Promoción", "Descenso", "Salida", "Reingreso"]
    },
    stockflow: {
      title: "Stock no es flujo",
      leftTitle: "Stock",
      leftText: "¿Cuántos investigadores están reconocidos en una convocatoria determinada?",
      rightTitle: "Flujo",
      rightText: "¿Quién entra, sale, retorna, permanece o cambia de categoría entre convocatorias?",
      punch: "El stock describe el tamaño. Los flujos muestran cómo evolucionan las carreras."
    },
    flows: {
      title: "Crecimiento con movilidad sustancial",
      subtitle: "El balance neto es positivo en todos los intervalos, mientras que las salidas y los reingresos ganan visibilidad.",
      entry: "Entrada", reentry: "Reingreso", exit: "Salida", net: "Cambio neto",
      caveat: "Los intervalos entre convocatorias tienen distinta duración. Los conteos absolutos de transición no deben interpretarse como tasas anuales."
    },
    typologies: {
      title: "2.532 patrones observados, cinco tipologías recurrentes",
      subtitle: "El análisis de secuencias resume historias de carrera heterogéneas en un conjunto reducido de configuraciones longitudinales recurrentes.",
      names: {
        t1: "Incorporación intermedia/tardía con continuidad parcial",
        t2: "Incorporación muy tardía, principalmente en 2025",
        t3: "Consolidación en categorías superiores",
        t4: "Reconocimiento intermitente y retorno",
        t5: "Reconocimiento temprano con estabilidad mixta"
      },
      exit: "34,1% registra al menos una salida",
      reentry: "22,2% registra al menos un reingreso"
    },
    dimensions: {
      title: "Una mirada multidimensional de las capacidades científicas",
      subtitle: "Las trayectorias de reconocimiento pueden interpretarse junto con dimensiones sociodemográficas, educativas, institucionales y de producción.",
      labels: ["Sociodemográfica", "Formación", "Institución / sector", "Producción científica", "Reconocimiento"]
    },
    policy: {
      title: "Por qué importa para la política de CTI",
      items: [
        ["Indicadores longitudinales", "Complementar las evaluaciones transversales con evidencia sobre continuidad y cambio de las carreras."],
        ["Señales tempranas", "Identificar interrupciones, retornos y pérdida de reconocimiento antes de que se oculten en los stocks agregados."],
        ["Política diferenciada", "Usar las tipologías para diseñar intervenciones dirigidas a configuraciones de carrera distintas."],
        ["Sistemas de información interoperables", "Vincular CV, registros administrativos, institucionales y bibliométricos para monitorear capacidades científicas en el tiempo."]
      ]
    },
    poster: {
      title: "Póster OECD Blue Sky Forum 2026",
      body: "Esta web amplía el póster y facilita la exploración de la lógica longitudinal, los flujos y las tipologías de trayectoria.",
      button: "PDF del póster — añadir archivo"
    },
    footer: "Análisis longitudinal de las trayectorias de investigadores en el sistema colombiano de CTI · 2013–2025"
  },
  fr: {
    nav: { project: "Projet", trajectories: "Trajectoires", results: "Résultats", methods: "Méthodes", policy: "Politique", poster: "Poster" },
    hero: {
      eyebrow: "OECD Blue Sky Forum 2026 · Colombie",
      title: "Évolution des trajectoires des chercheurs dans le système colombien de STI",
      subtitle: "Une approche fondée sur les capacités à partir de l’analyse de séquences",
      body: "Une lecture longitudinale de la manière dont les carrières scientifiques entrent, se maintiennent, se transforment, s’interrompent et reviennent au fil de sept vagues d’évaluation entre 2013 et 2025.",
      primary: "Explorer les trajectoires",
      secondary: "Méthodes et données"
    },
    overview: {
      title: "Le système en un coup d’œil",
      subtitle: "Des évaluations répétées à une représentation longitudinale des carrières scientifiques.",
      cards: ["Chercheurs", "Séquences uniques", "Types de trajectoires", "Reconnus en 2025"]
    },
    panel: {
      title: "Des instantanés aux trajectoires",
      body: "Les vagues de reconnaissance sont réorganisées en séquences individuelles afin de suivre chaque chercheur dans le temps.",
      rowA: "Consolidation progressive",
      rowB: "Reconnaissance intermittente",
      rowC: "Incorporation tardive",
      state: "État de reconnaissance"
    },
    methods: {
      title: "Chaîne analytique",
      subtitle: "Les données administratives deviennent une preuve longitudinale grâce à une chaîne reproductible d’analyse de séquences.",
      steps: [
        ["Sources de données", "Vagues de reconnaissance, CV, données institutionnelles et sources bibliographiques"],
        ["Harmonisation", "Appariement des identités, codage des états, gestion des données manquantes et alignement temporel"],
        ["Panel longitudinal", "38 472 chercheurs observés à travers sept vagues d’évaluation"],
        ["Analyse de séquences", "Distances Optimal Matching et regroupement des motifs récurrents"],
        ["Cinq types de trajectoires", "Comparaison par sexe, domaine, institution et formation"],
        ["Indicateurs de politique", "Permanence, interruption, retour et consolidation des capacités scientifiques"]
      ]
    },
    states: {
      title: "Les chercheurs circulent dans le système",
      subtitle: "La reconnaissance est interprétée comme un état temporaire dans une trajectoire scientifique.",
      chips: ["Entrée", "Permanence", "Promotion", "Déclassement", "Sortie", "Retour"]
    },
    stockflow: {
      title: "Le stock n’est pas le flux",
      leftTitle: "Stock",
      leftText: "Combien de chercheurs sont reconnus lors d’une évaluation donnée ?",
      rightTitle: "Flux",
      rightText: "Qui entre, sort, revient, reste ou change de catégorie entre deux évaluations ?",
      punch: "Le stock décrit la taille. Les flux montrent comment les carrières évoluent."
    },
    flows: {
      title: "Croissance et mobilité substantielle",
      subtitle: "Le solde net reste positif à chaque intervalle, tandis que les sorties et les retours deviennent plus visibles.",
      entry: "Entrée", reentry: "Retour", exit: "Sortie", net: "Variation nette",
      caveat: "Les intervalles entre évaluations n’ont pas la même durée. Les volumes absolus de transition ne doivent pas être interprétés comme des taux annuels."
    },
    typologies: {
      title: "2 532 motifs observés, cinq types récurrents de trajectoires",
      subtitle: "L’analyse de séquences résume l’hétérogénéité des carrières en un nombre limité de configurations longitudinales récurrentes.",
      names: {
        t1: "Incorporation intermédiaire/tardive avec continuité partielle",
        t2: "Incorporation très tardive, principalement en 2025",
        t3: "Consolidation dans les catégories supérieures",
        t4: "Reconnaissance intermittente et retour",
        t5: "Reconnaissance précoce avec stabilité mixte"
      },
      exit: "34,1 % ont connu au moins une sortie",
      reentry: "22,2 % ont connu au moins un retour"
    },
    dimensions: {
      title: "Une vision multidimensionnelle des capacités scientifiques",
      subtitle: "Les trajectoires de reconnaissance peuvent être interprétées avec les dimensions sociodémographiques, éducatives, institutionnelles et de production scientifique.",
      labels: ["Sociodémographie", "Formation", "Institution / secteur", "Production scientifique", "Reconnaissance"]
    },
    policy: {
      title: "Pourquoi cela compte pour la politique de STI",
      items: [
        ["Indicateurs longitudinaux", "Compléter les évaluations transversales par des preuves sur la continuité et les changements de carrière."],
        ["Signaux précoces", "Repérer les interruptions, les retours et les pertes de reconnaissance avant qu’ils ne disparaissent dans les stocks agrégés."],
        ["Politique différenciée", "Utiliser les types de trajectoires pour concevoir des interventions adaptées à des configurations de carrière distinctes."],
        ["Systèmes d’information interopérables", "Relier CV, données administratives, institutionnelles et bibliométriques pour suivre les capacités scientifiques dans le temps."]
      ]
    },
    poster: {
      title: "Poster OECD Blue Sky Forum 2026",
      body: "Ce site prolonge le poster en rendant plus facile l’exploration de la logique longitudinale, des flux et des types de trajectoires.",
      button: "PDF du poster — ajouter le fichier"
    },
    footer: "Analyse longitudinale des trajectoires des chercheurs dans le système colombien de STI · 2013–2025"
  }
} as const;
