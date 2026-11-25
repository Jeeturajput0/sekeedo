import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/motion/reveal";

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b2b21] text-white">
      <Image
        src="/images/footer-quotation-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] opacity-35 lg:opacity-100"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[#0b2b21]/85 lg:hidden"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 hidden bg-[#0b2b21] lg:block"
        style={{ clipPath: "polygon(0 0, 47% 0, 55% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <SlideIn
        direction="left"
        className="container-page relative flex min-h-[290px] flex-col justify-center py-8 lg:min-h-[215px] lg:py-6"
      >
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-[11px]">
          <Link href="/" className="text-white/55 transition-colors hover:text-brand">
            Home
          </Link><br />
          <span aria-hidden="true" className="text-white/30">
            /
          </span>
          <span className="text-white/85">FAQ</span>
        </nav>

        <span className="eyebrow text-brand">FAQ</span>
        <h1 className="mt-3 max-w-[520px] text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-[0.98] tracking-[-0.05em] text-balance">
          Questions
          <br />
          answered, <span className="text-brand">clearly.</span>
        </h1>
        <p className="mt-3 max-w-[440px] text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
          Get quick answers to common questions about our safety footwear,
          standards, workplace use, care and ordering process.
        </p>
      </SlideIn>
    </section>
  );
}
