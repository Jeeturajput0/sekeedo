import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Settings2,
  ShieldAlert,
} from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
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
  if (!industry)
    return createMetadata({
      title: "Industry not found",
      description: "",
      path: "/industries",
    });
  return createMetadata({
    title: `${industry.name} Safety Footwear`,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    image:
      industry.slug === "oil-gas"
        ? "/images/oil-gas-hero-generated.png"
        : industry.image,
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
  const heroImage =
    industry.slug === "oil-gas"
      ? "/images/oil-gas-hero-generated.png"
      : industry.image;
  const related = [
    "construction-infrastructure",
    "manufacturing",
    "logistics-warehousing",
  ]
    .filter((key) => key !== industry.slug)
    .map((key) => industries.find((item) => item.slug === key))
    .filter((item) => item !== undefined);
  const titleParts = industry.name.split(" & ");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#06291d] text-white">
        <Image
          src={heroImage}
          alt={industry.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#06291d_0%,rgba(6,41,29,0.98)_30%,rgba(6,41,29,0.60)_52%,rgba(6,41,29,0.03)_78%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 left-0 -z-[5] hidden w-[52%] bg-[#06291d]/75 [clip-path:polygon(0_0,74%_0,100%_100%,0_100%)] lg:block"
          aria-hidden="true"
        />
        <div className="container-page relative flex min-h-[300px] items-center py-9 sm:min-h-[340px] lg:min-h-[265px] lg:py-8">
          <div className="max-w-xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex items-center gap-2 text-[11px] text-white/80"
            >
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span aria-hidden="true">›</span>
              <Link href="/industries" className="hover:text-brand">
                Industries
              </Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page" className="text-white">
                {industry.shortName}
              </span>
            </nav>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ff6a00]">
              <span className="h-[3px] w-8 bg-[#ff6a00]" />
              Industry Overview
            </p>
            <h1 className="mt-3 text-[clamp(2.6rem,5vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]} &{" "}
                  <span className="text-[#ff8a00]">
                    {titleParts.slice(1).join(" & ")}
                  </span>
                </>
              ) : (
                industry.name
              )}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-9 sm:py-11 lg:py-12">
        <div className="container-page grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-charcoal">
              <span className="h-[3px] w-8 bg-brand" />
              Workplace Overview
            </p>
            <h2 className="section-heading mt-4 max-w-xl font-bold leading-[1.02] tracking-[-0.045em] text-charcoal">
              Understand the environment before{" "}
              <span className="text-brand">specifying footwear.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal/80">
              {industry.description}
            </p>
            <p className="mt-3 max-w-xl text-xs leading-5 text-charcoal/75">
              These considerations are general guidance to help start a
              conversation about workplace requirements. They do not confirm a
              product’s suitability without verified evidence.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/contact?enquiry=industry&industry=${encodeURIComponent(industry.name)}`}
                className="btn-primary min-h-10 px-4 text-xs"
              >
                Discuss footwear options
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="btn-outline min-h-10 px-4 text-xs"
              >
                Explore full catalogue
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[230px] overflow-hidden rounded-xl sm:h-[300px] lg:h-[280px]">
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-6 sm:py-8">
        <div className="container-page grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-[#ededed] bg-white p-5 shadow-[0_3px_12px_rgba(0,0,0,0.035)] sm:p-6">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#fff0e8] text-brand">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <h2 className="mt-2 text-lg font-bold tracking-tight text-charcoal">
              Relevant workplace considerations
            </h2>
            <ul className="mt-3 space-y-2">
              {industry.hazards.map((hazard) => (
                <li
                  key={hazard}
                  className="flex items-start gap-2.5 text-xs leading-5 text-charcoal/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {hazard}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-[#ededed] bg-white p-5 shadow-[0_3px_12px_rgba(0,0,0,0.035)] sm:p-6">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#fff0e8] text-brand">
              <Settings2 className="h-5 w-5" />
            </span>
            <h2 className="mt-2 text-lg font-bold tracking-tight text-charcoal">
              Footwear features to review
            </h2>
            <ul className="mt-3 space-y-2">
              {industry.considerations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs leading-5 text-charcoal/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-charcoal">
                <span className="h-[3px] w-8 bg-brand" />
                Keep Exploring
              </p>
              <h2 className="section-heading mt-2 font-bold tracking-tight text-charcoal">
                Other industries we support
              </h2>
            </div>
            <Link
              href="/industries"
              className="btn-outline min-h-9 px-3 text-xs"
            >
              All industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-xl border border-[#e9e9e9] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]"
              >
                <Link
                  href={`/industries/${item.slug}`}
                  className="relative block aspect-[1.9/1] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-1 text-[9px] font-bold text-charcoal">
                    {String(index + 1).padStart(2, "0")} / Sector
                  </span>
                </Link>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-charcoal">
                    <Link
                      href={`/industries/${item.slug}`}
                      className="hover:text-brand"
                    >
                      {item.name}
                    </Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-charcoal/75">
                    {item.description}
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-brand">
                    Common considerations
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {item.hazards.slice(0, 2).map((hazard) => (
                      <span
                        key={hazard}
                        className="rounded bg-[#f4f4f4] px-2 py-1 text-[9px] text-charcoal/80"
                      >
                        {hazard}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-brand"
                  >
                    Explore industry
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
