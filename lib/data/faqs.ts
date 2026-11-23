export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  description: string;
  faqs: Faq[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "products",
    title: "Products",
    description: "Catalogue, specifications and availability.",
    faqs: [
      {
        question: "How do I choose the right safety footwear?",
        answer:
          "Start with a hazard assessment of your workplace. Identify risks such as impact, compression, slips, punctures, wet conditions or electrical exposure, then compare those needs with verified product specifications. Our team can help shortlist options once we understand your environment.",
      },
      {
        question: "What product specifications are available?",
        answer:
          "Specifications are published only when they have been verified. The online catalogue shows general product information and placeholder fields; request the current technical data sheet for confirmed construction, sizing and performance details.",
      },
      {
        question: "Can I request a product catalogue?",
        answer:
          "Yes. Send a catalogue request through the contact form or business email. Include your company name, industry and approximate requirement so we can share the most relevant range.",
      },
      {
        question: "How can I enquire about product availability?",
        answer:
          "Share the product names or categories you are interested in, along with sizes and quantities, through the enquiry form. Our team will confirm current availability with verified information.",
      },
    ],
  },
  {
    slug: "safety-certifications",
    title: "Safety & Certifications",
    description: "Standards, documentation and verification.",
    faqs: [
      {
        question: "Are SEKEEDO safety shoes BIS-certified?",
        answer:
          "BIS certification details, applicable IS standards, licence numbers and validity will be published here only after verification. Please request current certification documents directly from SEKEEDO before making a purchasing decision.",
      },
      {
        question: "Do you provide test reports or certificates?",
        answer:
          "Certification and test documentation can be shared for verified products. Specify the product and standard you require when submitting your enquiry.",
      },
      {
        question: "Are all safety footwear features suitable for every industry?",
        answer:
          "No. Footwear selection depends on the specific hazards present at your workplace and on product-specific verified specifications. General guidance on this website is not a suitability claim.",
      },
    ],
  },
  {
    slug: "wholesale-orders",
    title: "Wholesale Orders",
    description: "Bulk purchasing and procurement support.",
    faqs: [
      {
        question: "How can I purchase safety shoes in bulk?",
        answer:
          "Submit a bulk enquiry with your quantity, preferred categories, size breakdown and delivery location. We will respond with available options and next steps.",
      },
      {
        question: "How can I request a wholesale quotation?",
        answer:
          "Use the Request a Quote form or email the wholesale team. Include your company details, estimated volumes and any product references to help us prepare an accurate response.",
      },
      {
        question: "What information is needed for a bulk quotation?",
        answer:
          "Company name, contact details, industry, required product categories, approximate quantities, size distribution, target delivery location and any verification documentation you require.",
      },
    ],
  },
  {
    slug: "distributors",
    title: "Distributors",
    description: "Partnership and dealer enquiries.",
    faqs: [
      {
        question: "How can I become a distributor?",
        answer:
          "Complete the distributor enquiry form with your business details, location and product interests. Our team will review your enquiry and share the current partnership process.",
      },
      {
        question: "Who can partner with SEKEEDO?",
        answer:
          "Footwear dealers, industrial suppliers, safety equipment distributors and procurement businesses with relevant market reach can submit a partnership enquiry.",
      },
    ],
  },
  {
    slug: "shipping-delivery",
    title: "Shipping & Delivery",
    description: "Fulfilment and logistics information.",
    faqs: [
      {
        question: "How are bulk orders delivered?",
        answer:
          "Delivery options and timelines depend on order size, location and product availability. Confirm requirements in your enquiry so the team can outline available options.",
      },
      {
        question: "Can we request a specific delivery schedule?",
        answer:
          "Include any scheduling requirements in your enquiry. They will be reviewed against current availability and logistics options.",
      },
    ],
  },
  {
    slug: "general",
    title: "General Enquiries",
    description: "Business, media and other questions.",
    faqs: [
      {
        question: "How do I contact the SEKEEDO team?",
        answer:
          "Use the contact form, email the relevant business address listed on our Contact page, or reach out through the WhatsApp link provided there.",
      },
      {
        question: "Where can I find verified company information?",
        answer:
          "Company registration, address and contact details will be published on this site once verified. Until then, please request them directly from our team.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((category) => category.faqs);

export const homeFaqs: Faq[] = [
  allFaqs[0],
  allFaqs[4],
  allFaqs[5],
  allFaqs[8],
  allFaqs[2],
  allFaqs[14],
].filter(Boolean);
