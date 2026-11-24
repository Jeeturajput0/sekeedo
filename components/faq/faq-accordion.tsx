"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

type FaqAccordionProps = {
  items: Faq[];
  idPrefix: string;
};

export function FaqAccordion({ items, idPrefix }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-0.5 lg:pl-1">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-md border border-[#e5e7e5] bg-white transition-colors",
              isOpen && "border-[#f4cbb8]",
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn("flex w-full items-center justify-between gap-3 px-3 py-2 text-left transition-colors hover:text-brand sm:py-2.5", isOpen && "bg-[#fff1e8]")}
              >
                <span className="text-[13px] font-semibold leading-snug text-charcoal sm:text-sm">
                  {item.question}
                </span>
                <span className="grid h-5 w-5 shrink-0 place-items-center">
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}><ChevronDown className={cn("h-3.5 w-3.5", isOpen ? "text-brand" : "text-charcoal/65")} aria-hidden="true" /></motion.span>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${idPrefix}-panel-${index}`}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-3 pb-2.5 text-[11px] leading-[1.45] text-charcoal/75 sm:text-xs sm:leading-[1.5]">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
