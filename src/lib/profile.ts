export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export const bio = [
  "Graduado en Ingeniería Informática por la Universidad de Almería. Actualmente trabajo como técnico en el Banco de Crédito Social Cooperativo (BCC), donde desempeño funciones de Data Analyst: validación RDARR (Risk Data Aggregation & Risk Reporting), control de calidad de datos, trazabilidad (data lineage) y reconciliaciones para informes regulatorios.",
  "En paralelo, curso el máster en Ingeniería Informática - Big Data en la Universidad de Almería, y el próximo año comenzaré un máster en Inteligencia Artificial. Estoy preparando la certificación Azure AI Engineer Associate (AI-102). Nivel de inglés B2-C1.",
  "En 2024 formé parte del equipo ganador del reto Gestamp en la I edición de IndesIAhack, trabajando con IA generativa (OpenAI, Azure Databricks).",
].join("\n\n");

export const education: TimelineItem[] = [
  {
    title: "Máster en Ingeniería Informática - Big Data",
    organization: "Universidad de Almería",
    period: "2025 – en curso",
    description:
      "Python, SQL, RStudio · Big Data & Cloud (Google Cloud, Apache Spark) · IA, Machine Learning, Deep Learning · Bases de datos (SQL Server, MySQL, MongoDB, Cassandra, Redis) · Visualización (Matplotlib, Seaborn) · Git, Docker, Linux.",
  },
  {
    title: "Grado en Ingeniería Informática",
    organization: "Universidad de Almería",
    period: "2020 – 2025",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Técnico (Data Analyst)",
    organization: "Banco de Crédito Social Cooperativo (BCC)",
    period: "Octubre 2025 – Actualidad",
    description:
      "Validación RDARR: revisión de controles de calidad de datos, trazabilidad y reconciliaciones para informes regulatorios. Análisis y validación de KPIs/KRIs y pruebas de consistencia contra fuentes maestras. Extracción y depuración de datos con SQL. Elaboración de informes.",
  },
  {
    title: "Prácticas extracurriculares",
    organization: "Banco de Crédito Social Cooperativo (BCC)",
    period: "Mayo 2025 – Octubre 2025",
  },
  {
    title: "Prácticas curriculares",
    organization: "Seyte",
    period: "Noviembre 2024 – Enero 2025",
    description:
      "Formación en Laravel y Angular, junto con Docker, MySQL y Git. Desarrollo de un proyecto final: una web de citas médicas con Laravel y Angular.",
  },
];

export const skillGroups: { category: string; items: string[] }[] = [
  {
    category: "Data Engineering & Analytics",
    items: ["SQL", "Python", "RStudio", "Power BI"],
  },
  {
    category: "Big Data & Cloud",
    items: ["Apache Spark", "Google Cloud", "Azure Databricks"],
  },
  {
    category: "Machine Learning / IA",
    items: ["Machine Learning", "Deep Learning", "IA Generativa (OpenAI, Azure)"],
  },
  {
    category: "Bases de datos",
    items: ["SQL Server", "MySQL", "MongoDB", "Cassandra", "Redis"],
  },
  {
    category: "DevOps & Herramientas",
    items: ["Git", "Docker", "Linux"],
  },
  {
    category: "Desarrollo Web",
    items: ["Laravel", "Angular"],
  },
];
