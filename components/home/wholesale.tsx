import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FadeIn, ImageReveal, TextReveal } from "@/components/motion/reveal";

const benefits = [
  "Bulk quantity enquiries",
  "Business procurement",
  "Dealer partnerships",
  "Distributor enquiries",
  "Custom requirements",
  "Product catalogue assistance",
];

export function Wholesale() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <div className="relative">
            <ImageReveal className="h-[360px] w-full sm:h-[480px]">
              <Image
                src="/images/wholesale-lockers.webp"
                alt="Organised industrial locker room with protective footwear"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </ImageReveal>
            <div className="absolute -bottom-6 -right-2 hidden w-52 border border-line bg-white p-5 shadow-[0_20px_50px_rgba(22,27,25,0.1)] sm:block lg:-right-6">
              <p className="text-3xl font-semibold tracking-tight text-charcoal">B2B</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Built around business buying, not one-off retail orders.
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="eyebrow">Wholesale & bulk buying</span>
          </FadeIn>
          <div className="mt-5">
            <TextReveal
              as="h2"
              text="Your Workforce. Your Requirements. Our Footwear Solutions."
              className="section-title"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="section-lead">
              Whether you are equipping a new site or consolidating an existing supplier list, we
              make it straightforward to enquire, compare and request a quotation.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5 text-sm text-charcoal/75">
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact?enquiry=bulk" className="btn-primary mt-9">
              Request a Bulk Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
