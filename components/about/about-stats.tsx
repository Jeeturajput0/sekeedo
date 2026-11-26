
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
      className="relative isolate overflow-hidden border-y border-[#EAE7E3] bg-[#F8F8F6] py-6 sm:py-7"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-56 w-56 rounded-full bg-[#F4512C]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-56 w-56 rounded-full bg-[#F4512C]/[0.05] blur-3xl"
      />

      <div className="container-page relative">
        {/* SECTION HEADING */}
        <FadeIn>
          <div className="mb-4 flex flex-col justify-between gap-2.5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className="h-[3px] w-7 rounded-full bg-[#F4512C]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4512C]">
                  SEKEEDO In Numbers
                </span>
              </div>

              <h2 className="section-heading font-extrabold tracking-tight text-[#151515]">
                Our Journey in
                <span className="text-[#F4512C]"> Numbers.</span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-5 text-[#686D68] sm:text-right">
              Building confidence through industrial safety footwear and
              business-focused solutions.
            </p>
          </div>
        </FadeIn>

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
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
                    group relative flex h-full min-h-[130px]
                    flex-col overflow-hidden rounded-2xl
                    border border-[#EAE7E3] bg-white
                    p-3.5 shadow-[0_4px_18px_rgba(0,0,0,0.03)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#F4512C]/40
                    hover:shadow-[0_12px_26px_rgba(244,81,44,0.10)]
                    sm:min-h-[136px]
                  "
                >

   
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4512C] transition-all duration-500 group-hover:w-full" />

                  {/* ICON + ARROW */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0E9] text-[#F4512C] transition-all duration-300 group-hover:bg-[#F4512C] group-hover:text-white sm:h-10 sm:w-10">
                      <Icon
                        size={19}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[#C7C7C2] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F4512C]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* NUMBER */}
                  <div className="mt-2.5">
                    <p className="text-[28px] font-extrabold leading-none tracking-[-0.05em] text-[#171B18] tabular-nums sm:text-[32px]">
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        active={started}
                      />
                    </p>

                    <h3 className="mt-1.5 text-[11px] font-extrabold text-[#303530] sm:text-xs">
                      {stat.label}
                    </h3>

                    <p className="mt-0.5 text-[10px] leading-4 text-[#858983] sm:text-[11px]">
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
