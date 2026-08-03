import type { TimelineItem } from "@/lib/profile";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-6 border-l border-border pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {item.period}
          </p>
          <h3 className="mt-1 font-semibold">{item.title}</h3>
          <p className="text-sm text-muted">{item.organization}</p>
          {item.description && (
            <p className="mt-2 text-sm">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
