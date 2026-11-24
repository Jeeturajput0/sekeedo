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
          <FadeIn>
            <span className="eyebrow">Why SEKEEDO</span>
          </FadeIn>
          <div className="mt-5">
            <TextReveal
              as="h2"
              text="A partner your procurement team can rely on."
              className="section-title"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="section-lead">
              We keep the focus on practical value: dependable products, clear communication and a
              wholesale process built around business buyers.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link href="/about" className="btn-link mt-8">
              About SEKEEDO
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-7">
            <ImageReveal className="relative aspect-[3/2] w-full rounded-md bg-paper">
              <Image
                src="/images/ind-construction-wide.webp"
                alt="Safety footwear on an active construction site"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
              />
              <ShoeSprite
                position={0}
                className="absolute left-1/2 top-1/2 aspect-square h-[100%] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent"
                aria-hidden="true"
              />
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
