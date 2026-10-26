import type { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${COMPANY_INFO.domain}/sitemap.xml`,
    host: COMPANY_INFO.domain,
  };
}
