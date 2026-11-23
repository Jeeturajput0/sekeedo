import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShoeSprite } from "@/components/products/shoe-sprite";

export function BulkCta() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <ShoeSprite position={3} className="absolute right-0 top-0 hidden h-full aspect-square sm:block" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
      <div className="container-page relative z-10 flex min-h-[210px] items-center py-7 sm:min-h-[225px]">
        <div className="max-w-[560px]">
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Looking for <span className="text-brand">Safety Footwear</span> in Bulk?</h2>
          <p className="mt-2 max-w-[420px] text-xs leading-relaxed text-white/85 sm:text-sm">Explore our industrial footwear range or connect with our team for bulk procurement and business enquiries.</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link href="/contact?enquiry=bulk" className="btn-primary min-h-[38px]">Request Bulk Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/become-a-distributor" className="btn-ghost-light min-h-[38px]">Become a Distributor</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
