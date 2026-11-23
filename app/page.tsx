import type { Metadata } from "next";
import { HeroSlider } from "@/components/home/hero-slider";
import { ValueStrip } from "@/components/home/value-strip";
import { CategoryPreview } from "@/components/home/category-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { WhySekeedo } from "@/components/home/why-sekeedo";
import { BulkCta } from "@/components/home/bulk-cta";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "SEKEEDO — Built for the Work That Matters",
  description:
    "Wholesale industrial safety footwear for contractors, factories, distributors and procurement teams. Explore products, industries and bulk enquiry options.",
  path: "/",
  image: "/images/clawz-shoes-sheet.png",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueStrip />
      <CategoryPreview />
      <FeaturedProducts />
      <IndustriesPreview />
      <WhySekeedo />
      <BulkCta />
    </>
  );
}
