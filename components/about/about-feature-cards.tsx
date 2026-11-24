import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";

const cards = [
  {
    image: "/images/ind-oil-gas.webp",
    alt: "Industrial process plant with stainless steel piping",
    tag: "Industrial workforce",
    title: "Safety Shoes for Industrial Workforces",
    text: "Durable, protective and comfortable footwear for real work environments.",
    href: "/industries",
  },
  {
    image: "/images/hero-safety-shoe.jpg",
    alt: "Black industrial safety boot photographed in low light",
    tag: "Product performance",
    title: "Comfort, Protection and Performance",
    text: "Engineered to support long hours, tough conditions and everyday industrial use.",
    href: "/technology-safety",
  },
];

export function AboutFeatureCards() {
  return (
    <section className="bg-white py-4 lg:py-6">
      <div className="container-page">
        <div className="rounded-xl bg-paper p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <article className="group h-full overflow-hidden border border-line bg-white">
                  <Link
                    href={card.href}
                    className="relative block aspect-[16/10] overflow-hidden"
                    aria-label={card.title}
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" aria-hidden="true" />
                    <span className="absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal">
                      {card.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition-colors duration-300 group-hover:bg-[#FF6A3D]">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
                      <Link href={card.href} className="transition-colors hover:text-brand">
                        {card.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
