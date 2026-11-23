import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger } from "@/components/motion/reveal";

const categories = [
  { label: "Safety Shoes", slug: "all", image: "/images/product-steel-toe.webp" },
  { label: "Safety Boots", slug: "safety-boots", image: "/images/product-boot.webp" },
  { label: "Lightweight Safety Shoes", slug: "lightweight", image: "/images/product-lightweight.webp" },
  { label: "Steel Toe Shoes", slug: "steel-toe", image: "/images/product-steel-toe.webp" },
  { label: "High-Ankle Shoes", slug: "high-ankle", image: "/images/product-high-ankle.webp" },
  { label: "Waterproof Shoes", slug: "waterproof", image: "/images/product-waterproof.webp" },
  { label: "Slip-Resistant Shoes", slug: "slip-resistant", image: "/images/product-slip-resistant.webp" },
];

export function CategoryPreview() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-brand">Find your fit</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">Shop by category</h2>
          </div>
          <Link href="/products" className="hidden items-center gap-2 text-xs font-semibold text-charcoal transition-colors hover:text-brand sm:inline-flex">View all<ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((category) => (
            <Link key={`${category.slug}-${category.label}`} href={category.slug === "all" ? "/products" : `/products?category=${category.slug}`} data-stagger className="group">
              <span className="relative block aspect-[1.2] overflow-hidden bg-paper">
                <Image src={category.image} alt="" fill sizes="(max-width:640px) 46vw, (max-width:1024px) 30vw, 14vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 border border-transparent transition-colors group-hover:border-brand/60" />
              </span>
              <span className="mt-2 block text-xs font-medium text-charcoal transition-colors group-hover:text-brand">{category.label}</span>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
