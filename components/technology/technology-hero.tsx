import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeIn, ImageReveal, TextReveal } from "@/components/motion/reveal";

export function TechnologyHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-page relative grid gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-14">
        <div className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] text-muted">
            <Link href="/" className="transition-colors hover:text-brand">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-charcoal">Technology &amp; Safety</span>
          </nav>

          <FadeIn>
            <span className="eyebrow">Technology &amp; Safety</span>
          </FadeIn>

          <div className="mt-5">
            <TextReveal
              as="h1"
              text="Understand what protects you."
              highlight="protects you."
              immediate
              className="max-w-[12ch] text-[clamp(2.4rem,4.6vw,4rem)] font-semibold leading-[1.03] tracking-[-0.05em] text-charcoal"
            />
          </div>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Safety footwear is a system of design choices. Explore the technologies behind
              industrial footwear and learn why product-specific verification matters for every
              selection.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-32 w-32 border border-brand/30 lg:block" aria-hidden="true" />
          <ImageReveal className="relative aspect-[16/10] w-full bg-paper">
            <Image
              src="/images/ind-oil-gas.webp"
              alt="Industrial stainless steel piping and production equipment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute right-0 top-0 h-full w-16 origin-top skew-x-[-24deg] bg-brand sm:w-24"
              aria-hidden="true"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
