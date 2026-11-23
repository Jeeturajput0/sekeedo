"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownWideNarrow, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import { Stagger } from "@/components/motion/reveal";
import { productCategories, products, type Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

type SortOption = "featured" | "newest" | "price-asc" | "price-desc";
const categoryTiles = [
  { slug: "steel-toe", label: "Steel Toe Shoes" },
  { slug: "safety-boots", label: "Safety Boots" },
  { slug: "lightweight", label: "Lightweight Safety Shoes" },
  { slug: "high-ankle", label: "High-Ankle Shoes" },
  { slug: "waterproof", label: "Waterproof Shoes" },
  { slug: "slip-resistant", label: "Slip-Resistant Shoes" },
  { slug: "electrical-safety", label: "Electrical Safety Footwear" },
  { slug: "industrial-sneakers", label: "Industrial Sneakers" },
];
const facets = {
  Industry: ["Construction", "Manufacturing", "Warehousing & Logistics", "Automotive", "Electrical", "Pharmaceuticals", "Chemical Industry", "Food Processing"],
  "Shoe type": ["Steel Toe", "Composite Toe", "Safety Boots", "Lightweight Shoes", "High-Ankle", "Waterproof"],
  "Safety features": ["Slip Resistant", "Oil Resistant", "Puncture Resistant", "Water Resistant", "Electrical Hazard Protection", "Antistatic", "ESD"],
  Size: ["6", "7", "8", "9", "10", "11", "12"],
  Certification: ["BIS certification", "Other certification"],
};

const categoryImages: Record<string, string> = {
  "steel-toe": "/images/product-steel-toe.webp", "composite-toe": "/images/product-composite.webp",
  lightweight: "/images/product-lightweight.webp", "safety-boots": "/images/product-boot.webp",
  "high-ankle": "/images/product-high-ankle.webp", waterproof: "/images/product-waterproof.webp",
  "slip-resistant": "/images/product-slip-resistant.webp", "industrial-sneakers": "/images/product-industrial-sneaker.webp",
  "electrical-safety": "/images/product-specialized.webp",
};

function FilterGroup({ title, options, selected, onToggle }: { title: string; options: string[]; selected: string[]; onToggle: (value: string) => void }) {
  const [open, setOpen] = useState(true);
  const reduceMotion = useReducedMotion();
  return <section className="border-b border-line py-4">
    <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between text-left text-sm font-semibold text-charcoal">
      {title}<ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
    </button>
    <AnimatePresence initial={false}>{open && <motion.div initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="overflow-hidden">
      <div className="space-y-2.5 pt-4">{options.map((option) => <label key={option} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-charcoal/70">
        <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} className="h-4 w-4 accent-[#F4512C]" />{option}
      </label>)}</div>
    </motion.div>}</AnimatePresence>
  </section>;
}

function Filters({ selected, toggle, clear, minPrice, maxPrice, setPriceRange }: { selected: string[]; toggle: (value: string) => void; clear: () => void; minPrice: string; maxPrice: string; setPriceRange: (min: string, max: string) => void }) {
  return <div>
    <div className="flex items-center justify-between border-b border-line pb-4">
      <h2 className="text-sm font-semibold text-charcoal">Filters</h2>
      {(selected.length > 0 || minPrice || maxPrice) && <button onClick={clear} className="text-xs text-muted underline underline-offset-4">Clear all</button>}
    </div>
    {Object.entries(facets).map(([title, options]) => <FilterGroup key={title} title={title} options={options} selected={selected} onToggle={toggle} />)}
    <section className="border-b border-line py-4">
      <h3 className="text-sm font-semibold text-charcoal">Price range</h3>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <label className="text-[10px] text-muted">Min<input type="number" min="0" value={minPrice} onChange={(event) => setPriceRange(event.target.value, maxPrice)} placeholder="₹ Min" className="mt-1 w-full border border-line px-2 py-2 text-xs text-charcoal outline-none focus:border-[#F4512C]" /></label>
        <label className="text-[10px] text-muted">Max<input type="number" min="0" value={maxPrice} onChange={(event) => setPriceRange(minPrice, event.target.value)} placeholder="₹ Max" className="mt-1 w-full border border-line px-2 py-2 text-xs text-charcoal outline-none focus:border-[#F4512C]" /></label>
      </div>
      <p className="mt-2 text-[11px] leading-5 text-muted">Prices will appear here once confirmed product pricing is available.</p>
    </section>
    <p className="mt-4 text-[11px] leading-5 text-muted">Safety features, sizes and certifications appear only after product specifications are verified.</p>
  </div>;
}

