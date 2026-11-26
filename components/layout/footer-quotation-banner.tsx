
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Layers3,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    label: "Quality Focused",
  },
  {
    icon: Layers3,
    label: "Bulk Supply",
  },
  {
    icon: Handshake,
    label: "Business Support",
  },
];

export function FooterQuotationBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111111]">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/footer-quotation-banner.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090909]/95 via-[#111111]/85 to-[#111111]/45" />

      {/* Orange accent */}
      <div className="absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-[#F4512C]/15 blur-[100px]" />

      <div className="container-page relative grid items-center gap-6 py-12 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-16">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#F4512C]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4512C]">
              SEKEEDO Industrial Footwear
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[52px]">
            The Right Safety
            <br />
            Footwear for{" "}
            <span className="text-[#F4512C]">Your Workforce.</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Explore our industrial footwear range and connect with
            our team for bulk procurement, business enquiries
            and distribution opportunities.
          </p>

          {/* FEATURES */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2.5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F4512C]/30 bg-[#F4512C]/10">
                    <Icon
                      size={18}
                      className="text-[#F4512C]"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-xs font-semibold text-white/85 sm:text-sm">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?enquiry=bulk"
              className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#F4512C] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#F4512C]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D93F20]"
            >
              Request Bulk Quote

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/products"
              className="text-sm font-semibold text-white/75 transition-colors hover:text-[#F4512C]"
            >
              Explore Catalogue
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT PRODUCT IMAGE */}
        <div className="relative mx-auto flex h-[230px] w-full max-w-[540px] items-center justify-center sm:h-[300px] lg:h-[350px]">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-48 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4512C]/15 blur-[75px]" />

          {/* Ground shadow */}
          <div className="absolute bottom-8 left-1/2 h-7 w-3/4 -translate-x-1/2 rounded-full bg-black/70 blur-xl" />

          <div className="relative h-full w-full transition-transform duration-700 hover:scale-105">
            <Image
              src="/images/footerup/fshoes1.png"
              alt="SEKEEDO industrial safety footwear"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

  <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#F4512C] to-transparent" />
    </section>
  );
}
