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
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { EstimateForm } from "@/components/forms/EstimateForm";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Free Roof Estimate | Gilmer & East TX | 903-797-2756",
  description:
    "Contact Raymond Hardin Roofing in Gilmer, TX for a free residential or commercial roof inspection and estimate. Call 903-797-2756 or request a quote online.",
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

      <PageIntro kicker="Contact" title="Contact us today">
        Call {COMPANY_INFO.phoneDisplay} ({COMPANY_INFO.phoneLabel.toLowerCase()}) or {COMPANY_INFO.phoneSecondaryDisplay} ({COMPANY_INFO.phoneSecondaryLabel.toLowerCase()}), or email {COMPANY_INFO.email}.
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
                    Direct Phone Line
                  </span>
                  <h2 className="font-heading text-2xl uppercase font-bold mt-1">
                    Speak With Us Today
                  </h2>
                  <p className="text-xs text-limestone/70 mt-1">
                    Fastest response for active leaks, storm damage, or scheduling an on-site estimate.
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
                      Email
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
                        Based in Gilmer
                      </div>
                      <div className="text-xs text-limestone/75 mt-0.5">
                        Gilmer, TX
                        <br />
                        Upshur County
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#9aafdf] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading uppercase font-bold text-limestone">
                        Hours of Operation
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
                  What to Expect When You Contact Us
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-deep/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      <strong>Prompt Local Callback:</strong> We coordinate a convenient time to inspect your property in person.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      <strong>Honest Roof & Deck Evaluation:</strong> We check shingles, metal fasteners, flat membranes, flashings, and wood decking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      <strong>Clear, Fair Pricing:</strong> Straightforward repair or replacement pricing with no high-pressure sales gimmicks.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Towns Served Quick Links */}
              <div className="bg-white p-6 rounded-xl border border-slate-deep/10 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-copper font-semibold">
                  Towns We Visit Daily
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICE_AREA_CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="px-2.5 py-1 rounded bg-limestone hover:bg-sandstone text-xs font-medium text-slate-deep transition-colors"
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
