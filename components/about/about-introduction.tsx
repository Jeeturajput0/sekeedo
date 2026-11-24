import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
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
    <section className="bg-white py-16 lg:py-9">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              About SEKEEDO
            </span>
          </FadeIn>
          <div className="mt-6">
            <TextReveal
              as="h2"
              text="Built for People Who Build the World"
              highlight={["Build", "the", "World"]}
              className="max-w-[13ch] text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>
        </div>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-lg leading-8 text-charcoal/75">
              SEKEEDO is an industrial safety footwear brand committed to protecting
              professionals across demanding work environments. Our focus is simple —
              reliable protection, all-day comfort and consistent quality for businesses
              and workforces.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-0 sm:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn
                  key={value.title}
                  delay={0.12 + index * 0.06}
                  className={index > 0 ? "border-t border-line pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" : "border-t border-line pt-6 sm:border-t-0 sm:pt-0"}
                >
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted">{value.text}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
