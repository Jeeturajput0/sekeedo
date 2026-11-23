import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ShieldAlert, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { IndustryCard } from "@/components/industries/industry-card";
import { CtaSection } from "@/components/ui/cta-section";
import { FadeIn, ImageReveal, Stagger, TextReveal } from "@/components/motion/reveal";
import { getIndustryBySlug, industries } from "@/lib/data/industries";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return createMetadata({ title: "Industry not found", description: "", path: "/industries" });
  return createMetadata({
    title: `${industry.name} Safety Footwear`,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const related = industries.filter((item) => item.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Industry overview"
        title={industry.name}
        description={industry.description}
        image={industry.image}
        imageAlt={industry.imageAlt}
        breadcrumb={industry.name}
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <Breadcrumb
            items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <FadeIn>
                <span className="eyebrow">Workplace overview</span>
              </FadeIn>
              <div className="mt-5">
                <TextReveal
                  as="h2"
                  text="Understand the environment before specifying footwear."
                  className="section-title"
                />
              </div>
              <FadeIn delay={0.1}>
                <p className="section-lead">{industry.description}</p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-6 text-sm leading-8 text-muted">
                  The considerations listed here are general. They are intended to start a
                  conversation about requirements, not to declare any SEKEEDO product suitable for
                  this industry without verified evidence.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?enquiry=industry&industry=${encodeURIComponent(industry.name)}`}
                    className="btn-primary"
                  >
                    Discuss footwear options
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/products" className="btn-outline">
                    Explore full catalogue
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <ImageReveal className="h-[340px] w-full sm:h-[460px]">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </ImageReveal>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="h-full border border-line bg-white p-8 sm:p-10">
              <ShieldAlert className="h-5 w-5 text-brand" aria-hidden="true" />
              <h2 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-charcoal sm:text-2xl">
                Relevant workplace considerations
              </h2>
              <ul className="mt-7 space-y-4">
                {industry.hazards.map((hazard) => (
                  <li key={hazard} className="flex gap-3 text-sm leading-7 text-charcoal/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {hazard}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full border border-line bg-white p-8 sm:p-10">
              <Sparkles className="h-5 w-5 text-brand" aria-hidden="true" />
              <h2 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-charcoal sm:text-2xl">
                Footwear features to review
              </h2>
              <ul className="mt-7 space-y-4">
                {industry.considerations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-charcoal/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                Other industries we support
              </h2>
            </div>
            <Link href="/industries" className="btn-outline">
              All industries
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <IndustryCard key={item.slug} industry={item} index={index} />
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection
        title="Explore suitable footwear with our team."
        text={`Tell us about your ${industry.shortName.toLowerCase()} environment, roles and requirements. We will shortlist options and share verified specifications.`}
        primaryLabel="Request Guidance"
        image="/images/cta-workforce.webp"
        imageAlt="Worker preparing for a shift"
      />
    </>
  );
}
