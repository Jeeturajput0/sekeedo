import type { Metadata } from "next";
import { HeroSlider } from "@/components/home/hero-slider";
import { ValueStrip } from "@/components/home/value-strip";
import { CategoryPreview } from "@/components/home/category-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhySekeedo } from "@/components/home/why-sekeedo";
import { createMetadata } from "@/lib/seo";
import IndustriesPreview from "@/components/home/industries-preview";
import { AboutStats } from "@/components/about/about-stats";
import { AboutIntroduction } from "@/components/about/about-introduction";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { BlogPreview } from "@/components/home/blog-preview";
import { FaqPreview } from "@/components/home/faq-preview";
import { FooterQuotationBanner } from "@/components/layout/footer-quotation-banner";
import { AboutPillars } from "@/components/about/about-pillars";

export const metadata: Metadata = createMetadata({
  title: "SEKEEDO — Built for the Work That Matters",
  description:
    "Wholesale industrial safety footwear for contractors, factories, distributors and procurement teams. Explore products, industries and bulk enquiry options.",
  path: "/",
  image: "/images/clawz-shoes-sheet.png",
});

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSlider />
      <AboutStats/>
      <AboutIntroduction />
      <CategoryPreview />
        <AboutPillars/>
      <FeaturedProducts />
      <IndustriesPreview/>
      <WhySekeedo />
      <BlogPreview />
      <AboutTestimonials />
      <FaqPreview />
    </div>
  );
}
