
import { Suspense } from "react";
import type { Metadata } from "next";
import { ShieldCheck, PackageCheck } from "lucide-react";

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

      {/* PAGE HEADER */}
      <section className="border-b border-gray-100 bg-[#FAFAFA]">
        <div className="container-page pb-10 pt-7 sm:pb-14 sm:pt-10">

          <Breadcrumb
            items={[
              { label: "Products" },
              { label: "Safety Shoes" },
            ]}
          />

          <div className="mt-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
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

            {/* PRODUCT COUNT */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <span className="text-4xl font-bold tracking-tight text-[#171717]">
                {products.length.toString().padStart(2, "0")}
              </span>

              <div className="text-xs leading-5 text-gray-500">
                Product styles
                <br />
                in our collection
              </div>
            </div>

          </div>

          {/* TRUST STRIP */}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gray-200 pt-5">

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <ShieldCheck size={17} className="text-[#F4512C]" />
              Safety-focused footwear
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <PackageCheck size={17} className="text-[#F4512C]" />
              Bulk procurement enquiries
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <ShieldCheck size={17} className="text-[#F4512C]" />
              Product-specific certification details
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="container-page">

          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4512C]">
                Find Your Footwear
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
                Explore Our Collection
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Find the right footwear for your workplace requirements.
              </p>
            </div>

            <span className="text-xs font-medium text-gray-400">
              SEKEEDO INDUSTRIAL FOOTWEAR
            </span>

          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse overflow-hidden border border-gray-100"
                  >
                    <div className="aspect-square bg-gray-100" />
                    <div className="space-y-3 p-4">
                      <div className="h-3 w-1/3 bg-gray-100" />
                      <div className="h-5 w-3/4 bg-gray-100" />
                      <div className="h-10 bg-gray-100" />
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
