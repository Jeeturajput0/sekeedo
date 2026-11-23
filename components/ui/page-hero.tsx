import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevealText } from "@/components/animation/reveal-text";
import { Reveal } from "@/components/animation/reveal";
import { ShoeSprite } from "@/components/products/shoe-sprite";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: number;
  tone?: "light" | "dark";
  breadcrumb?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  tone = "light",
  breadcrumb,
  children,
}: PageHeroProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-forest text-white" : "bg-paper text-ink",
      )}
    >
      {!dark ? <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" /> : null}
      <div className="container-shell relative grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="relative z-10">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs">
              <Link href="/" className={dark ? "text-white/55 hover:text-brand" : "text-muted hover:text-brand"}>
                Home
              </Link>
              <span aria-hidden="true" className={dark ? "text-white/30" : "text-line"}>
                /
              </span>
              <span className={dark ? "text-white/80" : "text-forest"}>{breadcrumb}</span>
            </nav>
          ) : null}

          <span className={cn("eyebrow", dark ? "text-brand" : "text-forest")}>{eyebrow}</span>
          <h1 className={cn("display-lg mt-6 max-w-3xl text-balance", dark && "text-white")}>
            <RevealText text={title} scroll={false} />
          </h1>
          <Reveal delay={0.25} variant="fade">
            <p
              className={cn(
                "mt-7 max-w-xl text-[0.9375rem] leading-[1.8] sm:text-base",
                dark ? "text-white/65" : "text-muted",
              )}
            >
              {description}
            </p>
            {children ? <div className="mt-9">{children}</div> : null}
          </Reveal>
        </div>

        {image ? (
          <Reveal variant="image" className="relative h-[280px] lg:h-[440px]" delay={0.1}>
            {imagePosition !== undefined ? <ShoeSprite position={imagePosition} className="absolute inset-0" /> : <Image src={image} alt={imageAlt ?? ""} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className={cn("object-cover", dark ? "image-graded-dark" : "image-graded")} />}
            <div
              className={cn(
                "absolute inset-0",
                dark
                  ? "bg-gradient-to-t from-forest/50 via-transparent to-transparent"
                  : "bg-gradient-to-t from-paper/20 via-transparent to-transparent",
              )}
              aria-hidden="true"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
