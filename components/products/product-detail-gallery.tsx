"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { ShoeSprite } from "@/components/products/shoe-sprite";

function ProductImage({ product, enlarged = false }: { product: Product; enlarged?: boolean }) {
  if (product.imagePosition !== undefined) {
    return <ShoeSprite position={product.imagePosition} className="absolute inset-0" />;
  }
  return (
    <Image
      src={product.image}
      alt={product.imageAlt}
      fill
      priority={!enlarged}
      sizes={enlarged ? "90vw" : "(max-width: 1024px) 85vw, 50vw"}
      className="object-contain p-8 sm:p-12"
    />
  );
}

export function ProductDetailGallery({ product }: { product: Product }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 sm:grid-cols-[74px_minmax(0,1fr)] sm:gap-4">
        <div className="flex flex-col gap-2" aria-label="Product images">
          <div className="relative aspect-square overflow-hidden rounded-md border-2 border-brand bg-white" aria-label="Primary product view">
            <ProductImage product={product} />
          </div>
          <p className="text-center text-[10px] leading-4 text-muted">Product view</p>
        </div>
        <div className="relative aspect-[1.06/1] min-h-[280px] overflow-hidden rounded-lg border border-line bg-white sm:min-h-[420px]">
          <ProductImage product={product} />
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label={`Zoom image of ${product.name}`}
            className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-line bg-white/95 text-charcoal shadow-sm transition-colors hover:text-brand"
          >
            <ZoomIn className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {zoomed ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} product image`}
          onClick={(event) => { if (event.target === event.currentTarget) setZoomed(false); }}
          onKeyDown={(event) => { if (event.key === "Escape") setZoomed(false); }}
        >
          <div className="relative h-[min(82vh,760px)] w-[min(92vw,960px)] overflow-hidden rounded-lg bg-white">
            <ProductImage product={product} enlarged />
            <button type="button" autoFocus onClick={() => setZoomed(false)} aria-label="Close enlarged product image" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal shadow-md hover:text-brand">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
