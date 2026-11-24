"use client";

import type { PointerEvent, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Small pointer attraction for desktop buttons; static for touch and reduced motion. */
export function MagneticButton({
  children,
  className,
  strength = 5,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduceMotion = useReducedMotion();

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  }

  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <div
      className={cn("inline-flex transition-transform duration-200 ease-out", className)}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
