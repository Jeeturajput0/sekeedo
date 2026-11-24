import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogArticles, getBlogArticleBySlug } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return createMetadata({ title: "Article not found", description: "", path: "/blog" });
  return createMetadata({ title: article.title, description: article.excerpt, path: `/blog/${article.slug}`, image: article.image });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();
  const related = blogArticles.filter((item) => item.slug !== article.slug && item.category === article.category).concat(blogArticles.filter((item) => item.slug !== article.slug && item.category !== article.category)).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#151515] text-white">
        <Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" className="z-0 object-cover object-center opacity-45" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(12,13,14,0.97)_0%,rgba(12,13,14,0.82)_55%,rgba(12,13,14,0.32)_100%)]" aria-hidden="true" />
        <div className="container-page relative z-10 py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/75"><Link href="/" className="hover:text-brand">Home</Link><span aria-hidden="true">/</span><Link href="/blog" className="hover:text-brand">Blog</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-white">{article.category}</span></nav>
          <span className="inline-flex rounded bg-[#fff0e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#df481d]">{article.category}</span>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.05em]">{article.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{article.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/80"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{article.publishedAt}</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{article.readingMinutes} min read</span><span>SEKEEDO Editorial</span></div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-16 lg:py-16">
        <article className="min-w-0">
          <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-xl bg-paper"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" /></div>
          <div className="max-w-3xl space-y-9">
            {article.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-charcoal/80 sm:text-base sm:leading-8">{paragraph}</p>)}</section>)}
          </div>
          <Link href="/blog" className="btn-outline mt-10"><ArrowLeft className="h-4 w-4" />Back to all articles</Link>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-line bg-[#f8f8f8] p-5"><span className="eyebrow">Need product details?</span><h2 className="mt-4 text-xl font-bold text-charcoal">Talk with our team</h2><p className="mt-2 text-sm leading-6 text-muted">Ask for current technical documents or discuss your workplace requirements.</p><Link href="/contact?enquiry=general" className="btn-primary mt-5">Contact SEKEEDO<ArrowRight className="h-4 w-4" /></Link></div>
          <div className="border border-line p-5"><h2 className="text-base font-bold text-charcoal">Related Articles</h2><div className="mt-3 space-y-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex items-start gap-3"><span className="relative h-14 w-16 shrink-0 overflow-hidden rounded bg-paper"><Image src={item.image} alt="" fill sizes="64px" className="object-cover" /></span><span><strong className="line-clamp-2 text-xs leading-4 text-charcoal group-hover:text-brand">{item.title}</strong><span className="mt-1 block text-[10px] text-muted">{item.readingMinutes} min read</span></span></Link>)}</div></div>
        </aside>
      </div>
    </>
  );
}
