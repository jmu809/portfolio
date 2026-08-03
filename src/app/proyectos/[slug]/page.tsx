import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { Badge } from "@/components/badge";
import { originStyles } from "@/lib/origin";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/proyectos"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Volver a proyectos
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge className={cn(originStyles[project.origin])}>
          {project.origin}
        </Badge>
        {project.domain.map((domain) => (
          <Badge key={domain}>{domain}</Badge>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent/40"
          >
            Repositorio <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
          >
            Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted">
            Problema
          </dt>
          <dd className="mt-2 text-sm">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted">
            Solución
          </dt>
          <dd className="mt-2 text-sm">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted">
            Resultados
          </dt>
          <dd className="mt-2 text-sm">{project.results}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
        <MDXRemote source={project.content} />
      </div>
    </div>
  );
}
