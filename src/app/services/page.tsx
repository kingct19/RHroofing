import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ROOFING_SERVICES } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

const SERVICE_SUMMARIES: Record<string, string> = {
  "shingle-roofing":
    "Architectural and three-tab shingles for houses and smaller commercial buildings.",
  "metal-roofing":
    "Standing seam and R-panel roofs, in a range of colors, for homes and shops.",
  "torch-down-rubber-roofing":
    "A heat-welded membrane for flat and low-pitch roofs, including carports and storefronts.",
  "roof-repair-and-redecks":
    "Leak repair, storm damage, full tear-offs, and new decking when the wood is gone.",
  "commercial-roofing":
    "Torch-down, metal, and shingle work for businesses in Gilmer, Longview, and Tyler.",
};

export const metadata: Metadata = {
  title: "Residential & Commercial Roofing Services in Gilmer & East TX",
  description:
    "Explore shingle roofing, standing seam & R-panel metal roofs, torch-down rubber flat roofs, tear-offs, structural re-decks, and roof repairs by Raymond Hardin Roofing in Gilmer, TX.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Roofing Services", path: "/services" },
          ]),
        ]}
      />

      <section className="bg-white pt-10 pb-16 sm:pt-14">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="kicker mb-4">Roofing services</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            Shingle, metal, and rubber
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            We install, repair, and replace residential and commercial roofs in Gilmer and across East Texas. Tear-offs and re-decks are part of the same crew.
          </p>

          <ul className="mt-12 border-t border-[#e6e6e6]">
            {ROOFING_SERVICES.map((service) => (
              <li key={service.slug} className="border-b border-[#e6e6e6]">
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid items-center gap-5 py-7 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <img
                    src={service.imageUrl}
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div>
                    <h2 className="font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-[#0e0e0e] underline-offset-4 group-hover:underline sm:text-[40px]">
                      {service.shortTitle}
                    </h2>
                    <p className="mt-3 max-w-[40rem] text-[16px] leading-relaxed text-[#3a3a3a]">
                      {SERVICE_SUMMARIES[service.slug] ?? service.tagline}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Not sure which roof you need?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            Tell us about the building. We will look at the roof and recommend the work it actually needs.
          </p>
          <a href={COMPANY_INFO.phoneHref} className="mt-3 inline-block text-lg font-semibold">
            {COMPANY_INFO.phoneDisplay}
          </a>
          <div className="mt-8">
            <EstimateForm compact variant="card" />
          </div>
        </div>
      </section>
    </>
  );
}
