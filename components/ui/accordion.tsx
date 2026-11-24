"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import type { Faq } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: Faq[];
  defaultOpen?: number | null;
  className?: string;
  idPrefix?: string;
  showAllLink?: boolean;
  /** Use light text and borders when placed on a dark image background. */
  light?: boolean;
};

export function Accordion({
  items,
  defaultOpen = 0,
  className,
  idPrefix = "faq",
  showAllLink = true,
  light = false,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div
      className={cn(
        "border-t",
        light ? "border-white/20" : "border-line",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className={cn("border-b", light ? "border-white/20" : "border-line")}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-brand"
              >
                <span
                  className={cn(
                    "text-[15px] font-semibold leading-snug",
                    light ? "text-white" : "text-charcoal",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center border transition-colors",
                    isOpen
                      ? "border-brand bg-brand text-white"
                      : light
                        ? "border-white/30 text-white"
                        : "border-line text-charcoal",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${idPrefix}-panel-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-3xl pb-6 pr-10 text-sm leading-7",
                      light ? "text-white/70" : "text-muted",
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
      {showAllLink ? (
        <div className="pt-6">
          <Link
            href="/faq"
            className={cn("btn-link", light && "text-white hover:text-brand")}
          >
            View all FAQs
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
