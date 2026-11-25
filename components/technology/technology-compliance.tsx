import { FileCheck2, Info, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

const rows = [
  { label: "Certification Status", value: site.certification.status },
  { label: "Applicable Standard", value: site.certification.standard },
  { label: "License / Certificate", value: site.certification.licenceNumber },
  { label: "Validity", value: site.certification.validity },
];

export function TechnologyCompliance() {
  return (
    <section className="bg-white py-14 lg:py-9">
      <div className="container-page">
        <SectionHeading
          eyebrow="BIS Standards & Compliance"
          title="Verified standards. Clear information."
          lead="Applicable standards and certification details will be available when verified."
        />

        <FadeIn className="mt-9">
          <div className="grid border rounded-2xl border-line bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <span className="eyebrow text-brand">Compliance</span>
              <h5 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-[28px]">
                BIS Certification &amp; Compliance
              </h5>
              <p className="mt-4 text-sm leading-6 text-muted">
                We publish certification information only when it has been verified. The table shows
                typical details that may be shared for applicable products.
              </p>
              <div className="mt-6 flex gap-3 border border-[#FFD9CC] bg-[#FFF3EF] p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-xs leading-6 text-charcoal/75">
                  For model-specific certification, please review the product documentation or
                  contact our team.
                </p>
              </div>
            </div>

            <div className="bg-paper rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 rounded-2xl border-b border-line pb-4">
                <FileCheck2 className="h-4 w-4 text-brand" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
                  Verification Record
                </span>
              </div>
              <dl>
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex rounded-2xl items-center justify-between gap-4 border-b border-line py-3.5 text-xs sm:text-sm"
                  >
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-right font-semibold text-charcoal">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-start gap-2 text-[11px] leading-5 text-muted">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                Verification details will be updated here once product-specific documentation is
                available.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
