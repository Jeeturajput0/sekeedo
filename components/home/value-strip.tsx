import { Handshake, Layers3, Feather, ShieldCheck } from "lucide-react";
import { Stagger } from "@/components/motion/reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Workplace Protection",
    text: "",
  },
  {
    icon: Layers3,
    title: "Industrial Durability",
    text: "",
  },
  {
    icon: Feather,
    title: "Comfort-Focused Design",
    text: "",
  },
  {
    icon: Handshake,
    title: "Wholesale Solutions",
    text: "",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                data-stagger
                className="group flex items-center justify-center gap-3 border-r border-line px-3 py-3 text-left last:border-0 lg:py-6"
              >
                <Icon
                  className="h-7 w-7 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h2 className="max-w-[130px] text-xs font-semibold leading-tight tracking-tight text-charcoal sm:text-sm">
                  {value.title}
                </h2>
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
