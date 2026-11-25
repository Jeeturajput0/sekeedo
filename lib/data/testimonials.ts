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
    initials: "RK",
    name: "Rahul Kumar",
    role: "Procurement Manager · Manufacturing",
    rating: 5,
    quote:
      "The footwear design is practical for industrial environments. The overall product information made our selection process easier.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-02",
    initials: "AS",
    name: "Amit Sharma",
    role: "Site Supervisor · Construction",
    rating: 5,
    quote:
      "Safety footwear is an important requirement at our worksite. A comfortable fit and dependable construction matter to our team.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-03",
    initials: "VG",
    name: "Vikas Gupta",
    role: "Purchase Executive · Logistics",
    rating: 4,
    quote:
      "We look for practical footwear solutions for employees working long warehouse shifts. Clear product specifications are very helpful.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-04",
    initials: "SP",
    name: "Sandeep Patel",
    role: "Factory Operations · Manufacturing",
    rating: 5,
    quote:
      "Industrial footwear needs to balance protection, durability, and everyday comfort. These are important factors in our purchasing decisions.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-05",
    initials: "MR",
    name: "Manish Rajput",
    role: "Distributor · Safety Products",
    rating: 5,
    quote:
      "For bulk business, product consistency and reliable communication are important. We always look for dependable supply partners.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-06",
    initials: "AK",
    name: "Ankit Kumar",
    role: "Safety Officer · Infrastructure",
    rating: 4,
    quote:
      "Choosing suitable safety footwear for different workplace conditions requires attention to protection and product specifications.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-07",
    initials: "NS",
    name: "Neeraj Singh",
    role: "Purchase Manager · Engineering",
    rating: 5,
    quote:
      "A well-organized product catalogue helps procurement teams compare footwear requirements and make informed decisions.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-08",
    initials: "PG",
    name: "Pankaj Gupta",
    role: "Warehouse Manager · Distribution",
    rating: 5,
    quote:
      "Comfortable and durable footwear is an important consideration for employees handling daily warehouse operations.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-09",
    initials: "RS",
    name: "Rohit Sharma",
    role: "Business Owner · Industrial Supplies",
    rating: 4,
    quote:
      "For industrial supply businesses, clear communication, product availability, and consistent specifications make a difference.",
    demo: true,
    verified: false,
  },
  {
    id: "demo-10",
    initials: "AM",
    name: "Arun Mishra",
    role: "Plant Supervisor · Heavy Industries",
    rating: 5,
    quote:
      "Footwear for demanding work environments should be selected with proper attention to workplace safety and employee comfort.",
    demo: true,
    verified: false,
  },
];


export const testimonialRows: [Testimonial[], Testimonial[]] = [
  testimonials.slice(0, 5),
  testimonials.slice(5, 10),
];
