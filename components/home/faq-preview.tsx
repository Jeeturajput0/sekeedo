"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Factory,
  Headphones,
  Layers,
  Package,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

import {
  FadeIn,
  ImageReveal,
  SlideIn,
  Stagger,
  TextReveal,
} from "@/components/motion/reveal";
import { homeFaqs, type FaqCategoryIcon, type HomeFaq } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

const faqIcons: Record<FaqCategoryIcon, LucideIcon> = {
  product: Package,
  shield: ShieldCheck,
  workplace: Factory,
  maintenance: Layers,
  ordering: Truck,
  general: Headphones,
};

type FaqPreviewAccordionProps = {
  items: HomeFaq[];
};

export function FaqPreviewAccordion({ items }: FaqPreviewAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-5">
      <div className="container-page">
        {/* =========================================
            SECTION HEADING
        ========================================== */}
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-11">
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              FAQs / Help Centre
            </span>

            <TextReveal
              as="h2"
              text="Questions? We've got answers."
              highlight={["answers."]}
              className="section-title home-heading mt-4"
            />

            <p className="section-lead">
              Straight answers to the questions we hear most from businesses,
              factories and procurement teams.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link href="/faq" className="btn-link shrink-0">
              View all FAQs
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        {/* =========================================
            MAIN TWO COLUMN LAYOUT
        ========================================== */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* ---------------------------------------
              LEFT SUPPORT PANEL
          --------------------------------------- */}
          <SlideIn direction="left" className="h-full">
            <div className="group relative h-full min-h-[380px] overflow-hidden rounded-xl bg-[#101C16] shadow-xl lg:min-h-[520px]">
              <ImageReveal className="absolute inset-0">
                <Image
                  src="/images/hero-worker.webp"
                  alt="SEKEEDO industrial safety footwear at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </ImageReveal>

              {/* Dark gradient for text legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#101C16] via-[#101C16]/50 to-transparent"
                aria-hidden="true"
              />

              {/* Top label */}
              <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  SEKEEDO / Support Desk
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  Here to help
                </span>

                <h3 className="mt-3 max-w-md text-2xl font-bold leading-[1.12] tracking-tight text-white sm:text-3xl">
                  Still need a hand? Our team is here.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                  Can&apos;t find what you&apos;re looking for? Share your
                  requirement and we&apos;ll guide you to the right product.
                </p>

                <Link
                  href="/contact"
                  className="group/cta mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6A00] hover:shadow-lg hover:shadow-brand/30"
                >
                  Talk to our team
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Brand accent */}
              <div
                className="absolute bottom-0 left-0 h-1.5 w-28 bg-brand"
                aria-hidden="true"
              />
            </div>
          </SlideIn>

          {/* ---------------------------------------
              RIGHT FAQ ACCORDION
          --------------------------------------- */}
          <div className="min-w-0">
            <Stagger selector="[data-faq-item]" className="space-y-2.5">
              {items.map((item, index) => {
                const Icon = faqIcons[item.icon];
                const isOpen = open === index;
                const panelId = `home-faq-panel-${index}`;

                return (
                  <div
                    key={item.question}
                    data-faq-item
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
                        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5"
                      >
                        <span className="text-[11px] font-bold tracking-widest text-brand">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors duration-300",
                            isOpen
                              ? "bg-brand text-white"
                              : "bg-brand/10 text-brand",
                          )}
                        >
                          <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                        </span>

                        <span className="flex-1 text-sm font-bold leading-snug text-charcoal transition-colors duration-300 sm:text-base">
                          {item.question}
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
                          <p className="ml-[4.25rem] mr-4 border-l-2 border-brand bg-paper px-4 py-3 text-sm leading-6 text-charcoal/75 sm:ml-[5.25rem] sm:mr-5">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </Stagger>

            <p className="mt-5 text-center text-sm text-muted lg:text-right">
              Have a different question?{" "}
              <Link
                href="/contact"
                className="font-bold text-brand transition-colors hover:text-[#FF6A00]"
              >
                Contact us directly
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Home page entry point for the FAQ preview section. */
export function FaqPreview() {
  return <FaqPreviewAccordion items={homeFaqs} />;
}
