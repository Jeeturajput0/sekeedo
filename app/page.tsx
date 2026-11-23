import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ValueStrip } from "@/components/home/value-strip";
import { CategoryPreview } from "@/components/home/category-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { TechnologyPreview } from "@/components/home/technology-preview";
import { WhySekeedo } from "@/components/home/why-sekeedo";
import { Compliance } from "@/components/home/compliance";
import { Wholesale } from "@/components/home/wholesale";
import { DistributorPreview } from "@/components/home/distributor-preview";
import { CtaSection } from "@/components/ui/cta-section";
import { FaqPreview } from "@/components/home/faq-preview";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "SEKEEDO — Built for the Work That Matters",
  description:
    "Wholesale industrial safety footwear for contractors, factories, distributors and procurement teams. Explore products, industries and bulk enquiry options.",
  path: "/",
  image: "/images/hero-worker.webp",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <CategoryPreview />
      <FeaturedProducts />
      <IndustriesPreview />
      <TechnologyPreview />
      <WhySekeedo />
      <Compliance />
      <Wholesale />
      <DistributorPreview />
      <CtaSection
        title="Let's Equip Your Workforce."
        text="Looking for reliable safety footwear in bulk? Connect with SEKEEDO for business enquiries, wholesale supply and distributor opportunities."
        image="/images/cta-workforce.webp"
        imageAlt="Worker lacing up safety footwear before a shift"
      />
      <FaqPreview />
    </>
  );
}
