import { Cog, Factory, Footprints, MessageCircle, Package, ShieldCheck, type LucideIcon } from "lucide-react";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import type { FaqCategory, FaqCategoryIcon } from "@/lib/data/faqs";

const categoryIcons: Record<FaqCategoryIcon, LucideIcon> = {
  product: Footprints,
  shield: ShieldCheck,
  workplace: Factory,
  maintenance: Cog,
  ordering: Package,
  general: MessageCircle,
};

type FaqCategoryCardProps = {
  category: FaqCategory;
  index: number;
};

export function FaqCategoryCard({ category, index }: FaqCategoryCardProps) {
  const Icon = categoryIcons[category.icon];

  return (
    <section
      id={category.slug}
      className="scroll-mt-24 rounded-xl border border-[#e9ecea] bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.04)] sm:p-4"
    >
      <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:gap-6">
        <div className="relative flex flex-wrap items-center gap-3 pb-2 sm:gap-4 lg:min-h-[130px] lg:items-start lg:border-r lg:border-[#d9ddda] lg:pb-0 lg:pr-6">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#06291d] text-[11px] font-bold text-white lg:absolute lg:left-0 lg:top-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#fff0e8] text-brand lg:ml-12">
            <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
          </span>

          <div className="w-full lg:w-auto">
            <h2 className="text-lg font-bold tracking-[-0.035em] text-charcoal sm:text-xl">
              {category.title}
            </h2>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted sm:text-[10px]">
              {category.description}
            </p>
          </div>
        </div>

        <FaqAccordion
          items={category.faqs}
          idPrefix={`faq-${category.slug}`}
        />
      </div>
    </section>
  );
}
