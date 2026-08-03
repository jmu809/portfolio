export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export const bio = [
  "Escribe aquí 2-3 párrafos sobre ti: tu trayectoria como Ingeniero Informático, por qué te especializaste en Big Data y qué te atrae de la IA.",
  "Sustituye este texto de ejemplo por tu biografía real — qué tipo de problemas te gusta resolver, en qué tipo de equipo/rol quieres trabajar, y qué te diferencia.",
].join("\n\n");

export const education: TimelineItem[] = [
  {
    title: "Máster en Big Data",
    organization: "Nombre de la institución",
    period: "2025 – 2026",
    description:
      "Especialización en ingeniería y análisis de datos a gran escala.",
  },
  {
    title: "Grado en Ingeniería Informática",
    organization: "Nombre de la universidad",
    period: "2020 – 2024",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Puesto (ejemplo — edita o elimina)",
    organization: "Empresa",
    period: "2023 – 2025",
    description: "Describe brevemente tus responsabilidades y logros.",
  },
];

export const skillGroups: { category: string; items: string[] }[] = [
  {
    category: "Data Engineering",
    items: ["Python", "Apache Spark", "SQL", "Airflow"],
  },
  {
    category: "Machine Learning / IA",
    items: ["Scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    category: "Cloud & Infraestructura",
    items: ["AWS", "Docker", "Databricks"],
  },
  {
    category: "Software",
    items: ["TypeScript", "Next.js", "Git"],
  },
];
