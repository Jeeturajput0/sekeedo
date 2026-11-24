
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";

const cards = [
  {
    number: "01",
    image: "/images/ind-oil-gas.webp",
    alt: "Industrial process plant with stainless steel piping",
    tag: "INDUSTRIAL WORKFORCE",
    title: "Safety Footwear for Industrial Workforces",
    text: "Durable, protective and comfortable footwear designed for demanding industrial environments.",
    href: "/industries",
  },
  {
    number: "02",
    image: "/images/hero-safety-shoe.jpg",
    alt: "Black industrial safety footwear",
    tag: "PRODUCT PERFORMANCE",
    title: "Comfort, Protection and Performance",
    text: "Footwear solutions developed around long working hours, tough conditions and everyday workplace demands.",
    href: "/technology-safety",
  },
];

export function AboutFeatureCards() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-9">
      <div className="container-page">

        {/* SECTION HEADING */}
        <FadeIn>
          <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">
                SEKEEDO / What We Focus On
              </span>

              <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-charcoal sm:text-3xl lg:text-4xl">
                Built for the demands of{" "}
                <span className="text-brand">real work.</span>
              </h2>
            </div>

            
          </div>
        </FadeIn>

        {/* FEATURE CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">

          {cards.map((card, index) => (
            <FadeIn key={card.number} delay={index * 0.12}>
              <article className="group relative h-full overflow-hidden border border-line bg-white transition-all duration-500 hover:border-brand/40 hover:shadow-xl">

                {/* IMAGE */}
                <Link
                  href={card.href}
                  aria-label={card.title}
                  className="relative block aspect-[16/9] overflow-hidden bg-paper"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* TOP DETAILS */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                    <span className="bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-charcoal">
                      {card.tag}
                    </span>

                    <span className="text-xs font-semibold tracking-widest text-white">
                      {card.number}
                    </span>
                  </div>

                  {/* IMAGE TITLE */}
                  <div className="absolute bottom-0 left-0 max-w-lg p-5 sm:p-7">
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl lg:text-3xl">
                      {card.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand sm:bottom-7 sm:right-7">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>

                  {/* ORANGE ACCENT */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
                </Link>

                {/* CARD CONTENT */}
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <p className="max-w-md text-sm leading-6 text-muted">
                    {card.text}
                  </p>

                  <Link
                    href={card.href}
                    aria-label={`Explore ${card.title}`}
                    className="shrink-0 text-charcoal transition-colors hover:text-brand"
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>

              </article>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}
