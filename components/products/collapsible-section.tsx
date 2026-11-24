"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type CollapsibleSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function CollapsibleSection({
  id,
  eyebrow,
  title,
  children,
  defaultOpen = false,
  className,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash === `#${id}`) setOpen(true);
    };
    const syncWithTabClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(`a[href="#${id}"]`)) setOpen(true);
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    document.addEventListener("click", syncWithTabClick);
    return () => {
      window.removeEventListener("hashchange", syncWithHash);
      document.removeEventListener("click", syncWithTabClick);
    };
  }, [id]);

  return (
    <section id={id} className={cn("scroll-mt-20 border-y border-line", className)}>
      <div className="container-page">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
        >
          <span>
            <span className="eyebrow">{eyebrow}</span>
            <span className="mt-1 block text-xl font-semibold leading-tight tracking-[-0.04em] text-charcoal transition-colors group-hover:text-brand sm:text-3xl">
              {title}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={`${id}-panel`}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-8">{children}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
