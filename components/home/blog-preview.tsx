import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { blogArticles } from "@/lib/data/blog";

export function BlogPreview() {
  const articles = blogArticles.slice(0, 3);

  return (
    <section className="bg-white py-9 sm:py-9" aria-labelledby="home-blog-title">
      <div className="container-page">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              SEKEEDO Blog
            </span>
            <h2
              id="home-blog-title"
              className="section-title mt-4 sm:text-3xl"
            >
              Insights &amp; <span className="text-brand">Guides</span>
            </h2>
            <p className="section-lead">
              Practical guidance on footwear selection, workplace safety and
              procurement.
            </p>
          </div>
          <Link href="/blog" className="btn-link">
            View all articles
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_25px_rgba(0,0,0,0.09)]"
            >
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
                <h3 className="mt-2 line-clamp-2 text-base font-bold leading-[1.15] tracking-[-0.025em] text-charcoal">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-brand"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-charcoal/75">
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
