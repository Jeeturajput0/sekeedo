
import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";

import {
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCatalog } from "@/components/products/product-catalog";
import { TextReveal } from "@/components/motion/reveal";

import { products } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Safety Footwear Catalogue | SEKEEDO",
  description:
    "Explore SEKEEDO industrial safety shoes. Discover safety footwear for businesses, industries and bulk procurement.",
  path: "/products",
  image: "/images/clawz-shoes-sheet.png",
});

async function Catalogue({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <ProductCatalog
      key={category ?? "all"}
      initialCategory={category ?? "all"}
    />
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <main id="main-content" className="bg-white">

      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <section className="border-b border-gray-100 bg-[#FAFAFA]">
        <div className="container-page pb-10 pt-7 sm:pb-14 sm:pt-10">

          {/* BREADCRUMB */}
          

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4512C]">
                <span className="h-[2px] w-7 bg-[#F4512C]" />
                SEKEEDO / Product Collection
              </p>

              <TextReveal
                as="h1"
                text="SAFETY FOOTWEAR"
                immediate
                className="mt-4 text-[clamp(2.3rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.05em] text-[#171717]"
              />

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Built for the work that matters. Explore our industrial
                safety footwear collection designed for demanding
                workplaces and professional workforces.
              </p>

            </div>

            {/* RIGHT PRODUCT COUNT */}
            <div className="flex shrink-0 items-center gap-4 border-t border-gray-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">

              {/* PRODUCT IMAGE */}
              <div className="relative h-[76px] w-[100px] shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white">
                <Image
                  src="/image/footerup/fshoes1.png"
                  alt="SEKEEDO industrial safety footwear"
                  fill
                  sizes="100px"
                  className="object-contain p-2"
                />
              </div>

              {/* PRODUCT COUNT */}
              <div>
                <span className="block text-4xl font-extrabold leading-none tracking-tight text-[#171717] tabular-nums sm:text-5xl">
                  {products.length.toString().padStart(2, "0")}
                  <span className="text-[#F4512C]">+</span>
                </span>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Product Styles
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  Explore our collection
                </p>
              </div>

            </div>
          </div>

          {/* =====================================
              TRUST STRIP
          ====================================== */}

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gray-200 pt-5">

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <ShieldCheck
                size={17}
                className="shrink-0 text-[#F4512C]"
              />
              Safety-focused footwear
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <PackageCheck
                size={17}
                className="shrink-0 text-[#F4512C]"
              />
              Bulk procurement enquiries
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <ShieldCheck
                size={17}
                className="shrink-0 text-[#F4512C]"
              />
              Product-specific certification details
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          PRODUCT CATALOGUE
      ====================================== */}

      <section className="bg-white py-10 sm:py-14">
        <div className="container-page">

          {/* CATALOGUE HEADING */}
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4512C]">
                Find Your Footwear
              </p>

              <h2 className="section-heading font-bold tracking-tight text-[#171717]">
                Explore Our Collection
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Find the right footwear for your workplace requirements.
              </p>
            </div>

            <span className="text-xs font-medium text-gray-400">
              SEKEEDO INDUSTRIAL FOOTWEAR
            </span>

          </div>

          {/* PRODUCT GRID */}
          <Suspense
            fallback={
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse overflow-hidden rounded-xl border border-gray-100"
                  >
                    <div className="aspect-square bg-gray-100" />

                    <div className="space-y-3 p-4">
                      <div className="h-3 w-1/3 rounded bg-gray-100" />
                      <div className="h-5 w-3/4 rounded bg-gray-100" />
                      <div className="h-10 rounded bg-gray-100" />
                    </div>
                  </div>
                ))}

              </div>
            }
          >
            <Catalogue searchParams={searchParams} />
          </Suspense>

        </div>
      </section>
    </main>
  );
}
