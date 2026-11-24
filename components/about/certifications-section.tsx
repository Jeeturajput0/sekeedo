import { FadeIn, TextReveal } from "@/components/motion/reveal";

const focusAreas = [
  { title: "Quality Testing", text: "In-house & third-party" },
  { title: "Material Durability", text: "Work-grade materials" },
  { title: "Fit & Comfort", text: "Field-tested design" },
  { title: "Workplace Suitability", text: "For multiple industries" },
];

export function CertificationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Certifications & Compliance
            </span>
          </FadeIn>
          <div className="mt-6">
            <TextReveal
              as="h2"
              text="Tested, Trusted and Industry Ready"
              highlight={["Industry", "Ready"]}
              className="max-w-[13ch] text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-charcoal"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Our safety footwear is developed with a focus on quality and relevant
              industry standards.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 border-l-2 border-brand bg-paper px-5 py-4 text-xs leading-6 text-muted">
              <span className="font-semibold text-charcoal">BIS-certified products:</span>{" "}
              certification information is shown only for products covered by the
              applicable verified licence. Licence, standard and validity details are
              available on request and are never published here without verification.
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="bg-paper p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
              Key Focus Areas
            </h3>
            <div className="mt-5 divide-y divide-line">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-b-0">
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
