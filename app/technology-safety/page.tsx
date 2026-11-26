import type { Metadata } from "next";
import { TechnologyHero } from "@/components/technology/technology-hero";
import { TechnologyOverview } from "@/components/technology/technology-overview";
import { TechnologyIndex } from "@/components/technology/technology-index";
import { MaterialConstruction } from "@/components/technology/material-construction";
import { SelectionGuide } from "@/components/technology/selection-guide";
import { TechnologyCompliance } from "@/components/technology/technology-compliance";
import { TechnologyDetails } from "@/components/technology/technology-details";
import { CtaSection } from "@/components/ui/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Technology & Safety",
  description:
    "Understand safety footwear technologies, material choices and selection guidance. SEKEEDO publishes verified specifications and compliance details only when confirmed.",
  path: "/technology-safety",
  image: "/images/ind-oil-gas.webp",
});

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <TechnologyOverview />
      <TechnologyIndex />
      <MaterialConstruction />
      <TechnologyDetails />
      <SelectionGuide />
      <TechnologyCompliance />

      {/* <CtaSection
        title="Need help specifying the right footwear?"
        text="Share your workplace requirements and our team will help you shortlist products, confirm the current documentation and request a quote."
        image="/images/cta-workforce.webp"
        imageAlt="SEKEEDO industrial safety footwear"
      /> */}
    </>
  );
}
