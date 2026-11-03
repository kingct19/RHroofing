"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { PAGES } from "@/data/sections";

const formCopy = PAGES.estimate;

interface EstimateFormProps {
  defaultCity?: string;
  defaultService?: string;
  compact?: boolean;
  variant?: "hero-dark" | "card";
}

/**
 * Matches Best Choice Roofing Shreveport's signature translucent dark hero form
 * (`#00000075` / `bg-black/75 backdrop-blur-md p-[30px]` with transparent inputs & `1px solid #eee` borders)
 * as well as an interior page card variant.
 */
export function EstimateForm({
  defaultCity = COMPANY_INFO.headquarters.city,
  defaultService = "Shingle Roof",
  compact = false,
  variant = "hero-dark",
}: EstimateFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial">(
    "Residential"
  );
  const [roofService, setRoofService] = useState(defaultService);
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          propertyType,
          roofService,
          details,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to submit request. Please call us directly."
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : `Something went wrong. Please call ${COMPANY_INFO.phoneDisplay}.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white text-[#0e0e0e] p-8 border border-[#ececec] shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#284078] flex items-center justify-center text-white">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#0e0e0e]">
          {formCopy.successTitle}
        </h3>
        <p className="text-sm text-[#3a3a3a] leading-relaxed">
          <FilledCopy
            template={formCopy.successBody}
            values={{ name, service: roofService, city, phone }}
          />
          {email ? (
            <>
              {" "}
              <FilledCopy template={formCopy.successEmail} values={{ email }} />
            </>
          ) : null}
        </p>
        <div className="pt-3 border-t border-white/15 text-xs text-white/80 flex items-center justify-between">
          <span>{formCopy.immediateHelp}</span>
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 font-bold text-white hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {COMPANY_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  const isHeroDark = variant === "hero-dark";

  return (
    <div
      className={
        isHeroDark
          ? "bg-white text-[#0e0e0e] p-7 sm:p-8 shadow-xl"
          : "bg-white text-[#0e0e0e] p-7 sm:p-8 border border-[#ececec]"
      }
    >
      <h2 className="font-display text-3xl uppercase leading-none text-[#0e0e0e] mb-5">
        {formCopy.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={formCopy.namePlaceholder}
            aria-label={formCopy.namePlaceholder}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={formCopy.phonePlaceholder}
            aria-label={formCopy.phonePlaceholder}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={formCopy.emailPlaceholder}
            aria-label={formCopy.emailPlaceholder}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="East Texas City or Town"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] text-base focus:outline-none focus:border-[#0e0e0e]"
          >
            {SERVICE_AREA_CITIES.map((area) => (
              <option key={area.slug} value={area.city} className="bg-[#181617] text-white">
                {area.city}, TX
              </option>
            ))}
            <option value="Other East Texas Area" className="bg-[#181617] text-white">
              {formCopy.otherArea}
            </option>
          </select>

          <select
            value={propertyType}
            onChange={(e) =>
              setPropertyType(e.target.value as "Residential" | "Commercial")
            }
            aria-label="Property Type"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] text-base focus:outline-none focus:border-[#0e0e0e]"
          >
            <option value="Residential" className="bg-[#181617] text-white">
              {formCopy.residential}
            </option>
            <option value="Commercial" className="bg-[#181617] text-white">
              {formCopy.commercial}
            </option>
          </select>
        </div>

        <div>
          <select
            value={roofService}
            onChange={(e) => setRoofService(e.target.value)}
            aria-label="Service Needed"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] text-base focus:outline-none focus:border-[#0e0e0e]"
          >
            {formCopy.services.map((service) => (
              <option key={service.value} value={service.value} className="bg-[#181617] text-white">
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {!compact && (
          <div>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={formCopy.detailsPlaceholder}
              className="w-full px-4 py-2.5 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
            />
          </div>
        )}

        <p className="text-[11px] text-[#5c5c5c] leading-snug">
          {formCopy.consent}
        </p>

        {status === "error" && (
          <div className="p-3 rounded bg-red-900/70 border border-red-400 text-xs text-white">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-sun w-full text-sm disabled:opacity-60 cursor-pointer"
        >
          <span>
            {status === "submitting" ? formCopy.submitting : formCopy.submit}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

function FilledCopy({
  template,
  values,
}: {
  template: string;
  values: Record<string, string>;
}) {
  const parts = template.split(/(\{\w+\})/g);

  return (
    <>
      {parts.map((part, index) => {
        const token = part.match(/^\{(\w+)\}$/);
        if (!token) return <span key={index}>{part}</span>;
        const value = values[token[1]];
        if (!value) return null;
        return <strong key={index}>{value}</strong>;
      })}
    </>
  );
}
