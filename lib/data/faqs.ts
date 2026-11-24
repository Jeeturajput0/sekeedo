export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategoryIcon =
  | "product"
  | "shield"
  | "workplace"
  | "maintenance"
  | "ordering"
  | "general";

export type FaqCategory = {
  slug: string;
  title: string;
  description: string;
  icon: FaqCategoryIcon;
  faqs: Faq[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "products",
    title: "Product",
    description: "FAQs about our products & range",
    icon: "product",
    faqs: [
      {
        question: "What types of safety shoes does SEKEEDO offer?",
        answer:
          "We offer a wide range of industrial safety footwear including steel toe, composite toe, waterproof, slip-resistant, anti-static and other application-specific models for different workplace needs.",
      },
      {
        question: "What materials are used in SEKEEDO safety footwear?",
        answer:
          "Our footwear is made with carefully selected leather and synthetic uppers, reinforced toe caps and slip-resistant soles. Materials vary by model, so request the technical data sheet for confirmed specifications.",
      },
      {
        question: "Do you offer customised footwear?",
        answer:
          "Yes. For bulk and corporate requirements we can discuss customisation options such as branding, colour and packaging, subject to minimum quantities and feasibility.",
      },
      {
        question: "Are your safety shoes suitable for all industries?",
        answer:
          "Our range is designed for a wide variety of industrial environments. Suitability depends on the hazards present at your workplace, so we recommend sharing your requirements with our team before selecting a model.",
      },
    ],
  },
  {
    slug: "safety-certification",
    title: "Safety & Certification",
    description: "Standards, testing & compliance",
    icon: "shield",
    faqs: [
      {
        question: "Are SEKEEDO safety shoes BIS or ISI certified?",
        answer:
          "Yes, our safety footwear is designed and tested as per applicable Bureau of Indian Standards (BIS) / ISI requirements and other relevant safety standards, as mentioned on the product documentation.",
      },
      {
        question: "Do you provide test reports or certification?",
        answer:
          "Yes. Test reports and relevant certification documents can be shared on request for the specific product and standard you require.",
      },
      {
        question: "Is toe protection mandatory in industrial safety footwear?",
        answer:
          "Toe protection is essential wherever impact and compression hazards are present. The right type of toe cap depends on your workplace risk assessment and the applicable standard.",
      },
    ],
  },
  {
    slug: "workplace-use",
    title: "Workplace Use",
    description: "Suitability for different work environments",
    icon: "workplace",
    faqs: [
      {
        question: "Which safety footwear is right for me?",
        answer:
          "The right choice depends on your workplace hazards, such as impact, compression, slipping, chemicals, or electrical risks. Our team can help you select the most suitable model based on your work environment.",
      },
      {
        question: "Can I use these shoes for outdoor work?",
        answer:
          "Yes, many of our models are suited to outdoor use. Share the surfaces, weather conditions and tasks involved so we can recommend a suitable option.",
      },
      {
        question: "Are they suitable for long working hours?",
        answer:
          "Comfort and support vary by model. For long shifts, we recommend footwear with cushioned insoles, breathable lining and lightweight construction — our team can suggest suitable options.",
      },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    description: "Care & longevity",
    icon: "maintenance",
    faqs: [
      {
        question: "How do I clean and maintain safety shoes?",
        answer:
          "Clean the shoes with a soft brush or damp cloth, remove dirt after use, allow them to air dry and avoid direct high heat. Regular care helps maintain performance and extends the product life.",
      },
      {
        question: "How do I know when to replace my safety shoes?",
        answer:
          "Replace them when the outsole is badly worn, the upper is damaged, the toe cap is compromised, or the recommended service life has been reached. Inspect your footwear regularly.",
      },
    ],
  },
  {
    slug: "ordering-delivery",
    title: "Ordering & Delivery",
    description: "Orders, bulk supply & shipping",
    icon: "ordering",
    faqs: [
      {
        question: "Do you supply in bulk quantities?",
        answer:
          "Yes. We specialise in bulk and corporate orders for factories, contractors, distributors and large teams. You can request a quote with your quantity and location.",
      },
      {
        question: "What is the typical delivery time?",
        answer:
          "Delivery timelines depend on the product, quantity and destination. Share your requirements with our team and we will confirm the estimated schedule with your quote.",
      },
      {
        question: "Can I become a distributor or channel partner?",
        answer:
          "Yes. We work with distributors and channel partners across industries. Submit a distributor enquiry with your business details and location to start the conversation.",
      },
    ],
  },
  {
    slug: "general-enquiries",
    title: "General Enquiries",
    description: "Other common questions",
    icon: "general",
    faqs: [
      {
        question: "How can I get a quote for my requirement?",
        answer:
          "You can request a quote directly through our website, contact our sales team or share your requirements (quantity, industry and location) for a prompt response.",
      },
      {
        question: "Where can I get more information about SEKEEDO?",
        answer:
          "Visit our About and Technology & Safety pages, or contact our team directly for product details, documentation and business enquiries.",
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
