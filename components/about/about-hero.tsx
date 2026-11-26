"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { TextReveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/cta-workforce.webp",
    alt: "Worker wearing industrial safety boots at a worksite",
  },
  {
    src: "/images/technology-detail.jpg",
    alt: "Engineer reviewing product testing data on a laptop",
  },
];

export function AboutHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      5000,
    );
    return () => window.clearTimeout(timer);
  }, [active]);

  const goTo = (index: number) =>
    setActive((index + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-page grid items-center gap-8 py-2 lg:min-h-[480px] lg:grid-cols-[1fr_1.02fr] lg:gap-10 lg:py-2">
        <div className="relative z-10">
          <span className="eyebrow">SEKEEDO</span>

          <div className="mt-4">
            <TextReveal
              as="h1"
              text="Safety Footwear, Approached with Clarity."
              highlight="Clarity."
              immediate
              className="max-w-[12ch] text-[clamp(2.6rem,4.8vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-charcoal"
            />
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/65 sm:text-lg">
            High-performance safety shoes designed for real work environments—combining
            protection, comfort and long-lasting durability.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link href="/products" className="btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/products" className="btn-outline">
              Download Catalogue
              <Download className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-full w-full border-r-4 border-t-4 border-brand" aria-hidden="true" />
          <div className="absolute -bottom-4 right-0 h-3 w-[70%] bg-brand" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
            {slides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className={cn(
                  "object-cover object-center transition-opacity duration-700",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}

            <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-charcoal/70 px-3 py-2.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === active}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    index === active ? "w-8 bg-brand" : "w-4 bg-white/60 hover:bg-white",
                  )}
                />
              ))}
            </div>

            <div className="absolute bottom-0 right-0 flex">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous image"
                className="grid h-10 w-10 place-items-center bg-white text-charcoal transition-colors hover:bg-brand hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next image"
                className="grid h-10 w-10 place-items-center border-l border-line bg-white text-charcoal transition-colors hover:bg-brand hover:text-white"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
