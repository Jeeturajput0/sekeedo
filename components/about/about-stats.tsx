
"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Factory,
  Layers3,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { FadeIn } from "@/components/motion/reveal";
import { useReducedMotion } from "framer-motion";

const stats = [
  {
    icon: Factory,
    value: 10,
    suffix: "+",
    label: "Industries Served",
    description: "Supporting diverse work environments",
  },
  {
    icon: Layers3,
    value: 50,
    suffix: "+",
    label: "Product Styles",
    description: "Industrial footwear options",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Business Clients",
    description: "Businesses and industry partners",
  },
  {
    icon: CalendarDays,
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description: "Focused on workplace safety",
  },
];

function CountUp({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value, reduceMotion]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-y border-[#EAE7E3] bg-[#F8F8F6] py-12 sm:py-16 lg:py-6"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#F4512C]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-72 w-72 rounded-full bg-[#F4512C]/[0.05] blur-3xl"
      />

      <div className="container-page relative">

        {/* SECTION HEADING */}
        <FadeIn>
          <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mb-12">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#F4512C]" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4512C]">
                  SEKEEDO In Numbers
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#151515] sm:text-3xl lg:text-3xl">
                Our Journey in
                <span className="text-[#F4512C]"> Numbers.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#686D68] sm:text-right">
              Building confidence through industrial safety
              footwear and business-focused solutions.
            </p>
          </div>
        </FadeIn>

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn
                key={stat.label}
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className="
                    group relative flex h-full min-h-[190px]
                    flex-col overflow-hidden rounded-2xl
                    border border-[#EAE7E3] bg-white
                    p-4 shadow-[0_5px_22px_rgba(0,0,0,0.035)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-[#F4512C]/40
                    hover:shadow-[0_16px_35px_rgba(244,81,44,0.10)]
                    sm:min-h-[220px] sm:p-6
                  "
                >

                  {/* TOP ACCENT */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4512C] transition-all duration-500 group-hover:w-full" />

                  {/* ICON + ARROW */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E9] text-[#F4512C] transition-all duration-300 group-hover:bg-[#F4512C] group-hover:text-white sm:h-12 sm:w-12">
                      <Icon
                        size={23}
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

                  {/* NUMBER */}
                  <div className="mt-5">
                    <p className="text-3xl font-extrabold tracking-[-0.05em] text-[#171B18] tabular-nums sm:text-4xl lg:text-[42px]">
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        active={started}
                      />
                    </p>

                    <h3 className="mt-2 text-xs font-extrabold text-[#303530] sm:text-sm">
                      {stat.label}
                    </h3>

                    <p className="mt-1 text-[10px] leading-5 text-[#858983] sm:text-xs">
                      {stat.description}
                    </p>
                  </div>

                </div>
              </FadeIn>
            );
          })}

        </div>
      </div>
    </section>
  );
}
