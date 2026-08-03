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
    name: "[Ejemplo] AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    status: "en-curso",
    date: "Prevista: 2026",
    credentialUrl: "",
  },
  {
    name: "[Ejemplo] Certificación obtenida",
    issuer: "Emisor de la certificación",
    status: "obtenida",
    date: "2025",
    credentialUrl: "",
  },
];
