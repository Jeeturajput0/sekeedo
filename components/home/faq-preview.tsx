
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Factory,
  Headphones,
  Layers,
  Package,
  ShieldCheck,
  Truck,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

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

const features = [
  {
    icon: BadgeCheck,
    title: "Certified",
    subtitle: "Quality",
  },
  {
    icon: Package,
    title: "Bulk",
    subtitle: "Supply",
  },
  {
    icon: Headphones,
    title: "Expert",
    subtitle: "Support",
  },
];

type RevealDirection = "left" | "right" | "up";

const revealVariants = {
  hidden: (direction: RevealDirection) => ({
    opacity: 0,
    x: direction === "left" ? -64 : direction === "right" ? 64 : 0,
    y: direction === "up" ? 40 : 0,
  }),
  visible: { opacity: 1, x: 0, y: 0 },
};

/** Scroll-triggered reveal used only by the home page FAQ section. */
function Reveal({
  direction,
  className,
  children,
}: {
  direction: RevealDirection;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      custom={direction}
      variants={revealVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type FaqPreviewAccordionProps = {
  items: HomeFaq[];
};

export function FaqPreviewAccordion({
  items,
}: FaqPreviewAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 lg:py-6">

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F4512C]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#F4512C]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* SECTION HEADING - bottom to top */}
        <Reveal direction="up" className="mb-10 lg:mb-12">
          <span className="eyebrow">Frequently asked questions</span>

          <h2 className="section-title mt-4 sm:text-3xl">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>

          <p className="section-lead">
            Quick answers to common queries from our business and industry
            partners.
          </p>
        </Reveal>

        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">

          {/* LEFT IMAGE PANEL - left to right */}
          <Reveal
            direction="left"
            className="relative isolate overflow-hidden rounded-[24px] border border-[#F0EAE5] bg-[#F4512C] shadow-[0_15px_45px_rgba(0,0,0,0.10)]"
          >

            {/* Main Image */}
            <div className="relative h-[300px] overflow-hidden sm:h-[390px] lg:h-[410px]">

              <Image
                src="/images/hero-safety-shoe.jpg"
                alt="SEKEEDO industrial safety footwear"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Small Brand Label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/30 px-4 py-2 text-xs font-bold tracking-wider text-white backdrop-blur-md">
                SEKEEDO INDUSTRIAL SAFETY
              </div>
            </div>

            {/* Orange Bottom Feature Panel */}
            <div className="relative z-10 -mt-7 rounded-t-[48%_18px] bg-gradient-to-br from-[#FF6A00] to-[#E9471F] px-3 pb-6 pt-10 sm:px-5">

              <div className="grid grid-cols-3 divide-x divide-white/40">

                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex flex-col items-center px-2 text-center text-white"
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.8}
                        className="mb-2"
                      />

                      <span className="text-sm font-extrabold sm:text-base">
                        {feature.title}
                      </span>

                      <span className="text-sm font-bold">
                        {feature.subtitle}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>
          </Reveal>

          {/* RIGHT FAQ ACCORDION - right to left */}
          <Reveal direction="right" className="min-w-0">

            <div className="mb-5">
              <h4 className="text-xl font-extrabold text-[#151515] sm:text-2xl">
                Common Questions
              </h4>

              <p className="mt-1 text-sm text-[#737873]">
                Everything you need to know before enquiring.
              </p>
            </div>

            <div className="space-y-2.5">

              {items.map((item, index) => {
                const Icon = faqIcons[item.icon];
                const isOpen = open === index;
                const panelId = `home-faq-panel-${index}`;

                return (
                  <div
                    key={item.question}
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-300",
                      isOpen
                        ? "border-[#F4512C] bg-white shadow-[0_10px_28px_rgba(244,81,44,0.12)]"
                        : "border-[#EAEAE7] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.045)] hover:border-[#F4512C]/40 hover:shadow-md",
                    )}
                  >

                    {/* QUESTION */}
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpen(isOpen ? null : index)
                        }
                        className={cn(
                          "flex w-full items-center gap-3 px-4 py-4 text-left transition-colors duration-300 sm:gap-4 sm:px-5 sm:py-[17px]",
                          isOpen
                            ? "bg-[#F4512C] text-white"
                            : "bg-white text-[#171B18]",
                        )}
                      >

                        {/* Icon */}
                        <span
                          className={cn(
                            "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors",
                            isOpen
                              ? "bg-white/20 text-white"
                              : "bg-[#FFF0E9] text-[#F4512C]",
                          )}
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.9}
                            aria-hidden="true"
                          />
                        </span>

                        {/* Question Text */}
                        <span className="flex-1 text-sm font-extrabold leading-snug sm:text-base">
                          {item.question}
                        </span>

                        {/* Arrow */}
                        <span className="grid h-8 w-8 shrink-0 place-items-center">
                          {isOpen ? (
                            <ChevronUp size={22} />
                          ) : (
                            <ChevronDown size={22} />
                          )}
                        </span>
                      </button>
                    </h3>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mx-3 my-3 rounded-xl bg-[#FFF3EC] px-4 py-4 text-sm leading-6 text-[#454743] sm:mx-4 sm:px-5 sm:py-4">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}

            </div>

            {/* VIEW ALL FAQ */}
            <div className="mt-6 flex justify-center lg:justify-end">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 border-b-2 border-[#F4512C] pb-1 text-base font-extrabold text-[#F4512C] transition-colors hover:text-[#D93F20]"
              >
                View all FAQs

                <ArrowUpRight
                  size={21}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Home page entry point for the FAQ preview section. */
export function FaqPreview() {
  return <FaqPreviewAccordion items={homeFaqs} />;
}
