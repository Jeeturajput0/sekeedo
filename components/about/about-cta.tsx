import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/motion/reveal";

export function AboutCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#151515]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/ind-welding.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#151515]/80" />
      </div>
      <div
        className="absolute right-0 top-0 hidden h-full w-[24%] bg-brand/90 lg:block [clip-path:polygon(100%_0,100%_100%,0_100%)]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-10 py-16 lg:min-h-[420px] lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="relative z-10">
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Get in Touch
            </span>
          </FadeIn>
          <div className="mt-6">
            <TextReveal
              as="h2"
              text="Let's Work Together."
              highlight="Together."
              className="text-[clamp(2.2rem,4.2vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Need safety footwear for your team, project or distribution business?
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?enquiry=bulk" className="btn-primary">
                Request Bulk Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Contact Our Team
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="relative z-10 hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <Image
              src="/images/hero-safety-shoe.jpg"
              alt="Black industrial safety boot"
              fill
              sizes="(max-width: 1024px) 0px, 32vw"
              className="object-cover object-center"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
