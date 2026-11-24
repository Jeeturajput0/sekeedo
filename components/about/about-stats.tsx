import { CalendarDays, Factory, Layers3, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";

const stats = [
  { icon: Factory, value: "10+", label: "Industries Served" },
  { icon: Layers3, value: "50+", label: "Product Styles" },
  { icon: Users, value: "500+", label: "Business Clients" },
  { icon: CalendarDays, value: "5+", label: "Years of Experience" },
];

export function AboutStats() {
  return (
    <section className="border-y border-line bg-white py-12">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeIn
                key={stat.label}
                delay={index * 0.06}
                className={`flex flex-col items-center text-center lg:border-l lg:border-line first:lg:border-l-0`}
              >
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-charcoal">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-muted">
                  {stat.label}
                </p>
              </FadeIn>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[11px] text-muted/80">
          Figures shown are illustrative placeholders — replace with verified company data.
        </p>
      </div>
    </section>
  );
}
