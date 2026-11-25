import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonialRows, type Testimonial } from "@/lib/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full min-h-[160px] flex-col rounded-xl border border-[#ff8500]/35 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <div
        className="mt-2 flex gap-0.5 text-[#ff8500]"
        aria-label={`${testimonial.rating} out of 5 stars (demo rating)`}
      >
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-charcoal/80">
        “{testimonial.quote}”
      </p>
      <div className="mt-auto flex items-center gap-2.5 border-t border-line pt-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ff5b00] text-xs font-bold text-white">
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold leading-tight text-charcoal">
            {testimonial.name}
          </p>
          <p className="truncate text-[10px] leading-4 text-charcoal/70">
            {testimonial.role}
          </p>
        </div>
      </div>
      {/* No verified badge: no genuine verification data is supplied. */}
    </article>
  );
}

function TestimonialRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "ltr" | "rtl";
}) {
  // Duplicate records only for seamless looping; they are not extra testimonials.
  const loopItems = [...items, ...items];

  return (
    <div
      className="testimonial-row relative overflow-hidden"
      aria-hidden="false"
    >
      <div
        className={cn(
          "flex w-max items-stretch will-change-transform motion-reduce:animate-none",
          direction === "ltr"
            ? "testimonial-track-ltr"
            : "testimonial-track-rtl",
        )}
      >
        {loopItems.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            aria-hidden={index >= items.length || undefined}
            className="w-[340px] shrink-0 pr-3 sm:w-[320px] sm:pr-4 lg:w-[400px]"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutTestimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-9"
    >
      <div className="container-page">
        <div className="mb-8 max-w-2xl">
          <h2
            id="testimonials-title"
            className="section-title text-charcoal sm:text-3xl"
          >
            What Our Customers Say
          </h2>
          <p className="mt-2 text-sm text-charcoal/70">
            These are demo testimonials only. Replace with verified customer
            reviews before publication.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <TestimonialRow items={testimonialRows[0]} direction="ltr" />
          <TestimonialRow items={testimonialRows[1]} direction="rtl" />
        </div>
      </div>
    </section>
  );
}
