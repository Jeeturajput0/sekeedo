"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  immediate?: boolean;
  /** Word(s) to render in the brand orange. */
  highlight?: string | string[];
};

export function TextReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  immediate = false,
  highlight,
}: TextRevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const Tag = as;
  const words = text.split(" ");
  const highlights = Array.isArray(highlight)
    ? highlight
    : highlight
      ? [highlight]
      : [];

  useLayoutEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;

    const { gsap } = getGsap();
    const context = gsap.context(() => {
      const targets = root.current?.querySelectorAll("[data-word]");
      if (!targets?.length) return;

      gsap.fromTo(
        targets,
        { yPercent: 115, opacity: 0, filter: "blur(6px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.045,
          delay,
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: root.current,
                  start: "top 88%",
                  once: true,
                },
              }),
        },
      );
    }, root);

    return () => context.revert();
  }, [delay, immediate]);

  return (
    <div ref={root}>
      <Tag className={className} aria-label={text}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]"
          >
            <span
              data-word
              className={cn(
                "inline-block will-change-transform",
                highlights.some((item) => word.includes(item)) && "text-brand",
              )}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, y = 26 }: FadeInProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      gsap.fromTo(
        root.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 90%", once: true },
        },
      );
    }, root);
    return () => context.revert();
  }, [delay, y]);

  return (
    <div ref={root} className={cn("relative", className)}>
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  selector?: string;
  delay?: number;
  amount?: number;
};

export function Stagger({
  children,
  className,
  selector = "[data-stagger]",
  delay = 0,
  amount = 0.09,
}: StaggerProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      const targets = root.current?.querySelectorAll(selector);
      if (!targets?.length) return;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: isMobile ? 0 : (index) => ([ -24, 0, 24, 0 ][index % 4] ?? 0),
          y: (index) => ([ 12, 24, 12, -18 ][index % 4] ?? 20),
          rotationX: isMobile ? 0 : (index) => (index % 2 ? -2.5 : 2.5),
          rotationY: isMobile ? 0 : (index) => ([ -3, 0, 3, 0 ][index % 4] ?? 0),
          transformPerspective: 1000,
          transformOrigin: "center center",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: amount,
          delay,
          scrollTrigger: { trigger: root.current, start: "top 86%", once: true },
        },
      );
    }, root);
    return () => context.revert();
  }, [amount, delay, selector]);

  return (
    <div ref={root} className={cn("relative", className)}>
      {children}
    </div>
  );
}

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
};

export function ImageReveal({
  children,
  className,
  innerClassName,
  delay = 0,
}: ImageRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      const inner = root.current?.querySelector("[data-image-inner]");
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
      });
      timeline.fromTo(
        root.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: "power3.inOut", delay },
      );
      if (inner) {
        timeline.fromTo(
          inner,
          { scale: 1.08 },
          { scale: 1, duration: 1.4, ease: "power2.out" },
          0,
        );
      }
    }, root);
    return () => context.revert();
  }, [delay]);

  return (
    <div ref={root} className={cn("relative overflow-hidden", className)}>
      <div data-image-inner className={cn("relative h-full w-full", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Parallax({ children, className, strength = 6 }: ParallaxProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      gsap.fromTo(
        root.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: root.current?.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);
    return () => context.revert();
  }, [strength]);

  return (
    <div ref={root} className={cn("relative", className)}>
      {children}
    </div>
  );
}
