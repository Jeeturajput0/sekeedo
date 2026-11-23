import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/reveal";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured products"
          title="Footwear built for real working conditions."
          lead="Explore a selection of our industrial safety footwear concepts. Verified specifications and certifications are available on request."
          action={
            <Link href="/products" className="btn-outline">
              View all products
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </Stagger>
        <p className="mt-8 text-xs text-muted">
          Product imagery and details shown are illustrative placeholders for catalogue presentation.
        </p>
      </div>
    </section>
  );
}
