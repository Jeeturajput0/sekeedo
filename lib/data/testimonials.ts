/**
 * Demo-only testimonial records.
 *
 * These are NOT real customer reviews. Names, roles, quotes and ratings are
 * clearly identified as demo content and must be replaced with verified
 * customer testimonials before publication.
 */

export type Testimonial = {
  id: string;
  initials: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  demo: true;
  verified: false;
};

export const testimonials: Testimonial[] = [
  {
    id: "demo-01",
    initials: "D1",
    name: "Demo Reviewer 01",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: comfortable fit and dependable support across long shifts.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-02",
    initials: "D2",
    name: "Demo Reviewer 02",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: straightforward ordering and clear product information.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-03",
    initials: "D3",
    name: "Demo Reviewer 03",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: solid construction and a secure feel on site.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-04",
    initials: "D4",
    name: "Demo Reviewer 04",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: useful guidance while selecting footwear for our teams.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-05",
    initials: "D5",
    name: "Demo Reviewer 05",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: consistent sizing and reliable availability for bulk orders.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-06",
    initials: "D6",
    name: "Demo Reviewer 06",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: good underfoot grip and a comfortable fit for daily use.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-07",
    initials: "D7",
    name: "Demo Reviewer 07",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: responsive support for procurement and documentation queries.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-08",
    initials: "D8",
    name: "Demo Reviewer 08",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: durable finish and practical design for industrial sites.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-09",
    initials: "D9",
    name: "Demo Reviewer 09",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: clear communication throughout the enquiry process.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-10",
    initials: "D10",
    name: "Demo Reviewer 10",
    role: "Demo entry — replace with verified review",
    rating: 5,
    quote: "Demo review: a dependable option for teams working long hours.",
    demo: true,
    verified: false,
  },
];

export const testimonialRows: [Testimonial[], Testimonial[]] = [
  testimonials.slice(0, 5),
  testimonials.slice(5, 10),
];
