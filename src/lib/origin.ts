import type { ProjectOrigin } from "@/lib/types";

export const originStyles: Record<ProjectOrigin, string> = {
  Master: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Personal:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Certificación:
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
};
