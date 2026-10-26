import type { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES } from "@/data/services";
import { REPAIR_PAGES } from "@/data/repairs";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.domain;
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/repairs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = ROOFING_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const repairPages: MetadataRoute.Sitemap = REPAIR_PAGES.map((page) => ({
    url: `${baseUrl}/repairs/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = SERVICE_AREA_CITIES.map((city) => ({
    url: `${baseUrl}/service-areas/${city.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: city.isHeadquarters ? 0.95 : 0.85,
  }));

  return [...corePages, ...servicePages, ...repairPages, ...cityPages];
}
