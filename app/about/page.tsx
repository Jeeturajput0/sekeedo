import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Gem, HeartHandshake, Layers3 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CertificationPanel } from "@/components/ui/certification-panel";
import { CtaSection } from "@/components/ui/cta-section";
import { FadeIn, ImageReveal, Stagger, TextReveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About SEKEEDO",
  description:
    "Learn about SEKEEDO's approach to industrial safety footwear, quality, wholesale support and distributor partnerships.",
  path: "/about",
  image: "/images/about-factory.webp",
});

const principles = [
  {
    icon: Layers3,
    title: "Our approach to safety footwear",
    text: "We begin with the work itself. The hazards present, the surfaces people move across and the length of a shift all shape the footwear a team should consider.",
  },
  {
    icon: Gem,
    title: "Quality and product commitment",
    text: "We focus on clear product information and verified documentation. Where details are not yet confirmed, we say so—and make them available on request.",
  },
  {
    icon: HeartHandshake,
    title: "Wholesale and business partnerships",
    text: "Our process is designed around business buyers: catalogue guidance, bulk enquiries and a direct line for distributors and industrial suppliers.",
  },
  {
    icon: Compass,
    title: "Industry-oriented thinking",
    text: "Different sectors demand different considerations. We organise our range and guidance around the realities of the environments our customers work in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SEKEEDO"
        title="Safety footwear, approached with clarity."
        description="SEKEEDO is a wholesale safety footwear brand serving industrial businesses, contractors, factories and distributors. Explore our approach to products, verification and B2B support."
        image="/images/about-factory.webp"
        imageAlt="Engineers working on a modern manufacturing floor"
        breadcrumb="About"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/products">Explore products</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Talk to our team
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <FadeIn>
              <span className="eyebrow">Brand introduction</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="Built around the needs of working teams."
                className="section-title"
              />
            </div>
          </div>
          <div>
            <FadeIn delay={0.1}>
              <p className="text-lg leading-8 text-charcoal/75">
                SEKEEDO exists to make industrial footwear procurement more straightforward. We
                bring together a focused catalogue, practical product guidance and a wholesale
                process designed for organisations that buy for teams rather than individuals.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-sm leading-8 text-muted">
                Our work centres on protection, comfort and durability. We recognise that every
                worksite is different, so we avoid broad suitability claims and instead encourage
                buyers to assess hazards, review verified specifications and involve wearers in the
                selection process.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-sm leading-8 text-muted">
                Company history, manufacturing details and business milestones will be added here
                once verified. Until then, this page presents our approach rather than unverified
                achievements.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="border border-line bg-white p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our vision
              </span>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                Safer working days through better footwear decisions.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                We envision procurement teams able to choose industrial footwear with confidence,
                supported by clear information and honest verification.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-line bg-white p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our mission
              </span>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                Connect businesses with footwear that fits the work.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                We support that mission through product-focused guidance, wholesale enquiries and
                distributor partnerships built on transparent communication.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title="What guides the SEKEEDO range."
            lead="Four principles shape how we present products and support business customers."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} data-stagger className="border border-line p-7 sm:p-9">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-charcoal">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{principle.text}</p>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <ImageReveal className="h-[360px] w-full sm:h-[480px]">
              <Image
                src="/images/about-team.webp"
                alt="Industrial technical team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </ImageReveal>
          </FadeIn>
          <div>
            <FadeIn>
              <span className="eyebrow">Industries we serve</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="Built for many kinds of work."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                From construction and manufacturing to healthcare, hospitality and renewables, we
                support organisations with footwear considerations suited to their environments.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link href="/industries" className="btn-outline mt-8">
                Explore industries
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page space-y-10">
          <SectionHeading
            eyebrow="Certification & compliance"
            title="Verified information, not assumptions."
            lead="BIS certification and product compliance details are shown only when confirmed."
          />
          <CertificationPanel />
        </div>
      </section>

      <CtaSection
        title="Let's work together."
        text="Whether you are sourcing footwear for a workforce or exploring a distribution partnership, connect with the SEKEEDO team."
        primaryLabel="Request a Quote"
        secondaryLabel="Become a Distributor"
        secondaryHref="/become-a-distributor"
        image="/images/cta-workforce.webp"
        imageAlt="Worker preparing safety footwear for a shift"
      />
    </>
  );
}
