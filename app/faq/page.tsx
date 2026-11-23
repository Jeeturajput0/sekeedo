import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { faqCategories } from "@/lib/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about SEKEEDO products, safety certifications, wholesale orders, distributors, delivery and general enquiries.",
  path: "/faq",
  image: "/images/clawz-shoes-sheet.png",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions answered, clearly."
        description="Browse answers by topic. Certification information is published only after verification, and product suitability always depends on assessed workplace hazards and verified specifications."
        image="/images/clawz-shoes-sheet.png"
        imageAlt="Industrial safety shoe"
        imagePosition={0}
        breadcrumb="FAQ"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <nav aria-label="FAQ categories" className="mb-14 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="border border-line px-4 py-2 text-xs font-medium text-charcoal/70 transition-colors hover:border-brand hover:text-brand"
              >
                {category.title}
              </a>
            ))}
          </nav>

          <div className="space-y-20">
            {faqCategories.map((category, index) => (
              <section key={category.slug} id={category.slug} className="scroll-mt-28">
                <FadeIn>
                  <div className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.18em] text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-7 text-muted">{category.description}</p>
                  </div>
                </FadeIn>
                <div className="mt-2 lg:pl-[calc(0.55*(100%-4rem)+4rem)]">
                  <Accordion
                    items={category.faqs}
                    idPrefix={`faq-${category.slug}`}
                    defaultOpen={0}
                    showAllLink={false}
                  />
                </div>
              </section>
            ))}
          </div>

          <FadeIn>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border border-line bg-paper p-7 sm:p-9">
              <div>
                <h2 className="text-lg font-semibold text-charcoal">Still have a question?</h2>
                <p className="mt-2 text-sm text-muted">
                  Our team can help with product selection, documentation and bulk enquiries.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Contact Our Team
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaSection
        title="Need a product recommendation?"
        text="Share your workplace hazards and requirements. We'll help you identify the right questions to ask before specifying footwear."
        primaryLabel="Request Guidance"
        image="/images/about-factory.webp"
        imageAlt="Industrial production environment"
      />
    </>
  );
}