export function ProductCatalog({ initialCategory = "all" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("featured");
  const [selected, setSelected] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [enquiry, setEnquiry] = useState<string[]>([]);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (!drawerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);
  const toggle = (value: string) => { setSelected((old) => old.includes(value) ? old.filter((item) => item !== value) : [...old, value]); setPage(1); };
  const toggleEnquiry = (slug: string) => setEnquiry((old) => old.includes(slug) ? old.filter((item) => item !== slug) : [...old, slug]);

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    let result = products.filter((product) => {
      const haystack = [product.name, product.tagline, product.summary, product.sku, ...(product.verifiedFeatures ? product.features : [])].join(" ").toLowerCase();
      const cat = category === "all" || product.category === category;
      const search = !normalized || haystack.includes(normalized);
      const matches = selected.every((facet) => facetMatches(product, facet));
      const price = (!minPrice && !maxPrice) || Boolean(product.priceRange && (!minPrice || product.priceRange.max >= Number(minPrice)) && (!maxPrice || product.priceRange.min <= Number(maxPrice)));
      return cat && search && matches && price;
    });
    if (sort === "featured") result = [...result].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    if (sort === "newest") result = [...result].sort((a, b) => Number(Boolean(b.newArrival)) - Number(Boolean(a.newArrival)));
    if (sort === "price-asc") result = [...result].sort((a, b) => (a.priceRange?.min ?? Infinity) - (b.priceRange?.min ?? Infinity));
    if (sort === "price-desc") result = [...result].sort((a, b) => (b.priceRange?.max ?? -Infinity) - (a.priceRange?.max ?? -Infinity));
    return result;
  }, [category, maxPrice, minPrice, query, selected, sort]);

  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const pageItems = visible.slice((page - 1) * pageSize, page * pageSize);
  const chips = [...selected, ...(category !== "all" ? [productCategories.find((item) => item.slug === category)?.name ?? category] : []), ...(minPrice || maxPrice ? [`Price: ${minPrice || "0"}–${maxPrice || "any"}`] : [])];
  const clear = () => { setSelected([]); setCategory("all"); setQuery(""); setMinPrice(""); setMaxPrice(""); setPage(1); };
  const setPriceRange = (min: string, max: string) => { setMinPrice(min); setMaxPrice(max); setPage(1); };
  const selectedProducts = products.filter((product) => enquiry.includes(product.slug));
  const quoteHref = `/contact?enquiry=quote&products=${encodeURIComponent(selectedProducts.map((item) => item.name).join(", "))}`;

  return <div className={enquiry.length > 0 ? "pb-20" : undefined}>
    <section aria-labelledby="category-heading" className="mb-12">
      <div className="mb-5 flex items-end justify-between">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-brand">Explore the range</p><h2 id="category-heading" className="mt-2 text-xl font-semibold tracking-tight text-charcoal">Shop by category</h2></div>
        <span className="hidden text-xs text-muted sm:block">{categoryTiles.length} categories</span>
      </div>
      <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {categoryTiles.map((item) => <button key={item.slug} type="button" onClick={() => { setCategory(category === item.slug ? "all" : item.slug); setPage(1); }} aria-pressed={category === item.slug} className={cn("group text-left", category === item.slug && "text-brand")}>
          <span data-stagger className="block">
          <span className="relative block aspect-[1.12] overflow-hidden bg-paper"><Image src={categoryImages[item.slug]} alt="" fill sizes="(max-width:640px) 45vw, 15vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 border border-transparent transition-colors group-hover:border-brand/60" /></span>
          <span className="mt-2 block text-xs font-medium leading-5 text-charcoal group-hover:text-brand">{item.label}</span>
          </span>
        </button>)}
      </Stagger>
    </section>

    <div className="mb-5 flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => setDrawerOpen(true)} className="inline-flex min-h-10 items-center gap-2 border border-line px-3 text-sm font-medium lg:hidden"><SlidersHorizontal className="h-4 w-4" />Filters{selected.length > 0 && ` (${selected.length})`}</button>
        <p className="text-sm text-muted"><strong className="text-charcoal">{visible.length}</strong> styles</p>
        {chips.map((chip) => <button key={chip} onClick={() => {
          if (chip.startsWith("Price:")) setPriceRange("", "");
          else if (category !== "all" && chip === (productCategories.find((item) => item.slug === category)?.name ?? category)) setCategory("all");
          else toggle(chip);
        }} className="inline-flex items-center gap-1.5 bg-[#f5f5f3] px-2.5 py-1.5 text-xs">{chip}<X className="h-3 w-3" /></button>)}
      </div>
      <label className="flex items-center gap-2 text-xs text-muted"><ArrowDownWideNarrow className="h-4 w-4" /><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="bg-transparent py-2 text-sm font-medium text-charcoal outline-none"><option value="featured">Featured</option><option value="newest">New arrivals</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label>
    </div>

    <div className="grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden lg:block"><Filters selected={selected} toggle={toggle} clear={clear} minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} /></aside>
      <div>
        <div className="mb-5 flex items-center justify-between gap-3"><label className="sr-only" htmlFor="product-search">Search products</label><input id="product-search" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search footwear..." className="w-full max-w-sm border-b border-line bg-transparent py-2.5 text-sm outline-none placeholder:text-muted focus:border-brand" /><span className="hidden text-xs text-muted sm:block">Showing {visible.length ? (page - 1) * pageSize + 1 : 0}-{Math.min(page * pageSize, visible.length)} of {visible.length}</span></div>
        {pageItems.length ? <Stagger className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">{pageItems.map((product) => <ProductCard key={product.slug} product={product} added={enquiry.includes(product.slug)} onToggleEnquiry={() => toggleEnquiry(product.slug)} />)}</Stagger> : <div className="border border-dashed border-line px-6 py-16 text-center"><p className="font-semibold text-charcoal">No matching products</p><p className="mt-2 text-sm text-muted">Clear a filter or search another category.</p><button onClick={clear} className="mt-4 text-sm font-semibold text-brand">Clear filters</button></div>}
        {pageCount > 1 && <nav aria-label="Product pages" className="mt-12 flex items-center justify-center gap-2"><button aria-label="Previous page" disabled={page === 1} onClick={() => setPage(page - 1)} className="grid h-10 w-10 place-items-center border border-line disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} aria-current={number === page ? "page" : undefined} onClick={() => setPage(number)} className={cn("h-10 min-w-10 border px-3 text-sm", page === number ? "border-charcoal bg-charcoal text-white" : "border-line")}>{number}</button>)}<button aria-label="Next page" disabled={page === pageCount} onClick={() => setPage(page + 1)} className="grid h-10 w-10 place-items-center border border-line disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button></nav>}
      </div>
    </div>

    <AnimatePresence>{drawerOpen && <><motion.button aria-label="Close filters" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} onClick={() => setDrawerOpen(false)} className="fixed inset-0 z-[60] bg-black/40 lg:hidden" /><motion.div role="dialog" aria-modal="true" aria-label="Product filters" initial={reduceMotion ? false : { x: "100%" }} animate={{ x: 0 }} exit={reduceMotion ? undefined : { x: "100%" }} transition={{ type: "tween", duration: reduceMotion ? 0 : .25 }} className="fixed inset-y-0 right-0 z-[61] w-[min(90vw,380px)] overflow-y-auto bg-white p-5 lg:hidden"><div className="mb-6 flex items-center justify-between"><h2 className="text-lg font-semibold">Filters</h2><button onClick={() => setDrawerOpen(false)} aria-label="Close filters" className="grid h-10 w-10 place-items-center border border-line"><X className="h-5 w-5" /></button></div><Filters selected={selected} toggle={toggle} clear={clear} minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} /><button onClick={() => setDrawerOpen(false)} className="btn-primary mt-6 w-full">Show {visible.length} styles</button></motion.div></>}</AnimatePresence>

    {enquiry.length > 0 && <div className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 items-center justify-between gap-4 border border-charcoal bg-white px-4 py-3 shadow-lg sm:px-6"><p className="text-sm font-medium text-charcoal"><span className="text-brand">{enquiry.length}</span> {enquiry.length === 1 ? "product" : "products"} in your enquiry</p><div className="flex items-center gap-3"><button onClick={() => setEnquiry([])} className="hidden text-xs text-muted underline sm:block">Clear list</button><Link href={quoteHref} className="btn-primary min-h-10 px-3 text-xs">Request quote<ArrowUpRight className="h-4 w-4" /></Link></div></div>}
  </div>;
}

function facetMatches(product: Product, facet: string) {
  const safetyFeatureOptions = facets["Safety features"] as string[];
  if (safetyFeatureOptions.includes(facet)) return Boolean(product.verifiedFeatures && product.features.some((feature) => feature.toLowerCase().includes(facet.toLowerCase())));
  if (facets.Industry.includes(facet)) return Boolean(product.industries?.some((industry) => industry.toLowerCase() === facet.toLowerCase()));
  if (facets.Size.includes(facet)) return Boolean(product.availableSizes?.includes(facet));
  if (facets.Certification.includes(facet)) return product.certification?.toLowerCase().includes(facet.toLowerCase()) ?? false;
  const categoryNames = productCategories.find((item) => item.slug === product.category)?.name ?? "";
  const terms = [product.category.replaceAll("-", " "), categoryNames].join(" ").toLowerCase();
  return terms.includes(facet.toLowerCase());
}
