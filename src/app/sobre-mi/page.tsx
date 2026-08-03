import type { Metadata } from "next";
import { bio, education, experience, skillGroups } from "@/lib/profile";
import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/badge";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre mí",
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sobre mí</h1>
      <p className="mt-2 text-muted">{siteConfig.role}</p>

      <div className="mt-8 space-y-4 text-base leading-relaxed">
        {bio.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Formación</h2>
        <div className="mt-6">
          <Timeline items={education} />
        </div>
      </section>

      {experience.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">
            Experiencia
          </h2>
          <div className="mt-6">
            <Timeline items={experience} />
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-muted">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
