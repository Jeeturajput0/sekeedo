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
import { cn } from "@/lib/utils";

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
    <section className="px-4  md:px-6 lg:py-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#111B16]">
        {/* Full-width industrial backdrop */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/ind-construction-wide.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#0B1712]/70" />
        </div>

        <div className="relative grid min-h-[340px] grid-cols-1 lg:grid-cols-[0.85fr_1.65fr]">
          {/* Left panel */}
          <div className="relative z-10 flex flex-col justify-center bg-[#101C16]/95 px-6 py-10 md:px-10 lg:px-12 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-brand" />
              <span className="text-sm font-semibold text-brand">
                Industries We Serve
              </span>
            </div>

            <h2 className="max-w-none text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[36px]">
              Trusted Across
              <br />
              Diverse Industries
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/80 md:text-base">
              From factories to construction sites, SEKEEDO protects
              professionals across key sectors.
            </p>

            <Link
              href="/industries"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FF6A3D] hover:shadow-lg hover:shadow-brand/20"
            >
              Explore Industries
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Image cards */}
          <div className="relative z-10 flex items-center px-5 py-8 md:px-8 lg:px-6">
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Link
                    href={industry.href}
                    key={industry.title}
                    aria-label={industry.title}
                    className={cn(
                      "group relative flex h-[145px] items-end overflow-hidden rounded-xl border border-white/25 bg-[#222] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-brand sm:h-[155px]",
                      index === 4 && "sm:col-start-2",
                    )}
                  >
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 transition duration-500 group-hover:from-black/80" aria-hidden="true" />

                    <div className="absolute inset-x-0 top-5 flex justify-center">
                      <Icon
                        size={38}
                        strokeWidth={1.8}
                        className="text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:text-[#FF8A6A]"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="relative z-10 w-full px-2 pb-4 text-center">
                      <h3 className="text-[13px] font-bold leading-tight text-white drop-shadow-md sm:text-sm">
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
