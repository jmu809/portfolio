import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
              Data Analyst
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-xl text-lg text-muted">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-wrap gap-2">
              {siteConfig.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Ver proyectos <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.cvUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/40"
              >
                Descargar CV <Download className="h-4 w-4" />
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/40"
              >
                Contacto
              </Link>
            </div>
          </div>

          <Image
            src={siteConfig.photo}
            alt={siteConfig.name}
            width={192}
            height={192}
            priority
            className="h-40 w-40 shrink-0 rounded-full border border-border object-cover sm:h-48 sm:w-48"
          />
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Proyectos destacados
            </h2>
            <Link
              href="/proyectos"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
