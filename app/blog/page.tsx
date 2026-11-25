import type { Metadata } from "next";
import { BlogHub } from "@/components/blog/blog-hub";
import { blogArticles, blogCategories } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Safety Footwear Blog & Guides",
  description:
    "Practical guides and workplace insights for industrial safety footwear selection, product information and procurement teams.",
  path: "/blog",
  image: "/images/industry-construction.jpg",
});

export default function BlogPage() {
  const [featured, ...articles] = blogArticles;
  return (
    <BlogHub
      featured={featured}
      articles={articles}
      categories={blogCategories}
    />
  );
}
