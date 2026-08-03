export type ProjectOrigin = "Master" | "Personal" | "Certificación";

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  domain: string[];
  origin: ProjectOrigin;
  stack: string[];
  summary: string;
  problem: string;
  solution: string;
  results: string;
  repoUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  featured: boolean;
  date: string;
};

export type Project = ProjectFrontmatter & {
  content: string;
};
