import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqCategoryCard } from "@/components/faq/faq-category-card";
import { FaqHero } from "@/components/faq/faq-hero";
import { SlideIn } from "@/components/motion/reveal";
import { faqCategories } from "@/lib/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about SEKEEDO products, safety certifications, wholesale orders, distributors, delivery and general enquiries.",
  path: "/faq",
  image: "/images/footer-quotation-banner.png",
});

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <section className="bg-white py-5 sm:py-6" aria-label="Frequently asked questions">
        <div className="container-page space-y-3 sm:space-y-4">
          {faqCategories.map((category, index) => (
            <SlideIn
              key={category.slug}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={Math.min(index, 3) * 0.04}
              distance={48}
            >
              <FaqCategoryCard category={category} index={index} />
            </SlideIn>
          ))}
          <SlideIn direction="right" distance={48}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <div>
              <h2 className="text-sm font-bold text-charcoal">Still have a question?</h2>
              <p className="mt-0.5 text-xs text-muted">Our team can help with product selection, documentation and bulk enquiries.</p>
            </div>
            <Link href="/contact" className="btn-primary min-h-9 px-4 text-xs">
              Contact Our Team <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
