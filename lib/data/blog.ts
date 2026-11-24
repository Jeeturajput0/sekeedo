export type BlogCategory =
  | "Workplace Safety"
  | "Footwear Technology"
  | "Materials & Construction"
  | "Standards & Compliance"
  | "Tips & Guides"
  | "Industries";

export type BlogArticle = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  readingMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "footwear-considerations-for-every-worksite",
    title: "Footwear Considerations for Every Worksite",
    category: "Tips & Guides",
    excerpt: "Key factors to consider when choosing safety footwear for different work environments.",
    image: "/images/industry-construction.jpg",
    imageAlt: "Overhead view of workers on an active construction site",
    publishedAt: "November 24, 2026",
    readingMinutes: 6,
    sections: [
      { heading: "Start with the work, not the shoe", paragraphs: ["The right footwear decision begins with the tasks people perform and the conditions they work in. Walk the work area, speak with the people doing the job and record the hazards that a footwear specification needs to address.", "Consider impact or compression risks, underfoot hazards, wet or oily surfaces, temperature, time spent standing and how far employees move during a shift. A general product description cannot replace a workplace risk assessment."] },
      { heading: "Turn requirements into a shortlist", paragraphs: ["Use the risk assessment to identify the protection and construction details you need to verify. Then compare those requirements with current product documentation, fit options and the way the footwear will be used across a full shift.", "When several teams have different tasks, avoid assuming one model will suit every role. A short, role-based shortlist can make evaluation clearer for procurement and easier for employees to review."] },
      { heading: "Verify before procurement", paragraphs: ["Ask suppliers for current technical sheets and applicable certification documents for the exact model under consideration. Confirm product identity, sizes, standards and any conditions or limitations in the documentation before placing an order.", "A good procurement brief includes expected quantities, size distribution, work locations, delivery timing and the verified requirements identified by your safety team."] },
    ],
  },
  {
    slug: "understanding-toe-protection",
    title: "Understanding Toe Protection in Safety Footwear",
    category: "Workplace Safety",
    excerpt: "What to check when your workplace assessment identifies impact or compression risks around the foot.",
    image: "/images/product-steel-toe.webp",
    imageAlt: "Industrial safety footwear shown in a product setting",
    publishedAt: "November 24, 2026",
    readingMinutes: 5,
    sections: [
      { heading: "Let the hazard assessment guide the choice", paragraphs: ["Toe protection is selected to address identified workplace risks. Start by documenting the tasks, materials handled and credible impact or compression exposures rather than choosing footwear by appearance alone.", "The assessment should be completed by the employer's safety team and should account for how work practices and site conditions may change during a shift."] },
      { heading: "Compare verified product information", paragraphs: ["Different products can use different toe-cap constructions. Confirm the declared protection, applicable standard and model details in current technical documentation. Do not infer a product's rating from a photo or a short catalogue description.", "Fit matters too. A toe cap should not cause pressure or restrict movement when the wearer is standing, walking and performing their normal tasks."] },
      { heading: "Keep documentation with the decision", paragraphs: ["Record the model selected, the hazard it addresses and the documents used to verify it. This makes future reviews easier when roles, products or workplace conditions change."] },
    ],
  },
  {
    slug: "slip-resistance-work-environments",
    title: "Slip Resistance: Why It Matters in Industrial Environments",
    category: "Workplace Safety",
    excerpt: "A useful starting point for reviewing floor conditions, footwear documentation and underfoot risks.",
    image: "/images/technology-detail.jpg",
    imageAlt: "Work boot on an industrial floor",
    publishedAt: "November 24, 2026",
    readingMinutes: 4,
    sections: [
      { heading: "Understand the surface", paragraphs: ["Slip risk can vary with floor material, contamination, cleaning methods, drainage and the activities taking place. Identify where and when incidents or near misses occur, then review those conditions with the site safety team.", "A footwear label alone cannot establish how a product will perform on every floor. Conditions at the site and the specific test information both matter."] },
      { heading: "Review the product evidence", paragraphs: ["Ask for current documentation describing the outsole and any applicable test results or declared performance. Confirm that the document applies to the exact product model and the conditions relevant to your workplace.", "Combine footwear selection with housekeeping, spill response, floor maintenance and other controls identified by the risk assessment."] },
      { heading: "Revisit the choice when conditions change", paragraphs: ["New cleaning agents, production processes or floor finishes can change underfoot conditions. Review the assessment when the environment changes and ask the supplier to clarify product limitations."] },
    ],
  },
  {
    slug: "waterproof-and-water-resistant-footwear",
    title: "Waterproof vs Water-Resistant Safety Footwear",
    category: "Footwear Technology",
    excerpt: "How to compare water-related product descriptions with the actual conditions your team encounters.",
    image: "/images/product-waterproof.webp",
    imageAlt: "Safety boot product image for a guide about wet work conditions",
    publishedAt: "November 24, 2026",
    readingMinutes: 5,
    sections: [
      { heading: "Describe the exposure", paragraphs: ["Before comparing product terms, clarify whether workers encounter occasional splashes, persistent rain, standing water, wash-down procedures or another condition. These situations may call for different product information.", "Also consider how long the exposure lasts, how the footwear is cleaned and whether the work involves other hazards that must be addressed."] },
      { heading: "Ask what the claim means", paragraphs: ["Product descriptions can use water-related terms differently. Request the current technical sheet and ask what testing, construction details and limitations support the description for the specific model.", "Check whether care instructions affect the product's stated properties and when footwear should be inspected or replaced."] },
      { heading: "Select for the full task", paragraphs: ["Wet conditions may overlap with slip, chemical, temperature or electrical risks. Have the safety team consider the complete task and verify every required feature rather than choosing on one label alone."] },
    ],
  },
  {
    slug: "electrical-hazard-footwear-guide",
    title: "A Quick Guide to Electrical Hazard Footwear",
    category: "Standards & Compliance",
    excerpt: "Questions to take to your safety team and supplier before specifying footwear for electrical work.",
    image: "/images/ind-electrical.webp",
    imageAlt: "Electrical work environment",
    publishedAt: "November 24, 2026",
    readingMinutes: 6,
    sections: [
      { heading: "Define the electrical exposure", paragraphs: ["Electrical work can involve distinct hazards and control requirements. A qualified safety professional should identify the exposure and determine whether footwear is an appropriate part of the control plan.", "Do not rely on a general product title or outsole appearance to determine suitability for electrical tasks."] },
      { heading: "Check the exact standard and model", paragraphs: ["Ask for current documents that identify the exact product, applicable standard, test basis and any limitations. Confirm that documents are current and relevant to the intended work.", "Footwear should be considered within the broader electrical safety program, including work procedures, protective equipment and training."] },
      { heading: "Keep approvals traceable", paragraphs: ["Record the model and documentation reviewed for each role. Reconfirm the decision if the work changes or if the supplier updates the product specification."] },
    ],
  },
  {
    slug: "materials-in-industrial-footwear",
    title: "Common Materials Used in Industrial Safety Footwear",
    category: "Materials & Construction",
    excerpt: "A plain-language look at uppers, linings and sole components and the questions worth asking.",
    image: "/images/product-composite.webp",
    imageAlt: "Industrial footwear construction detail",
    publishedAt: "November 24, 2026",
    readingMinutes: 5,
    sections: [
      { heading: "Uppers and linings", paragraphs: ["The upper and lining influence fit, feel, durability and care. Materials vary between models, so ask the supplier for the exact construction and cleaning guidance instead of assuming a material from a product photograph.", "Consider the daily environment, ventilation needs, exposure and how the footwear will be maintained."] },
      { heading: "Soles and underfoot construction", paragraphs: ["Outsole and midsole materials can be selected for different product goals. The relevant properties and test evidence should be checked in technical documentation for the model you are reviewing.", "Sole appearance alone does not establish a tested performance or suitability for a particular worksite."] },
      { heading: "Compare complete product information", paragraphs: ["Review construction alongside fit, size options, care instructions and verified protection information. A complete comparison helps procurement teams match a product to the assessed task."] },
    ],
  },
  {
    slug: "choosing-footwear-for-different-industries",
    title: "Choosing Safety Footwear for Different Industries",
    category: "Industries",
    excerpt: "Why roles and site conditions matter more than broad industry labels when comparing footwear.",
    image: "/images/ind-warehouse.webp",
    imageAlt: "Warehouse work environment",
    publishedAt: "November 24, 2026",
    readingMinutes: 6,
    sections: [
      { heading: "One industry can contain many tasks", paragraphs: ["A warehouse, factory or construction site may include roles with different movement patterns, surfaces and hazards. Begin with the tasks and work zones rather than selecting one style for an entire sector.", "Talk with supervisors and workers to understand routine duties, changing conditions and where current controls need support."] },
      { heading: "Build role-specific requirements", paragraphs: ["Translate the assessment into requirements for each role, then compare those requirements with verified product details. Fit, size availability, care and order quantities also affect a successful rollout.", "Where employees move between zones, consider the full range of conditions they may encounter during a shift."] },
      { heading: "Plan a clear procurement review", paragraphs: ["Use a consistent checklist to review documentation, sizes, supply needs and wearer feedback. Reassess when tasks, site conditions or product specifications change."] },
    ],
  },
  {
    slug: "comfort-and-ergonomics-at-work",
    title: "Comfort and Ergonomics in Work Footwear",
    category: "Footwear Technology",
    excerpt: "Practical ways to include fit, movement and employee feedback in a footwear review.",
    image: "/images/product-lightweight.webp",
    imageAlt: "Safety footwear product image",
    publishedAt: "November 24, 2026",
    readingMinutes: 4,
    sections: [
      { heading: "Consider the full working day", paragraphs: ["Comfort depends on the wearer, the task and the length of time footwear is used. Review fit while standing and moving, and consider walking distances, floor conditions and the need to climb or kneel.", "Sizing guidance and a suitable fitting process can help employees identify pressure points before a larger order is placed."] },
      { heading: "Collect feedback during evaluation", paragraphs: ["Where appropriate, evaluate sample footwear with people who perform the relevant tasks. Ask about fit, movement and practical care needs, while keeping protection requirements as the first filter.", "Feedback should inform the review without replacing the technical assessment or verified product documentation."] },
      { heading: "Recheck after rollout", paragraphs: ["Monitor fit concerns and product condition after deployment. Share recurring issues with the safety and procurement teams so they can review sizing, training and product suitability."] },
    ],
  },
];

export const blogCategories = [
  "Workplace Safety",
  "Footwear Technology",
  "Materials & Construction",
  "Standards & Compliance",
  "Tips & Guides",
  "Industries",
] as const;

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
