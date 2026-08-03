"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/cn";

type Props = {
  projects: Project[];
  domains: string[];
  origins: string[];
};

export function ProjectsExplorer({ projects, domains, origins }: Props) {
  const [domainFilter, setDomainFilter] = useState<string | null>(null);
  const [originFilter, setOriginFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesDomain =
        !domainFilter || project.domain.includes(domainFilter);
      const matchesOrigin = !originFilter || project.origin === originFilter;
      return matchesDomain && matchesOrigin;
    });
  }, [projects, domainFilter, originFilter]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <FilterGroup
          label="Dominio"
          value={domainFilter}
          options={domains}
          onChange={setDomainFilter}
        />
        <FilterGroup
          label="Origen"
          value={originFilter}
          options={origins}
          onChange={setOriginFilter}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-muted">
          No hay proyectos con estos filtros.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | null;
  options: string[];
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
      <button
        type="button"
        onClick={() => onChange(null)}
        className={cn(
          "rounded-full border border-border px-3 py-1 text-xs transition-colors",
          value === null
            ? "border-accent text-accent"
            : "text-muted hover:text-foreground"
        )}
      >
        Todos
      </button>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border border-border px-3 py-1 text-xs transition-colors",
            value === option
              ? "border-accent text-accent"
              : "text-muted hover:text-foreground"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
