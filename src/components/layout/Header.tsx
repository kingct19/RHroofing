"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES } from "@/data/services";
import { REPAIR_PAGES } from "@/data/repairs";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const hovering = useRef(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) setHidden(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lastScrollY.current = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      if (mobileMenuOpen || hovering.current || y < 72) {
        setHidden(false);
        lastScrollY.current = y;
        return;
      }

      const delta = y - lastScrollY.current;
      if (delta > 8) {
        setHidden(true);
        lastScrollY.current = y;
      } else if (delta < -8) {
        setHidden(false);
        lastScrollY.current = y;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      onMouseEnter={() => {
        hovering.current = true;
        setHidden(false);
      }}
      onMouseLeave={() => {
        hovering.current = false;
      }}
      className={`sticky top-0 z-50 w-full min-w-0 bg-white border-b border-[#ececec] transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-[78px]">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Raymond Hardin Roofing home"
            onClick={() => setMobileMenuOpen(false)}
          >
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
                <ChevronDown className="h-3.5 w-3.5 transition duration-200 ease-out group-hover:rotate-180 motion-reduce:transition-none" />
              </Link>
              <div className="pointer-events-none absolute left-0 top-full z-50 w-64 translate-y-1 opacity-0 transition duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
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
                <ChevronDown className="h-3.5 w-3.5 transition duration-200 ease-out group-hover:rotate-180 motion-reduce:transition-none" />
              </Link>
              <div className="pointer-events-none absolute left-0 top-full z-50 w-60 translate-y-1 opacity-0 transition duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
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
                <ChevronDown className="h-3.5 w-3.5 transition duration-200 ease-out group-hover:rotate-180 motion-reduce:transition-none" />
              </Link>
              <div className="absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2">
                <div className="pointer-events-none translate-y-1 bg-white opacity-0 shadow-xl border border-[#eee] p-3 grid grid-cols-2 transition duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
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
              Free estimate
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
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#0e0e0e]"
            >
              <span className="relative block h-6 w-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition duration-300 ease-out motion-reduce:transition-none ${
                    mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition duration-300 ease-out motion-reduce:transition-none ${
                    mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            inert={!mobileMenuOpen}
            className={`max-h-[calc(100dvh-78px-5.5rem)] overflow-y-auto border-t border-[#eee] bg-white px-5 py-4 transition duration-300 ease-out motion-reduce:transition-none ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
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
        </div>
      </div>
    </header>
  );
}
