
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { FadeIn, TextReveal } from "@/components/motion/reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Workplace Safety",
    text: "Footwear choices shaped by the realities of demanding work environments.",
  },
  {
    icon: Sparkles,
    title: "Reliable Quality",
    text: "Clear product information and consistent attention to build and finish.",
  },
  {
    icon: HeartHandshake,
    title: "Business Support",
    text: "Wholesale enquiries and guidance for teams, contractors and distributors.",
  },
];

export function AboutIntroduction() {
  return (
    <section className="overflow-hidden bg-white py-10 lg:py-4">
     <div className="container-page grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* LEFT SIDE - IMAGE */}
        <FadeIn className="relative">
         
<div className="grid h-[320px] grid-cols-2 gap-3 sm:h-[400px] lg:h-[440px]">

  {/* LEFT - LARGE IMAGE */}
  <div className="group relative overflow-hidden rounded-2xl bg-[#151515]">
    <Image
      src="/images/about-craft.jpg"
      alt="Industrial safety professional at work"
      fill
      sizes="(max-width: 1024px) 50vw, 30vw"
      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

    <div className="absolute bottom-4 left-3 right-3 sm:bottom-5 sm:left-5">
      <span className="inline-block rounded-full border border-white/30 bg-white/95 px-3 py-2 text-[10px] font-bold text-[#F4512C] shadow-lg sm:px-4 sm:text-xs">
        SEKEEDO INDUSTRIAL SAFETY
      </span>
    </div>
  </div>

  {/* RIGHT - TWO SMALL IMAGES */}
  <div className="grid min-h-0 grid-rows-2 gap-3">

    {/* TOP IMAGE */}
    <div className="group relative overflow-hidden rounded-2xl bg-[#151515]">
      <Image
        src="/images/ind-construction.webp"
        alt="Construction professionals working at an industrial site"
        fill
        sizes="(max-width: 1024px) 50vw, 20vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
    </div>

    {/* BOTTOM IMAGE */}
    <div className="group relative overflow-hidden rounded-2xl bg-[#151515]">
      <Image
        src="/images/ind-electrical.webp"
        alt="Industrial worker wearing workplace safety equipment"
        fill
        sizes="(max-width: 1024px) 50vw, 20vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
    </div>

  </div>
</div>

          {/* Decorative Accent */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-br-2xl border-b-[5px] border-r-[5px] border-[#F4512C]" />
        </FadeIn>

        {/* RIGHT SIDE - CONTENT */}
        <div>

          {/* Eyebrow */}
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              About SEKEEDO
            </span>
          </FadeIn>

          {/* Heading */}
          <div className="mt-3">
            <TextReveal
              as="h2"
              text="Built for People Who Build the World"
              highlight={["Build", "the", "World"]}
              className="section-heading max-w-[13ch] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>

          {/* Description */}
          <FadeIn delay={0.1}>
            <p className="mt-3 text-base leading-6 text-charcoal/75 sm:text-lg sm:leading-7">
              SEKEEDO is an industrial safety footwear brand committed
              to protecting professionals across demanding work
              environments. Our focus is simple — reliable protection,
              all-day comfort and consistent quality for businesses
              and workforces.
            </p>
          </FadeIn>

          {/* VALUES */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <FadeIn
                  key={value.title}
                  delay={0.15 + index * 0.1}
                  className={
                    index > 0
                      ? "border-t border-line pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0"
                      : "border-t border-line pt-4 sm:border-t-0 sm:pt-0"
                  }
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E9]">
                    <Icon
                      className="h-6 w-6 text-[#F4512C]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-charcoal">
                    {value.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-muted">
                    {value.text}
                  </p>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
