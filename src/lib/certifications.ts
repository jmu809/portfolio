export type CertificationStatus = "obtenida" | "en-curso";

export type Certification = {
  name: string;
  issuer: string;
  status: CertificationStatus;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    status: "en-curso",
    date: "En preparación",
    credentialUrl: "",
  },
  {
    name: "Network Security",
    issuer: "Cisco Networking Academy",
    status: "obtenida",
    date: "2026",
    credentialUrl: "",
  },
  {
    name: "Introducción al uso de inteligencia artificial generativa",
    issuer: "Universidad de Almería",
    status: "obtenida",
    date: "2024",
    credentialUrl: "",
  },
  {
    name: "Power BI: de cero a experto",
    issuer: "Microsoft SQL Server / Power BI",
    status: "obtenida",
    date: "2024",
    credentialUrl: "",
  },
];
