import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/lib/types";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export const getAllProjects = cache((): Project[] => {
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as ProjectFrontmatter), content };
  });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, limit);
}

export function getAllDomains(): string[] {
  const domains = new Set<string>();
  for (const project of getAllProjects()) {
    for (const domain of project.domain) domains.add(domain);
  }
  return Array.from(domains).sort();
}

export function getAllOrigins(): string[] {
  const origins = new Set<string>();
  for (const project of getAllProjects()) origins.add(project.origin);
  return Array.from(origins).sort();
}
