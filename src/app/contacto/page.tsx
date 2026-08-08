import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
      <p className="mt-2 max-w-xl text-muted">
        ¿Quieres hablar sobre una oportunidad, colaboración o simplemente
        saludar? Escríbeme.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <Mail className="h-4 w-4" />
        {siteConfig.email}
      </a>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.phone}
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {siteConfig.location}
        </span>
      </div>

      <div className="mt-10 flex items-center gap-4 text-muted">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
