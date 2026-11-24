import { Feather, Layers, ShieldCheck, Users } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/motion/reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Protection",
    text: "Built to reduce workplace risks and keep your team safe.",
  },
  {
    icon: Feather,
    title: "All-Day Comfort",
    text: "Ergonomic design that supports long working hours with ease.",
  },
  {
    icon: Layers,
    title: "Durable & Long-Lasting",
    text: "Made with quality materials for extended performance and value.",
  },
  {
    icon: Users,
    title: "Business & Bulk Support",
    text: "Flexible solutions for teams, projects and distribution partners.",
  },
];

export function WhyChooseSekeedo() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Why Choose SEKEEDO
            </span>
          </FadeIn>
          <div className="mt-6">
            <TextReveal
              as="h2"
              text="The Right Safety Footwear for Your Workplace"
              highlight={["Your", "Workplace"]}
              className="max-w-[16ch] text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-base leading-8 text-muted">
              Designed to meet the practical needs of modern industries.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn
                key={feature.title}
                delay={index * 0.06}
                className="flex gap-5 border-t border-line py-7"
              >
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h3 className="text-[15px] font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
