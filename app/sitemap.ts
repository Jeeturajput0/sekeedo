import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import { blogArticles } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/technology-safety",
    "/industries",
    "/become-a-distributor",
    "/contact",
    "/faq",
    "/blog",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: "2026-01-01",
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: "2026-01-01",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...industries.map((industry) => ({
      url: `${base}/industries/${industry.slug}`,
      lastModified: "2026-01-01",
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...blogArticles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      lastModified: "2026-11-24",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
