import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FooterQuotationBanner() {
  return (
    <section aria-labelledby="footer-quotation-title" className="relative isolate overflow-hidden bg-[#111] text-white">
      <Image
        src="/images/footer-quotation-banner.png"
        alt=""
        fill
        sizes="100vw"
        className="z-0 object-cover object-[68%_center] lg:object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(12,13,14,0.96)_0%,rgba(12,13,14,0.9)_42%,rgba(12,13,14,0.25)_72%,rgba(12,13,14,0.05)_100%)]" aria-hidden="true" />
      <div className="container-page relative flex min-h-[550px] items-center py-12 sm:min-h-[560px] lg:min-h-[440px] lg:py-16 xl:min-h-[480px]">
        <div className="relative z-10 max-w-4xl lg:max-w-[62%]">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#ff6a00] sm:text-sm">
            <span className="h-[3px] w-10 bg-[#ff6a00] sm:w-14" aria-hidden="true" />
            Get a Quotation
          </p>
          <h2 id="footer-quotation-title" className="mt-5 text-[clamp(2.75rem,4.5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">
            Looking for Safety Footwear<br className="hidden sm:block" /> <span className="text-[#ff6a00]">in Bulk?</span>
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-white/80 sm:text-base sm:leading-7 lg:text-lg">
            Share your requirement, expected quantity and location. Our team will respond with the right product details and commercial proposal.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact?enquiry=bulk" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#f4512c] px-6 text-sm font-bold text-white transition-colors hover:bg-[#ff6a00] sm:min-h-14 sm:px-8 sm:text-base">
              Request a Quote <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border-2 border-white/90 bg-black/15 px-6 text-sm font-bold text-white transition-colors hover:border-[#ff6a00] hover:bg-[#f4512c] sm:min-h-14 sm:px-8 sm:text-base">
              <Phone className="h-5 w-5" aria-hidden="true" /> Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
