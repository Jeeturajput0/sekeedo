
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Factory,
  Headset,
  Handshake,
} from "lucide-react";

import {
  FadeIn,
  ImageReveal,
  Stagger,
  TextReveal,
} from "@/components/motion/reveal";

const reasons = [
  {
    title: "Reliable Industrial Footwear Solutions",
    text: "A considered catalogue focused on the needs of working environments.",
    icon: ShieldCheck,
  },
  {
    title: "Bulk Procurement Support",
    text: "Structured enquiry support for workforce and project requirements.",
    icon: Truck,
  },
  {
    title: "Product-Focused Quality",
    text: "Clear product information with verified documentation available on request.",
    icon: BadgeCheck,
  },
  {
    title: "Industry-Oriented Footwear",
    text: "Ranges considered against the demands of different sectors.",
    icon: Factory,
  },
  {
    title: "Wholesale Business Support",
    text: "A single point of contact for catalogue, availability and quotations.",
    icon: Headset,
  },
  {
    title: "Distributor Opportunities",
    text: "Partnership pathways for dealers and industrial suppliers.",
    icon: Handshake,
  },
];

export function WhySekeedo() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">

      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">

        {/* =========================================
            LEFT IMAGE - SCROLL THEN STICK
        ========================================== */}

        <div className="relative hidden self-stretch lg:block">

          {/* 
            Image normal scroll ke saath aayegi.
            Full viewport mein visible hone ke baad
            sticky hokar centre mein ruk jayegi.
          */}

          <div className="sticky top-[10vh] h-[80vh] min-h-[480px] max-h-[680px]">

            <FadeIn className="h-full">

              <div className="group relative h-full w-full">

                <ImageReveal className="relative h-full w-full overflow-hidden rounded-2xl bg-[#101C16] shadow-xl">

                  {/* Main Image */}
                  <Image
                    src="/images/ind-construction-wide.webp"
                    alt="Industrial construction workplace"
                    fill
                    sizes="(max-width: 1280px) 50vw, 45vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Dark Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Top Label */}
                  <div className="absolute left-6 top-6 z-10">

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">

                      <span className="h-2 w-2 rounded-full bg-brand" />

                      SEKEEDO / Our Commitment

                    </span>

                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-7 xl:p-9">

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                      Built Around Your Workplace
                    </span>

                    <h3 className="mt-4 max-w-md text-3xl font-bold leading-[1.12] tracking-tight text-white xl:text-4xl">
                      Supporting Every Step of Your Workforce.
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                      Reliable industrial footwear solutions for
                      businesses, professionals and demanding workplaces.
                    </p>

                    <Link
                      href="/industries"
                      className="group/link mt-6 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors duration-300 hover:text-brand"
                    >
                      Explore Industries

                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:border-brand group-hover/link:bg-brand">

                        <ArrowUpRight size={17} />

                      </span>

                    </Link>

                  </div>

                  {/* Orange Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-28 bg-brand" />

                </ImageReveal>

                {/* Decorative Corner */}
                <div
                  className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-br-2xl border-b-4 border-r-4 border-brand xl:-bottom-5 xl:-right-5 xl:h-40 xl:w-40"
                  aria-hidden="true"
                />

              </div>

            </FadeIn>

          </div>

        </div>

        {/* =========================================
            MOBILE IMAGE - NORMAL SCROLL
        ========================================== */}

        <div className="lg:hidden">

          <FadeIn>

            <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-[#101C16] sm:h-[500px]">

              <Image
                src="/images/ind-construction-wide.webp"
                alt="Industrial construction workplace"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 z-10">

                <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  SEKEEDO / Our Commitment
                </span>

              </div>

              <div className="absolute bottom-0 z-10 p-6 sm:p-8">

                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  Built Around Your Workplace
                </span>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
                  Supporting Every Step of Your Workforce.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Reliable industrial footwear solutions for businesses,
                  professionals and demanding workplaces.
                </p>

                <Link
                  href="/industries"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand"
                >
                  Explore Industries
                  <ArrowUpRight size={17} />
                </Link>

              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-24 bg-brand" />

            </div>

          </FadeIn>

        </div>

        {/* =========================================
            RIGHT CONTENT - NORMAL SCROLL
        ========================================== */}

        <div className="relative min-w-0">

          {/* Section Label */}
          <FadeIn>

            <div className="flex items-center gap-3">

              <span className="h-[3px] w-10 bg-brand" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Why Choose SEKEEDO
              </span>

            </div>

          </FadeIn>

          {/* Main Heading */}
          <div className="mt-6">

            <TextReveal
              as="h2"
              text="The Difference Behind Better Work."
              highlight={["Better Work."]}
              className="max-w-[15ch] text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.045em] text-charcoal"
            />

          </div>

          {/* Description */}
          <FadeIn delay={0.15}>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Designed around the practical needs of modern industries,
              with a focus on workplace protection, dependable product
              information and responsive business support.
            </p>

          </FadeIn>

          {/* Reasons List */}
          <Stagger className="mt-9 border-t border-line">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (

                <div
                  key={reason.title}
                  data-stagger
                  className="group relative grid grid-cols-[48px_1fr_24px] items-center gap-4 overflow-hidden border-b border-line px-3 py-7 transition-all duration-500 hover:bg-[#F8F7F5] sm:grid-cols-[58px_1fr_30px] sm:gap-5 sm:px-4 sm:py-8"
                >

                  {/* Hover Background */}
                  <span
                    className="absolute inset-y-0 left-0 w-0 bg-brand/[0.04] transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />

                  {/* Number and Icon */}
                  <div className="relative z-10 flex flex-col items-center gap-2">

                    <span className="text-[10px] font-bold tracking-widest text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-brand group-hover:text-white sm:h-11 sm:w-11">

                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                    </div>

                  </div>

                  {/* Reason Text */}
                  <div className="relative z-10">

                    <h3 className="text-sm font-bold leading-snug text-charcoal transition-colors duration-300 group-hover:text-brand sm:text-base">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                      {reason.text}
                    </p>

                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={19}
                    className="relative z-10 text-[#B5B5B5] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  />

                </div>

              );

            })}

          </Stagger>

          {/* Bottom CTA */}
          <FadeIn delay={0.2}>

            <Link
              href="/about"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#101C16] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:shadow-lg hover:shadow-brand/20"
            >

              Discover SEKEEDO

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />

            </Link>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}
