import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES, RoofingService } from "@/data/services";
import { SERVICE_AREA_CITIES, ServiceAreaCity } from "@/data/serviceAreas";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildLocalBusinessSchema(cityOverride?: ServiceAreaCity) {
  const areaServedCities = SERVICE_AREA_CITIES.map((city) => ({
    "@type": "City",
    name: `${city.city}, TX`,
    postalCode: city.zipCodes[0],
  }));

  const areaServedCounties = COMPANY_INFO.countiesServed.map((county) => ({
    "@type": "AdministrativeArea",
    name: `${county}, TX`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": `${COMPANY_INFO.domain}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    description: cityOverride
      ? `${COMPANY_INFO.name} provides residential and commercial shingle, metal, and torch-down rubber roofing, tear-offs, re-decks, and roof repair in ${cityOverride.city}, TX (${cityOverride.county}). Established in 1995.`
      : COMPANY_INFO.corePromise,
    url: cityOverride
      ? `${COMPANY_INFO.domain}/service-areas/${cityOverride.slug}`
      : COMPANY_INFO.domain,
    telephone: COMPANY_INFO.phoneE164,
    foundingDate: `${COMPANY_INFO.foundedYear}`,
    priceRange: "$$",
    slogan: COMPANY_INFO.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.headquarters.city,
      addressRegion: COMPANY_INFO.headquarters.state,
      postalCode: COMPANY_INFO.headquarters.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.headquarters.latitude,
      longitude: COMPANY_INFO.headquarters.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: [...areaServedCities, ...areaServedCounties],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "East Texas Residential & Commercial Roofing Services",
      itemListElement: ROOFING_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.tagline,
          url: `${COMPANY_INFO.domain}/services/${service.slug}`,
        },
      })),
    },
  };
}

export function buildServiceSchema(service: RoofingService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.metaDescription,
    url: `${COMPANY_INFO.domain}/services/${service.slug}`,
    provider: {
      "@type": "RoofingContractor",
      "@id": `${COMPANY_INFO.domain}/#organization`,
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phoneE164,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_INFO.headquarters.city,
        addressRegion: COMPANY_INFO.headquarters.state,
        postalCode: COMPANY_INFO.headquarters.zip,
        addressCountry: "US",
      },
    },
    areaServed: SERVICE_AREA_CITIES.map((c) => ({
      "@type": "City",
      name: `${c.city}, TX`,
    })),
  };
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${COMPANY_INFO.domain}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
