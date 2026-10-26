"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES } from "@/data/services";
import { REPAIR_PAGES } from "@/data/repairs";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 bg-white border-b border-[#ececec]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-[78px]">
          <Link href="/" className="shrink-0" aria-label="Raymond Hardin Roofing home">
            <img
              src="/images/rhr-logo.jpg"
              alt="Raymond Hardin Roofing"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#0e0e0e] whitespace-nowrap">
            <div className="relative group">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 py-6 hover:opacity-60"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-64 z-50">
                <div className="bg-white shadow-xl border border-[#eee] py-2">
                  {ROOFING_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-sm hover:bg-[#f6f5f2]"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/repairs"
                className="inline-flex items-center gap-1 py-6 hover:opacity-60"
              >
                Repairs
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-60 z-50">
                <div className="bg-white shadow-xl border border-[#eee] py-2">
                  {REPAIR_PAGES.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/repairs/${page.slug}`}
                      className="block px-4 py-2.5 text-sm hover:bg-[#f6f5f2]"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1 py-6 hover:opacity-60"
              >
                Service Areas
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-[380px] z-50">
                <div className="bg-white shadow-xl border border-[#eee] p-3 grid grid-cols-2">
                  {SERVICE_AREA_CITIES.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="px-3 py-2 text-sm hover:bg-[#f6f5f2]"
                    >
                      {area.city}, TX
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/gallery" className="py-6 hover:opacity-60">
              Gallery
            </Link>
            <Link href="/about" className="py-6 hover:opacity-60">
              About
            </Link>
            <Link href="/contact" className="py-6 hover:opacity-60">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link href="/contact" className="btn-sun btn-ink text-[12px] px-4 py-2.5">
              Book now
            </Link>
            <a href={COMPANY_INFO.phoneHref} className="btn-sun text-[12px] px-4 py-2.5">
              (903) 797-2756
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href={COMPANY_INFO.phoneHref} className="btn-sun text-[12px] px-3 py-2">
              Call
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[#0e0e0e]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eee] px-5 py-4 max-h-[calc(100dvh-78px-5.5rem)] overflow-y-auto">
          <div className="text-xs uppercase tracking-wider text-[#5c5c5c] mb-1">Services</div>
          {ROOFING_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base"
            >
              {service.shortTitle}
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-[#eee] text-xs uppercase tracking-wider text-[#5c5c5c] mb-1">Repairs</div>
          {REPAIR_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/repairs/${page.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base"
            >
              {page.title}
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-[#eee] text-xs uppercase tracking-wider text-[#5c5c5c] mb-1">Service areas</div>
          <div className="grid grid-cols-2">
            {SERVICE_AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-[15px]"
              >
                {city.city}
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-4 border-t border-[#eee] flex flex-col">
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="py-3 text-base">
              Gallery
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-base">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-sun mt-3">
              Book an inspection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
