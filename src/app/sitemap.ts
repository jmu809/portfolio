import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/proyectos",
    "/sobre-mi",
    "/certificaciones",
    "/contacto",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/proyectos/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...projectRoutes];
}
