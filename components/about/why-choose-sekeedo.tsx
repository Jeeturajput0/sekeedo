
import {
  Feather,
  Layers,
  ShieldCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

import {
  FadeIn,
  TextReveal,
  Stagger,
} from "@/components/motion/reveal";

import { TiltCard } from "@/components/animation/tilt-card";

const features = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Reliable Protection",
    text: "Designed to support workplace safety across demanding industrial environments.",
  },
  {
    icon: Feather,
    number: "02",
    title: "All-Day Comfort",
    text: "Comfort-focused footwear for professionals working long hours.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Durable & Long-Lasting",
    text: "Quality materials and construction for dependable everyday performance.",
  },
  {
    icon: Users,
    number: "04",
    title: "Business & Bulk Support",
    text: "Wholesale solutions for businesses, projects and distribution partners.",
  },
];

export function WhyChooseSekeedo() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAFAF9] py-14 sm:py-16 lg:py-5">

      {/* SUBTLE BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-[#F4512C]/[0.045] blur-3xl"
      />

      <div className="container-page">

        {/* SECTION HEADER */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">

          <div>
            <FadeIn>
              <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F4512C]">
                <span className="h-[2px] w-8 rounded-full bg-[#F4512C]" />
                Why Choose SEKEEDO
              </span>
            </FadeIn>

            <div className="mt-2">
              <TextReveal
                as="h2"
                text="The Right Safety Footwear for Your Workplace"
                highlight={["Your", "Workplace"]}
                className="max-w-[17ch] text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#171717]"
              />
            </div>
          </div>

          <FadeIn delay={0.12}>
            <p className="max-w-md text-sm leading-7 text-[#686D68] lg:ml-auto lg:pb-1 lg:text-base">
              Designed around the practical needs of modern industries,
              with a focus on workplace protection, everyday comfort
              and dependable business support.
            </p>
          </FadeIn>

        </div>

        {/* FEATURE CARDS */}
        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <TiltCard
                key={feature.number}
                className="h-full"
              >
                <article
                  data-stagger
                  className="
                    group relative flex h-full min-h-[245px]
                    flex-col overflow-hidden rounded-2xl
                    border border-[#EAE7E3] bg-white
                    p-2 shadow-[0_5px_22px_rgba(0,0,0,0.035)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#F4512C]/45
                    hover:shadow-[0_18px_40px_rgba(244,81,44,0.09)]
                    sm:p-6
                  "
                >

                  {/* TOP ACCENT */}
                  <span className="absolute left-0 top-0 h-[3px] w-0 rounded-r-full bg-[#F4512C] transition-all duration-500 group-hover:w-full" />

                  {/* CARD TOP */}
                  <div className="flex items-center justify-between">

                    <div className="
                      grid h-14 w-14 place-items-center
                      rounded-2xl border border-[#F4512C]/15
                      bg-[#FFF0E9] text-[#F4512C]
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:border-[#F4512C]
                      group-hover:bg-[#F4512C]
                      group-hover:text-white
                    ">
                      <Icon
                        className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-bold tracking-[0.12em] text-[#C8C8C3] transition-colors duration-300 group-hover:text-[#F4512C]">
                      {feature.number}
                    </span>

                  </div>

                  {/* CARD CONTENT */}
                  <div className="mt-2 flex-1">

                    <h3 className="text-lg font-bold leading-snug tracking-tight text-[#202420] transition-colors duration-300 group-hover:text-[#F4512C]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-[#777D77]">
                      {feature.text}
                    </p>

                  </div>

                  {/* BOTTOM ARROW */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#EEEEEA] pt-4">

                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A0A09A] transition-colors duration-300 group-hover:text-[#F4512C]">
                      SEKEEDO
                    </span>

                    <ArrowUpRight
                      className="h-5 w-5 text-[#B8B8B2] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F4512C]"
                      aria-hidden="true"
                    />

                  </div>

                </article>
              </TiltCard>
            );
          })}

        </Stagger>

      </div>
    </section>
  );
}
