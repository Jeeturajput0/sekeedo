
"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Factory,
  Layers3,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/reveal";

const stats = [
  { icon: Factory, value: 10, suffix: "+", label: "Industries Served" },
  { icon: Layers3, value: 50, suffix: "+", label: "Product Styles" },
  { icon: Users, value: 500, suffix: "+", label: "Business Clients" },
  { icon: CalendarDays, value: 5, suffix: "+", label: "Years of Experience" },
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

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value]);

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
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="border-y border-line bg-white py-7 sm:py-9"
    >
      <div className="container-page">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn
                key={stat.label}
                delay={index * 0.08}
                className="flex flex-col items-center text-center lg:border-l lg:border-line first:lg:border-l-0"
              >
                <Icon
                  className="h-6 w-6 text-brand"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-charcoal tabular-nums sm:text-4xl">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    active={started}
                  />
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-xs">
                  {stat.label}
                </p>
              </FadeIn>
            );
          })}

        </div>
      </div>
    </section>
  );
}
