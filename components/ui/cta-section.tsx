import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, ImageReveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { ShoeSprite } from "@/components/products/shoe-sprite";

type CtaSectionProps = {
  title: string;
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
  return (
    <section className={cn("bg-forest text-white", className)}>
      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="relative z-10">
          <FadeIn>
            <span className="eyebrow">Let&apos;s talk business</span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">{text}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href={secondaryHref} className="btn-light">
                {secondaryLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
        {image ? (
          <ImageReveal className="relative h-[280px] w-full lg:h-[380px]" delay={0.1}>
            {image === "/images/cta-workforce.webp" ? <ShoeSprite position={3} className="absolute inset-0" /> : <Image src={image} alt={imageAlt ?? "Industrial workforce"} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />}
            <div className="absolute inset-0 bg-forest/25" aria-hidden="true" />
          </ImageReveal>
        ) : (
          <div className="hidden lg:block" aria-hidden="true">
            <div className="ml-auto grid h-64 w-64 grid-cols-3 gap-2 opacity-25">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="border border-white/40" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
