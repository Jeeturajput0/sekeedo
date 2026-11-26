import { Check, Layers3 } from "lucide-react";
import { FadeIn, ImageReveal, TextReveal } from "@/components/motion/reveal";
import { ShoeSprite } from "@/components/products/shoe-sprite";

const layers = [
  "Upper Material",
  "Cushion Layer",
  "Anti-Puncture Layer",
  "Outsole (Slip Resistant)",
];

const points = [
  "Leather and synthetic uppers for different durability and care profiles.",
  "Mesh and textile linings for support and breathability.",
  "Midsole constructions affecting cushioning, weight and comfort.",
  "Outsole compounds and tread patterns for grip on varied surfaces.",
];

export function MaterialConstruction() {
  return (
    <section className="bg-white py-14 lg:py-9">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeIn className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-32 skew-x-[-24deg] bg-brand" aria-hidden="true" />
          <div className="absolute -bottom-4 right-10 h-16 w-24 skew-x-[-24deg] bg-[#FF8A6A]" aria-hidden="true" />
          <ImageReveal className="relative aspect-[4/3] w-full bg-[#F7F7F7]">
            <ShoeSprite position={0} className="absolute inset-0 h-full w-full" />
          </ImageReveal>

          <div className="absolute bottom-4 right-2 border border-line bg-white/95 p-3 shadow-sm sm:right-4">
            <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal">
              <Layers3 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Construction
            </p>
            <ul className="space-y-1.5">
              {layers.map((layer, index) => (
                <li key={layer} className="flex items-center gap-2 text-[10px] text-charcoal/75">
                  <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-brand" : "bg-[#FF8A6A]"}`} />
                  {layer}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="eyebrow">Material &amp; Construction</span>
          </FadeIn>
          <div className="mt-5">
            <TextReveal
              as="h2"
              text="Construction choices shape performance."
              highlight="performance."
              className="section-heading max-w-[13ch] font-semibold leading-[1.08] tracking-[-0.045em] text-charcoal"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-sm leading-7 text-muted">
              Uppers, linings, midsoles and outsoles each influence durability, weight, flexibility
              and cleanability. Understanding these elements helps procurement teams ask better
              questions.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-charcoal/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
