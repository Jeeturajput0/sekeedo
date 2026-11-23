import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

type IndustryTileProps = {
  industry: Industry;
  index: number;
  featured?: boolean;
};

export function IndustryTile({ industry, index, featured = false }: IndustryTileProps) {
  return (
    <Link
      href={`/industries#${industry.slug}`}
      data-reveal-item
      className={cn(
        "group relative block overflow-hidden bg-ink",
        featured ? "min-h-[280px] sm:min-h-[340px]" : "min-h-[190px] sm:min-h-[220px]",
      )}
      aria-label={`Explore ${industry.name}`}
    >
      <Image
        src={industry.image}
        alt={industry.imageAlt}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        className="object-cover image-graded-dark transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-brand/60" aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand">
          {String(index + 1).padStart(2, "0")} / Industry
        </p>
        <h3
          className={cn(
            "mt-2 font-semibold leading-tight tracking-[-0.02em] text-white",
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg",
          )}
        >
          {industry.name}
        </h3>
      </div>

      <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-white/25 text-white/80 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </Link>
  );
}
