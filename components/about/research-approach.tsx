
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Microscope,
  ShieldCheck,
  Layers3,
} from "lucide-react";
import {
  FadeIn,
  ImageReveal,
  Parallax,
  TextReveal,
} from "@/components/motion/reveal";

const researchPoints = [
  {
    icon: Layers3,
    title: "Material Evaluation",
    description: "Exploring materials for workplace performance.",
  },
  {
    icon: ShieldCheck,
    title: "Product Durability",
    description: "Evaluating construction and long-term usability.",
  },
  {
    icon: Microscope,
    title: "Design & Development",
    description: "Refining footwear design for industrial needs.",
  },
];

export function ResearchApproach() {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F4] py-10 sm:py-12 lg:py-14">

      {/* Subtle Background Accent */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* LEFT IMAGE SECTION */}
          <FadeIn className="relative">

            <div className="relative">

              {/* Image */}
              <ImageReveal className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-[#17221C] shadow-xl">
                <Parallax className="absolute inset-[-7%]" strength={3}>
                  <Image
                    src="/images/technology-detail.jpg"
                    alt="Engineer reviewing product testing and development data"
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </Parallax>
              </ImageReveal>

              {/* Image Bottom Gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
                  <Microscope size={20} />
                </span>

                <div>
                  <p className="text-xs font-bold text-white">
                    Research & Development
                  </p>
                  <p className="mt-1 text-[10px] text-white/70">
                    Design • Materials • Performance
                  </p>
                </div>
              </div>

              {/* Orange Decorative Shape */}
              <div
                className="absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-br-2xl border-b-4 border-r-4 border-brand sm:-bottom-5 sm:-right-5 sm:h-44 sm:w-44"
                aria-hidden="true"
              />

            </div>

            {/* Floating Corner Detail */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white bg-white px-5 py-4 shadow-lg sm:block lg:-right-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                Our Focus
              </p>
              <p className="mt-1 text-lg font-bold text-charcoal">
                Better Footwear
              </p>
              <span className="mt-1 block h-1 w-10 rounded-full bg-brand" />
            </div>

          </FadeIn>

          {/* RIGHT CONTENT SECTION */}
          <div className="relative">

            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-10 bg-brand" />

                <span className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                  Our R&D Approach
                </span>
              </div>
            </FadeIn>

            <div className="mt-4">
              <TextReveal
                as="h2"
                text="Thoughtful Design, Real-World Testing"
                highlight={["Real-World", "Testing"]}
                className="section-heading max-w-[15ch] font-bold leading-[1.08] tracking-[-0.045em] text-charcoal"
              />
            </div>

            <FadeIn delay={0.1}>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                We continuously evaluate materials, design and durability
                to create safety footwear that performs in real industrial
                conditions.
              </p>
            </FadeIn>

            {/* Research Highlights */}
            <div className="mt-6 space-y-3.5 border-t border-[#DDDEDA] pt-5">

              {researchPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <FadeIn key={point.title} delay={0.12 + index * 0.08}>
                    <div className="group flex items-start gap-4">

                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div className="pt-0.5">
                        <h3 className="text-sm font-bold text-charcoal sm:text-base">
                          {point.title}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-muted sm:text-sm">
                          {point.description}
                        </p>
                      </div>

                    </div>
                  </FadeIn>
                );
              })}

            </div>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <Link
                href="/technology-safety"
                className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6A00] hover:shadow-lg"
              >
                Explore Our Technology

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
