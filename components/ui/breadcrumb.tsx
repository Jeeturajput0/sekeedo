import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted">
      <Link href="/" className="transition-colors hover:text-brand">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-brand">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-charcoal" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
