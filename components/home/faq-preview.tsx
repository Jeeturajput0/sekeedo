import Image from "next/image";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/lib/data/faqs";

export function FaqPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#151515] py-16 lg:py-20">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/business-meeting.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[#151515]/70" />
      </div>

      <div className="container-page relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Answers before you enquire."
          lead="A quick overview of the questions procurement teams and partners ask most often."
          light
        />
        <Accordion items={homeFaqs} idPrefix="home-faq" light />
      </div>
    </section>
  );
}
