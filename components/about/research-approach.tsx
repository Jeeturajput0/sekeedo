import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, ImageReveal, TextReveal } from "@/components/motion/reveal";

export function ResearchApproach() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="relative">
          <div className="absolute -bottom-4 -left-4 h-[65%] w-[70%] border-2 border-brand" aria-hidden="true" />
          <ImageReveal className="relative aspect-[4/3] w-full border border-line bg-white">
            <Image
              src="/images/technology-detail.jpg"
              alt="Engineer reviewing product testing and development data"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </ImageReveal>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Our R&D Approach
            </span>
          </FadeIn>
          <div className="mt-6">
            <TextReveal
              as="h2"
              text="Thoughtful Design, Real-World Testing"
              highlight={["Real-World", "Testing"]}
              className="max-w-[13ch] text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              We continuously evaluate materials, design and durability to create
              safety footwear that performs in real industrial conditions.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link href="/technology-safety" className="btn-link mt-8">
              Know More
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
