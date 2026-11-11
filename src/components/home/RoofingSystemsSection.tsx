import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME } from "@/data/sections";

export function RoofingSystemsSection() {
  return (
    <section className="bg-[#0e0e0e] text-white py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-[48px] sm:text-[64px] font-bold uppercase leading-[0.92] max-w-[12ch]">
            {HOME.systems.title}
          </h2>
          <Link href="/services" className="btn-sun text-xs self-start">
            {HOME.systems.button}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HOME.systems.cards.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative min-h-[360px] overflow-hidden bg-[#1a1a1a]"
            >
              <Image
                src={service.imageUrl}
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                quality={80}
                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-3xl uppercase leading-none">
                  {service.title}
                </h3>
                <p className="mt-3 overflow-hidden text-sm leading-relaxed text-white/85 transition-opacity duration-300 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:max-h-40 [@media(hover:hover)]:group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
