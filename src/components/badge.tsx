import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
