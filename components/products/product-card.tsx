import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { getCategoryBySlug, type Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  added?: boolean;
  onToggleEnquiry?: () => void;
};

export function ProductCard({ product, compact = false, added = false, onToggleEnquiry }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);

  return (
    <article
      data-stagger
      className="card-surface group flex h-full flex-col hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_rgba(22,27,25,0.09)]"
    >
      <Link
        href={`/products/${product.slug}`}
        className={cn(
          "relative block overflow-hidden",
          compact ? "aspect-[4/3]" : "aspect-[5/4]",
          product.tone === "dark" ? "bg-charcoal" : "bg-paper",
        )}
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
            product.tone === "dark" ? "object-center" : "object-center",
          )}
        />
        <span className="absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal backdrop-blur-sm">
          {category?.name ?? "Safety Footwear"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          {product.tagline}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-charcoal">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{product.summary}</p>

        {product.certification ? <p className="mt-3 text-xs font-medium text-charcoal">Certification: {product.certification}</p> : null}

        {!compact && product.verifiedFeatures && product.features.length > 0 ? (
          <ul className="mt-5 space-y-2">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs text-charcoal/70">
                <Check className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <p className="mb-4 text-[11px] text-muted">{product.sku ?? "SKU on request"} <span className="mx-1.5">·</span> {product.sizeRange}</p>
          <div className="flex items-center gap-4">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal transition-colors hover:text-brand"
            >
              View product
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            {onToggleEnquiry ? <button type="button" onClick={onToggleEnquiry} aria-pressed={added} className="inline-flex min-h-10 items-center gap-1.5 bg-brand px-3 text-xs font-semibold text-white transition-colors hover:bg-[#FF6A3D]">
              {added ? <><Check className="h-3.5 w-3.5" aria-hidden="true" /> Added to enquiry</> : <><Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add to enquiry</>}
            </button> : <Link href={`/contact?enquiry=quote&product=${encodeURIComponent(product.name)}`} className="inline-flex min-h-10 items-center gap-1.5 bg-brand px-3 text-xs font-semibold text-white transition-colors hover:bg-[#FF6A3D]">Request quote<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>}
          </div>
        </div>
      </div>
    </article>
  );
}
