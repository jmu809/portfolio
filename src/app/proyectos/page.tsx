import type { Metadata } from "next";
import { getAllDomains, getAllOrigins, getAllProjects } from "@/lib/projects";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function ProyectosPage() {
  const projects = getAllProjects();
  const domains = getAllDomains();
  const origins = getAllOrigins();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Proyectos de máster, personales y de certificación, organizados por
        dominio técnico.
      </p>

      <div className="mt-10">
        <ProjectsExplorer
          projects={projects}
          domains={domains}
          origins={origins}
        />
      </div>
    </div>
  );
}
