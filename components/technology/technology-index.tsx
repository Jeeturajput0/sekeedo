import {
  Activity,
  Check,
  Crosshair,
  Droplets,
  Feather,
  Footprints,
  Layers,
  Scan,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/reveal";
import { technologies, type TechnologyIcon } from "@/lib/data/technologies";

const iconMap: Record<TechnologyIcon, typeof Shield> = {
  shield: Shield,
  footprints: Footprints,
  crosshair: Crosshair,
  droplet: Droplets,
  feather: Feather,
  waves: Waves,
  activity: Activity,
  zap: Zap,
  layers: Layers,
  scan: Scan,
  sparkles: Sparkles,
  check: Check,
};

export function TechnologyIndex() {
  return (
    <section id="technology-index" className="scroll-mt-24 bg-paper py-14 lg:py-18">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technology Index"
          title="The elements behind industrial footwear."
          lead="Explore the construction and protection considerations that inform a responsible specification."
        />

        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.slug}
                data-stagger
                className="group flex h-full rounded-2xl flex-col border border-line bg-white p-5 shadow-[0_2px_12px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-9 w-9 place-items-center bg-[#FFF0EA] text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold leading-snug text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted">{item.summary}</p>
              </article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
