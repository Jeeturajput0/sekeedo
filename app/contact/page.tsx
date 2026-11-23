import { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { CtaSection } from "@/components/ui/cta-section";
import { FadeIn, Stagger } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact SEKEEDO for bulk orders, wholesale supply, distributor partnerships and general business enquiries.",
  path: "/contact",
  image: "/images/cta-workforce.webp",
});

const enquiryCards = [
  {
    title: "Bulk enquiries",
    text: "Share quantities, categories and delivery details for a workforce quotation.",
    href: "/contact?enquiry=bulk",
    label: "Start bulk enquiry",
  },
  {
    title: "Distributor enquiries",
    text: "Explore a partnership with SEKEEDO and request current information.",
    href: "/become-a-distributor",
    label: "Partnership details",
  },
  {
    title: "General enquiries",
    text: "Ask about products, documentation, availability or company information.",
    href: "/contact?enquiry=general",
    label: "Send a message",
  },
];

async function ContactFormSection({
  searchParams,
}: {
  searchParams: Promise<{ enquiry?: string; products?: string }>;
}) {
  const { enquiry, products } = await searchParams;

  return (
    <section className="bg-paper py-20 lg:py-28" id="contact-form">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <FadeIn>
            <span className="eyebrow">Business contact</span>
          </FadeIn>
          <div className="mt-5">
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-charcoal">
              Send us an enquiry.
            </h1>
          </div>
          <FadeIn delay={0.1}>
            <p className="section-lead">
              Fill in the form and our team will respond with the relevant next steps. For faster
              assistance, include quantities, product categories and your location.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-9 space-y-5 border-t border-line pt-7">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 text-sm text-charcoal/75 transition-colors hover:text-brand"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-charcoal/75">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.phone}
              </p>
              <p className="flex items-start gap-3 text-sm text-charcoal/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </p>
              <p className="flex items-start gap-3 text-sm text-charcoal/75">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.hours}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="border border-line bg-white p-6 sm:p-9">
            <ContactForm initialEnquiry={enquiry} initialProducts={products} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ enquiry?: string; products?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your requirement."
        description="Reach the SEKEEDO team for business enquiries, wholesale supply, certification documentation and distributor opportunities."
        image="/images/cta-workforce.webp"
        imageAlt="Worker tying safety footwear before a shift"
        breadcrumb="Contact"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <Stagger className="grid gap-px bg-line sm:grid-cols-3">
            {enquiryCards.map((card) => (
              <div key={card.title} data-stagger className="bg-white p-7 sm:p-8">
                <h2 className="text-base font-semibold text-charcoal">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                <a href={card.href} className="btn-link mt-5">
                  {card.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="container-page py-20 text-sm text-muted">Loading contact form…</div>
        }
      >
        <ContactFormSection searchParams={searchParams} />
      </Suspense>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-3 lg:gap-16">
          <SectionHeading
            eyebrow="Enquiry routes"
            title="Reach the right team."
            lead="Use the dedicated address relevant to your requirement."
          />
          <FadeIn delay={0.05}>
            <div className="border-t-2 border-brand pt-6">
              <h2 className="text-base font-semibold text-charcoal">Wholesale & bulk</h2>
              <a
                href={`mailto:${siteConfig.contact.wholesaleEmail}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-brand hover:text-forest"
              >
                {siteConfig.contact.wholesaleEmail}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-t-2 border-brand pt-6">
              <h2 className="text-base font-semibold text-charcoal">Distributor partnerships</h2>
              <a
                href={`mailto:${siteConfig.contact.distributorEmail}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-brand hover:text-forest"
              >
                {siteConfig.contact.distributorEmail}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaSection
        title="Ready to request a quotation?"
        text="Explore the catalogue, shortlist products and send your requirements to our team for a tailored response."
        primaryLabel="Explore Products"
        primaryHref="/products"
        secondaryLabel="View FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
