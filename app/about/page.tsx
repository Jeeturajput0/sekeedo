import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntroduction } from "@/components/about/about-introduction";
import { AboutFeatureCards } from "@/components/about/about-feature-cards";
import { AboutFeaturedProducts } from "@/components/about/about-featured-products";
import { AboutCategoryStrip } from "@/components/about/about-category-strip";
import { WhyChooseSekeedo } from "@/components/about/why-choose-sekeedo";
import { ResearchApproach } from "@/components/about/research-approach";
import { CertificationsSection } from "@/components/about/certifications-section";
import { AboutStats } from "@/components/about/about-stats";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { AboutCta } from "@/components/about/about-cta";
import { FaqPreview } from "@/components/home/faq-preview";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About SEKEEDO",
  description:
    "Learn about SEKEEDO's approach to industrial safety footwear, quality, wholesale support and distributor partnerships.",
  path: "/about",
  image: "/images/about-team.webp",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntroduction />
      <AboutFeatureCards />
      <AboutFeaturedProducts />
      <AboutCategoryStrip />
      <WhyChooseSekeedo />
      <ResearchApproach />
      <CertificationsSection />
      <AboutStats />
      <AboutTestimonials />
      <AboutCta />
      <FaqPreview />
    </>
  );
}
