import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const rows = [
  { label: "Certification status", value: site.certification.status },
  { label: "Applicable standard", value: site.certification.standard },
  { label: "Licence number", value: site.certification.licenceNumber },
  { label: "Validity", value: site.certification.validity },
];

export function CertificationPanel() {
  return (
    <div className="border border-line bg-white">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-line p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <span className="eyebrow text-brand">Compliance</span>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            BIS Certification &amp; Compliance
          </h3>
          <p className="mt-5 text-sm leading-[1.8] text-muted">
            We publish certification information only when it has been verified.
            The fields shown here are placeholders and will be completed with
            confirmed documentation before publication.
          </p>
          <div className="mt-8 flex items-start gap-3 border-t border-line pt-6">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-muted">
              For current certification documents, please contact our team
              directly and request the paperwork for the exact model you are
              evaluating.
            </p>
          </div>
        </div>

        <div className="bg-paper p-7 sm:p-10">
          <div className="flex items-center justify-between border-b border-line pb-5">
            <div className="flex items-center gap-3">
              <FileCheck2 size={18} className="text-forest" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                Verification record
              </span>
            </div>
            <BadgeCheck size={20} className="text-muted/60" aria-hidden="true" />
          </div>
          <dl className="mt-2">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <dt className="text-xs font-medium text-muted">{row.label}</dt>
                <dd className="text-sm font-semibold text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[0.6875rem] leading-relaxed text-muted">
            Placeholder fields — verification pending. No standard, licence
            number, validity date or product-specific compliance claim is made
            on this website.
          </p>
        </div>
      </div>
    </div>
  );
}
