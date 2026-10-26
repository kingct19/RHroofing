import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { COMPANY_INFO } from "@/data/company";
import { EastTexasPinMap } from "@/components/home/EastTexasPinMap";

/**
 * Matches Best Choice Roofing Shreveport DOM paths:
 * - Left column (`2df84a9`): "Raymond Hardin Roofing in Gilmer", address, both phone numbers (`903-797-2756` & `903-790-5693`), and Interactive East Texas Multi-Pin Service Location Map.
 * - Right column (`11df4b9d`): White card with "Raymond Hardin Roofing Proudly Serves Gilmer and the Surrounding Areas, Including:" 2-column city list + "* Not sure if we cover your area? Call (903) 797-2756"
 */
export function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F6FA] border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Office Info + Both Phone Numbers + Interactive Multi-Pin Service Map */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-[38px] font-semibold text-[#000000] leading-tight">
                <span className="text-[#0e0e0e] font-bold">
                  Raymond Hardin Roofing
                </span>{" "}
                in Gilmer
              </h2>

              <ul className="space-y-2.5 text-base text-[#181617]">
                <li>
                  <a
                    href="https://maps.google.com/?q=Gilmer,+TX"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-3 hover:text-[#0e0e0e] transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-[#0e0e0e] shrink-0 mt-1" />
                    <span className="font-medium">
                      Gilmer, TX
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center gap-3 font-bold text-[#181617] hover:text-[#0e0e0e] text-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#0e0e0e] shrink-0" />
                    <span>(903) 797-2756</span>
                  </a>
                </li>
                <li>
                  <a
                    href={COMPANY_INFO.phoneSecondaryHref}
                    className="inline-flex items-center gap-3 font-bold text-[#181617] hover:text-[#0e0e0e] text-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#0e0e0e] shrink-0" />
                    <span>(903) 790-5693</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Interactive 13-Pin Service Location Map */}
            <EastTexasPinMap />
          </div>

          {/* Right Column: Surrounding Areas Card */}
          <div className="lg:col-span-6 flex">
            <div className="bg-white p-8 sm:p-10 rounded-[5px] shadow-lg flex flex-col justify-between w-full space-y-6">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-[32px] font-semibold text-[#000000] leading-snug">
                  Towns we schedule
                </h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
                  {SERVICE_AREA_CITIES.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="inline-flex items-center gap-2.5 text-base font-semibold text-[#181617] hover:text-[#0e0e0e] transition-colors"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-[#0e0e0e]" />
                      <span>{area.city}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <p className="text-sm sm:text-base font-medium text-[#181617]">
                  * Not sure if we cover your area? Call{" "}
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="font-bold text-[#0e0e0e] hover:underline"
                  >
                    (903) 797-2756
                  </a>
                </p>
                <p className="text-xs text-slate-500">
                  Serving all of Upshur, Gregg, Smith, Wood, Camp, Titus, and Morris counties across East Texas since 1995.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
