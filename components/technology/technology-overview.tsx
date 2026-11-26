
import Image from "next/image";
import { Info, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, TextReveal } from "@/components/motion/reveal";

export function TechnologyOverview() {
  return (
    <section className="overflow-hidden bg-[#F7F7F6] py-12 lg:py-9">
      <div className="container-page">

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div>
            <FadeIn>
              <span className="eyebrow">
                Safety Footwear Overview
              </span>
            </FadeIn>

            <div className="mt-4">
              <TextReveal
                as="h2"
                text="The right footwear starts with the right questions."
                highlight="questions."
                className="section-heading max-w-[13ch] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
              />
            </div>

            <FadeIn delay={0.12}>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                Choosing industrial footwear requires more than
                appearance. It means understanding workplace
                hazards, protection requirements and everyday
                working conditions.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="group relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-line bg-paper">
                <Image
                  src="/images/technology-detail.jpg"
                  alt="Engineer reviewing industrial footwear testing data"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  Verified product data
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:border-l lg:border-line lg:pl-10">


            {/* INFORMATION PANEL */}
            <FadeIn delay={0.24}>
              <div className="mt-8 rounded-lg border border-[#FFD9CC] bg-white p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#FFF0EA] text-brand">
                    <Info className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-charcoal">
                      Important Safety Information
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      This page provides a general overview.
                      Always confirm performance documentation
                      against verified documentation for the
                      exact product you intend to purchase.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* BOTTOM LINK */}
            <FadeIn delay={0.3}>
              <Link
                href="/products"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-charcoal"
              >
                Explore Safety Footwear
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
