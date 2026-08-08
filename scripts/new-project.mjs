#!/usr/bin/env node
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import fs from "node:fs";
import path from "node:path";

const rl = createInterface({ input: stdin, output: stdout });

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toYamlList(value) {
  const items = value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
  if (items.length === 0) return "[]";
  return `[${items.map((item) => JSON.stringify(item)).join(", ")}]`;
}

async function ask(question, fallback = "") {
  const suffix = fallback ? ` (${fallback})` : "";
  const answer = await rl.question(`${question}${suffix}: `);
  return answer.trim() || fallback;
}

async function main() {
  console.log(
    "Nuevo proyecto — responde a las preguntas (Enter para aceptar el valor entre paréntesis)\n"
  );

  const title = await ask("Título del proyecto");
  if (!title) {
    console.log("El título es obligatorio. Cancelado.");
    rl.close();
    return;
  }

  const slug = slugify(await ask("Slug para la URL", slugify(title)));
  const domain = await ask(
    "Dominios (separados por coma)",
    "Data Engineering"
  );
  const origin = await ask(
    "Origen: Master, Personal o Certificación",
    "Personal"
  );
  const stack = await ask("Stack (separado por coma)", "Python");
  const summary = await ask("Resumen corto (1 frase)");
  const problem = await ask("Problema que resolvía");
  const solution = await ask("Solución aplicada");
  const results = await ask("Resultados / impacto");
  const repoUrl = await ask("URL del repositorio (opcional)");
  const demoUrl = await ask("URL de demo (opcional)");
  const featuredAnswer = await ask("¿Destacado en la Home? (s/n)", "n");
  const featured = featuredAnswer.toLowerCase().startsWith("s");
  const date = await ask(
    "Fecha (AAAA-MM-DD)",
    new Date().toISOString().slice(0, 10)
  );

  rl.close();

  const projectsDir = path.join(process.cwd(), "content", "projects");
  const filePath = path.join(projectsDir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(
      `\nYa existe un proyecto con el slug "${slug}" (content/projects/${slug}.mdx). Elige otro título o edita ese archivo directamente.`
    );
    return;
  }

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
domain: ${toYamlList(domain)}
origin: "${origin}"
stack: ${toYamlList(stack)}
summary: "${summary}"
problem: "${problem}"
solution: "${solution}"
results: "${results}"
repoUrl: "${repoUrl}"
demoUrl: "${demoUrl}"
coverImage: ""
featured: ${featured}
date: "${date}"
---

## Contexto

Describe aquí el contexto del proyecto y tu rol.

## Enfoque técnico

Explica las decisiones clave: arquitectura, por qué elegiste cada tecnología, retos superados.

## Resultados y aprendizajes

Qué conseguiste, qué aprendiste, y qué parte demuestra mejor tus capacidades.
`;

  fs.mkdirSync(projectsDir, { recursive: true });
  fs.writeFileSync(filePath, frontmatter, "utf8");

  console.log(`\nProyecto creado: content/projects/${slug}.mdx`);
  console.log(
    "Ábrelo para completar el case study largo, y ejecuta `npm run dev` para verlo en /proyectos."
  );
}

main();
