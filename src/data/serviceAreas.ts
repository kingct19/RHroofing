import serviceAreasContent from "../content/service-areas.json";

export interface ServiceAreaCity {
  slug: string;
  city: string;
  county: string;
  zipCodes: string[];
  distanceFromGilmer: string;
  driveTimeFromGilmer: string;
  highwayCorridor: string;
  isHeadquarters?: boolean;
  tagline: string;
  cardLine: string;
  photo: string | null;
  photoAlt: string;
  photoCredit: string;
  photoLicense: string;
  photoCreditUrl: string;
  metaTitle: string;
  metaDescription: string;
  introParagraph: string;
  localContextParagraph: string;
  neighborhoodsAndLandmarks: string[];
  localRoofChallenges: {
    title: string;
    description: string;
  }[];
  popularServicesNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_AREA_CITIES = serviceAreasContent.cities as ServiceAreaCity[];

export function getCityBySlug(slug: string): ServiceAreaCity | undefined {
  return SERVICE_AREA_CITIES.find((city) => city.slug === slug);
}
