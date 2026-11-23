import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, Handshake, PackageSearch, Route } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { DistributorForm } from "@/components/forms/distributor-form";
import { FadeIn, ImageReveal, Stagger, TextReveal } from "@/components/motion/reveal";
import { faqCategories } from "@/lib/data/faqs";
import { productCategories } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Become a Distributor",
  description:
    "Explore SEKEEDO distributor and wholesale partnership opportunities. Submit a partnership enquiry for current terms and support details.",
  path: "/become-a-distributor",
  image: "/images/ind-warehouse-aisle.webp",
});

const partnerTypes = [
  "Footwear dealers and retailers",
  "Industrial supply businesses",
  "Safety equipment distributors",
  "Procurement and sourcing companies",
  "Regional distribution partners",
];

const discussionAreas = [
  {
    title: "Product portfolio",
    text: "Discuss which footwear categories are most relevant to your market and customers.",
    icon: PackageSearch,
  },
  {
    title: "Wholesale opportunities",
    text: "Review current wholesale enquiry processes, availability and volume considerations.",
    icon: Building2,
  },
  {
    title: "Business support",
    text: "Ask about catalogue assistance, documentation and enquiry handling for your territory.",
    icon: Handshake,
  },
];

const process = [
  { title: "Submit an enquiry", text: "Share your business details, location and product interests." },
  { title: "Review and discussion", text: "Our team reviews your enquiry and discusses the current partnership approach." },
  { title: "Verification and documentation", text: "Request product specifications and compliance documents as needed." },
  { title: "Next steps", text: "Agree next steps based on the requirements of both businesses." },
];

export default function DistributorPage() {
  const distributorFaqs =
    faqCategories.find((category) => category.slug === "distributors")?.faqs ?? [];

  return (
    <>
      <PageHero
        eyebrow="Become a Distributor"
        title="Grow Your Business with SEKEEDO."
        description="We invite footwear dealers, industrial suppliers and safety equipment distributors to explore a partnership. Submit an enquiry to learn about the current wholesale and distribution approach."
        image="/images/ind-warehouse-aisle.webp"
        imageAlt="Large distribution warehouse"
        breadcrumb="Become a Distributor"
        tone="dark"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <FadeIn>
              <span className="eyebrow">Who can partner</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="Built for businesses that know their market."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                If your business serves industrial, construction or workforce clients, a SEKEEDO
                partnership may be relevant. Tell us about your reach and we will review your
                enquiry.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {partnerTypes.map((type) => (
                  <li key={type} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {type}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <ImageReveal className="h-[360px] w-full sm:h-[480px]">
              <Image
                src="/images/wholesale-lockers.webp"
                alt="Organised protective footwear storage facility"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </ImageReveal>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Benefits of partnership"
            title="Areas we can discuss."
            lead="The points below are discussion topics, not commitments. Current terms, support and availability will be shared directly during the enquiry process."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {discussionAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} data-stagger className="border border-line bg-white p-7 sm:p-8">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-charcoal">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{area.text}</p>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <FadeIn>
              <span className="eyebrow">Product portfolio</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="A catalogue built around industrial demand."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                Explore the categories most frequently reviewed by industrial buyers. Product
                details are placeholders until verified specifications are supplied.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link href="/products" className="btn-outline mt-8">
                View product portfolio
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className="bg-white p-5 transition-colors hover:bg-paper"
                >
                  <p className="text-sm font-semibold text-charcoal">{category.name}</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{category.description}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partnership process"
            title="A clear path from enquiry to next steps."
            lead="We keep the process straightforward and transparent."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} data-stagger className="border-t-2 border-brand bg-white p-6">
                <Route className="h-4 w-4 text-brand" aria-hidden="true" />
                <p className="mt-4 text-2xl font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Distributor FAQ"
            title="Common partnership questions."
            lead="Answers below reflect the current enquiry process. Commercial terms are shared directly."
          />
          <Accordion items={distributorFaqs} idPrefix="distributor-faq" showAllLink={false} />
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28" id="distributor-enquiry">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <FadeIn>
              <span className="eyebrow">Distributor enquiry</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="Tell us about your business."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                Complete the form with your business details and product interests. This demo
                captures the enquiry locally; connect the backend integration to deliver it to our
                team.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <a
                href={`mailto:partners@sekeedo.example?subject=Distributor%20Enquiry`}
                className="btn-link mt-8"
              >
                partners@sekeedo.example
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="border border-line bg-white p-6 sm:p-9">
              <DistributorForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaSection
        title="Questions before you apply?"
        text="Our team can answer questions about the enquiry process, catalogue and documentation requirements."
        primaryLabel="Contact Our Team"
        secondaryLabel="View All FAQs"
        secondaryHref="/faq"
      />
    </>
  );
}
