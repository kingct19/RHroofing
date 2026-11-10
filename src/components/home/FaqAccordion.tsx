"use client";

import React, { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${accordionId}-btn-${idx}`;
        const panelId = `${accordionId}-panel-${idx}`;
        return (
          <div key={faq.question} className="border border-[#ececec] bg-white">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-lg uppercase tracking-wide text-[#0e0e0e] sm:text-xl">
                  {faq.question}
                </span>
                <span aria-hidden="true" className="relative h-5 w-5 shrink-0">
                  <Plus
                    className={`absolute inset-0 h-5 w-5 transition duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <Minus
                    className={`absolute inset-0 h-5 w-5 transition duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`px-5 pb-5 leading-relaxed text-[#3a3a3a] transition duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
