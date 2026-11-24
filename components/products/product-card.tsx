"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Droplet,
  Feather,
  Footprints,
  Heart,
  Package,
  Shield,
  ShieldCheck,
  Star,
  Waves,
  Wind,
} from "lucide-react";
import { DEFAULT_PRODUCT_SIZES, type Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";
import { ShoeSprite } from "@/components/products/shoe-sprite";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  /** Position in the grid, used for a subtle entrance stagger. */
  index?: number;
  added?: boolean;
  onToggleEnquiry?: () => void;
  /** Show the size selector. Hidden on home page cards by default caller. */
  showSizeSelector?: boolean;
};

function FeatureIcon({ feature }: { feature: string }) {
  const value = feature.toLowerCase();
  if (value.includes("slip") || value.includes("grip")) return <Footprints className="h-3.5 w-3.5" aria-hidden="true" />;
  if (value.includes("oil")) return <Droplet className="h-3.5 w-3.5" aria-hidden="true" />;
  if (value.includes("water")) return <Waves className="h-3.5 w-3.5" aria-hidden="true" />;
  if (value.includes("lightweight")) return <Feather className="h-3.5 w-3.5" aria-hidden="true" />;
  if (value.includes("breathable") || value.includes("comfort")) return <Wind className="h-3.5 w-3.5" aria-hidden="true" />;
  if (value.includes("puncture")) return <Shield className="h-3.5 w-3.5" aria-hidden="true" />;
  return <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />;
}

