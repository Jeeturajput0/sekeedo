import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createMetadata({ title, description, path, image }: PageMetadata): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? "/images/hero-worker.webp";

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
