"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Plus, ShieldCheck } from "lucide-react";
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
};

export function ProductCard({
  product,
  compact = false,
  index = 0,
  added = false,
  onToggleEnquiry,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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
  const emphasizedBadge = badge === "Bestseller" || badge === "New Arrival";

  const quoteParams = new URLSearchParams({
    enquiry: "quote",
    product: product.name,
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
        "product-card group relative flex h-full flex-col border border-line bg-white",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-[#C9C9C9] hover:shadow-[0_16px_32px_rgba(23,23,23,0.07)]",
      )}
    >
      {/* Product image --------------------------------------------------- */}
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-line",
          compact ? "aspect-[5/4]" : "aspect-[4/3]",
          product.imagePosition !== undefined ? "bg-white" : "bg-paper",
        )}
      >
        <Link
          href={detailHref}
          className="absolute inset-0 z-0 block"
          aria-label={`View ${product.name}`}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.055] motion-reduce:group-hover:scale-100">
            {product.imagePosition !== undefined ? (
              <ShoeSprite position={product.imagePosition} className="relative h-full w-full p-2" />
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

        {badge ? (
          <span
            className={cn(
              "pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em]",
              emphasizedBadge
                ? "bg-brand text-white"
                : "border border-line bg-white/95 text-charcoal",
              compact && "left-2 top-2 px-1.5 py-0.5 text-[8px]",
            )}
          >
            {badge}
          </span>
        ) : null}

        {onToggleEnquiry ? (
          <button
            type="button"
            onClick={onToggleEnquiry}
            aria-pressed={added}
            aria-label={
              added
                ? `Remove ${product.name} from enquiry`
                : `Add ${product.name} to enquiry`
            }
            className={cn(
              "absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center border bg-white/95 transition-colors",
              added
                ? "border-brand text-brand"
                : "border-line text-charcoal hover:border-charcoal",
              compact && "right-2 top-2 h-7 w-7",
            )}
          >
            {added ? (
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>

      {/* Product information -------------------------------------------- */}
      <div className={cn("flex flex-1 flex-col", compact ? "p-4" : "p-5")}>
        <div className="flex items-center justify-between gap-3">
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-[#737373]">
            SKU {product.sku ?? "On request"}
          </span>
          <span className="shrink-0 text-[10px] text-[#737373]">UK sizing</span>
        </div>

        <h3
          className={cn(
            "mt-2 line-clamp-2 font-semibold tracking-[-0.025em] text-charcoal",
            compact ? "text-[15px] leading-5" : "text-[17px] leading-6",
          )}
        >
          <Link href={detailHref} className="transition-colors hover:text-brand">
            {product.name}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-1.5 line-clamp-2 text-[#737373]",
            compact ? "text-xs leading-5" : "text-[13px] leading-[1.6]",
          )}
        >
          {description}
        </p>

        {safetyFeatures.length > 0 ? (
          <ul className={cn("flex flex-wrap gap-1.5", compact ? "mt-3" : "mt-4")}>
            {safetyFeatures.slice(0, compact ? 3 : 4).map((feature) => (
              <li
                key={feature}
                className="border border-line bg-paper px-2 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-charcoal/80"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className={cn("mt-auto", compact ? "pt-4" : "pt-5")}>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#737373]">
              Select size
            </span>
            <span className="text-[10px] text-[#737373]" aria-live="polite">
              {selectedSize
                ? `UK ${selectedSize} selected`
                : `${availableCount} of ${sizes.length} sizes`}
            </span>
          </div>

          <div
            role="group"
            aria-label={`Select size for ${product.name}`}
            className="mt-2 flex flex-wrap gap-1.5"
          >
            {sizes.map((size) => {
              const available = isAvailable(size);
              const selected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  disabled={!available}
                  aria-pressed={selected}
                  onClick={() =>
                    setSelectedSize((current) => (current === size ? null : size))
                  }
                  className={cn(
                    "grid h-8 min-w-[32px] place-items-center border px-1.5 text-[11px] font-semibold transition-colors duration-200",
                    selected
                      ? "border-brand bg-brand text-white"
                      : available
                        ? "border-line bg-white text-charcoal hover:border-charcoal"
                        : "cursor-not-allowed border-line bg-white text-[#B8B8B8] line-through",
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {product.certification ? (
            <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-4 text-[#737373]">
              <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              {product.certification}
            </p>
          ) : null}

          <Link
            href={quoteHref}
            className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 bg-brand px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-[background-color,transform] duration-200 hover:bg-[#E0431F] motion-reduce:hover:transform-none sm:text-xs"
          >
            Request Bulk Quote
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <Link
            href={detailHref}
            className="mt-2.5 flex min-h-8 w-full items-center justify-center gap-1.5 text-[11px] font-semibold text-charcoal transition-colors duration-200 hover:text-brand"
          >
            View Details
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
