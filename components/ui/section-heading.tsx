import type { ReactNode } from "react";
import { TextReveal, FadeIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <FadeIn>
            <span className={cn("eyebrow", light && "eyebrow-light")}>{eyebrow}</span>
          </FadeIn>
        ) : null}
        <div className="mt-4">
          <TextReveal
            as="h1"
            text={title}
            className={cn(
              "section-title",
              light && "text-white",
            )}
          />
        </div>
        {lead ? (
          <FadeIn delay={0.1}>
            <p className={cn("section-lead", light && "text-white/60")}>{lead}</p>
          </FadeIn>
        ) : null}
      </div>
      {action ? <FadeIn delay={0.15}>{action}</FadeIn> : null}
    </div>
  );
}
