import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShoeSprite } from "@/components/products/shoe-sprite";

export function HeroSlider() {
  return (
    <section
      className="relative isolate min-h-[490px] overflow-hidden bg-charcoal sm:min-h-[840px] lg:h-[400px] lg:min-h-0"
      aria-label="Built for the Work That Matters"
    >
      <ShoeSprite position={0} className="absolute right-0 top-1/2 hidden h-full aspect-square -translate-y-1/2 opacity-75 sm:block lg:right-[8%] lg:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/10" aria-hidden="true" />
      <div className="container-page relative flex min-h-[390px] items-center py-12 sm:min-h-[440px] lg:h-full lg:min-h-0">
        <div className="max-w-[560px] text-white">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-white"><span className="h-1 w-12 bg-brand" />Industrial Safety Footwear</p>
          <h1 className="mt-4 text-balance text-[clamp(2.5rem,5vw,3.6rem)] font-bold leading-[1.02] tracking-[-.045em]">Built for the<br />Work That <span className="text-brand">Matters.</span></h1>
          <p className="mt-3 max-w-[420px] text-sm leading-[1.5] text-white/85 sm:text-base">Reliable safety footwear engineered for demanding workplaces. Designed for protection, comfort and long-lasting performance.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary min-h-[42px]">Explore Products <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact?enquiry=bulk" className="btn-ghost-light min-h-[42px]">Request Bulk Quote</Link>
          </div>
          <div className="mt-6 flex gap-1.5" aria-hidden="true"><span className="h-1 w-7 bg-brand"/><span className="h-1 w-6 bg-white/80"/><span className="h-1 w-6 bg-white/40"/></div>
        </div>
      </div>
    </section>
  );
}
