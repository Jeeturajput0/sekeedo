import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplet, Heart, ShieldCheck, Wind } from "lucide-react";
import { featuredProducts } from "@/lib/data/products";
import { ShoeSprite } from "@/components/products/shoe-sprite";
import { FadeIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

function FeatureIcon({ feature }: { feature: string }) {
  const value = feature.toLowerCase();
  if (value.includes("slip") || value.includes("grip")) return <ShieldCheck className="h-3 w-3" aria-hidden="true" />;
  if (value.includes("oil") || value.includes("water")) return <Droplet className="h-3 w-3" aria-hidden="true" />;
  return <Wind className="h-3 w-3" aria-hidden="true" />;
}

export function AboutFeaturedProducts() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-page">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Featured Products
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-charcoal">
                Our Safety Footwear <span className="text-brand">Range</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Explore our bestselling safety footwear for industrial use.
              </p>
            </div>
            <Link href="/products" className="btn-link">
              View All Products <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featuredProducts.map((product, index) => {
            const badge = product.badge;
            const features = (product.safetyFeatures ?? []).slice(0, 2);
            return (
              <FadeIn key={product.slug} delay={index * 0.06}>
                <article className="group h-full border border-line bg-white p-3 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_14px_30px_rgba(23,23,23,0.07)]">
                  <Link href={`/products/${product.slug}`} className="relative block aspect-[5/4] overflow-hidden bg-paper" aria-label={product.name}>
                    {product.imagePosition !== undefined ? (
                      <ShoeSprite position={product.imagePosition} className="h-full w-full p-2 transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
                    )}
                    {badge ? (
                      <span className={cn(
                        "absolute left-2 top-2 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em]",
                        badge === "Bestseller" ? "bg-brand text-white" : "bg-[#FFE8DE] text-charcoal",
                      )}>
                        {badge}
                      </span>
                    ) : null}
                    <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center border border-line bg-white text-charcoal/70">
                      <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>

                  <div className="pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">{product.sku}</p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-charcoal">
                      <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand">
                        {product.name}
                      </Link>
                    </h3>
                    {features.length > 0 ? (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {features.map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-1 border border-line px-1.5 py-1 text-[10px] text-charcoal/70">
                            <span className="text-brand"><FeatureIcon feature={feature} /></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
