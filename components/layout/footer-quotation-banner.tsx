
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FooterQuotationBanner() {
  return (
    <section
      className="relative overflow-hidden bg-[#111111] bg-cover bg-center bg-no-repeat py-14 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(10,10,10,0.75) 0%,
            rgba(10,10,10,0.45) 55%,
            rgba(10,10,10,0.25) 100%
          ),
          url('/images/footer-quotation-banner.png')
        `,
      }}
    >
      <div className="container-page relative grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl">

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Looking for Safety Footwear in{" "}
            <span className="text-[#F4512C]">Bulk?</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            Explore our industrial footwear range or connect with our
            team for bulk procurement and business enquiries.
          </p>

          <Link
            href="/contact?enquiry=bulk"
            className="mt-6 inline-flex min-h-[48px] items-center gap-3 rounded-lg bg-[#F4512C] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#D93F20]"
          >
            Request Bulk Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>

        {/* RIGHT SIDE - STATIC SHOE IMAGE */}
        <div className="relative flex h-[250px] items-center justify-center sm:h-[320px] lg:h-[360px]">

          <div className="relative h-full w-full max-w-[540px]">
            <Image
              src="/images/footerup/fshoes1.png"
              alt="SEKEEDO industrial safety footwear"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
