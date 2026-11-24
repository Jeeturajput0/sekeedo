import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { FadeIn, ImageReveal, TextReveal } from "@/components/motion/reveal";

export function DistributorPreview() {
  return (
    <section className="bg-offwhite py-16 lg:py-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <FadeIn>
              <span className="eyebrow">Partner with SEKEEDO</span>
            </FadeIn>
            <div className="mt-5">
              <TextReveal
                as="h2"
                text="For distributors who know their market."
                className="section-title"
              />
            </div>
            <FadeIn delay={0.1}>
              <p className="section-lead">
                Footwear dealers, industrial suppliers and safety equipment distributors are invited to
                explore a partnership with SEKEEDO. Share your business details and our team will
                outline the current process.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/become-a-distributor" className="btn-dark">
                  Become a Distributor
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/products" className="btn-outline">
                  View product portfolio
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <ImageReveal className="h-[340px] w-full sm:h-[440px]">
              <Image
                src="/images/ind-warehouse-aisle.webp"
                alt="High-bay warehouse distribution centre"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-forest/20" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white px-5 py-4 text-charcoal shadow-lg sm:bottom-8 sm:left-8">
                <TrendingUp className="h-5 w-5 text-brand" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold">Wholesale opportunities</p>
                  <p className="text-[11px] text-muted">Details shared on enquiry</p>
                </div>
              </div>
            </ImageReveal>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
