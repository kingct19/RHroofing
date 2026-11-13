import galleryContent from "../content/gallery.json";
import reviewsContent from "../content/reviews.json";

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

export const GOOGLE_REVIEWS_URL = reviewsContent.googleReviewsUrl;
export const GOOGLE_REVIEW_URL = reviewsContent.googleReviewUrl;
export const GOOGLE_REVIEW_QR_URL = reviewsContent.googleReviewQrUrl;

export const GOOGLE_REVIEWS = reviewsContent.reviews satisfies CustomerReview[];
export const EAST_TEXAS_REVIEWS = reviewsContent.eastTexasReviews satisfies CustomerReview[];

export const GOOGLE_REVIEW_SUMMARY = "4.8 on Google";

export const ALL_GALLERY_PHOTOS: {
  src: string;
  title: string;
  category: "shingle" | "metal" | "flat" | "crew";
}[] = galleryContent.photos.map((photo) => ({
  src: photo.src,
  title: photo.title,
  category: photo.category as "shingle" | "metal" | "flat" | "crew",
}));
