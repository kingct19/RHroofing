import React from "react";
import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { COMPANY_INFO } from "@/data/company";
import { PAGES } from "@/data/sections";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

const gallery = PAGES.gallery;

export const metadata: Metadata = {
  title: gallery.metaTitle,
  description: gallery.metaDescription,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `${gallery.metaTitle} | ${COMPANY_INFO.name}`,
    description: gallery.metaDescription,
    url: `${COMPANY_INFO.domain}/gallery`,
  },
  twitter: {
    title: `${gallery.metaTitle} | ${COMPANY_INFO.name}`,
    description: gallery.metaDescription,
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Project Gallery", path: "/gallery" },
          ]),
        ]}
      />

      <PageIntro kicker={gallery.kicker} title={gallery.title}>
        {gallery.intro}
      </PageIntro>

      <GalleryGrid />
    </>
  );
}
