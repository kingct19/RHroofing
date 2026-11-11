import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { COMPANY_INFO } from "@/data/company";
import { fillTemplate, PAGES } from "@/data/sections";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

const contact = PAGES.contact;

export const metadata: Metadata = {
  title: fillTemplate(contact.metaTitle, { phone: COMPANY_INFO.phoneDisplay }),
  description: fillTemplate(contact.metaDescription, { phone: COMPANY_INFO.phoneDisplay }),
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact & Free Estimate", path: "/contact" },
          ]),
        ]}
      />

      <PageIntro kicker={contact.kicker} title={contact.title}>
        {fillTemplate(contact.intro, {
          phone: COMPANY_INFO.phoneDisplay,
          phoneLabel: COMPANY_INFO.phoneLabel.toLowerCase(),
          phoneSecondary: COMPANY_INFO.phoneSecondaryDisplay,
          phoneSecondaryLabel: COMPANY_INFO.phoneSecondaryLabel.toLowerCase(),
          email: COMPANY_INFO.email,
        })}
      </PageIntro>

      {/* Contact Body */}
      <section className="py-16 sm:py-20 bg-limestone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-deep text-limestone p-6 sm:p-8 rounded-xl border-2 border-[#9aafdf] space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9aafdf]">
                    {contact.phoneKicker}
                  </span>
                  <h2 className="font-heading text-2xl uppercase font-bold mt-1">
                    {contact.phoneTitle}
                  </h2>
                  <p className="text-xs text-limestone/70 mt-1">
                    {contact.phoneBody}
                  </p>
                </div>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#284078] hover:bg-[#1c305e] text-white transition-colors"
                >
                  <Phone className="w-7 h-7 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider opacity-90">
                      {COMPANY_INFO.phoneLabel}
                    </div>
                    <div className="font-mono text-2xl font-bold">
                      {COMPANY_INFO.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.phoneSecondaryHref}
                  className="flex items-center gap-4 rounded-lg border border-white/15 p-4 text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="w-7 h-7 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider opacity-90">
                      {COMPANY_INFO.phoneSecondaryLabel}
                    </div>
                    <div className="font-mono text-2xl font-bold">
                      {COMPANY_INFO.phoneSecondaryDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-4 rounded-lg border border-white/15 p-4 text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="w-7 h-7 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider opacity-90">
                      {contact.emailLabel}
                    </div>
                    <div className="text-base font-bold break-all">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#9aafdf] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading uppercase font-bold text-limestone">
                        {contact.locationLabel}
                      </div>
                      <div className="text-xs text-limestone/75 mt-0.5">
                        {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state}
                        <br />
                        {COMPANY_INFO.headquarters.county}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#9aafdf] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading uppercase font-bold text-limestone">
                        {contact.hoursLabel}
                      </div>
                      <div className="text-xs text-limestone/75 mt-0.5">
                        {COMPANY_INFO.hours.weekdays}
                        <br />
                        {COMPANY_INFO.hours.emergency}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-sandstone p-6 rounded-xl border border-slate-deep/15 space-y-4">
                <h3 className="font-heading text-lg uppercase font-bold text-slate-deep">
                  {contact.expectTitle}
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-deep/85">
                  {contact.expectItems.map((item) => (
                    <li key={item.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.title}</strong> {item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Towns Served Quick Links */}
          <div className="bg-white p-6 rounded-xl border border-slate-deep/10 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-copper font-semibold">
                  {contact.townsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREA_CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="px-3 py-1.5 rounded bg-limestone hover:bg-sandstone text-xs font-medium text-slate-deep transition-colors"
                    >
                      {city.city}, TX
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Estimate Form (7 cols) */}
            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