export function ProductCard({
  product,
  compact = false,
  index = 0,
  added = false,
  onToggleEnquiry,
  showSizeSelector = true,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [localWishlisted, setLocalWishlisted] = useState(false);

  const sizes = product.sizes?.length ? product.sizes : DEFAULT_PRODUCT_SIZES;
  const hasPublishedAvailability = Array.isArray(product.availableSizes);
  const isAvailable = (size: string) =>
    !hasPublishedAvailability || Boolean(product.availableSizes?.includes(size));
  const availableCount = hasPublishedAvailability
    ? sizes.filter(isAvailable).length
    : sizes.length;

  const description = product.description ?? product.summary;
  const safetyFeatures = product.safetyFeatures ?? [];
  const badge =
    product.badge ??
    (product.newArrival
      ? "New Arrival"
      : product.category === "steel-toe"
        ? "Steel Toe"
        : product.category === "lightweight"
          ? "Lightweight"
          : undefined);
  const isBestseller = badge === "Bestseller";
  const isNew = badge === "New Arrival" || product.newArrival;

  const wishlisted = onToggleEnquiry ? added : localWishlisted;
  const toggleWishlist = () => {
    if (onToggleEnquiry) onToggleEnquiry();
    else setLocalWishlisted((current) => !current);
  };

  const quoteParams = new URLSearchParams({
    enquiry: "quote",
    product: product.name,
    products: product.name,
    sku: product.sku ?? "",
    productId: product.id ?? product.slug,
  });
  if (selectedSize) quoteParams.set("size", selectedSize);
  const quoteHref = `/contact?${quoteParams.toString()}`;
  const detailHref = `/products/${product.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index, 7) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-line bg-white",
        compact ? "p-3" : "p-3.5 sm:p-4",
        "shadow-[0_2px_14px_rgba(17,17,17,0.035)] transition-[border-color,box-shadow] duration-300",
        "hover:border-[#D6D6D6] hover:shadow-[0_18px_40px_rgba(17,17,17,0.10)]",
      )}
    >
      {/* Image ------------------------------------------------------------ */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-[#F7F7F7]",
          compact ? "aspect-[5/4]" : "aspect-square",
        )}
      >
        <Link
          href={detailHref}
          className="absolute inset-0 z-0 block"
          aria-label={`View ${product.name}`}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:group-hover:scale-100">
            {product.imagePosition !== undefined ? (
              <ShoeSprite position={product.imagePosition} className="h-full w-full p-3 sm:p-5" />
            ) : (
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 420px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw"
                className="object-contain p-5"
              />
            )}
          </div>
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 z-10 flex flex-wrap items-center gap-1.5">
          {isBestseller ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white">
              <Star className="h-3 w-3 fill-white" aria-hidden="true" />
              Bestseller
            </span>
          ) : null}
          {isNew ? (
            <span className="inline-flex items-center rounded-full bg-[#FFE8DE] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-charcoal">
              New
            </span>
          ) : null}
          {badge && !isBestseller && !isNew ? (
            <span className="inline-flex items-center rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-charcoal">
              {badge}
            </span>
          ) : null}
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          onClick={toggleWishlist}
          aria-pressed={wishlisted}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={cn(
            "absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border bg-white transition-colors duration-200",
            wishlisted
              ? "border-brand text-brand"
              : "border-line text-charcoal hover:border-brand hover:text-brand",
          )}
        >
          <Heart
            className={cn("h-4 w-4", wishlisted && "fill-brand text-brand")}
            aria-hidden="true"
          />
        </motion.button>
      </div>

      {/* Information ------------------------------------------------------ */}
      <div className={cn("flex flex-1 flex-col px-1 pb-1 pt-3.5", compact ? "px-0.5" : "px-1")}>
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[12px] text-[#737373]">
            SKU:{" "}
            <span className="font-semibold text-brand">
              {product.sku ?? "On request"}
            </span>
          </span>
          <span className="shrink-0 rounded-md bg-[#F5F5F5] px-2 py-1 text-[10px] font-medium text-[#737373]">
            UK Sizing
          </span>
        </div>

        <h3
          className={cn(
            "mt-2 line-clamp-2 font-bold tracking-[-0.03em] text-charcoal",
            compact ? "text-base leading-6" : "text-[18px] leading-6",
          )}
        >
          <Link href={detailHref} className="transition-colors hover:text-brand">
            {product.name}
          </Link>
        </h3>

        <p className="mt-1 line-clamp-2 text-[12.5px] leading-[1.55] text-[#737373]">
          {description}
        </p>

        {safetyFeatures.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {safetyFeatures.slice(0, compact ? 3 : 4).map((feature) => (
              <li
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-md bg-[#F5F5F5] px-2 py-1.5 text-[11px] font-medium text-charcoal"
              >
                <span className="text-brand">
                  <FeatureIcon feature={feature} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        {product.certification ? (
          <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-4 text-[#737373]">
            <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            {product.certification}
          </p>
        ) : null}

        <div className="mt-auto pt-4">
          {showSizeSelector ? (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-bold text-charcoal">Select Size</span>
                <span className="text-[11px] text-[#737373]" aria-live="polite">
                  {availableCount} of {sizes.length} sizes
                </span>
              </div>

              <div
                role="group"
                aria-label={`Select size for ${product.name}`}
                className="mt-2 grid grid-cols-7 gap-1.5"
              >
                {sizes.map((size) => {
                  const available = isAvailable(size);
                  const selected = selectedSize === size;
                  return (
                    <motion.button
                      key={size}
                      type="button"
                      whileTap={available ? { scale: 0.94 } : undefined}
                      disabled={!available}
                      aria-pressed={selected}
                      onClick={() =>
                        setSelectedSize((current) => (current === size ? null : size))
                      }
                      className={cn(
                        "grid h-9 min-w-0 place-items-center rounded-md border text-[12px] font-semibold transition-colors duration-200",
                        selected
                          ? "border-brand bg-brand text-white"
                          : available
                            ? "border-line bg-white text-charcoal hover:border-brand hover:text-brand"
                            : "cursor-not-allowed border-line bg-[#F7F7F7] text-[#B8B8B8]",
                      )}
                    >
                      {size}
                    </motion.button>
                  );
                })}
              </div>
            </>
          ) : null}

          <Link
            href={quoteHref}
            className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-brand px-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#FF6A3D]"
          >
            <Package className="h-4 w-4" aria-hidden="true" />
            Request Bulk Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href={detailHref}
            className="mt-2 flex h-10 w-full items-center justify-center gap-1.5 rounded-md border border-line bg-white text-[13px] font-semibold text-charcoal transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
