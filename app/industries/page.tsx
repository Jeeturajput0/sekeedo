import type { Metadata } from "next";
import { IndustriesHub } from "@/components/industries/industries-hub";
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
  return <IndustriesHub industries={industries} />;
}
