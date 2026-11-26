import { FadeIn, TextReveal } from "@/components/motion/reveal";

const focusAreas = [
  { title: "Quality Testing", text: "In-house & third-party" },
  { title: "Material Durability", text: "Work-grade materials" },
  { title: "Fit & Comfort", text: "Field-tested design" },
  { title: "Workplace Suitability", text: "For multiple industries" },
];

export function CertificationsSection() {
  return (
    <section className="bg-white py-10 lg:py-10">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Certifications & Compliance
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              text="Tested, Trusted and Industry Ready"
              highlight={["Industry", "Ready"]}
              className="section-heading max-w-[13ch] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Our safety footwear is developed with a focus on quality and relevant
              industry standards.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 border-l-2 border-brand bg-paper px-4 py-3.5 text-xs leading-6 text-muted">
              <span className="font-semibold text-charcoal">BIS-certified products:</span>{" "}
              certification information is shown only for products covered by the
              applicable verified licence. Licence, standard and validity details are
              available on request and are never published here without verification.
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="bg-paper p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
              Key Focus Areas
            </h3>
            <div className="mt-4 divide-y divide-line">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-b-0">
                  <span className="text-sm font-medium text-charcoal">{area.title}</span>
                  <span className="text-right text-xs text-muted">{area.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
