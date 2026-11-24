
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Construction,
  Fuel,
  Warehouse,
  Pickaxe,
  FlaskConical,
  Zap,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing & Factories",
    image: "/images/industries/manufacturing.jpg",
    icon: Factory,
  },
  {
    title: "Construction & Infrastructure",
    image: "/images/industries/construction.jpg",
    icon: Construction,
  },
  {
    title: "Oil, Gas & Energy",
    image: "/images/industries/oil-gas.jpg",
    icon: Fuel,
  },
  {
    title: "Warehousing & Logistics",
    image: "/images/industries/warehouse.jpg",
    icon: Warehouse,
  },
  {
    title: "Mining & Heavy Industries",
    image: "/images/industries/mining.jpg",
    icon: Pickaxe,
  },
  {
    title: "Chemical & Pharmaceutical",
    image: "/images/industries/chemical.jpg",
    icon: FlaskConical,
  },
  {
    title: "Electrical & Utilities",
    image: "/images/industries/electrical.jpg",
    icon: Zap,
  },
];

export default function IndustriesPreview() {
  return (
    <section className="px-4 py-12 md:px-6 lg:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#111B16]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/industries/industrial-bg.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative grid min-h-[340px] grid-cols-1 lg:grid-cols-[0.85fr_1.65fr]">

          {/* Left Panel */}
          <div className="relative z-10 flex flex-col justify-center bg-[#102019]/95 px-6 py-10 md:px-10 lg:px-12">

            {/* Yellow Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#FFC400]" />

              <span className="text-sm font-semibold text-[#FFC400]">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-lg text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Trusted Across
              <br />
              Diverse Industries
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-6 text-white/80 md:text-base">
              From factories to construction sites, SEKEEDO
              protects professionals across key sectors.
            </p>

            {/* Button */}
            <Link
              href="/industries"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F58A00] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FF6B00] hover:shadow-lg hover:shadow-orange-500/20"
            >
              Explore Industries
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Cards */}
          <div className="relative z-10 flex items-center px-5 py-8 md:px-8 lg:px-6">
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">

              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <Link
                    href="/industries"
                    key={industry.title}
                    className={`group relative flex h-[145px] items-end overflow-hidden rounded-xl border border-white/30 bg-[#222] bg-cover bg-center shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#FFC400] sm:h-[155px] ${
                      index >= 4
                        ? "sm:col-span-1"
                        : ""
                    }`}
                    style={{
                      backgroundImage: `url('${industry.image}')`,
                    }}
                  >
                    {/* Card Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition duration-500 group-hover:from-black/90" />

                    {/* Icon */}
                    <div className="absolute inset-x-0 top-5 flex justify-center">
                      <Icon
                        size={38}
                        strokeWidth={1.8}
                        className="text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:text-[#FFC400]"
                      />
                    </div>

                    {/* Card Title */}
                    <div className="relative z-10 w-full px-2 pb-4 text-center">
                      <h3 className="text-sm font-bold leading-tight text-white drop-shadow-md sm:text-base">
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
