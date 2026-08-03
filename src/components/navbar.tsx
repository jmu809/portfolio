"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "text-accent"
                        : "text-muted transition-colors hover:text-foreground"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm md:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive
                      ? "block py-2 text-accent"
                      : "block py-2 text-muted"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
