import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, ImageReveal, Stagger, TextReveal } from "@/components/motion/reveal";
import { ShoeSprite } from "@/components/products/shoe-sprite";

const reasons = [
  {
    title: "Reliable Industrial Footwear Solutions",
    text: "A considered catalogue focused on the needs of working environments.",
  },
  {
    title: "Bulk Procurement Support",
    text: "Structured enquiry support for workforce and project requirements.",
  },
  {
    title: "Product-Focused Quality",
    text: "Clear product information with verified documentation available on request.",
  },
  {
    title: "Industry-Oriented Footwear",
    text: "Ranges considered against the demands of different sectors.",
  },
  {
    title: "Wholesale Business Support",
    text: "A single point of contact for catalogue, availability and quotations.",
  },
  {
    title: "Distributor Opportunities",
    text: "Partnership pathways for dealers and industrial suppliers.",
  },
];

export function WhySekeedo() {
  return (
    <section className="bg-white py-5 lg:py-10">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
         
<FadeIn delay={0.2} className="mt-7">
  <ImageReveal className="group relative h-[520px] w-full overflow-hidden rounded-lg bg-charcoal sm:h-[600px] lg:h-[680px]">
    <Image
      src="/images/ind-construction-wide.webp"
      alt="Industrial safety footwear at a construction workplace"
      fill
      sizes="(max-width: 1024px) 100vw, 45vw"
      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        SEKEEDO / Our Commitment
      </span>

      <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white">
        Supporting Every Step of Your Workforce.
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
        Reliable industrial footwear solutions for businesses,
        professionals and demanding workplaces.
      </p>

      <Link href="/industries" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand">
        Explore Industries <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  </ImageReveal>
</FadeIn>

        </div>

        <Stagger className="border-t border-line">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              data-stagger
              className="group grid grid-cols-[56px_1fr] gap-4 border-b border-line py-6 transition-colors hover:bg-offwhite sm:grid-cols-[80px_1fr] sm:gap-8 sm:px-4"
            >
              <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal transition-colors group-hover:text-brand">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{reason.text}</p>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
