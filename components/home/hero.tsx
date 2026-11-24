import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import {
  FadeIn,
  ImageReveal,
  Parallax,
  TextReveal,
} from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-page grid items-center gap-10 py-12 lg:min-h-[640px] lg:grid-cols-[1.06fr_0.94fr] lg:gap-14 lg:py-16">
        <div className="relative z-10">
          <FadeIn>
            <span className="eyebrow">Wholesale Safety Footwear</span>
          </FadeIn>

          <div className="mt-6">
            <TextReveal
              as="h1"
              text="Built for the Work That Matters."
              immediate
              className="max-w-[13ch] text-[clamp(2.75rem,5.2vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-charcoal sm:max-w-[12ch]"
            />
          </div>

          <FadeIn delay={0.15}>
            <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/65 sm:text-lg">
              Reliable safety footwear engineered for demanding workplaces.
              Discover industrial footwear solutions designed for protection,
              comfort and performance.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore Products
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact?enquiry=bulk" className="btn-outline">
                Request Bulk Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="h-4 w-4 text-brand"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-charcoal/70">
                  Industrial-grade design
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="h-4 w-4 text-brand"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-charcoal/70">
                  Bulk procurement support
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="h-4 w-4 text-brand"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-charcoal/70">
                  Product-focused guidance
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          <div
            className="absolute -right-10 -top-10 hidden h-48 w-48 border border-charcoal/10 lg:block"
            aria-hidden="true"
          />
          <ImageReveal className="relative h-[400px] w-full sm:h-[500px] lg:h-[540px]">
            <Parallax className="h-[112%] w-full">
              <Image
                src="/images/hero-worker.webp"
                alt="Worker tying industrial safety footwear at an active worksite"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </Parallax>
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent"
              aria-hidden="true"
            />
          </ImageReveal>

          <FadeIn
            delay={0.25}
            className="absolute -bottom-6 -left-2 hidden w-[210px] sm:block lg:-left-10 lg:w-[250px]"
          >
            <div className="border border-line bg-white p-3 shadow-[0_20px_50px_rgba(22,27,25,0.14)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                <Image
                  src="/images/hero-product.webp"
                  alt="Close-up of a rugged industrial safety boot"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-1 pt-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                    Featured range
                  </p>
                  <p className="mt-1 text-sm font-semibold text-charcoal">
                    Industrial footwear
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-charcoal"
                  aria-hidden="true"
                />
              </div>
            </div>
          </FadeIn>

          <span
            className="absolute -right-3 top-8 hidden rotate-90 text-[10px] font-semibold uppercase tracking-[0.28em] text-charcoal/40 lg:block"
            aria-hidden="true"
          >
            SEKEEDO / 01
          </span>
        </div>
      </div>
    </section>
  );
}
