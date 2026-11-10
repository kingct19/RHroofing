"use client";

import React, { useId, useState } from "react";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";
import { PAGES } from "@/data/sections";

declare module "react" {
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: string;
  }
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
  }
}

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
  defaultService = "Free Roof Inspection",
  compact = false,
  variant = "hero-dark",
}: EstimateFormProps) {
  const fieldId = useId();
  const initialService = formCopy.services.some(
    (s) => s.value === defaultService
  )
    ? defaultService
    : formCopy.services.find((s) =>
        s.value.toLowerCase().includes(defaultService.toLowerCase())
      )?.value ?? formCopy.services[0].value;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial">(
    "Residential"
  );
  const [roofService, setRoofService] = useState(initialService);
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
      <div
        role="status"
        className="bg-white text-[#0e0e0e] p-8 border border-[#ececec] shadow-sm space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-[#284078] flex items-center justify-center text-white">
          <CheckCircle2 aria-hidden="true" className="w-7 h-7" />
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
        <div className="pt-3 border-t border-[#ececec] text-xs text-[#5c5c5c] flex items-center justify-between">
          <span>{formCopy.immediateHelp}</span>
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 font-bold text-[#0e0e0e] hover:underline"
          >
            <Phone aria-hidden="true" className="w-3.5 h-3.5" />
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

      <form
        onSubmit={handleSubmit}
        toolname="request_roof_estimate"
        tooldescription="Request a free roof inspection and estimate from Raymond Hardin Roofing in Gilmer and East Texas"
        className="space-y-3.5"
      >
        <div>
          <label htmlFor={`${fieldId}-name`} className="sr-only">
            Full Name
          </label>
          <input
            id={`${fieldId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={formCopy.namePlaceholder}
            toolparamdescription="Customer's full name"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`${fieldId}-phone`} className="sr-only">
              Phone Number
            </label>
            <input
              id={`${fieldId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={formCopy.phonePlaceholder}
              toolparamdescription="Customer's callback phone number"
              className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
            />
          </div>
          <div>
            <label htmlFor={`${fieldId}-email`} className="sr-only">
              Email Address
            </label>
            <input
              id={`${fieldId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={formCopy.emailPlaceholder}
              toolparamdescription="Customer's email address for confirmation (optional)"
              className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`${fieldId}-city`} className="sr-only">
              East Texas City or Town
            </label>
            <select
              id={`${fieldId}-city`}
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              toolparamdescription="East Texas city or town where the property is located"
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
          </div>

          <div>
            <label htmlFor={`${fieldId}-propertyType`} className="sr-only">
              Property Type
            </label>
            <select
              id={`${fieldId}-propertyType`}
              name="propertyType"
              value={propertyType}
              onChange={(e) =>
                setPropertyType(e.target.value as "Residential" | "Commercial")
              }
              toolparamdescription="Whether the roof is on a Residential or Commercial property"
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
        </div>

        <div>
          <label htmlFor={`${fieldId}-roofService`} className="sr-only">
            Service Needed
          </label>
          <select
            id={`${fieldId}-roofService`}
            name="roofService"
            value={roofService}
            onChange={(e) => setRoofService(e.target.value)}
            toolparamdescription="Type of roofing inspection, repair, or installation needed"
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
            <label htmlFor={`${fieldId}-details`} className="sr-only">
              Project Details
            </label>
            <textarea
              id={`${fieldId}-details`}
              name="details"
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={formCopy.detailsPlaceholder}
              toolparamdescription="Additional details about roof condition, leaks, storm damage, or preferred inspection time (optional)"
              className="w-full px-4 py-2.5 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
            />
          </div>
        )}

        <p className="text-[11px] text-[#5c5c5c] leading-snug">
          {formCopy.consent}
        </p>

        {status === "error" && (
          <div role="alert" className="p-3 rounded bg-red-900/70 border border-red-400 text-xs text-white">
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
          <ArrowRight aria-hidden="true" className="w-5 h-5" />
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
