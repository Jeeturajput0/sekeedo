import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  showTagline?: boolean;
};

export function Logo({ className, light = false, showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SEKEEDO home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center bg-forest transition-colors duration-300 group-hover:bg-brand">
        <svg
          viewBox="0 0 36 36"
          className="h-6 w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 2.5 31 8v9.2c0 8-5.3 13.6-13 16.3C10.3 30.8 5 25.2 5 17.2V8L18 2.5Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m11.5 20.5 4.2 4.1 8.8-9.4"
            stroke="#F4512C"
            strokeWidth="2.6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[19px] font-bold tracking-[0.18em] transition-colors",
            light ? "text-white" : "text-charcoal",
          )}
        >
          SEKEEDO
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[9px] font-medium uppercase tracking-[0.28em]",
              light ? "text-white/55" : "text-muted",
            )}
          >
            Safety Footwear
          </span>
        ) : null}
      </span>
    </Link>
  );
}
