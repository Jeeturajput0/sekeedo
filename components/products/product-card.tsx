import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { getCategoryBySlug, type Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";
import { ShoeSprite } from "@/components/products/shoe-sprite";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  added?: boolean;
  onToggleEnquiry?: () => void;
};

export function ProductCard({ product, compact = false, added = false, onToggleEnquiry }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);

  return (
    <article data-stagger className="card-surface group flex h-full flex-col hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_36px_rgba(22,27,25,0.08)]">
      <Link href={`/products/${product.slug}`} className={cn("relative block overflow-hidden", compact ? "aspect-[1.48]" : "aspect-[5/4]", product.imagePosition !== undefined ? "bg-white" : product.tone === "dark" ? "bg-charcoal" : "bg-paper")} aria-label={`View ${product.name}`}>
        {product.imagePosition !== undefined ? <ShoeSprite position={product.imagePosition} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" /> : <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className={cn(compact ? "object-contain p-2 transition-transform duration-700 group-hover:scale-[1.04]" : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]", product.tone === "dark" ? "object-center" : "object-center")} />}
        <span className={cn("absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal backdrop-blur-sm", compact && "left-2 top-2 px-2 py-1 text-[8px]")}>{category?.name ?? "Safety Footwear"}</span>
      </Link>

      <div className={cn("flex flex-1 flex-col", compact ? "p-3" : "p-5 sm:p-6")}>
        {!compact && <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{product.tagline}</p>}
        <h3 className={cn("font-semibold tracking-[-0.02em] text-charcoal", compact ? "text-xs" : "mt-2 text-lg")}>
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand">{product.name}</Link>
        </h3>
        <p className={cn("text-muted", compact ? "mt-1 text-[10px] leading-snug" : "mt-2 text-sm leading-6")}>{product.summary}</p>

        {product.certification ? <p className="mt-3 text-xs font-medium text-charcoal">Certification: {product.certification}</p> : null}
        {!compact && product.verifiedFeatures && product.features.length > 0 ? (
          <ul className="mt-5 space-y-2">{product.features.slice(0, 3).map((feature) => <li key={feature} className="flex items-center gap-2 text-xs text-charcoal/70"><Check className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />{feature}</li>)}</ul>
        ) : null}

        <div className={cn("mt-auto", compact ? "pt-2" : "pt-6")}>
          <p className={cn("text-muted", compact ? "mb-1 text-[9px]" : "mb-4 text-[11px]")}>{compact ? `SKU: ${product.sku ?? "On request"}` : <>{product.sku ?? "SKU on request"} · {product.sizeRange}</>}</p>
          <div className={cn("flex items-center", compact ? "gap-1" : "gap-4")}>
            <Link href={`/products/${product.slug}`} className={cn("inline-flex items-center gap-1.5 font-semibold text-charcoal transition-colors hover:text-brand", compact ? "min-h-7 px-1 text-[9px]" : "text-xs")}>
              {compact ? "View Details" : "View product"}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            {!compact && <span className="h-4 w-px bg-line" aria-hidden="true" />}
            {onToggleEnquiry ? (
              <button type="button" onClick={onToggleEnquiry} aria-pressed={added} className="inline-flex min-h-10 items-center gap-1.5 bg-brand px-3 text-xs font-semibold text-white transition-colors hover:bg-[#FF6A3D]">
                {added ? <><Check className="h-3.5 w-3.5" aria-hidden="true" /> Added to enquiry</> : <><Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add to enquiry</>}
              </button>
            ) : (
              <Link href={`/contact?enquiry=quote&product=${encodeURIComponent(product.name)}`} className={cn("inline-flex items-center gap-1 bg-brand font-semibold text-white transition-colors hover:bg-[#FF6A3D]", compact ? "min-h-7 px-2 text-[9px]" : "min-h-10 gap-1.5 px-3 text-xs")}>
                Request Quote<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
