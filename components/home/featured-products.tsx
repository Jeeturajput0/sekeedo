import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { Stagger } from "@/components/motion/reveal";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-white py-5 sm:py-6">
      <div className="container-page">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl">Featured <span className="text-brand">Safety Shoes</span></h2>
          <Link href="/products" className="btn-link">View All Products <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <Stagger className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
