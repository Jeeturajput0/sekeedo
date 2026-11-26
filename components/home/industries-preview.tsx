
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

type Industry = (typeof industries)[number];

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <Link
      href={industry.href}
      aria-label={industry.title}
      className="group relative flex h-[112px] flex-col items-center justify-between overflow-hidden rounded-lg border border-white/70 bg-[#222] shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-black/30 sm:h-[116px]"
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
      <div className="absolute inset-x-0 top-[24%] z-10 flex justify-center">
        <Icon
          size={30}
          strokeWidth={1.7}
          className="text-white drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:text-[#FF8A6A]"
          aria-hidden="true"
        />
      </div>

      {/* Industry Title */}
      <div className="absolute inset-x-1.5 bottom-1.5 z-10 flex min-h-[28px] items-center justify-center text-center">
        <h3 className="max-w-[150px] text-[10px] font-bold leading-[1.15] text-white drop-shadow-lg sm:text-[11px] lg:text-xs">
          {industry.title}
        </h3>
      </div>
    </Link>
  );
}

export default function IndustriesPreview() {
  return (
    <section className="container-page py-5 lg:py-6">
      <div className="relative overflow-hidden rounded-xl bg-[#111B16]">

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

        <div className="relative grid min-h-[300px] grid-cols-1 lg:grid-cols-[0.95fr_1.65fr]">

          {/* LEFT DARK DIAGONAL PANEL */}
          <div
            className="relative z-10 flex flex-col justify-center bg-[#101C16] px-6 py-8 md:px-10 lg:px-12 lg:py-6 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-brand" />

              <span className="text-sm font-bold text-brand">
                Industries We Serve
              </span>
            </div>

            <h2 className="section-heading max-w-[420px] font-bold leading-[1.08] tracking-tight text-white">
              Trusted Across
              <br />
              Diverse Industries
            </h2>

            <p className="mt-4 max-w-[390px] text-sm leading-6 text-white/85 md:text-base">
              From factories to construction sites, SEKEEDO protects
              professionals across key sectors.
            </p>

            <Link
              href="/industries"
              className="group mt-5 inline-flex min-h-[44px] w-fit items-center gap-3 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#FF6A00] hover:shadow-lg hover:shadow-brand/30"
            >
              Explore Industries

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* RIGHT INDUSTRY IMAGE CARDS */}
          <div className="relative z-10 flex items-center px-5 py-6 md:px-8 lg:px-6 lg:py-5">

            <div className="mx-auto flex w-full max-w-[940px] flex-col gap-2.5">
              {/* First row: 4 cards */}
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {industries.slice(0, 4).map((industry) => (
                  <IndustryCard key={industry.title} industry={industry} />
                ))}
              </div>

              {/* Second row: 3 cards, centred */}
              <div className="mx-auto grid w-full max-w-[705px] grid-cols-2 gap-2.5 sm:grid-cols-3">
                {industries.slice(4).map((industry) => (
                  <IndustryCard key={industry.title} industry={industry} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
