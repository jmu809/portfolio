import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/badge";
import { originStyles } from "@/lib/origin";
import { cn } from "@/lib/cn";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:border-accent/40"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={cn(originStyles[project.origin])}>
            {project.origin}
          </Badge>
          {project.domain.map((domain) => (
            <Badge key={domain}>{domain}</Badge>
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-muted">{project.stack.slice(0, 4).join(" · ")}</p>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
      </div>
    </Link>
  );
}
