
"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/animation/magnetic-button";

const SafetyShoeScene = dynamic(() => import("@/components/three/safety-shoe-scene"), { ssr: false, loading: () => null });

const slides = [
  {
    image: "/images/slider1.peg.jpeg",
    alt: "Premium industrial safety boots photographed in low light",
    eyebrow: "Industrial Safety Footwear",
    titleTop: "Built for the",
    titleBottom: "Work That Matters.",
    highlight: "Matters.",
    text: "Reliable safety footwear engineered for demanding workplaces. Designed for protection, comfort and long-lasting performance.",
    primary: { label: "Explore Products", href: "/products" },
    secondary: { label: "Request Bulk Quote", href: "/contact?enquiry=bulk" },
  },
  {
    image: "/images/hero-worker.webp",
    alt: "Worker tying industrial safety footwear at an active worksite",
    eyebrow: "Engineered for Protection",
    titleTop: "Ready for",
    titleBottom: "Every Shift.",
    highlight: "Shift.",
    text: "Industrial-grade footwear built to keep teams protected, comfortable and focused on the toughest worksites.",
    primary: { label: "View All Products", href: "/products" },
    secondary: { label: "Request Bulk Quote", href: "/contact?enquiry=bulk" },
  },
  {
    image: "/images/slider2jpeg.jpeg",
    alt: "Worker lacing up safety footwear before a shift",
    eyebrow: "Wholesale & Bulk Supply",
    titleTop: "Equip Your",
    titleBottom: "Whole Team.",
    highlight: "Team.",
    text: "Bulk procurement support and product-focused guidance for contractors, factories and distributors.",
    primary: { label: "Request Bulk Quote", href: "/contact?enquiry=bulk" },
    secondary: { label: "Become a Distributor", href: "/become-a-distributor" },
  },
];

const SLIDE_DURATION = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [runId, setRunId] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
      setRunId((current) => current + 1);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [active, paused, reduceMotion, runId]);

  const resume = () => {
    setPaused(false);
    setRunId((current) => current + 1);
  };

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
    setRunId((current) => current + 1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
  };

  return (
    <section
      className="group relative isolate h-[540px] overflow-hidden bg-charcoal sm:h-[600px] lg:h-[620px]"
      aria-label="Built for the Work That Matters"
      aria-roledescription="carousel"
      aria-live="off"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={resume}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) resume(); }}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => { const start = touchStartX.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 48) goTo(active + (end < start ? 1 : -1)); touchStartX.current = null; }}
    >
      {/* Background Images */}
      {slides.map((slide, index) => {
        const isActive = index === active;

        return (
          <div
            key={slide.image}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn(
                "object-cover object-center brightness-[1.12] contrast-[1.05]",
                isActive && "hero-slide-zoom",
              )}
              style={
                isActive
                  ? { animationDuration: "5.6s" }
                  : undefined
              }
            />
          </div>
        );
      })}

      {/* Reduced Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      {active === 0 ? <div className="pointer-events-auto absolute inset-y-0 right-0 z-[1] hidden w-[74%] sm:block sm:w-[69%]" aria-hidden="true"><SafetyShoeScene interactive={!reduceMotion} /></div> : null}

      <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/30 text-white backdrop-blur-sm transition hover:border-brand hover:bg-brand focus-visible:opacity-100 sm:grid"><ChevronLeft className="h-5 w-5" /></button>
      <button type="button" onClick={() => goTo(active + 1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/30 text-white backdrop-blur-sm transition hover:border-brand hover:bg-brand focus-visible:opacity-100 sm:grid"><ChevronRight className="h-5 w-5" /></button>

      {/* Slide Content */}
      <div className="absolute inset-0 z-10">
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.image}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive ? "opacity-100" : "pointer-events-none opacity-0",
              )}
              aria-hidden={!isActive}
            >
              <div className="container-page flex h-full items-center">
                <div
                  className={cn(
                    "max-w-[560px] py-12 text-white transition-transform duration-700 ease-out",
                    isActive ? "translate-y-0" : "translate-y-3",
                  )}
                >
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-white">
                    <span className="h-1 w-12 bg-brand" />
                    {slide.eyebrow}
                  </p>

                  <h1 className="mt-4 text-balance text-[clamp(2.5rem,5vw,3.6rem)] font-bold leading-[1.02] tracking-[-.045em]">
                    {slide.titleTop}
                    <br />
                    {slide.titleBottom.split(slide.highlight)[0]}
                    <span className="text-brand">
                      {slide.highlight}
                    </span>
                    {slide.titleBottom.split(slide.highlight)[1] ?? ""}
                  </h1>

                  <p className="mt-3 max-w-[420px] text-sm leading-[1.5] text-white/90 sm:text-base">
                    {slide.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <MagneticButton><Link href={slide.primary.href} className="btn-primary min-h-[42px]">{slide.primary.label}<ArrowRight className="h-4 w-4" /></Link></MagneticButton>
                    <MagneticButton><Link href={slide.secondary.href} className="btn-ghost-light min-h-[42px]">{slide.secondary.label}</Link></MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

   
      {/* Slide Indicators */}
      <div className="absolute inset-x-0 bottom-7 z-20">
        <div className="container-page flex gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={cn(
                "relative h-1 overflow-hidden rounded-full transition-all duration-300",
                index === active
                  ? "w-9 bg-white/35"
                  : "w-6 bg-white/70 hover:bg-white",
              )}
            >
              {index === active && (
                <span
                  key={runId}
                  className="hero-slide-progress absolute inset-y-0 left-0 bg-brand"
                  style={{
                    animationDuration: `${SLIDE_DURATION / 1000}s`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
