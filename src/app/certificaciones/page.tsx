import type { Metadata } from "next";
import { CircleCheck, Clock, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/certifications";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Certificaciones",
};

export default function CertificacionesPage() {
  const obtenidas = certifications.filter((c) => c.status === "obtenida");
  const enCurso = certifications.filter((c) => c.status === "en-curso");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Certificaciones
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        Certificaciones de IA obtenidas y en preparación.
      </p>

      {enCurso.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">En curso</h2>
          <ul className="mt-4 space-y-3">
            {enCurso.map((cert) => (
              <CertificationRow key={cert.name} certification={cert} />
            ))}
          </ul>
        </section>
      )}

      {obtenidas.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">Obtenidas</h2>
          <ul className="mt-4 space-y-3">
            {obtenidas.map((cert) => (
              <CertificationRow key={cert.name} certification={cert} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function CertificationRow({
  certification,
}: {
  certification: (typeof certifications)[number];
}) {
  const isObtenida = certification.status === "obtenida";
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/40">
      {isObtenida ? (
        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
      ) : (
        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      )}
      <div className="flex-1">
        <p className="font-medium">{certification.name}</p>
        <p className="text-sm text-muted">
          {certification.issuer} · {certification.date}
        </p>
      </div>
      {certification.credentialUrl && (
        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
      )}
    </div>
  );

  if (!certification.credentialUrl) {
    return <li>{content}</li>;
  }

  return (
    <li>
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block")}
      >
        {content}
      </a>
    </li>
  );
}
