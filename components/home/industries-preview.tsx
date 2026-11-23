import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, ImageReveal, Stagger } from "@/components/motion/reveal";
import { featuredIndustries, industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

export function IndustriesPreview() {
  const remaining = industries.filter((industry) => !industry.featured).slice(0, 9);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries we serve"
          title="One catalogue. Many working environments."
          lead="From construction sites to controlled facilities, we support procurement teams across a wide range of industrial sectors."
          action={
            <Link href="/industries" className="btn-outline">
              Explore industries
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {featuredIndustries.map((industry, index) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className={cn(
                "group relative block overflow-hidden",
                index === 0 ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-6",
              )}
            >
              <ImageReveal
                className={cn("relative", index === 0 ? "h-[320px] lg:h-[560px]" : "h-[268px]")}
              >
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" aria-hidden="true" />
              </ImageReveal>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                  {String(index + 1).padStart(2, "0")} / Industry
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {industry.name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/65">{industry.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors group-hover:text-brand">
                  Explore sector
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 border-t border-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Also supporting
            </p>
            <Stagger className="mt-5 flex flex-wrap gap-2">
              {remaining.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  data-stagger
                  className="border border-line px-3.5 py-2 text-xs text-charcoal/70 transition-colors hover:border-brand hover:text-brand"
                >
                  {industry.shortName}
                </Link>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
