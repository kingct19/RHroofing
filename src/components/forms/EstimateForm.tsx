"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";

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
  defaultCity = "Gilmer",
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
          : "Something went wrong. Please call (903) 797-2756."
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
          Inspection Request Received!
        </h3>
        <p className="text-sm text-[#3a3a3a] leading-relaxed">
          Thank you, <strong>{name}</strong>. Our Gilmer team has received your request for a{" "}
          <strong>{roofService}</strong> inspection in <strong>{city}, TX</strong>. We will call you at{" "}
          <span className="font-bold">{phone}</span> shortly.
          {email ? (
            <>
              {" "}
              A confirmation is on its way to <strong>{email}</strong>.
            </>
          ) : null}
        </p>
        <div className="pt-3 border-t border-white/15 text-xs text-white/80 flex items-center justify-between">
          <span>Need immediate assistance?</span>
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 font-bold text-white hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            (903) 797-2756
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
        Book a free inspection
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name *"
            aria-label="Full Name"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number *"
            aria-label="Phone Number"
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            aria-label="Email Address"
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
              Other Surrounding Area
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
              Residential Property
            </option>
            <option value="Commercial" className="bg-[#181617] text-white">
              Commercial Building
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
            <option value="Free Roof Inspection" className="bg-[#181617] text-white">
              Free Same-Day / Next-Day Roof Inspection
            </option>
            <option value="Shingle Roof Replacement" className="bg-[#181617] text-white">
              Shingle Roof Replacement or Install
            </option>
            <option value="Metal Roof Installation" className="bg-[#181617] text-white">
              Metal Roof (Standing Seam / R-Panel)
            </option>
            <option value="Torch-Down Rubber Roof" className="bg-[#181617] text-white">
              Torch-Down Rubber (Flat / Low-Slope Roof)
            </option>
            <option value="Roof Repair / Leak Fix" className="bg-[#181617] text-white">
              Roof Repair / Storm Damage
            </option>
            <option value="Tear-Off & Structural Re-Deck" className="bg-[#181617] text-white">
              Full Tear-Off & Structural Re-Deck
            </option>
          </select>
        </div>

        {!compact && (
          <div>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="How can we help with your roof?"
              className="w-full px-4 py-2.5 bg-white border border-[#d9d9d9] text-[#0e0e0e] placeholder:text-[#8a8a8a] text-base focus:outline-none focus:border-[#0e0e0e]"
            />
          </div>
        )}

        <p className="text-[11px] text-[#5c5c5c] leading-snug">
          By submitting this form, you agree to be contacted by Raymond Hardin Roofing regarding your free roof inspection at the phone number provided.
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
            {status === "submitting" ? "Submitting..." : "Get My Free Inspection"}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
