"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
} from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "image" | "scale" | "stagger";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  stagger = 0.09,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      const scrollTrigger = {
        trigger: element,
        start,
        once: true,
      };

      if (variant === "stagger") {
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]");
        if (!items.length) return;
        gsap.set(items, { opacity: 0, y: 28 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger,
        });
        return;
      }

      if (variant === "image") {
        gsap.fromTo(
          element,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.15,
            delay,
            ease: "power3.inOut",
            scrollTrigger,
          },
        );
        const media = element.querySelector("img");
        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.14 },
            {
              scale: 1,
              duration: 1.5,
              delay,
              ease: "power3.out",
              scrollTrigger,
            },
          );
        }
        return;
      }

      if (variant === "fade") {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay,
            ease: "power2.out",
            scrollTrigger,
          },
        );
        return;
      }

      if (variant === "scale") {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger,
          },
        );
        return;
      }

      gsap.fromTo(
        element,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger,
        },
      );
    }, element);

    return () => context.revert();
  }, [variant, delay, stagger, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
