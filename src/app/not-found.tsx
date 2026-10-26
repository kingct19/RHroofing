import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, Home } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function NotFound() {
  return (
    <section className="py-24 bg-limestone">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded bg-copper/15 text-copper font-mono text-xs uppercase tracking-widest font-bold">
          404 • Page Not Found
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-slate-deep">
          Looking for Raymond Hardin Roofing?
        </h1>
        <p className="text-slate-deep/75 text-base sm:text-lg">
          The page you requested may have moved from our old website. Use the links below to explore our roofing services in Gilmer and across East Texas, or call us directly at{" "}
          <strong>{COMPANY_INFO.phoneDisplay}</strong>.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-slate-deep hover:bg-iron text-limestone font-heading uppercase tracking-wider text-sm font-bold transition-colors"
          >
            <Home className="w-4 h-4 text-copper" />
            Back to Homepage
          </Link>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#284078] hover:bg-[#1c305e] text-white font-heading uppercase tracking-wider text-sm font-bold transition-colors"
          >
            East TX Service Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded border border-slate-deep/20 text-slate-deep font-mono text-sm font-bold"
          >
            <Phone className="w-4 h-4 text-copper" />
            {COMPANY_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
