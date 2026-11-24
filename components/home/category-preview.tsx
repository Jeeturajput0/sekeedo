import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ShoeSprite } from "@/components/products/shoe-sprite";

const categories = [
  { label: "Steel Toe Shoes", slug: "steel-toe", position: 0 },
  { label: "Safety Boots", slug: "safety-boots", position: 3 },
  { label: "Lightweight Safety Shoes", slug: "lightweight", position: 1 },
  { label: "High-Ankle Shoes", slug: "high-ankle", position: 6 },
  { label: "Waterproof Shoes", slug: "waterproof", position: 5 },
  { label: "Slip-Resistant Shoes", slug: "slip-resistant", position: 4 },
  { label: "Electrical Safety Shoes", slug: "specialized", position: 7 },
];

export function   CategoryPreview() {
  return (
    <section className="bg-white py-4 sm:py-5">
      <div className="container-page">
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl">Shop by <span className="text-brand">Category</span></h2>
          </div>
          <Link href="/products" className="hidden items-center gap-2 text-xs font-semibold text-brand transition-colors hover:text-charcoal sm:inline-flex">View All Categories <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="relative overflow-hidden" role="group" aria-label="Shop by category">
          <div className="category-marquee flex w-max motion-reduce:animate-none">
            {[0, 1].map((copy) =>
              categories.map((category) => (
                <Link
                  key={`${copy}-${category.slug}`}
                  href={`/products?category=${category.slug}`}
                  tabIndex={copy === 1 ? -1 : undefined}
                  aria-hidden={copy === 1 || undefined}
                  className="group w-28 shrink-0 pr-2 sm:w-40 lg:w-44"
                >
                  <span className="relative block aspect-[1.12] overflow-hidden rounded-lg bg-[#f5f5f5]">
                    <ShoeSprite position={category.position} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute inset-0 border border-transparent transition-colors group-hover:border-brand/60" />
                  </span>
                  <span className="mt-1.5 block text-center text-[11px] font-semibold leading-tight text-charcoal transition-colors group-hover:text-brand">{category.label}</span>
                </Link>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
