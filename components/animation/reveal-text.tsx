"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
} from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  scroll?: boolean;
};

/**
 * Masked word reveal: the words slide up from behind a clip while blurring
 * into focus. Renders a span so it can live inside any semantic heading.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  scroll = true,
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      const targets = element.querySelectorAll<HTMLElement>("[data-word]");
      gsap.set(targets, {
        yPercent: 115,
        opacity: 0,
        filter: "blur(10px)",
      });
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.95,
        delay,
        stagger: 0.055,
        ease: "power3.out",
        ...(scroll
          ? {
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          : {}),
      });
    }, element);

    return () => context.revert();
  }, [delay, scroll]);

  return (
    <span ref={ref} className={cn("block", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span data-word className="inline-block">
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
