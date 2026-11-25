import Link from "next/link";
import Image from "next/image";
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
      <Image
        src="/images/logo/logo.png"
        alt={showTagline ? "SEKEEDO safety footwear — comfort is important, safety is paramount" : "SEKEEDO Safety Footwear"}
        width={2348}
        height={676}
        className={cn("h-11 w-auto object-contain", light && "bg-charcoal")}
        priority
      />
    </Link>
  );
}
