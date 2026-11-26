import { ChartNoAxesColumnIncreasing, Layers3, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    title: "Workplace Safety",
    text: "Safety insights & guides",
    Icon: ShieldCheck,
  },
  {
    title: "Material & Design",
    text: "Technology and performance",
    Icon: Layers3,
  },
  {
    title: "Industry Trends",
    text: "Updates and best practices",
    Icon: ChartNoAxesColumnIncreasing,
  },
  { title: "Expert Advice", text: "Workplace recommendations", Icon: Users },
];

export function AboutPillars() {
  return (
    <section className="bg-white py-5 sm:py-6 lg:py-2" aria-label="What we cover">
      <div className="container-page">
        <div className="grid gap-1 rounded-xl bg-[#f7f7f7] px-2 py-2 sm:grid-cols-2 lg:grid-cols-4 lg:px-3">
          {pillars.map(({ title, text, Icon }, index) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-3 py-2.5 lg:px-3.5 ${index ? "lg:border-l lg:border-[#d0d0d0]" : ""}`}
            >
              <Icon
                className="h-8 w-8 shrink-0 stroke-[1.7] text-brand"
                aria-hidden="true"
              />
              <span>
                <strong className="block text-xs font-bold text-charcoal sm:text-sm">
                  {title}
                </strong>
                <span className="mt-0.5 block text-[10px] text-charcoal/75 sm:text-xs">
                  {text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
