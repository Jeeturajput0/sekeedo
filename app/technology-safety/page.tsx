import type { Metadata } from "next";
import { TechnologyHero } from "@/components/technology/technology-hero";
import { TechnologyOverview } from "@/components/technology/technology-overview";
import { TechnologyIndex } from "@/components/technology/technology-index";
import { MaterialConstruction } from "@/components/technology/material-construction";
import { SelectionGuide } from "@/components/technology/selection-guide";
import { TechnologyCompliance } from "@/components/technology/technology-compliance";
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
      <SelectionGuide />
      <TechnologyCompliance />

   
    </>
  );
}
