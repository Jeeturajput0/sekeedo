
import {
  Handshake,
  Layers3,
  Feather,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { Stagger } from "@/components/motion/reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Workplace Protection",
    text: "Safety-focused footwear for demanding work environments.",
  },
  {
    icon: Layers3,
    title: "Industrial Durability",
    text: "Built with attention to strength, quality and lasting performance.",
  },
  {
    icon: Feather,
    title: "Comfort-Focused Design",
    text: "Designed with everyday workplace comfort in mind.",
  },
  {
    icon: Handshake,
    title: "Wholesale Solutions",
    text: "Business-focused footwear solutions for bulk requirements.",
  },
];

export function ValueStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[#EAE7E3] bg-[#F8F8F6] py-10 sm:py-6">

      <div className="container-page">

        {/* SECTION HEADING */}
        <div className="mb-8 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4512C]">
            Why Choose SEKEEDO
          </span>

          <h2 className="home-heading mt-1 font-extrabold tracking-tight text-[#151515]">
            Built Around Your
            <span className="text-[#F4512C]"> Work Needs.</span>
          </h2>
        </div>

        {/* VALUE CARDS */}
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                data-stagger
                className="
                  group relative flex min-h-[185px]
                  flex-col overflow-hidden rounded-2xl
                  border border-[#EAE7E3] bg-white
                  p-5 shadow-[0_5px_20px_rgba(0,0,0,0.035)]
                  transition-all duration-500
                  hover:-translate-y-1.5
                  hover:border-[#F4512C]/40
                  hover:shadow-[0_14px_30px_rgba(244,81,44,0.09)]
                  sm:p-6
                "
              >

                {/* TOP ACCENT */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4512C] transition-all duration-500 group-hover:w-full" />

                {/* ICON + ARROW */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E9] text-[#F4512C] transition-all duration-300 group-hover:bg-[#F4512C] group-hover:text-white">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-[#C7C7C2] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F4512C]"
                    aria-hidden="true"
                  />

                </div>

                {/* CONTENT */}
                <div className="mt-5">
                  <h3 className="text-base font-extrabold leading-snug text-[#202420]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#777D77] sm:text-sm">
                    {value.text}
                  </p>
                </div>

              </div>
            );
          })}

        </Stagger>
      </div>
    </section>
  );
}
