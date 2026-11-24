import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { ShoeSprite } from "@/components/products/shoe-sprite";

export function RelatedProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-[0_3px_14px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)]">
      <Link href={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#f7f7f7]">
          {product.imagePosition !== undefined ? (
            <ShoeSprite position={product.imagePosition} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className="object-contain p-5 transition-transform duration-500 group-hover:scale-105" />
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">{product.sku ?? "Product details on request"}</p>
        <h3 className="mt-1 text-base font-bold tracking-tight text-charcoal"><Link href={`/products/${product.slug}`} className="hover:text-brand">{product.name}</Link></h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{product.description ?? product.summary}</p>
        <Link href={`/products/${product.slug}`} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-charcoal transition-colors hover:text-brand">
          View product details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
