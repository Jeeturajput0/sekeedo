"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  gsap,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
} from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  amount?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  amount = 8,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element.querySelector("img"),
        { yPercent: -amount, scale: 1.12 },
        {
          yPercent: amount,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 70vw"
        className={cn("object-cover image-graded", imageClassName)}
      />
    </div>
  );
}
