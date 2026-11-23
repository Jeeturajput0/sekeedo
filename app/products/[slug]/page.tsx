import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Ruler } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/products/product-card";
import { CtaSection } from "@/components/ui/cta-section";
import { FadeIn, ImageReveal, Stagger } from "@/components/motion/reveal";
import { getProductBySlug, products } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, 3);

  const specs = [
    { label: "Category", value: product.category.replace(/-/g, " ") },
    { label: "Specification status", value: product.specificationStatus },
    { label: "Safety classification", value: "Available on verified data sheet" },
    { label: "Certification details", value: "Available on request after verification" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Product detail"
        title={product.name}
        description={product.summary}
        image={product.image}
        imageAlt={product.imageAlt}
        breadcrumb={product.name}
        tone="dark"
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: product.name }]} />

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <ImageReveal
                className={`h-[380px] w-full sm:h-[520px] ${product.tone === "dark" ? "bg-charcoal" : "bg-paper"}`}
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </ImageReveal>
            </FadeIn>

            <div>
              <FadeIn>
                <span className="eyebrow">{product.tagline}</span>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                  Product overview
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-4 text-sm leading-8 text-muted">
                  {product.summary} The details below are placeholders for catalogue presentation.
                  Request the verified technical data sheet before making a purchasing decision.
                </p>
              </FadeIn>

              {product.verifiedFeatures && product.features.length > 0 ? <FadeIn delay={0.15}>
                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn> : null}

              <FadeIn delay={0.2}>
                <dl className="mt-9 border-t border-line">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <dt className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-medium text-charcoal">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="mt-6 flex items-start gap-3 border border-line bg-paper p-4">
                  <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Size availability</p>
                    <p className="mt-1 text-xs text-muted">{product.sizeRange}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?enquiry=quote&product=${encodeURIComponent(product.name)}`}
                    className="btn-primary"
                  >
                    Request Quote
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?enquiry=availability&product=${encodeURIComponent(product.name)}`}
                    className="btn-outline"
                  >
                    Enquire about availability
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Continue exploring</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                Related footwear
              </h2>
            </div>
            <Link href="/products" className="btn-outline">
              View all products
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} compact />
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection
        title="Need a quotation for this product?"
        text="Share your quantities, sizes and delivery location. Our team will respond with the next steps and verified product information."
        primaryLabel="Request a Quote"
        image="/images/wholesale-lockers.webp"
        imageAlt="Organised protective footwear storage"
      />
    </>
  );
}
