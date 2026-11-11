import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROOFING_SERVICES } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { PAGES } from "@/data/sections";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

const servicesPage = PAGES.services;

export const metadata: Metadata = {
  title: servicesPage.metaTitle,
  description: servicesPage.metaDescription,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${servicesPage.metaTitle} | ${COMPANY_INFO.name}`,
    description: servicesPage.metaDescription,
    url: `${COMPANY_INFO.domain}/services`,
  },
  twitter: {
    title: `${servicesPage.metaTitle} | ${COMPANY_INFO.name}`,
    description: servicesPage.metaDescription,
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
          <p className="kicker mb-4">{servicesPage.kicker}</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            {servicesPage.title}
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            {servicesPage.intro}
          </p>

          <ul className="mt-12 border-t border-[#e6e6e6]">
            {ROOFING_SERVICES.map((service) => (
              <li key={service.slug} className="border-b border-[#e6e6e6]">
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid items-center gap-5 py-7 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#e7ebea]">
                    <Image
                      src={service.imageUrl}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 200px, 100vw"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-[#0e0e0e] underline-offset-4 group-hover:underline sm:text-[40px]">
                      {service.shortTitle}
                    </h2>
                    <p className="mt-3 max-w-[40rem] text-[16px] leading-relaxed text-[#3a3a3a]">
                      {service.listSummary}
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
            {servicesPage.closingTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            {servicesPage.closingBody}
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
