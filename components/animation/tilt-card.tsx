"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Lightweight pointer-driven depth effect. Touch and reduced-motion users get a static card. */
export function TiltCard({
  children,
  className,
  tilt = 5,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const bounds = useRef<DOMRect | null>(null);
  const frame = useRef<number | null>(null);
  const point = useRef({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  function handleEnter(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    bounds.current = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transition = "transform 180ms ease-out";
  }

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !bounds.current) return;
    point.current = { x: event.clientX, y: event.clientY };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      const element = ref.current;
      const rect = bounds.current;
      if (!element || !rect) return;
      const x = (point.current.x - rect.left) / rect.width - 0.5;
      const y = (point.current.y - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(1000px) rotateX(${-y * tilt}deg) rotateY(${x * tilt}deg) translateY(-3px)`;
      frame.current = null;
    });
  }

  function handleLeave(event: React.PointerEvent<HTMLDivElement>) {
    bounds.current = null;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    event.currentTarget.style.transition = "transform 420ms cubic-bezier(.2,.75,.25,1)";
    event.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return <div ref={ref} className={cn("relative h-full transform-gpu [transform-style:preserve-3d] motion-reduce:transform-none", className)} onPointerEnter={handleEnter} onPointerMove={handleMove} onPointerLeave={handleLeave}>{children}</div>;
}
