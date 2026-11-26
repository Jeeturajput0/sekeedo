import { BadgeCheck, ClipboardList, FileCheck2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/reveal";

const steps = [
  {
    title: "Assess the hazards",
    text: "Identify impact, compression, slip, puncture, water or other workplace risks.",
    icon: ClipboardList,
  },
  {
    title: "Define the requirements",
    text: "Translate hazards into clearer needs (e.g. toe protection, grip, resistance, comfort or other features).",
    icon: FileCheck2,
  },
  {
    title: "Verify the specifications",
    text: "Check product documentation, applicable standards and certifications.",
    icon: BadgeCheck,
  },
  {
    title: "Make an informed choice",
    text: "Select a model that aligns with your work conditions, usage needs and verified information.",
    icon: Sparkles,
  },
];

export function SelectionGuide() {
  return (
    <section className="bg-paper py-14 lg:py-8">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selection Guide"
          title="A practical way to specify footwear."
          lead="Four steps that keep the decision grounded in the work and in verified information."
        />

        <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} data-stagger className=" rounded-2xl relative h-full">
                <div className="flex h-full flex-col border rounded-2xl border-line bg-white p-5 shadow-[0_2px_12px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center bg-[#FFF0EA] text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold leading-snug text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted">{step.text}</p>
                </div>
                
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
