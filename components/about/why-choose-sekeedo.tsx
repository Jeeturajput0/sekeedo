
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
    <section className="overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="container-page">

        {/* HEADER */}
        <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>
            <FadeIn>
              <span className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-[2px] w-7 bg-brand" />
                Why Choose SEKEEDO
              </span>
            </FadeIn>

            <div className="mt-4">
              <TextReveal
                as="h2"
                text="The Right Safety Footwear for Your Workplace"
                highlight={["Your", "Workplace"]}
                className="max-w-[16ch] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-charcoal"
              />
            </div>
          </div>

          <FadeIn delay={0.12}>
            <p className="max-w-md text-sm leading-7 text-muted lg:ml-auto lg:pb-1">
              Designed around the practical needs of modern industries,
              with a focus on workplace protection, everyday comfort
              and dependable business support.
            </p>
          </FadeIn>

        </div>

        {/* COMPACT FEATURE CARDS */}
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <TiltCard key={feature.number} className="h-full">
              <article
                data-stagger
                className="group relative flex h-full gap-4 overflow-hidden border border-line bg-white p-4 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:p-5"
              >

                {/* ICON */}
                <div className="grid h-10 w-10 shrink-0 place-items-center border border-brand/20 bg-brand/[0.05] text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-charcoal transition-colors duration-300 group-hover:text-brand">
                      {feature.title}
                    </h3>

                    <span className="shrink-0 text-[10px] font-semibold tracking-widest text-muted/60">
                      {feature.number}
                    </span>
                  </div>

                  <p className="mt-1.5 max-w-md text-xs leading-6 text-muted sm:text-[13px]">
                    {feature.text}
                  </p>
                </div>

                {/* HOVER ACCENT */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full" />

                <ArrowUpRight className="absolute bottom-3 right-3 h-3.5 w-3.5 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />

              </article>
              </TiltCard>
            );
          })}

        </Stagger>

      </div>
    </section>
  );
}
