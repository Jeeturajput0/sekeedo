import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredIndustries } from "@/lib/data/industries";

export function IndustriesPreview() {
  return (
    <section className="px-4 py-5 sm:px-6 lg:py-6">
      <div className="mx-auto grid max-w-[1320px] gap-4 rounded-xl bg-[#f5f5f5] p-4 sm:p-5 lg:grid-cols-[250px_1fr] lg:items-center lg:gap-3">
        <div className="px-1 lg:px-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand">Industries we serve</p>
          <h2 className="mt-1.5 text-xl font-bold leading-tight tracking-tight text-charcoal">Safety Footwear for <span className="text-brand">Every Industry</span></h2>
          <p className="mt-2 text-xs leading-[1.45] text-charcoal/80">Trusted by a wide range of sectors for workplace safety and performance.</p>
          <Link href="/industries" className="btn-primary mt-3 min-h-[36px] px-4 text-xs">Explore Industries <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4">
          {featuredIndustries.slice(0, 4).map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group relative h-[150px] overflow-hidden rounded-md bg-charcoal sm:h-[168px]">
              <Image src={industry.image} alt={industry.imageAlt} fill sizes="(max-width: 640px) 46vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
              <span className="absolute inset-x-2 bottom-2 text-[11px] font-semibold leading-tight text-white">{industry.name}</span>
            </Link>
          ))}
          <Link href="/industries" aria-label="Previous industries" className="absolute -left-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-charcoal shadow"><ChevronLeft className="h-4 w-4" /></Link>
          <Link href="/industries" aria-label="More industries" className="absolute -right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-charcoal shadow"><ChevronRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
