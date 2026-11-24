
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Construction,
  Factory,
  FlaskConical,
  Fuel,
  Pickaxe,
  Warehouse,
  Zap,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing & Factories",
    image: "/images/ind-manufacturing.webp",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    title: "Construction & Infrastructure",
    image: "/images/ind-construction.webp",
    href: "/industries/construction-infrastructure",
    icon: Construction,
  },
  {
    title: "Oil, Gas & Energy",
    image: "/images/ind-oil-gas.webp",
    href: "/industries/oil-gas",
    icon: Fuel,
  },
  {
    title: "Warehousing & Logistics",
    image: "/images/ind-warehouse.webp",
    href: "/industries/logistics-warehousing",
    icon: Warehouse,
  },
  {
    title: "Mining & Heavy Industries",
    image: "/images/ind-mining.webp",
    href: "/industries/mining-quarrying",
    icon: Pickaxe,
  },
  {
    title: "Chemical & Pharmaceutical",
    image: "/images/ind-chemical.webp",
    href: "/industries/chemical-petrochemical",
    icon: FlaskConical,
  },
  {
    title: "Electrical & Utilities",
    image: "/images/ind-electrical.webp",
    href: "/industries/electrical-power",
    icon: Zap,
  },
];

export default function IndustriesPreview() {
  return (
    <section className="px-4 py-5 md:px-6 lg:py-6">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-xl bg-[#111B16]">

        {/* Full Width Industrial Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/ind-construction-wide.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Keep Industrial Background Visible */}
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="relative grid min-h-[350px] grid-cols-1 lg:grid-cols-[0.95fr_1.65fr]">

          {/* LEFT DARK DIAGONAL PANEL */}
          <div
            className="relative z-10 flex flex-col justify-center bg-[#101C16] px-6 py-10 md:px-10 lg:px-12 lg:py-8 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-brand" />

              <span className="text-sm font-bold text-brand">
                Industries We Serve
              </span>
            </div>

            <h2 className="max-w-[420px] text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[40px]">
              Trusted Across
              <br />
              Diverse Industries
            </h2>

            <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/85 md:text-base">
              From factories to construction sites, SEKEEDO protects
              professionals across key sectors.
            </p>

            <Link
              href="/industries"
              className="group mt-6 inline-flex min-h-[48px] w-fit items-center gap-3 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#FF6A00] hover:shadow-lg hover:shadow-brand/30"
            >
              Explore Industries

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* RIGHT INDUSTRY IMAGE CARDS */}
          <div className="relative z-10 flex items-center px-5 py-8 md:px-8 lg:px-6 lg:py-6">

            <div className="mx-auto grid w-full max-w-[940px] grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-3">

              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <Link
                    href={industry.href}
                    key={industry.title}
                    aria-label={industry.title}
                    className={`
                      group relative col-span-1 flex h-[145px] flex-col
                      items-center justify-between overflow-hidden
                      rounded-xl border border-white/75 bg-[#222]
                      shadow-lg transition-all duration-500
                      hover:-translate-y-1 hover:border-brand
                      hover:shadow-xl hover:shadow-black/30
                      sm:col-span-3 sm:h-[148px]
                      ${
                        index === 4
                          ? "sm:col-start-2"
                          : index === 5
                            ? "sm:col-start-5"
                            : index === 6
                              ? "sm:col-start-8"
                              : ""
                      }
                    `}
                  >
                    {/* Card Background Image */}
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Image Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-all duration-500 group-hover:from-black/80"
                      aria-hidden="true"
                    />

                    {/* Industry Icon */}
                    <div className="absolute inset-x-0 top-[27%] z-10 flex justify-center">
                      <Icon
                        size={38}
                        strokeWidth={1.7}
                        className="text-white drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:text-[#FF8A6A]"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Industry Title */}
                    <div className="absolute inset-x-2 bottom-2 z-10 flex min-h-[38px] items-center justify-center text-center">
                      <h3 className="max-w-[180px] text-[12px] font-bold leading-[1.15] text-white drop-shadow-lg sm:text-[13px] lg:text-sm">
                        {industry.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
