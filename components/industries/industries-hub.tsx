"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Factory,
  Layers3,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Industry } from "@/lib/data/industries";

const filters = [
  "All Industries",
  "Production & Processing",
  "Infrastructure & Energy",
  "Operations & Services",
] as const;
type Filter = (typeof filters)[number];
const groups: Record<Exclude<Filter, "All Industries">, string[]> = {
  "Production & Processing": [
    "manufacturing",
    "pharmaceuticals",
    "chemical-petrochemical",
    "automotive-workshops",
    "food-processing",
    "cement-building-materials",
    "packaging-printing",
  ],
  "Infrastructure & Energy": [
    "construction-infrastructure",
    "electrical-power",
    "agriculture",
    "mining-quarrying",
    "oil-gas",
    "solar-renewable-energy",
    "engineering",
    "telecom",
    "aviation",
    "marine-shipyards",
  ],
  "Operations & Services": [
    "logistics-warehousing",
    "hotels-hospitality",
    "healthcare-facilities",
    "transport-fleet",
    "facility-management",
  ],
};
const PAGE_SIZE = 9;
const pillars = [
  {
    title: "Workplace Safety",
    text: "Review task-specific risks",
    Icon: ShieldCheck,
  },
  {
    title: "Materials & Design",
    text: "Understand footwear features",
    Icon: Layers3,
  },
  {
    title: "Industry Insights",
    text: "Explore sector environments",
    Icon: ChartNoAxesColumnIncreasing,
  },
  { title: "Expert Guidance", text: "Make informed decisions", Icon: Users },
];

