import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES } from "@/data/services";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { RhrLogo } from "@/components/ui/RhrLogo";
import { PAGES } from "@/data/sections";

const footer = PAGES.footer;

/**
 * Matches Best Choice Roofing Footer DOM paths:
 * - `elementor-element-16ad827`: 5-column boxed footer section (Logo, Company/Phone/Email/Contact, About links, Services links, Resources/Locations)
 * - `elementor-element-35a6473f`: Bottom copyright & legal bar (`max-w-[1280px]`)
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-0 bg-[#0e0e0e] text-white pb-28 lg:pb-0">
      {/* Element 16ad827: 5-Column Boxed Footer */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Col 1 (20%): Logo & Raymond Hardin Portrait Badge */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <RhrLogo variant="dark-bg" showText />
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <Image
                src={PAGES.about.portrait}
                alt={PAGES.about.portraitAlt}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover object-[center_20%] border-2 border-white/50"
              />
              <div className="text-xs text-white/80 leading-snug">
                <strong className="text-white block">{footer.established}</strong>
                {footer.experience}
              </div>
            </div>
          </div>

          {/* Col 2 (20%): Raymond Hardin Roofing Contact Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              {COMPANY_INFO.name}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#9aafdf] transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#9aafdf] shrink-0" />
                  <span>
                    {COMPANY_INFO.phoneDisplay}
                    <span className="ml-1.5 font-normal text-white/55">{COMPANY_INFO.phoneLabel}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.phoneSecondaryHref}
                  className="inline-flex items-center gap-2 hover:text-[#9aafdf] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#9aafdf] shrink-0" />
                  <span>
                    {COMPANY_INFO.phoneSecondaryDisplay}
                    <span className="ml-1.5 text-white/55">{COMPANY_INFO.phoneSecondaryLabel}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="inline-flex items-start gap-2 hover:text-[#9aafdf] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#9aafdf] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/75">
                <MapPin aria-hidden="true" className="w-4 h-4 text-[#9aafdf] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.street}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} {COMPANY_INFO.headquarters.zip}
                </span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#9aafdf] font-bold hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>{footer.contactLink}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (20%): About */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              <Link href="/about" className="hover:text-[#9aafdf]">
                {footer.aboutHeading}
              </Link>
            </h3>
            <ul className="space-y-1 text-sm text-white/80">
              {footer.aboutLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 hover:text-[#9aafdf] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (20%): Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              <Link href="/services" className="hover:text-[#9aafdf]">
                {footer.servicesHeading}
              </Link>
            </h3>
            <ul className="space-y-1 text-sm text-white/80">
              {ROOFING_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block py-1 hover:text-[#9aafdf] transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 (20%): Resources & Free Next-Day Inspection */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">{footer.resourcesHeading}</h3>
            <ul className="space-y-1 text-sm text-white/80">
              {footer.resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 hover:text-[#9aafdf] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block w-full text-center px-4 py-2.5 rounded-[5px] bg-[#284078] hover:bg-[#1c305e] text-white text-xs font-bold uppercase tracking-wide transition-colors"
              >
                {footer.inspectionButton}
              </Link>
            </div>
          </div>
        </div>

        {/* East Texas Cities Quick SEO Links Bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#9aafdf] mb-2.5">
            {footer.townsLabel}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70">
            {SERVICE_AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="inline-block py-1 hover:text-white transition-colors"
              >
                {city.city}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Element 35a6473f: Bottom Bar (`max-w-[1280px]`, Socials + Copyright + Sitemap) */}
      <div className="bg-black/45 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="text-center md:text-left">
            {footer.finePrint} ©{currentYear} {COMPANY_INFO.name} |{" "}
            <Link href="/sitemap.xml" className="inline-block py-1 px-1 hover:text-white underline">
              Sitemap
            </Link>{" "}
            |{" "}
            <Link href="/contact" className="inline-block py-1 px-1 hover:text-white underline">
              Free Estimate
            </Link>
          </div>
          <div className="text-white/80 shrink-0">
            Web Design by{" "}
            <a
              href="https://www.studiosozo.dev"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white hover:underline"
            >
              Studio Sozo
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#181617] border-t border-white/15 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-2 shadow-2xl">
        <a
          href={COMPANY_INFO.phoneHref}
          className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-[5px] bg-white px-2 py-3 text-[13px] font-bold whitespace-nowrap text-[#181617]"
        >
          <Phone className="h-4 w-4 shrink-0 text-[#0e0e0e]" />
          {COMPANY_INFO.phoneDisplay}
        </a>
        <Link
          href="/contact"
          className="inline-flex min-w-0 items-center justify-center rounded-[5px] bg-[#284078] px-2 py-3 text-[12px] font-bold uppercase whitespace-nowrap text-white"
        >
          {footer.mobileInspection}
        </Link>
      </div>
    </footer>
  );
}
