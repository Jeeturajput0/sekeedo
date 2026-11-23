import { HardHat, PackageCheck, ShieldCheck, Workflow } from "lucide-react";
import { Stagger } from "@/components/motion/reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Workplace Protection",
    text: "Footwear selected around real workplace risks.",
  },
  {
    icon: HardHat,
    title: "Industrial Durability",
    text: "Built for demanding, everyday site conditions.",
  },
  {
    icon: Workflow,
    title: "Comfort-Focused Design",
    text: "Considered fit and support for long shifts.",
  },
  {
    icon: PackageCheck,
    title: "Wholesale Solutions",
    text: "Bulk enquiries and business procurement support.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page">
        <Stagger className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                data-stagger
                className="group bg-white px-6 py-8 transition-colors duration-300 hover:bg-offwhite lg:px-8 lg:py-10"
              >
                <Icon
                  className="h-5 w-5 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h2 className="mt-5 text-[15px] font-semibold tracking-tight text-charcoal">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
