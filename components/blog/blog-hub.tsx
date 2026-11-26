"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Clock3,
  Layers3,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { BlogArticle, BlogCategory } from "@/lib/data/blog";
import { TiltCard } from "@/components/animation/tilt-card";
import { SlideIn } from "@/components/motion/reveal";

const pillars = [
  {
    title: "Workplace Safety",
    text: "Safety insights & guides",
    Icon: ShieldCheck,
  },
  {
    title: "Material & Design",
    text: "Technology and performance",
    Icon: Layers3,
  },
  {
    title: "Industry Trends",
    text: "Updates and best practices",
    Icon: ChartNoAxesColumnIncreasing,
  },
  { title: "Expert Advice", text: "Workplace recommendations", Icon: Users },
];

const PAGE_SIZE = 6;

export function BlogHub({
  articles,
  featured,
  categories,
}: {
  articles: BlogArticle[];
  featured: BlogArticle;
  categories: readonly BlogCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<
    BlogCategory | "All Articles"
  >("All Articles");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const allArticles = useMemo(
    () => [featured, ...articles],
    [articles, featured],
  );
  const query = searchText.trim().toLowerCase();
  const featuredMatches =
    (activeCategory === "All Articles" ||
      featured.category === activeCategory) &&
    (!query ||
      `${featured.title} ${featured.category} ${featured.excerpt}`
        .toLowerCase()
        .includes(query));

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesCategory =
          activeCategory === "All Articles" ||
          article.category === activeCategory;
        const matchesQuery =
          !query ||
          `${article.title} ${article.category} ${article.excerpt}`
            .toLowerCase()
            .includes(query);
        return matchesCategory && matchesQuery;
      }),
    [activeCategory, articles, query],
  );
  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const visibleArticles = filteredArticles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );
  const categoryCounts = useMemo(
    () =>
      new Map(
        categories.map((category) => [
          category,
          allArticles.filter((article) => article.category === category).length,
        ]),
      ),
    [allArticles, categories],
  );

  function chooseCategory(category: BlogCategory | "All Articles") {
    setActiveCategory(category);
    setPage(1);
  }

  function changeSearch(value: string) {
    setSearchText(value);
    setPage(1);
  }

  return (
    <>
      <section className="bg-white pb-5 pt-5">
        <div className="container-page">
         
          <SlideIn direction="left">
          <div className="grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-9">
            <div>
              <span className="eyebrow text-charcoal">SEKEEDO Insights</span>
              <h1 className="mt-4 max-w-xl text-[clamp(2.35rem,4.6vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.055em] text-charcoal">
                Footwear Considerations for{" "}
                <span className="text-brand">Every Worksite.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-charcoal/80 sm:text-base sm:leading-7">
                Explore practical guides, industry insights and workplace safety
                knowledge to help you make better footwear decisions.
              </p>
            </div>
            <div className="relative mx-2 mb-2 mt-1 sm:mx-3 lg:mx-0">
              <div
                className="absolute -bottom-2 -right-2 h-full w-full rounded-xl bg-[#ff6a00]"
                aria-hidden="true"
              />
              <div className="relative h-[230px] overflow-hidden rounded-xl sm:h-[310px] lg:h-[290px] xl:h-[330px]">
                <Image
                  src="/images/industry-construction.jpg"
                  alt="Overhead view of workers on an active construction site"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
          </SlideIn>
        </div>
        <div className="container-page mt-7 lg:pb-9">
          <SlideIn direction="right">
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
          </SlideIn>
        </div>
      </section>

      <section
        id="latest-articles"
        className="scroll-mt-24 bg-white pb-10 pt-3 lg:pb-14"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="section-heading flex items-center gap-3 font-bold tracking-tight text-charcoal">
              <span className="h-1 w-9 rounded-full bg-brand" />
              Latest Articles
            </h2>
            <label className="flex w-full max-w-[330px] overflow-hidden rounded-lg border border-line focus-within:border-brand">
              <span className="sr-only">Search blog articles</span>
              <input
                type="search"
                value={searchText}
                onChange={(event) => changeSearch(event.target.value)}
                placeholder="Search blog articles..."
                className="min-w-0 flex-1 px-3 py-2.5 text-xs outline-none"
              />
              <span className="grid w-10 place-items-center bg-brand text-white">
                <Search className="h-4 w-4" aria-hidden="true" />
              </span>
            </label>
          </div>

          <div
            className="mt-4 flex gap-2 overflow-x-auto pb-2"
            aria-label="Filter articles by category"
          >
            <button
              type="button"
              onClick={() => chooseCategory("All Articles")}
              aria-pressed={activeCategory === "All Articles"}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-[11px] font-bold transition-colors ${activeCategory === "All Articles" ? "bg-[#f4512c] text-white" : "bg-[#f2f2f2] text-charcoal hover:bg-[#e8e8e8]"}`}
            >
              All Articles ({allArticles.length})
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => chooseCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[11px] font-bold transition-colors ${activeCategory === category ? "bg-[#f4512c] text-white" : "bg-[#f2f2f2] text-charcoal hover:bg-[#e8e8e8]"}`}
              >
                {category} ({categoryCounts.get(category) ?? 0})
              </button>
            ))}
          </div>

          {featuredMatches ? (
            <SlideIn direction="left">
            <article className="mt-4 grid overflow-hidden rounded-xl border border-line bg-[#fff7f2] shadow-[0_3px_12px_rgba(0,0,0,0.04)] md:grid-cols-[1.2fr_0.9fr]">
              <Link
                href={`/blog/${featured.slug}`}
                className="relative block min-h-[210px] overflow-hidden bg-paper sm:min-h-[260px]"
                aria-label={`Read ${featured.title}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-md bg-[#ff5b00] px-3 py-1.5 text-[10px] font-bold uppercase text-white">
                  Featured
                </span>
              </Link>
              <div className="flex flex-col justify-center p-5 sm:p-7">
                <span className="inline-flex w-fit rounded bg-[#fff0e8] px-2 py-1 text-[10px] font-bold uppercase text-[#e64b1f]">
                  {featured.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.04em] text-charcoal sm:text-3xl">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="hover:text-brand"
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">
                  {featured.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-charcoal/75">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.publishedAt}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {featured.readingMinutes} min read
                  </span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="btn-primary mt-4 w-fit min-h-10 px-4 text-xs"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            </SlideIn>
          ) : null}

          {visibleArticles.length ? (
            <div className="my-5 grid gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article, index) => (
                <SlideIn
                  key={article.slug}
                  direction="right"
                  delay={index * 0.06}
                  className="h-full"
                >
                <TiltCard className="h-full">
                <article className="group h-full overflow-hidden rounded-xl border border-[#e9e9e9] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.045)] transition-all hover:shadow-[0_12px_25px_rgba(0,0,0,0.09)]">
                  <Link
                    href={`/blog/${article.slug}`}
                    aria-label={`Read ${article.title}`}
                    className="relative block aspect-[1.8/1] overflow-hidden bg-paper"
                  >
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <span className="inline-flex rounded bg-[#fff0e8] px-2 py-1 text-[9px] font-bold uppercase text-[#e64b1f]">
                      {article.category}
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 text-base font-bold leading-[1.15] tracking-[-0.025em] text-charcoal">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-brand"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-charcoal/75">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-2.5 text-[10px] text-charcoal/75">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {article.publishedAt}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {article.readingMinutes} min read
                      </span>
                      <Link
                        href={`/blog/${article.slug}`}
                        aria-label={`Read ${article.title}`}
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
                </TiltCard>
                </SlideIn>
              ))}
            </div>
          ) : !featuredMatches ? (
            <div className="mt-5 rounded-xl border border-dashed border-line px-6 lg:py-12 text-center">
              <Search className="mx-auto h-7 w-7 text-brand" />
              <h3 className="mt-3 font-semibold text-charcoal">
                No articles found
              </h3>
              <p className="mt-1 text-sm text-muted">
                Try another search term or category.
              </p>
            </div>
          ) : null}

          {pageCount > 1 ? (
            <SlideIn direction="left">
            <nav
              aria-label="Blog pages"
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
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    aria-current={pageNumber === page ? "page" : undefined}
                    className={`grid h-9 min-w-9 place-items-center rounded-md px-2 text-xs font-bold ${pageNumber === page ? "bg-brand text-white" : "border border-line text-charcoal hover:border-brand"}`}
                  >
                    {pageNumber}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() =>
                  setPage((current) => Math.min(pageCount, current + 1))
                }
                disabled={page === pageCount}
                aria-label="Next page"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-charcoal hover:border-brand disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </nav>
            </SlideIn>
          ) : null}
        </div>
      </section>
    </>
  );
}
