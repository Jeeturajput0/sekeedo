import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Box, Check, ChevronRight, ClipboardList, Download,
  FileText, Layers3, Leaf, PackageCheck, Shield, ShieldCheck, Wrench,
} from "lucide-react";
import { FadeIn, Stagger } from "@/components/motion/reveal";
import { ProductDetailGallery } from "@/components/products/product-detail-gallery";
import { CollapsibleSection } from "@/components/products/collapsible-section";
import { RelatedProductCard } from "@/components/products/related-product-card";
import { ShoeSprite } from "@/components/products/shoe-sprite";
import { getCategoryBySlug, getProductBySlug, products } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return createMetadata({ title: "Product not found", description: "", path: "/products" });
  return createMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.summary,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

const detailTabs = [
  { label: "Overview", href: "#overview", Icon: ClipboardList },
  { label: "Key Features", href: "#key-features", Icon: ShieldCheck },
  { label: "Technical Specifications", href: "#specifications", Icon: Layers3 },
  { label: "Applications", href: "#applications", Icon: Wrench },
  { label: "Downloads", href: "#downloads", Icon: Download },
];

const detailRows = [
  { label: "Product ID", key: "id" },
  { label: "SKU", key: "sku" },
  { label: "Catalogue category", key: "category" },
  { label: "Safety classification", key: "classification" },
  { label: "Upper material", key: "upper" },
  { label: "Outsole material", key: "outsole" },
  { label: "Available sizes", key: "sizes" },
  { label: "Weight", key: "weight" },
  { label: "Applicable standard", key: "standard" },
  { label: "Certification status", key: "certification" },
] as const;

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryName = getCategoryBySlug(product.category)?.name ?? product.category.replaceAll("-", " ");
  const productId = product.id ?? product.slug;
  const productContext = new URLSearchParams({
    enquiry: "quote",
    product: product.name,
    products: product.name,
    productId,
    ...(product.sku ? { sku: product.sku } : {}),
  }).toString();
  const quoteHref = `/contact?${productContext}`;
  const related = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, 4);
  const knownSpecs: Record<(typeof detailRows)[number]["key"], string> = {
    id: product.id ?? "Details available on request",
    sku: product.sku ?? "Details available on request",
    category: categoryName,
    classification: product.verifiedFeatures ? product.safetyFeatures?.join(", ") || "Details available on request" : "Details available on request",
    upper: "Details available on request",
    outsole: "Details available on request",
    sizes: product.sizeRange || "Details available on request",
    weight: "Details available on request",
    standard: "Details available on request",
    certification: product.verifiedFeatures ? product.certification ?? "Details available on request" : "Details available on request",
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#151515] text-white">
        <Image src="/images/hero-worker.webp" alt="Industrial worker preparing safety footwear" fill priority sizes="100vw" className="z-0 object-cover object-center opacity-35" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(15,15,15,0.98)_0%,rgba(15,15,15,0.9)_46%,rgba(15,15,15,0.46)_100%)]" aria-hidden="true" />
        <div className="container-page relative grid min-h-[300px] items-center gap-7 py-8 sm:min-h-[350px] sm:py-2 lg:min-h-[390px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-white/75">
              <Link href="/" className="hover:text-brand">Home</Link><ChevronRight className="h-3 w-3" />
              <Link href="/products" className="hover:text-brand">Products</Link><ChevronRight className="h-3 w-3" />
              <span aria-current="page" className="text-white">{product.name}</span>
            </nav>
            <FadeIn>
              <span className="eyebrow text-[#ff6a00]">Safety Footwear</span>
              <h1 className="mt-4 max-w-2xl text-[clamp(2.35rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">{product.name}</h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">{product.description ?? product.summary}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/90">
                <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-[#ff6a00]" />{categoryName}</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#ff6a00]" />Specifications available on request</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="relative z-0 mx-auto h-[220px] w-full max-w-[500px] sm:h-[270px] lg:h-[310px]" y={18}>
            <div className="absolute right-[13%] top-[-24%] h-[140%] w-[17%] skew-x-[-25deg] bg-[#ff6a00]" aria-hidden="true" />
            <div className="absolute inset-0 overflow-hidden rounded-md bg-white shadow-2xl">
              {product.imagePosition !== undefined ? (
                <ShoeSprite position={product.imagePosition} className="absolute inset-0" />
              ) : (
                <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-contain p-5" />
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <FadeIn><ProductDetailGallery product={product} /></FadeIn>
          <div>
            <FadeIn>
              <span className="eyebrow text-charcoal">{product.sku ?? product.name}</span>
              <h2 className="section-heading mt-3 font-semibold leading-tight tracking-[-0.04em] text-charcoal">Product Overview</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal/80">{product.description ?? product.summary}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{product.specificationStatus}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {[
                  ["Category", categoryName],
                  ["Compliance", "Details available on request"],
                  ["Safety classification", product.verifiedFeatures ? product.safetyFeatures?.join(", ") || "Details available on request" : "Details available on request"],
                  ["Product information", product.specificationStatus],
                  ["Industries", product.industries?.length ? product.industries.join(", ") : "Application review available on request"],
                ].map(([label, value], index) => {
                  const Icon = [Box, FileText, ShieldCheck, Layers3, Wrench][index];
                  return <div key={label} className="grid grid-cols-[24px_118px_1fr] items-start gap-3 py-2.5 text-xs sm:grid-cols-[28px_125px_1fr]"><Icon className="h-4 w-4 text-brand" aria-hidden="true" /><dt className="font-semibold text-charcoal">{label}</dt><dd className="text-charcoal/85">{value}</dd></div>;
                })}
              </dl>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={quoteHref} className="btn-primary">Request a Quote<ArrowRight className="h-4 w-4" /></Link>
                <Link href="#downloads" className="btn-outline"><FileText className="h-4 w-4" />Request Product Sheet</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <nav aria-label="Product details" className="sticky top-[54px] z-30 border-y border-line bg-white/95 backdrop-blur">
        <div className="container-page overflow-x-auto">
          <div className="flex min-w-max gap-1 py-2">
            {detailTabs.map(({ label, href, Icon }, index) => <a key={href} href={href} className={`inline-flex min-h-10 items-center gap-2 rounded px-3 text-xs font-medium transition-colors sm:px-5 ${index === 0 ? "bg-brand text-white" : "text-charcoal hover:bg-paper hover:text-brand"}`}><Icon className="h-4 w-4" />{label}</a>)}
          </div>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-20 bg-white py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <FadeIn>
              <span className="eyebrow">About this product</span>
              <h2 className="section-heading mt-4 max-w-sm font-semibold leading-tight tracking-[-0.04em] text-charcoal">Product details for informed procurement</h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-sm leading-7 text-charcoal/85">{product.description ?? product.summary}</p>
              <p className="mt-3 text-sm leading-7 text-muted">Confirm the current product specification, sizing, standards and workplace suitability with SEKEEDO before procurement. Information not verified in this catalogue is available on request.</p>
            </FadeIn>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Protection details", Icon: ShieldCheck },
              { label: "Materials", Icon: Leaf },
              { label: "Construction", Icon: Layers3 },
              { label: "Sizing", Icon: PackageCheck },
              { label: "Compliance", Icon: BadgeCheck },
            ].map(({ label, Icon }, index) => <div key={label} className={`flex items-start gap-3 border-t border-line py-4 ${index ? "lg:border-l lg:pl-4" : ""}`}><Icon className="h-6 w-6 shrink-0 text-brand" /><div><h3 className="text-xs font-bold text-charcoal">{label}</h3><p className="mt-1 text-[11px] leading-4 text-muted">Details available on request</p></div></div>)}
          </div>
        </div>
      </section>

      <CollapsibleSection
        id="key-features"
        eyebrow="Key features"
        title="Product features & construction"
        defaultOpen
        className="bg-[#f8f8f8]"
      >
        {product.verifiedFeatures && product.features.length ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => <article key={feature} className="flex gap-3 border border-line bg-white p-5"><Check className="h-5 w-5 shrink-0 text-brand" /><p className="text-sm font-medium text-charcoal">{feature}</p></article>)}
          </div>
        ) : (
          <div className="flex max-w-3xl gap-4 border border-line bg-white p-5 sm:p-6"><FileText className="h-5 w-5 shrink-0 text-brand" /><div><h3 className="text-sm font-semibold text-charcoal">Detailed feature information</h3><p className="mt-1 text-sm leading-6 text-muted">Toe protection, upper material, sole construction, grip, fit and breathability details are available on request while verified product data is being confirmed.</p></div></div>
        )}
      </CollapsibleSection>

      <CollapsibleSection
        id="specifications"
        eyebrow="Technical data"
        title="Technical Specifications"
        className="bg-white"
      >
        <p className="mb-5 max-w-2xl text-sm leading-6 text-muted">Request the latest product sheet for verified technical and compliance information.</p>
        <dl className="grid border-t border-line sm:grid-cols-2">{detailRows.map(({ label, key }) => <div key={key} className="grid grid-cols-[minmax(120px,0.8fr)_1.2fr] gap-3 border-b border-line py-3.5 sm:px-3"><dt className="text-xs font-semibold text-charcoal">{label}</dt><dd className="text-xs leading-5 text-muted">{knownSpecs[key]}</dd></div>)}</dl>
      </CollapsibleSection>

      <CollapsibleSection
        id="applications"
        eyebrow="Applications"
        title="Workplace suitability"
        className="bg-[#f8f8f8]"
      >
        {product.industries?.length ? <div className="flex flex-wrap gap-2">{product.industries.map((industry) => <span key={industry} className="border border-line bg-white px-4 py-2 text-sm text-charcoal">{industry}</span>)}</div> : <div className="border border-line bg-white p-5 sm:p-6"><p className="text-sm leading-6 text-charcoal/85">Industry-specific suitability is not listed for this product yet. Share your worksite, tasks and hazards with our team so they can confirm whether this product matches your requirements.</p><Link href={quoteHref} className="btn-link mt-4">Discuss workplace requirements<ArrowRight className="h-4 w-4" /></Link></div>}
      </CollapsibleSection>

      <CollapsibleSection
        id="downloads"
        eyebrow="Downloads & documentation"
        title="Product resources"
        className="bg-white"
      >
        <div className="flex flex-col gap-4 border border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex gap-3"><FileText className="h-6 w-6 shrink-0 text-brand" /><div><h3 className="text-sm font-semibold text-charcoal">Technical sheet and documentation</h3><p className="mt-1 max-w-xl text-xs leading-5 text-muted">No downloadable product documents are currently published for this listing. Request the current product sheet or applicable documentation from our team.</p></div></div><Link href={quoteHref} className="btn-primary shrink-0">Request documents<ArrowRight className="h-4 w-4" /></Link></div>
      </CollapsibleSection>

      <section className="border-t border-line bg-white py-12 sm:py-16">
        <div className="container-page">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><span className="eyebrow">Related products</span><h2 className="section-heading mt-3 font-semibold tracking-[-0.04em] text-charcoal">More Safety Footwear Options</h2></div><Link href="/products" className="btn-link">View All Products<ArrowUpRight className="h-4 w-4" /></Link></div>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <div key={item.slug} data-stagger><RelatedProductCard product={item} /></div>)}</Stagger>
        </div>
      </section>

    </>
  );
}
