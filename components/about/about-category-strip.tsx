"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Droplet, Feather, Footprints, ShieldCheck } from "lucide-react";
import { ShoeSprite } from "@/components/products/shoe-sprite";
import { FadeIn } from "@/components/motion/reveal";

const categories = [
  { label: "Steel Toe Shoes", position: 0, icon: ShieldCheck, href: "/products?category=steel-toe" },
  { label: "Oil Resistant Shoes", position: 3, icon: Droplet, href: "/products?category=specialized" },
  { label: "Slip Resistant Shoes", position: 4, icon: Footprints, href: "/products?category=slip-resistant" },
  { label: "Lightweight Shoes", position: 2, icon: Feather, href: "/products?category=lightweight" },
];

export function AboutCategoryStrip() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    track.current?.scrollBy({ left: direction * 260, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container-page">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Browse by Category
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-charcoal">
                Shop by <span className="text-brand">Footwear Category</span>
              </h2>
            </div>
            <Link href="/products" className="btn-link">
              View All Categories <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="relative mt-8 rounded-xl bg-paper p-4 sm:p-5">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous categories"
            className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-charcoal shadow-sm transition hover:border-brand hover:text-brand sm:grid"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next categories"
            className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-charcoal shadow-sm transition hover:border-brand hover:text-brand sm:grid"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div ref={track} className="flex gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.label}
                  href={category.href}
                  className="group relative aspect-[4/3] w-[240px] shrink-0 overflow-hidden bg-white sm:w-auto sm:flex-1"
                >
                  <ShoeSprite position={category.position} className="h-full w-full p-3 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    <span className="max-w-[110px] text-xs font-semibold leading-tight">{category.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
