"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "SEKEEDO safety shoes have been a great fit for our workforce. The quality, comfort and durability are exactly what we need for our site teams.",
    name: "Rajesh Kumar",
    role: "Operations Manager, BuildTech Infra",
    initials: "RK",
  },
  {
    quote: "Reliable supply and clear communication make bulk ordering straightforward for our procurement team.",
    name: "Anita Sharma",
    role: "Procurement Lead, Fabline Industries",
    initials: "AS",
  },
  {
    quote: "The comfort difference across long shifts is noticeable for our people on site.",
    name: "Mohammed Irfan",
    role: "Site Supervisor, CoreBuild Projects",
    initials: "MI",
  },
];

export function AboutTestimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const move = (direction: number) =>
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section className="relative isolate overflow-hidden bg-[#151515] py-16 lg:py-20">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/images/ind-manufacturing.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#151515]/85" />
      </div>

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <div>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Testimonials
            </span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-white">
              What Our <span className="text-brand">Customers Say</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Trusted by businesses across industries for reliable safety footwear.
            </p>

            <div className="mt-7 flex gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-brand hover:bg-brand"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-brand hover:bg-brand"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative rounded-xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:p-8">
            <Quote className="h-7 w-7 text-brand/25" aria-hidden="true" />
            <blockquote key={active} className="mt-3 min-h-[104px] text-[15px] leading-7 text-charcoal sm:text-base">
              “{item.quote}”
            </blockquote>

            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-xs font-semibold text-white">
                {item.initials}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal">{item.name}</p>
                <p className="truncate text-xs text-muted">{item.role}</p>
              </div>
              <div className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
            </div>

            <div className="mt-5 flex gap-1.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active}
                  className={cn("h-1 rounded-full transition-all", index === active ? "w-7 bg-brand" : "w-4 bg-line hover:bg-charcoal/40")}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] text-white/40">
            Customer feedback shown is illustrative — replace with verified testimonials.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
