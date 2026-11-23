import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-white text-charcoal">
      <div className="container-page flex h-9 items-center justify-center gap-3 text-center">
        <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-brand sm:block" aria-hidden="true" />
        <p className="truncate text-[11px] font-medium tracking-[0.04em] text-muted sm:text-xs">
          {siteConfig.announcement}
        </p>
        <Link
          href="/contact?enquiry=bulk"
          className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand underline-offset-4 transition-colors hover:underline sm:text-xs"
        >
          Enquire
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
