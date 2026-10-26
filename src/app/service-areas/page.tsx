import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { CITY_CARD_LINES } from "@/data/cityPhotos";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "East Texas Service Areas | Gilmer, Longview, Tyler, Pittsburg & Mt. Pleasant Roofer",
  description:
    "Headquartered in Gilmer, TX since 1995, Raymond Hardin Roofing serves homeowners and businesses across Upshur, Gregg, Smith, Wood, Camp, Titus, and Morris counties. Call 903-797-2756.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "East Texas Service Areas", path: "/service-areas" },
          ]),
        ]}
      />

      <section className="bg-white pt-10 pb-16 sm:pt-14">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="kicker mb-4">Service areas</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            East Texas
          </h1>
          <p className="mt-5 max-w-[40rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            The shop is in Gilmer. These are the towns we schedule, from Upshur County out through Gregg, Smith, Wood, Camp, Titus, and Morris.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SERVICE_AREA_CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="block h-full border border-[#e6e6e6] p-6 hover:border-[#284078]"
                >
                  <h2 className="font-display text-[28px] font-bold leading-none text-[#0e0e0e]">
                    {city.city}, TX
                  </h2>
                  <p className="mt-2 text-sm text-[#5c5c5c]">{city.county}</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#3a3a3a]">
                    {CITY_CARD_LINES[city.slug]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Not sure if we come to you?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            If the town is not on the list, call. We would rather say so than imply we cover the whole state.
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
