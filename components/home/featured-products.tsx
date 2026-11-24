import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-white py-12 sm:py-8">
      <div className="container-page">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl">
            Featured <span className="text-brand">Safety Shoes</span>
          </h2>
          <Link href="/products" className="btn-link">
            View All Products <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              compact
              showSizeSelector={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
