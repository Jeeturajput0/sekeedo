
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FooterQuotationBanner() {
  return (
    <section
      aria-labelledby="footer-quotation-title"
      className="relative isolate overflow-hidden bg-[#111] text-white mt-2"
    >
      <Image
        src="/images/footer-quotation-banner.png"
        alt=""
        fill
        sizes="100vw"
        className="z-0 object-cover object-[68%_center] lg:object-center"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(12,13,14,0.96)_0%,rgba(12,13,14,0.9)_42%,rgba(12,13,14,0.25)_72%,rgba(12,13,14,0.05)_100%)]"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[380px] items-center py-8 sm:min-h-[400px] lg:min-h-[340px] lg:py-10 xl:min-h-[360px]">

        <div className="relative z-10 max-w-3xl lg:max-w-[58%]">

          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ff6a00] sm:text-xs">
            <span className="h-[2px] w-8 bg-[#ff6a00]" aria-hidden="true" />
            Get a Quotation
          </p>

          <h2
            id="footer-quotation-title"
            className="mt-4 text-[clamp(2rem,3.8vw,4rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white"
          >
            Looking for Safety Footwear
            <br className="hidden sm:block" />
            <span className="text-[#ff6a00]"> in Bulk?</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Share your requirement, expected quantity and location.
            Our team will respond with the right product details
            and commercial proposal.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <Link
              href="/contact?enquiry=bulk"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f4512c] px-5 text-sm font-bold text-white transition-colors hover:bg-[#ff6a00]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/70 bg-black/15 px-5 text-sm font-bold text-white transition-colors hover:border-[#ff6a00] hover:bg-[#f4512c]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact Our Team
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
