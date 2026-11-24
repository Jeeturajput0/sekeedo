"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "SEKEEDO safety shoes have been a great fit for our workforce. The quality, comfort and durability are exactly what we need for our site teams.",
    name: "Rajesh Kumar",
    role: "Operations Manager, BuildTech Infra",
    initials: "RK",
  },
  {
    quote:
      "Reliable supply and clear communication make bulk ordering straightforward for our procurement team.",
    name: "Anita Sharma",
    role: "Procurement Lead, Fabline Industries",
    initials: "AS",
  },
  {
    quote:
      "The comfort difference across long shifts is noticeable for our people on site.",
    name: "Mohammed Irfan",
    role: "Site Supervisor, CoreBuild Projects",
    initials: "MI",
  },
];

export function AboutTestimonials() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const item = testimonials[active];
  const move = (direction: number) =>
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );

  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-[#06291d] text-white roundered-2xl"
    >
      <div className="relative min-h-[660px] sm:min-h-[700px] lg:min-h-[610px] ">
        <div className="absolute inset-x-0 top-0 h-[280px] sm:h-[340px] lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-[42%]">
          <Image
            src="/images/testimonial-worker-generated.png"
            alt="Industrial worker wearing a hard hat and high-visibility vest"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[center_34%] lg:object-[center_30%]"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#06291d] via-[#06291d]/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#06291d]/40"
            aria-hidden="true"
          />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-28 w-36 bg-[#ff6a00] [clip-path:polygon(0_0,100%_100%,0_100%)] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 hidden bg-[#06291d] lg:block lg:[clip-path:polygon(36%_0,100%_0,100%_100%,27%_100%)]"
          aria-hidden="true"
        />

        <div className="container-page relative z-20 grid min-h-[660px] items-end pb-8 pt-[300px] sm:min-h-[700px] sm:pt-[355px] lg:min-h-[610px] lg:grid-cols-[0.34fr_0.66fr] lg:items-center lg:pb-10 lg:pt-10">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="w-full lg:pl-7 xl:pl-12">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff8500] sm:text-sm">
              <span className="h-1 w-10 rounded-full bg-[#ff8500]" />
              Testimonials
            </p>
            <h2
              id="testimonials-title"
              className="mt-3 text-[clamp(2rem,4.2vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white"
            >
              What Our <span className="text-[#ff8500]">Customers Say</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
              Trusted by businesses across industries for reliable safety
              footwear.
            </p>

          <article tabIndex={0} role="group" aria-roledescription="slide" aria-label={`Testimonial ${active + 1} of ${testimonials.length}`} onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }} onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const start = touchStartX.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 48) move(end < start ? 1 : -1); touchStartX.current = null; }} className="mt-6 rounded-[1.4rem] bg-white p-5 text-charcoal shadow-[0_20px_55px_rgba(0,0,0,0.22)] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8500] sm:mt-8 sm:p-7 lg:p-8">
              <div className="flex items-center justify-between gap-3">
                <Quote
                  className="h-10 w-10 fill-[#ffb17c] text-[#ffb17c] sm:h-12 sm:w-12"
                  aria-hidden="true"
                />
                <div
                  className="flex gap-0.5 text-[#ff8500]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-current sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote key={active} initial={reduceMotion ? false : { x: 18, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={reduceMotion ? undefined : { x: -18, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }} className="mt-2 min-h-[105px] text-[clamp(1.05rem,1.7vw,1.55rem)] italic leading-[1.5] tracking-[-0.02em] text-charcoal">“{item.quote}”</motion.blockquote>
              </AnimatePresence>
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#dedede] pt-4 sm:mt-5 sm:pt-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff5b00] text-lg font-bold text-white sm:h-16 sm:w-16 sm:text-xl">
                  {item.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold leading-tight text-charcoal sm:text-xl">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-charcoal/75 sm:text-sm">
                    {item.role}
                  </p>
                </div>
                <div className="ml-auto flex gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#c9c9c9] text-charcoal transition-colors hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white sm:h-14 sm:w-14"
                  >
                    <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#c9c9c9] text-charcoal transition-colors hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white sm:h-14 sm:w-14"
                  >
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
              </div>
              <div
                className="mt-5 flex justify-center gap-2"
                aria-label="Choose a testimonial"
              >
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === active}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      index === active
                        ? "w-10 bg-[#ff8500]"
                        : "w-2.5 bg-[#b8b8b8] hover:bg-charcoal/50",
                    )}
                  />
                ))}
              </div>
            </article>
            <p className="mt-3 text-center text-[10px] text-white/55">
              Customer feedback shown is illustrative. Replace with verified
              testimonials before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
