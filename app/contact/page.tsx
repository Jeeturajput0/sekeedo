import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Box,
  Clock3,
  FileText,
  Handshake,
  Headphones,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn, Stagger } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact SEKEEDO for bulk orders, wholesale supply, distributor partnerships and general business enquiries.",
  path: "/contact",
  image: "/images/hero-worker.webp",
});

const enquiryCards = [
  {
    title: "Bulk Enquiries",
    text: "Need safety footwear for your team, site or multiple locations?",
    href: "/contact?enquiry=bulk",
    label: "Enquire for Bulk Supply",
    Icon: Box,
  },
  {
    title: "Distributor Enquiries",
    text: "Interested in partnering with SEKEEDO as a distributor or reseller?",
    href: "/become-a-distributor",
    label: "Partner with Us",
    Icon: Users,
  },
  {
    title: "General Enquiries",
    text: "For product details, documentation, certification or any other information.",
    href: "#contact-form",
    label: "Send a Message",
    Icon: Headphones,
  },
];

async function ContactFormFields({
  searchParams,
}: {
  searchParams: Promise<{
    enquiry?: string;
    products?: string;
    productId?: string;
    sku?: string;
  }>;
}) {
  const { enquiry, products, productId, sku } = await searchParams;
  return (
    <ContactForm
      initialEnquiry={enquiry}
      initialProducts={products}
      initialProductId={productId}
      initialSku={sku}
    />
  );
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    enquiry?: string;
    products?: string;
    productId?: string;
    sku?: string;
  }>;
}) {
  return (
    <>
      <section className="bg-white">
        <div className="container-page grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:py-12">
          <div className="order-2 lg:order-1">
        
            <FadeIn>
              <span className="eyebrow text-charcoal">Contact Us</span>
              <h1 className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal">
                Let&apos;s discuss
                <br />
                your <span className="text-brand">requirement.</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Reach the SEKEEDO team for product enquiries, wholesale supply,
                distribution opportunities and other business requirements.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#contact-form" className="btn-primary">
                  <MessageCircle className="h-4 w-4" />
                  Start an Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products" className="btn-outline">
                  <FileText className="h-4 w-4" />
                  Explore Catalogue
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="order-1 lg:order-2" y={18}>
            <div className="relative mx-2 mb-2 mt-1 sm:mx-4 lg:mx-0">
              <div
                className="absolute -bottom-2 -right-2 h-full w-full rounded-[1.25rem] bg-brand"
                aria-hidden="true"
              />
              <div className="relative h-[250px] overflow-hidden rounded-[1.25rem] sm:h-[350px] lg:h-[330px] xl:h-[390px]">
                <Image
                  src="/images/hero-worker.webp"
                  alt="Worker preparing industrial safety footwear before a shift"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-[center_57%]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-8 sm:pb-12">
        <div className="container-page">
          <Stagger className="grid rounded-2xl bg-[#f8f8f9] px-2 py-3 sm:grid-cols-3 sm:px-3 sm:py-5">
            {enquiryCards.map(({ title, text, href, label, Icon }, index) => (
              <article
                key={title}
                data-stagger
                className={`flex gap-4 px-4 py-4 sm:px-5 lg:px-7 ${index ? "sm:border-l sm:border-[#d9dadd]" : ""}`}
              >
                <Icon
                  className="mt-1 h-8 w-8 shrink-0 stroke-[1.55] text-brand"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-sm font-bold tracking-tight text-charcoal sm:text-base">
                    {title}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-charcoal/85 sm:text-[13px]">
                    {text}
                  </p>
                  <Link href={href} className="btn-link mt-3">
                    {label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14 lg:py-12" id="contact-form">
        <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
          <div className="lg:pt-2">
            <FadeIn>
              <span className="eyebrow text-charcoal">Speak with our team</span>
              <h2 className="section-heading mt-5 font-semibold leading-[1.02] tracking-[-0.055em]">
                Send us an
                <br />
                <span className="text-brand">enquiry.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-charcoal/85 sm:text-base sm:leading-7">
                Have a query, need more information, require a quotation,
                product catalogue or support for your location?
              </p>
              <div className="mt-7 space-y-4">
                <p className="flex items-center gap-4 text-sm font-medium text-charcoal">
                  <Phone className="h-5 w-5 text-brand" />
                  {siteConfig.contact.phone}
                </p>
                <p className="flex items-center gap-4 text-sm font-medium text-charcoal">
                  <Mail className="h-5 w-5 text-brand" />
                  {siteConfig.contact.email}
                </p>
                <p className="flex items-start gap-4 text-sm font-medium text-charcoal">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {siteConfig.contact.address}, {siteConfig.contact.city}
                </p>
                <p className="flex items-start gap-4 text-sm font-medium leading-6 text-charcoal">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {siteConfig.contact.hours}
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.08}>
            <div className="rounded-[1.15rem] border border-[#e8e8e8] bg-white p-5 shadow-[0_5px_24px_rgba(0,0,0,0.055)] sm:p-7 lg:p-8">
              <Suspense
                fallback={
                  <div className="py-10 text-sm text-muted">
                    Loading enquiry form…
                  </div>
                }
              >
                <ContactFormFields searchParams={searchParams} />
              </Suspense>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-page grid gap-5 sm:grid-cols-[0.8fr_1fr_1fr] sm:items-center sm:gap-7">
          <div>
            <span className="eyebrow text-charcoal">Quick support</span>
            <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/85">
              Get the right information faster for your requirement.
            </p>
          </div>
          <Link
            href="/contact?enquiry=bulk"
            className="group flex items-center gap-4 border-t border-[#dedede] py-4 sm:border-l sm:border-t-0 sm:pl-7"
          >
            <FileText className="h-8 w-8 shrink-0 stroke-[1.6] text-brand" />
            <span className="flex-1">
              <strong className="block text-sm font-bold text-charcoal">
                Wholesale &amp; Bulk
              </strong>
              <span className="mt-1 block text-xs text-charcoal/80">
                Pricing, supply and lead time details.
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/become-a-distributor"
            className="group flex items-center gap-4 border-t border-[#dedede] py-4 sm:border-l sm:border-t-0 sm:pl-7"
          >
            <Handshake className="h-8 w-8 shrink-0 stroke-[1.6] text-brand" />
            <span className="flex-1">
              <strong className="block text-sm font-bold text-charcoal">
                Distributor Partnerships
              </strong>
              <span className="mt-1 block text-xs text-charcoal/80">
                Join our distribution network.
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
