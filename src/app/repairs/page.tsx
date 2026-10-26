import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { REPAIR_PAGES } from "@/data/repairs";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Roof Repair, Storm Damage & Tear-Offs in Gilmer TX",
  description:
    "Leak repair, hail and wind inspections, and tear-offs in Gilmer and East Texas. Raymond Hardin Roofing will tell you if it is a repair or a new roof. Call 903-797-2756.",
  alternates: {
    canonical: "/repairs",
  },
};

export default function RepairsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Repairs", path: "/repairs" },
          ]),
        ]}
      />

      <section className="bg-white pt-10 pb-16 sm:pt-14">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="kicker mb-4">Repairs</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            Leaks, storms, and tear-offs
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            We find the leak, inspect storm damage, and say so when the roof needs to come off. The same crew does the repair or the replacement.
          </p>

          <ul className="mt-12 border-t border-[#e6e6e6]">
            {REPAIR_PAGES.map((page) => (
              <li key={page.slug} className="border-b border-[#e6e6e6]">
                <Link
                  href={`/repairs/${page.slug}`}
                  className="group grid items-center gap-5 py-7 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <img
                    src={page.imageUrl}
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div>
                    <h2 className="font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-[#0e0e0e] underline-offset-4 group-hover:underline sm:text-[40px]">
                      {page.title}
                    </h2>
                    <p className="mt-3 max-w-[40rem] text-[16px] leading-relaxed text-[#3a3a3a]">
                      {page.summary}
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
            Tell us what you are seeing
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            A stain, a missing shingle, or hail in the yard is enough to start. We will look at the roof and tell you what it needs.
          </p>
          <a href={COMPANY_INFO.phoneHref} className="mt-3 inline-block text-lg font-semibold">
            {COMPANY_INFO.phoneDisplay}
          </a>
          <div className="mt-8">
            <EstimateForm compact variant="card" defaultService="Roof Repair / Leak Fix" />
          </div>
        </div>
      </section>
    </>
  );
}
