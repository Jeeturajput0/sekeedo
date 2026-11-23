import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { IndustryCard } from "@/components/industries/industry-card";
import { Stagger } from "@/components/motion/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { industries } from "@/lib/data/industries";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "Explore the industrial sectors SEKEEDO supports, with general workplace considerations and footwear features to review for each environment.",
  path: "/industries",
  image: "/images/ind-construction.webp",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Footwear considerations for every worksite."
        description="Explore the sectors we support. Each industry overview highlights common workplace considerations and the footwear features worth reviewing—always against verified product specifications."
        image="/images/ind-construction.webp"
        imageAlt="Worker on a construction site"
        breadcrumb="Industries"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="border-l-2 border-brand bg-paper px-5 py-4 text-xs leading-6 text-muted">
            Guidance note: the considerations below are general and are not product suitability
            claims. Confirm each recommendation against the verified specification for the exact
            footwear model.
          </div>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                index={index}
                featured={Boolean(industry.featured)}
              />
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection
        title="Talk through your industry requirements."
        text="Share details of your workplace, roles and volumes. We can help you shortlist footwear options and request the relevant verification documents."
        primaryLabel="Discuss Your Requirements"
        image="/images/ind-manufacturing.webp"
        imageAlt="Industrial manufacturing environment"
      />
    </>
  );
}
