import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/lib/data/faqs";

export function FaqPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Answers before you enquire."
          lead="A quick overview of the questions procurement teams and partners ask most often."
        />
        <Accordion items={homeFaqs} idPrefix="home-faq" />
      </div>
    </section>
  );
}
