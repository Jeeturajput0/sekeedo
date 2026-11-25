import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How SEKEEDO handles information submitted through this website.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information we collect",
    text: "Enquiry forms on this website collect business contact details and the information you choose to provide, such as company name, email address, phone number and enquiry details. No payment information is collected through this site.",
  },
  {
    title: "How we use information",
    text: "Information is used to respond to enquiries, provide requested product documentation and support business discussions. In this demo, submissions are not sent to a server; the backend integration is a clearly marked placeholder.",
  },
  {
    title: "Sharing and retention",
    text: "Business information is shared only as needed to respond to your enquiry. Retention practices will be published here once confirmed by SEKEEDO.",
  },
  {
    title: "Your choices",
    text: "You may request access to, correction of or deletion of your information by contacting SEKEEDO through the Contact page.",
  },
  {
    title: "Updates",
    text: "This policy is a template placeholder and should be reviewed with legal counsel and updated with verified company practices before publication.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a template placeholder. Replace it with a reviewed policy before publishing the website."
        breadcrumb="Privacy Policy"
      />
      <section className="bg-white py-16 lg:py-16">
        <div className="container-page space-y-8">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.03}>
              <div className="border-b border-line pb-7">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-charcoal">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-muted">{section.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
