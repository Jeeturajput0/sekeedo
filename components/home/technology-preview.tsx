import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowUpRight, Crosshair, Droplets, Feather, Footprints, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, ImageReveal } from "@/components/motion/reveal";
import { technologies, type TechnologyIcon } from "@/lib/data/technologies";

const iconMap = {
  shield: Shield,
  footprints: Footprints,
  crosshair: Crosshair,
  droplet: Droplets,
  activity: Activity,
  feather: Feather,
} satisfies Partial<Record<TechnologyIcon, typeof Shield>>;

const preview = technologies.filter((item) =>
  ["toe-protection", "slip-resistance", "puncture-resistance", "oil-resistance", "comfort-ergonomics", "lightweight-construction"].includes(
    item.slug,
  ),
);

export function TechnologyPreview() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technology & safety"
          title="Details that make a difference on site."
          lead="Understand the construction choices behind industrial safety footwear—and how to match them to assessed workplace hazards."
          action={
            <Link href="/technology-safety" className="btn-outline">
              Explore technologies
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="border-t border-line">
            {preview.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Shield;
              return (
                <FadeIn key={item.slug} delay={index * 0.04}>
                  <div className="group flex gap-5 border-b border-line py-5 transition-colors hover:bg-white/60">
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-line bg-white text-brand transition-colors group-hover:border-brand">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted">{item.summary}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.1}>
            <div className="relative">
              <ImageReveal className="h-[420px] w-full lg:h-full lg:min-h-[560px]">
                <Image
                  src="/images/ind-chemical.webp"
                  alt="Industrial process environment with stainless steel piping"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-forest/25" aria-hidden="true" />
              </ImageReveal>
              <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-charcoal/85 p-5 text-white backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                  Verification first
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Footwear selection depends on workplace hazards and product-specific verified
                  specifications. Always confirm documentation before purchase.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
