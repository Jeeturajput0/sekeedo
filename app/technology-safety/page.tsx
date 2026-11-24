import type { Metadata } from "next";
import {
  Activity,
  Check,
  Crosshair,
  Droplets,
  Feather,
  Footprints,
  Layers,
  Scan,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CertificationPanel } from "@/components/ui/certification-panel";
import { FadeIn, ImageReveal, Stagger, TextReveal } from "@/components/motion/reveal";
import { technologies, type TechnologyIcon } from "@/lib/data/technologies";
import { createMetadata } from "@/lib/seo";
import { ShoeSprite } from "@/components/products/shoe-sprite";

export const metadata: Metadata = createMetadata({
  title: "Technology & Safety",
  description:
    "Understand safety footwear technologies, material choices and selection guidance. SEKEEDO publishes verified specifications and compliance details only when confirmed.",
  path: "/technology-safety",
  image: "/images/ind-chemical.webp",
});

const iconMap: Record<TechnologyIcon, typeof Shield> = {
  shield: Shield,
  footprints: Footprints,
  crosshair: Crosshair,
  droplet: Droplets,
  feather: Feather,
  waves: Droplets,
  activity: Activity,
  zap: Zap,
  layers: Layers,
  scan: Scan,
  sparkles: Sparkles,
  check: Check,
};

const selectionSteps = [
  { title: "Assess the hazards", text: "Identify impact, compression, slip, puncture, weather and electrical risks at the workplace." },
  { title: "Define the requirements", text: "Translate hazards into documented requirements and site policy before shortlisting products." },
  { title: "Verify the specifications", text: "Check verified technical data sheets and certification documents for each shortlisted model." },
  { title: "Trial with wearers", text: "Involve the people who will wear the footwear to confirm fit, comfort and practical performance." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Safety"
        title="Understand what protects you."
        description="Safety footwear is a system of design choices. Explore the technologies behind industrial footwear and learn why product-specific verification matters for every selection."
        image="/images/ind-chemical.webp"
        imageAlt="Industrial piping and process equipment"
        breadcrumb="Technology & Safety"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <FadeIn>
              <span className="eyebrow">Safety footwear overview</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="The right footwear starts with the right questions."
                className="section-title"
              />
            </div>
          </div>
          <div>
            <FadeIn delay={0.1}>
              <p className="text-lg leading-8 text-charcoal/75">
                Industrial footwear brings together toe protection, outsole design, upper materials
                and comfort features. No single characteristic makes a shoe suitable for every
                workplace.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-sm leading-8 text-muted">
                Footwear selection depends on the hazards present in your workplace and on
                product-specific verified specifications. Terms such as electrical hazard, dielectric,
                ESD and antistatic describe different properties and must not be treated as
                interchangeable.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 border-l-2 border-brand pl-5 text-sm leading-7 text-charcoal/70">
                This page provides general education. Always confirm performance claims against
                verified documentation for the exact product you intend to purchase.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technology index"
            title="The elements behind industrial footwear."
            lead="Explore the construction and protection considerations that inform a responsible specification."
          />
          <Stagger className="mt-12 grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.slug} data-stagger className="bg-paper p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center border border-line bg-white text-brand">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-charcoal/65">{item.detail}</p>
                  {item.note ? (
                    <p className="mt-4 border-l-2 border-brand bg-white px-4 py-3 text-xs leading-6 text-charcoal/70">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <ImageReveal className="h-[360px] w-full sm:h-[500px]">
              <ShoeSprite position={5} className="absolute inset-0" />
            </ImageReveal>
          </FadeIn>
          <div>
            <FadeIn>
              <span className="eyebrow">Material & construction</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="Construction choices shape performance."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                Uppers, linings, midsoles and outsoles each influence durability, weight, flexibility
                and cleanability. Understanding these elements helps procurement teams ask better
                questions.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="mt-8 space-y-4">
                {[
                  "Leather and synthetic uppers offer different durability and care profiles.",
                  "Mesh and textile linings can support breathability in active roles.",
                  "Midsole construction affects cushioning, weight and underfoot stability.",
                  "Outsole compound and tread pattern influence grip and wear characteristics.",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-charcoal/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selection guide"
            title="A practical way to specify footwear."
            lead="Four steps that keep the decision grounded in the work and in verified information."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {selectionSteps.map((step, index) => (
              <div key={step.title} data-stagger className="border-t-2 border-brand bg-white p-6">
                <p className="text-2xl font-semibold text-brand">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-base font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page space-y-10">
          <SectionHeading
            eyebrow="BIS standards & compliance"
            title="Verified standards. Clear records."
            lead="Applicable standards and certification details will be published here when verified."
          />
          <CertificationPanel />
        </div>
      </section>

    </>
  );
}
