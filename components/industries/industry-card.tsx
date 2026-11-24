import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/data/industries";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/animation/tilt-card";

type IndustryCardProps = {
  industry: Industry;
  index: number;
  featured?: boolean;
};

export function IndustryCard({
  industry,
  index,
  featured = false,
}: IndustryCardProps) {
  return (
    <TiltCard className="h-full">
    <article
      data-stagger
      className={cn(
        "group flex h-full flex-col border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_45px_rgba(22,27,25,0.08)]",
        featured && "lg:col-span-2",
      )}
    >
      <Link
        href={`/industries/${industry.slug}`}
        className={cn(
          "relative block overflow-hidden",
          featured ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
        aria-label={`Explore ${industry.name}`}
      >
        <Image
          src={industry.image}
          alt={industry.imageAlt}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-charcoal">
          {String(index + 1).padStart(2, "0")} / Sector
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
          <Link
            href={`/industries/${industry.slug}`}
            className="transition-colors hover:text-brand"
          >
            {industry.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          {industry.description}
        </p>

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
              Common considerations
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {industry.hazards.map((hazard) => (
                <span
                  key={hazard}
                  className="bg-paper px-2.5 py-1 text-[11px] text-charcoal/70"
                >
                  {hazard}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
              Footwear features to review
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {industry.considerations.map((item) => (
                <span
                  key={item}
                  className="border border-line px-2.5 py-1 text-[11px] text-charcoal/70"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-6">
          <Link
            href={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand transition-colors hover:text-forest"
          >
            Explore suitable footwear
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
    </TiltCard>
  );
}
