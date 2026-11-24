import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms of use for the SEKEEDO website.",
  path: "/terms-conditions",
});

const sections = [
  {
    title: "Website information",
    text: "General information on this website is provided for guidance. Product names, imagery and feature lists shown as placeholders must not be treated as verified specifications, certifications or safety ratings.",
  },
  {
    title: "Product suitability",
    text: "Footwear selection depends on assessed workplace hazards and product-specific verified specifications. Nothing on this website constitutes a guarantee of suitability for a particular application.",
  },
  {
    title: "Enquiries and quotations",
    text: "Submitting an enquiry does not create a contract. Quotations, availability and commercial terms are shared directly by SEKEEDO and remain subject to confirmation.",
  },
  {
    title: "Intellectual property",
    text: "Brand names, logos and content on this website belong to SEKEEDO or their respective owners and may not be reused without permission.",
  },
  {
    title: "Updates",
    text: "This document is a template placeholder and should be reviewed with legal counsel and updated before publication.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="This page is a template placeholder. Replace it with reviewed terms before publishing the website."
        breadcrumb="Terms & Conditions"
      />
      <section className="bg-white py-16 lg:py-16">
        <div className="container-page max-w-4xl space-y-8">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.03}>
              <div className="border-b border-line pb-7">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-charcoal">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-muted">{section.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
