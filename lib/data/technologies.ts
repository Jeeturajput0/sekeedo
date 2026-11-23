export type TechnologyIcon =
  | "shield"
  | "footprints"
  | "crosshair"
  | "droplet"
  | "feather"
  | "waves"
  | "activity"
  | "zap"
  | "layers"
  | "scan"
  | "sparkles"
  | "check";

export type Technology = {
  slug: string;
  title: string;
  icon: TechnologyIcon;
  summary: string;
  detail: string;
  note?: string;
};

export const technologies: Technology[] = [
  {
    slug: "toe-protection",
    title: "Toe Protection",
    icon: "shield",
    summary: "Protection against impact and compression at the front of the foot.",
    detail:
      "Steel and composite toe constructions are both used in industrial footwear. The right choice depends on the hazard profile, weight preference and any environmental considerations. Confirm the exact construction and rating on the product's verified specification sheet.",
  },
  {
    slug: "slip-resistance",
    title: "Slip Resistance",
    icon: "footprints",
    summary: "Outsole design focused on traction across challenging surfaces.",
    detail:
      "Tread geometry, contact area and compound all influence underfoot grip. Slip performance must be assessed against the actual contaminants and flooring present at your site, along with verified test data where available.",
  },
  {
    slug: "puncture-resistance",
    title: "Puncture Resistance",
    icon: "crosshair",
    summary: "Underfoot protection where sharp objects are present.",
    detail:
      "Construction sites and recycling environments often involve nails, metal offcuts and debris. Puncture-resistant constructions should be selected only when verified product specifications confirm the relevant protection.",
  },
  {
    slug: "oil-resistance",
    title: "Oil Resistance",
    icon: "droplet",
    summary: "Outsole materials designed to withstand oily and greasy surfaces.",
    detail:
      "Workshops, garages and process plants frequently introduce oil and grease to flooring. Oil-resistant outsole claims must be checked against product-specific documentation rather than assumed from appearance.",
  },
  {
    slug: "comfort-ergonomics",
    title: "Comfort & Ergonomics",
    icon: "activity",
    summary: "Support, cushioning and fit for long working hours.",
    detail:
      "Footbed cushioning, arch support, weight distribution and internal fit all contribute to comfort across long shifts. Comfort features are design considerations and should be evaluated through a proper fitting process.",
  },
  {
    slug: "lightweight-construction",
    title: "Lightweight Construction",
    icon: "feather",
    summary: "Reduced mass for roles that demand constant movement.",
    detail:
      "Lighter footwear can reduce fatigue in high-mobility roles. Material selection and construction methods determine overall weight, so compare verified product data rather than relying on visual assessment.",
  },
  {
    slug: "waterproof-features",
    title: "Waterproof Features",
    icon: "waves",
    summary: "Protection for wet conditions and wash-down environments.",
    detail:
      "Waterproofing can involve membranes, treated materials and sealed construction. Performance varies by design; confirm waterproof claims and care instructions in verified product documentation.",
  },
  {
    slug: "electrical-protection",
    title: "Electrical Hazard Protection",
    icon: "zap",
    summary: "Specialised protection for defined electrical risks.",
    detail:
      "Electrical hazard, dielectric and related properties are distinct classifications with different meanings and test requirements. They are not interchangeable. Only products with explicit, verified ratings should be used for a given electrical application.",
    note: "Electrical hazard, dielectric, ESD and antistatic properties are not interchangeable.",
  },
  {
    slug: "esd-antistatic",
    title: "ESD & Antistatic Footwear",
    icon: "scan",
    summary: "Control of static charge in sensitive environments.",
    detail:
      "ESD and antistatic footwear are specified for environments where static discharge must be managed. Requirements differ between facilities, so selection must follow site policy and verified product classification.",
    note: "Do not treat ESD, antistatic and electrical hazard footwear as equivalent.",
  },
  {
    slug: "materials-construction",
    title: "Material & Construction",
    icon: "layers",
    summary: "How uppers, linings and soles shape performance.",
    detail:
      "Leather, synthetics, mesh and rubber compounds each bring different strengths. Construction methods influence durability, flexibility, weight and cleanability. Verified technical data should guide final selection.",
  },
  {
    slug: "selection-guide",
    title: "Selection Guide",
    icon: "sparkles",
    summary: "A structured way to match footwear to the work.",
    detail:
      "Begin with a hazard assessment, shortlist verified products, involve wearers in fit trials and review performance in service. Procurement decisions should always be based on documented requirements rather than assumptions.",
  },
  {
    slug: "standards-compliance",
    title: "BIS Standards & Compliance",
    icon: "check",
    summary: "Verified documentation and applicable standards.",
    detail:
      "Applicable BIS standards, certification status, licence numbers and validity will be listed here only when confirmed. Request current documentation for any product under consideration.",
  },
];
