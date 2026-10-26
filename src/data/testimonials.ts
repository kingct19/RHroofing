export interface CustomerReview {
  id: string;
  author: string;
  town: string;
  county: string;
  serviceProvided: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

/** Google listing for Raymond Hardin Roofing Co in Gilmer. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Raymond+Hardin+Roofing+Co+Gilmer+TX";

/**
 * Google reviews whose full text is visible on the Gilmer listing.
 * The listing itself is 4.6 from 5 reviews.
 */
export const GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: "google-susan-mccoy",
    author: "Susan McCoy",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "7 years ago",
    highlight: "",
    quote:
      "Great work and clean up afterwards, no better roofer. I highly recommend Raymond Hardin for any job. And he beat everyone else's prices.",
  },
  {
    id: "google-cheryl-spencer",
    author: "Cheryl Spencer",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "7 years ago",
    highlight: "",
    quote:
      "Amazing company. Whole crew did an amazing job on our new roof. Definitely recommend!",
  },
];

/**
 * Customer reviews published on raymondhardin-roofing.com/about.
 * Names are the ones printed on that page. Towns were not listed there.
 */
export const EAST_TEXAS_REVIEWS: CustomerReview[] = [
  {
    id: "rev-kathy",
    author: "Kathy P.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Not as much as a nail was found on the ground when they were gone",
    quote:
      "Raymond Hardin and his crew roofed my house and did a great job. They took off the old shingles, replaced boards and trim, and put on new shingles, plus a new top on my patio. After all of this, they built me a new garage. They are all very kind, and they cleaned up everything. Not as much as a nail was found on the ground when they were gone. This is a good group of guys you can depend on to do a great job.",
  },
  {
    id: "rev-grigor",
    author: "Grigor W.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Everyone from the front office to the workers was friendly and efficient",
    quote:
      "Great people, great company. Everyone from the front office, to the rep, to the workers was friendly, helpful, and efficient. The work was done quickly and efficiently. And the workers themselves were great—very nice guys. And they cleaned up everything perfectly.",
  },
  {
    id: "rev-christian",
    author: "Christian N.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Whether it's metal or shingles, they can do it all",
    quote:
      "Best roofing company in East Texas. Whether it's metal or shingles, they can do it all!!!",
  },
  {
    id: "rev-gypsyrae",
    author: "GypsyRae D.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Most honest, hard-working team I've found",
    quote:
      "Most honest, hard-working team I've found. Definitely a 5-star company.",
  },
  {
    id: "rev-susan-t",
    author: "Susan T.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Hard-working and get the job done right",
    quote:
      "It's an upstanding bunch of men that work here. Hard-working and get the job done right.",
  },
  {
    id: "rev-patrick",
    author: "Patrick N.",
    town: "",
    county: "",
    serviceProvided: "",
    rating: 5,
    date: "",
    highlight: "Does the best job around East Texas",
    quote:
      "Great work. Would recommend to anyone. Does best job around East Texas.",
  },
];

export const ALL_GALLERY_PHOTOS: {
  src: string;
  title: string;
  category: "shingle" | "metal" | "flat" | "crew";
}[] = [
  { src: "/images/rhr/slider-img1.png", title: "Forest Green Metal Roof on Log Cabin", category: "metal" },
  { src: "/images/rhr/slider-img2.png", title: "Architectural Shingle Multi-Gable Home", category: "shingle" },
  { src: "/images/rhr/slider-img3.png", title: "Shingle roof", category: "shingle" },
  { src: "/images/rhr/slider-img4.png", title: "Custom Turret & Hip Shingle Roof", category: "shingle" },
  { src: "/images/rhr/flat-1.jpg", title: "Commercial Torch-Down Flat Roof & Parapet", category: "flat" },
  { src: "/images/rhr/flat-page.jpg", title: "Commercial Flat Torch-Down Membrane", category: "flat" },
  { src: "/images/rhr/metal-15.jpg", title: "Modern Standing Seam Metal Roof", category: "metal" },
  { src: "/images/rhr/metal-16.jpg", title: "Two-Story Log Home Metal Roof Install", category: "metal" },
  { src: "/images/rhr/metal-page.jpg", title: "Completed Green Metal Roof & Balcony", category: "metal" },
  { src: "/images/rhr/metal-3.jpg", title: "Ranch Home Charcoal Metal Roof", category: "metal" },
  { src: "/images/rhr/metal-5.jpg", title: "Standing Seam Porch & Gable Metal Roof", category: "metal" },
  { src: "/images/rhr/metal-2.jpg", title: "Residential Metal Roof Installation", category: "metal" },
  { src: "/images/rhr/metal-6.jpg", title: "Custom Metal Roof Detail", category: "metal" },
  { src: "/images/rhr/metal-8.jpg", title: "East Texas Metal Roof Project", category: "metal" },
  { src: "/images/rhr/metal-9.jpg", title: "Ribbed Metal Roof System", category: "metal" },
  { src: "/images/rhr/metal-10.jpg", title: "Country Home Metal Roofing", category: "metal" },
  { src: "/images/rhr/metal-11.jpg", title: "High-Efficiency Metal Roof", category: "metal" },
  { src: "/images/rhr/metal-13.jpg", title: "Gable Metal Roof Craftsmanship", category: "metal" },
  { src: "/images/rhr/metal-14.jpg", title: "Completed Metal Roof Line", category: "metal" },
  { src: "/images/rhr/shingle-1.jpg", title: "Residential Shingle Roof Project", category: "shingle" },
  { src: "/images/rhr/shingle-2.jpg", title: "Dimensional Shingle Roof", category: "shingle" },
  { src: "/images/rhr/shingle-3.jpg", title: "East Texas Shingle Replacement", category: "shingle" },
  { src: "/images/rhr/shingle-4.jpg", title: "New Deck & Charcoal Architectural Shingles", category: "shingle" },
  { src: "/images/rhr/shingle-5.jpg", title: "Steep-Slope Shingle Installation", category: "shingle" },
  { src: "/images/rhr/shingle-6.jpg", title: "RHR Crew Installing Shingle Roof", category: "crew" },
  { src: "/images/rhr/shingle-9.jpg", title: "Completed Architectural Shingle Home", category: "shingle" },
  { src: "/images/rhr/shingle-11.jpg", title: "Custom Valley & Ridge Shingle Work", category: "shingle" },
  { src: "/images/rhr/shingle-12.jpg", title: "Wooded Cabin Green Shingle Roof", category: "shingle" },
  { src: "/images/rhr/shingle-13.jpg", title: "Brick Home Shingle Replacement", category: "shingle" },
  { src: "/images/rhr/shingle-14.jpg", title: "Full Tear-Off & New Shingle Roof", category: "shingle" },
  { src: "/images/rhr/shingle-15.jpg", title: "Ranch Residence Shingle Roof", category: "shingle" },
  { src: "/images/rhr/crew-at-work.jpg", title: "Raymond Hardin Crew on Steep-Slope Roof", category: "crew" },
  { src: "/images/rhr/repair-page.jpg", title: "Full Shingle Tear-Off & Deck Prep Crew", category: "crew" },
  { src: "/images/rhr/new-roof.jpg", title: "Two-Story Turret Roof & RHR Dump Trailer", category: "crew" },
];
