import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCatalog } from "@/components/products/product-catalog";
import { TextReveal } from "@/components/motion/reveal";
import { products } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Safety Footwear Catalogue",
  description: "Browse the SEKEEDO industrial safety footwear range and request a quote for your team or distribution business.",
  path: "/products",
  image: "/images/product-steel-toe.webp",
});

async function Catalogue({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  return <ProductCatalog key={category ?? "all"} initialCategory={category ?? "all"} />;
}

export default function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return <main id="main-content">
    <section className="border-b border-line bg-paper">
      <div className="container-page pb-9 pt-7 sm:pb-12 sm:pt-9">
        <Breadcrumb items={[{ label: "Products"}, { label: "Safety shoes" }]} />
        <div className="mt-8 flex flex-col justify-between gap-5 sm:mt-10 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-brand">SEKEEDO / Product catalogue</p>
            <TextReveal as="h1" text="SAFETY SHOES" immediate className="mt-4 text-[clamp(2.25rem,4.8vw,3.8rem)] font-semibold leading-[.98] tracking-[-.05em] text-charcoal" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">Safety footwear built for the demands of work. Explore the range and tell us what your team needs.</p>
          </div>
          <div className="flex items-center gap-3 border-t border-line pt-4 text-xs text-muted sm:border-l sm:border-t-0 sm:pb-1 sm:pl-5 sm:pt-0"><span className="text-2xl font-semibold tracking-tight text-charcoal">{products.length.toString().padStart(2, "0")}</span><span>styles<br />in the catalogue</span></div>
        </div>
      </div>
    </section>

    <section className="bg-white py-9 sm:py-12 lg:py-16">
      <div className="container-page">
        <div className="mb-8 flex gap-3 border-l-2 border-brand bg-paper px-4 py-3 text-xs leading-5 text-muted sm:mb-10 sm:max-w-4xl"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><p>Product imagery and names are illustrative. Sizes, performance features, certifications and pricing are not published until confirmed against approved product data. Ask our team for current specifications.</p></div>
        <Suspense fallback={<div className="py-20 text-sm text-muted">Loading catalogue…</div>}>
          <Catalogue searchParams={searchParams} />
        </Suspense>
      </div>
    </section>

    <section className="bg-charcoal text-white">
      <div className="container-page flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-brand">For teams and distributors</p><h2 className="mt-3 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-.04em]">Looking for safety footwear in bulk?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Explore our industrial footwear range or connect with our team for bulk procurement and business enquiries.</p></div>
        <div className="flex flex-wrap gap-3"><Link href="/contact?enquiry=bulk" className="btn-primary">Request Bulk Quote<ArrowUpRight className="h-4 w-4" /></Link><Link href="/become-a-distributor" className="inline-flex min-h-12 items-center gap-2 border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:border-white">Become a Distributor<ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  </main>;
}
