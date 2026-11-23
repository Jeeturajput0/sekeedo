import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "outline"
  | "light"
  | "ghost-light";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  light: "btn-light",
  "ghost-light": "btn-ghost-light",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn("btn", variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} /> : null}
    </>
  );

  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