export function IndustriesHub({ industries }: { industries: Industry[] }) {
  const [filter, setFilter] = useState<Filter>("All Industries");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const featured =
    industries.find(
      (industry) => industry.slug === "construction-infrastructure",
    ) ?? industries[0];
  const query = search.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      industries.filter((industry) => {
        const categoryMatch =
          filter === "All Industries" || groups[filter].includes(industry.slug);
        const searchMatch =
          !query ||
          `${industry.name} ${industry.description} ${industry.considerations.join(" ")}`
            .toLowerCase()
            .includes(query);
        return industry.slug !== featured?.slug && categoryMatch && searchMatch;
      }),
    [filter, industries, query, featured?.slug],
  );
  const featuredMatches =
    Boolean(featured) &&
    (filter === "All Industries" || groups[filter].includes(featured.slug)) &&
    (!query ||
      `${featured.name} ${featured.description} ${featured.considerations.join(" ")}`
        .toLowerCase()
        .includes(query));
  const count = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const chooseFilter = (value: Filter) => {
    setFilter(value);
    setPage(1);
  };
  const chooseSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <>
      <section className="bg-white py-5 pt-5 lg:py-2">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex items-center gap-2 text-[11px] text-charcoal/75"
          >
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page" className="text-charcoal">
              Industries
            </span>
          </nav>
          <div className="grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <span className="eyebrow text-charcoal">Industries We Serve</span>
              <h1 className="mt-4 max-w-xl text-[clamp(2.35rem,4.6vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.055em] text-charcoal">
                Footwear considerations for{" "}
                <span className="text-brand">every worksite.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-charcoal/80 sm:text-base sm:leading-7">
                Explore workplace environments and the footwear features teams
                may need to review for their day-to-day work.
              </p>
            </div>
            <div className="relative mx-2 mb-2 mt-1 sm:mx-3 lg:mx-0">
              <div
                className="absolute -bottom-2 -right-2 h-full w-full rounded-xl bg-[#ff6a00]"
                aria-hidden="true"
              />
              <div className="relative h-[230px] overflow-hidden rounded-xl sm:h-[310px] lg:h-[290px] xl:h-[330px]">
                <Image
                  src={featured?.image ?? "/images/ind-construction.webp"}
                  alt={featured?.imageAlt ?? "Industrial worksite"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-page mt-7">
          <div className="grid gap-1 rounded-xl bg-[#f7f7f7] px-2 py-2 sm:grid-cols-2 lg:grid-cols-4 lg:px-3">
            {pillars.map(({ title, text, Icon }, index) => (
              <div
                key={title}
                className={`flex items-center gap-3 px-3 py-3 lg:px-4 ${index ? "lg:border-l lg:border-[#d0d0d0]" : ""}`}
              >
                <Icon className="h-8 w-8 shrink-0 stroke-[1.7] text-brand" />
                <span>
                  <strong className="block text-xs font-bold text-charcoal sm:text-sm">
                    {title}
                  </strong>
                  <span className="mt-0.5 block text-[10px] text-charcoal/75 sm:text-xs">
                    {text}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="industry-list"
        className="scroll-mt-24 bg-white pb-10 py-3  lg:py-10"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              <span className="h-1 w-9 rounded-full bg-brand" />
              Industries We Serve
            </h2>
            <label className="flex w-full max-w-[330px] overflow-hidden rounded-lg border border-line focus-within:border-brand ">
              <span className="sr-only">Search industries</span>
              <input
                type="search"
                value={search}
                onChange={(event) => chooseSearch(event.target.value)}
                placeholder="Search industries..."
                className="min-w-0 flex-1 px-3 py-2.5 text-xs outline-none"
              />
              <span className="grid w-10 place-items-center bg-brand text-white">
                <Search className="h-4 w-4" aria-hidden="true" />
              </span>
            </label>
          </div>
          <div
            className="mt-4 flex gap-2 overflow-x-auto pb-2"
            aria-label="Filter industries"
          >
            {filters.map((item) => {
              const selected = filter === item;
              const itemCount =
                item === "All Industries"
                  ? industries.length
                  : industries.filter((industry) =>
                      groups[item].includes(industry.slug),
                    ).length;
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => chooseFilter(item)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-[11px] font-bold transition-colors ${selected ? "bg-[#f4512c] text-white" : "bg-[#f2f2f2] text-charcoal hover:bg-[#e8e8e8]"}`}
                >
                  {item} ({itemCount})
                </button>
              );
            })}
          </div>
          {featuredMatches && featured ? (
            <article className="mt-4 grid overflow-hidden rounded-xl border border-line bg-[#fff7f2] shadow-[0_3px_12px_rgba(0,0,0,0.04)] md:grid-cols-[1.2fr_0.9fr] ">
              <Link
                href={`/industries/${featured.slug}`}
                className="relative block min-h-[210px] overflow-hidden bg-paper sm:min-h-[260px]"
                aria-label={`Explore ${featured.name}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-md bg-[#ff5b00] px-3 py-1.5 text-[10px] font-bold uppercase text-white">
                  Featured Industry
                </span>
              </Link>
              <div className="flex flex-col justify-center p-5 sm:p-7">
                <span className="inline-flex w-fit rounded bg-[#fff0e8] px-2 py-1 text-[10px] font-bold uppercase text-[#e64b1f]">
                  {featured.shortName}
                </span>
                <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.04em] text-charcoal sm:text-3xl">
                  <Link
                    href={`/industries/${featured.slug}`}
                    className="hover:text-brand"
                  >
                    {featured.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">
                  {featured.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.considerations.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded bg-white px-2.5 py-1 text-[10px] text-charcoal/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/industries/${featured.slug}`}
                  className="btn-primary mt-4 w-fit min-h-10 px-4 text-xs"
                >
                  Explore Industry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ) : null}
          {pageItems.length ? (
            <div className="mt-15  grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((industry) => (
                <article
                  key={industry.slug}
                  className="group overflow-hidden rounded-xl border border-[#e9e9e9] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.045)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.09)]"
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    aria-label={`Explore ${industry.name}`}
                    className="relative block aspect-[1.8/1] overflow-hidden bg-paper"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-1 text-[9px] font-bold uppercase text-charcoal">
                      {industry.shortName}
                    </span>
                  </Link>
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-base font-bold leading-[1.15] tracking-[-0.025em] text-charcoal">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="hover:text-brand"
                      >
                        {industry.name}
                      </Link>
                    </h3>
                    <p className="mt-1.5 line-clamp-2 min-h-10 text-xs leading-5 text-charcoal/75">
                      {industry.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5">
                      <span className="line-clamp-1 text-[10px] text-charcoal/75">
                        {industry.considerations.slice(0, 2).join(" · ")}
                      </span>
                      <Link
                        href={`/industries/${industry.slug}`}
                        aria-label={`Explore ${industry.name}`}
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : !featuredMatches ? (
            <div className="mt-5 rounded-xl border border-dashed border-line px-6 py-12 text-center">
              <Factory className="mx-auto h-7 w-7 text-brand" />
              <h3 className="mt-3 font-semibold text-charcoal">
                No industries found
              </h3>
              <p className="mt-1 text-sm text-muted">
                Try another search term or category.
              </p>
            </div>
          ) : null}
          {count > 1 ? (
            <nav
              aria-label="Industry pages"
              className="mt-7 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-charcoal hover:border-brand disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: count }, (_, index) => index + 1).map(
                (number) => (
                  <button
                    type="button"
                    key={number}
                    onClick={() => setPage(number)}
                    aria-current={number === page ? "page" : undefined}
                    className={`grid h-9 min-w-9 place-items-center rounded-md px-2 text-xs font-bold ${number === page ? "bg-brand text-white" : "border border-line text-charcoal hover:border-brand"}`}
                  >
                    {number}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() =>
                  setPage((current) => Math.min(count, current + 1))
                }
                disabled={page === count}
                aria-label="Next page"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-charcoal hover:border-brand disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </nav>
          ) : null}
          <p className="mt-7 border-l-2 border-brand bg-[#f7f7f7] px-4 py-3 text-[11px] leading-5 text-charcoal/70">
            Workplace guidance is general information only. Confirm risks,
            required standards and footwear suitability with a qualified safety
            professional and the verified specifications for the exact product.
          </p>
        </div>
      </section>
    </>
  );
}
