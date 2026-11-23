import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileCheck2, LockKeyhole } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/motion/reveal";

const fields = [
  { label: "Applicable IS standard", value: "To be confirmed" },
  { label: "BIS licence number", value: "To be confirmed" },
  { label: "Certification validity", value: "To be confirmed" },
  { label: "Product scope", value: "To be confirmed" },
];

export function Compliance() {
  return (
    <section className="bg-charcoal py-20 text-white lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <FadeIn>
            <span className="eyebrow">Certification & compliance</span>
          </FadeIn>
          <div className="mt-5">
            <TextReveal
              as="h2"
              text="Documentation you can verify."
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em]"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              We believe trust starts with accurate information. BIS certification details and
              product-specific compliance documents will be published here once verified. Until
              then, request current documentation directly from our team.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?enquiry=certification" className="btn-primary">
                Request documentation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/technology-safety" className="btn-light">
                Explore safety information
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 flex items-start gap-3 text-xs leading-6 text-white/45">
              <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              No standard numbers, licence details or validity dates are published until confirmed.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <span className="grid h-11 w-11 place-items-center border border-brand/40 text-brand">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">Certification record</p>
                <p className="text-xs text-white/45">Placeholder fields — awaiting verification</p>
              </div>
            </div>
            <dl className="mt-2">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-sm last:border-0"
                >
                  <dt className="text-white/55">{field.label}</dt>
                  <dd className="text-right font-medium text-white/85">{field.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-6 text-xs text-white/50">
              <BadgeCheck className="h-4 w-4 text-brand" aria-hidden="true" />
              Verified details will replace placeholders before publication.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
