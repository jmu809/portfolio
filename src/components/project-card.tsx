import Image from "next/image";
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
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border transition-colors hover:border-accent/40"
    >
      {project.coverImage && (
        <div className="aspect-video w-full overflow-hidden border-b border-border">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={640}
            height={360}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
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
          <p className="text-xs text-muted">
            {project.stack.slice(0, 4).join(" · ")}
          </p>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
        </div>
      </div>
    </Link>
  );
}
