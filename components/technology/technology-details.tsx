"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Info, ShieldCheck } from "lucide-react";

import { FadeIn, ImageReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { technologies } from "@/lib/data/technologies";
import { cn } from "@/lib/utils";

const featuredSlugs = [
  "toe-protection",
  "slip-resistance",
  "puncture-resistance",
  "electrical-protection",
  "esd-antistatic",
  "standards-compliance",
];

const featured = featuredSlugs
  .map((slug) => technologies.find((item) => item.slug === slug))
  .filter((item): item is (typeof technologies)[number] => Boolean(item));

export function TechnologyDetails() {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-12 lg:py-10">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technology Notes"
          title="Details worth checking before you specify."
          lead="Short notes on the technologies that affect selection most — and the claims that need product-specific verification."
        />

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* SIDE PANEL */}
          <FadeIn>
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-xl bg-[#101C16] shadow-xl">
              <ImageReveal className="absolute inset-0">
                <Image
                  src="/images/technology-detail.jpg"
                  alt="Engineer reviewing product testing data"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </ImageReveal>

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#101C16] via-[#101C16]/55 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute left-5 top-5 z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  SEKEEDO / Verification
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  Verify before you buy
                </span>

                <h3 className="mt-3 max-w-sm text-2xl font-bold leading-[1.12] tracking-tight text-white">
                  Claims are only as good as their documentation.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                  Ask for the current product sheet and applicable test reports before
                  finalising a specification.
                </p>

                <div className="mt-5 flex items-start gap-2.5 border-l-2 border-brand bg-white/10 px-4 py-3 text-xs leading-5 text-white/85 backdrop-blur-sm">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <p>Standards and ratings differ by model — never assume equivalence.</p>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-1.5 w-28 bg-brand"
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          {/* ACCORDION */}
          <div className="min-w-0">
            <FadeIn delay={0.08}>
              <div className="space-y-2.5">
                {featured.map((item, index) => {
                  const isOpen = open === index;
                  const panelId = `technology-note-${item.slug}`;

                  return (
                    <div
                      key={item.slug}
                      className={cn(
                        "overflow-hidden rounded-xl border bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)] transition-all duration-300",
                        isOpen
                          ? "border-brand shadow-[0_12px_30px_rgba(244,81,44,0.12)]"
                          : "border-line hover:border-brand/40 hover:shadow-md",
                      )}
                    >
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? null : index)}
                          className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
                        >
                          <span className="text-[11px] font-bold tracking-widest text-brand">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={cn(
                              "grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors duration-300",
                              isOpen ? "bg-brand text-white" : "bg-brand/10 text-brand",
                            )}
                          >
                            <ShieldCheck size={18} strokeWidth={1.8} aria-hidden="true" />
                          </span>

                          <span className="flex-1 text-sm font-bold leading-snug text-charcoal sm:text-base">
                            {item.title}
                          </span>

                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.25 }}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-charcoal"
                          >
                            <ChevronDown size={18} aria-hidden="true" />
                          </motion.span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mx-4 mb-4 border-l-2 border-brand bg-paper px-4 py-3 sm:mx-5">
                              <p className="text-sm leading-6 text-charcoal/75">{item.detail}</p>
                              {item.note ? (
                                <p className="mt-2 flex items-start gap-2 text-xs font-semibold leading-5 text-brand">
                                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  {item.note}
                                </p>
                              ) : null}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <p className="mt-5 text-sm text-muted">
              Need a specific specification?{" "}
              <Link
                href="/contact?enquiry=general"
                className="font-bold text-brand transition-colors hover:text-[#FF6A00]"
              >
                Ask our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
