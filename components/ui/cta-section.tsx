
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { FadeIn, ImageReveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { ShoeSprite } from "@/components/products/shoe-sprite";

type CtaSectionProps = {
  title: ReactNode;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function CtaSection({
  title,
  text,
  primaryLabel = "Request a Quote",
  primaryHref = "/contact?enquiry=quote",
  secondaryLabel = "Contact Our Team",
  secondaryHref = "/contact",
  image,
  imageAlt,
  className,
}: CtaSectionProps) {
  const isShoeSprite = image === "/images/cta-workforce.webp";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[#111] text-white",
        className
      )}
    >
      {/* Background lighting */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(255,255,255,0.11),transparent_40%),linear-gradient(110deg,#111,#1d1d1d_58%,#101010)]"
        aria-hidden="true"
      />

      {/* Orange decorative stripe */}
      <div
        className="absolute right-[12%] top-0 hidden h-full w-20 skew-x-[-28deg] bg-[#ff6a00] lg:block"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="container-page relative grid items-center gap-7 py-12 sm:py-16 lg:min-h-[310px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

        {/* Left Content */}
        <div className="relative z-10">
          <FadeIn>
            <span className="eyebrow text-[#ff6a00]">
              Let&apos;s Talk Business
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="section-heading mt-4 max-w-xl font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              {title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
              {text}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href={primaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#F4512C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#df3e1e] hover:shadow-lg hover:shadow-orange-500/20"
              >
                {primaryLabel}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition-all duration-300 hover:border-white hover:bg-[#F4512C] hover:text-white"
              >
                {secondaryLabel}
                <ArrowUpRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

            </div>
          </FadeIn>
        </div>

        {/* Right Product Image */}
        <div className="relative h-[200px] sm:h-[290px] lg:absolute lg:inset-y-0 lg:right-8 lg:h-auto lg:w-[48%]">

          {image ? (
            <ImageReveal
              className="relative h-full w-full"
              delay={0.1}
            >
              {isShoeSprite ? (
                <ShoeSprite
                  position={3}
                  className="absolute inset-0"
                />
              ) : (
                <Image
                  src={image}
                  alt={imageAlt ?? "SEKEEDO industrial safety footwear"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-contain object-center mix-blend-lighten"
                />
              )}

              {/* Bottom Image Gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent"
                aria-hidden="true"
              />
            </ImageReveal>
          ) : (
            <div
              className="hidden h-full items-center justify-end lg:flex"
              aria-hidden="true"
            >
              <div className="grid h-64 w-64 grid-cols-3 gap-2 opacity-25">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="border border-white/40"
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
