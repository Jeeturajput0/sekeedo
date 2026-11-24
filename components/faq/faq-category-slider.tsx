"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaqCategoryCard } from "@/components/faq/faq-category-card";
import type { FaqCategory } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 6000;

type FaqCategorySliderProps = {
  categories: FaqCategory[];
};

export function FaqCategorySlider({ categories }: FaqCategorySliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = categories.length;

  const goTo = (next: number) => setIndex(((next % total) + total) % total);

  useEffect(() => {
    if (paused || total < 2) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % total);
    }, SLIDE_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [index, paused, total]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="FAQ categories"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Browse by category{" "}
          <span className="ml-1 text-brand">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous category"
            onClick={() => goTo(index - 1)}
            className="grid h-9 w-9 place-items-center border border-line text-charcoal transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next category"
            onClick={() => goTo(index + 1)}
            className="grid h-9 w-9 place-items-center border border-line text-charcoal transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {categories.map((category, slide) => (
            <div
              key={category.slug}
              className="w-full shrink-0 px-0.5"
              aria-hidden={slide !== index}
              inert={slide !== index}
            >
              <FaqCategoryCard category={category} index={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose a category">
        {categories.map((category, slide) => (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={slide === index}
            aria-label={category.title}
            onClick={() => goTo(slide)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              slide === index ? "w-8 bg-brand" : "w-1.5 bg-line hover:bg-brand/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
