"use client";

import React, { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

const TOWNS = [
  { slug: "gilmer-tx", city: "Gilmer", lat: 32.7287, lng: -94.9424, hq: true },
  { slug: "longview-tx", city: "Longview", lat: 32.5007, lng: -94.7405, hq: false },
  { slug: "tyler-tx", city: "Tyler", lat: 32.3513, lng: -95.3011, hq: false },
  { slug: "gladewater-tx", city: "Gladewater", lat: 32.5368, lng: -94.9752, hq: false },
  { slug: "white-oak-tx", city: "White Oak", lat: 32.5318, lng: -94.8602, hq: false },
  { slug: "pittsburg-tx", city: "Pittsburg", lat: 32.9951, lng: -94.9652, hq: false },
  { slug: "mount-pleasant-tx", city: "Mount Pleasant", lat: 33.1568, lng: -94.9683, hq: false },
  { slug: "mineola-tx", city: "Mineola", lat: 32.6635, lng: -95.488, hq: false },
  { slug: "quitman-tx", city: "Quitman", lat: 32.7954, lng: -95.4511, hq: false },
  { slug: "big-sandy-tx", city: "Big Sandy", lat: 32.5846, lng: -95.1116, hq: false },
  { slug: "diana-tx", city: "Diana", lat: 32.7182, lng: -94.7399, hq: false },
  { slug: "ore-city-tx", city: "Ore City", lat: 32.8004, lng: -94.7174, hq: false },
  { slug: "daingerfield-tx", city: "Daingerfield", lat: 33.0304, lng: -94.7244, hq: false },
] as const;

function pinMarkup(hq: boolean) {
  const size = hq ? 34 : 26;
  return `<svg width="${size}" height="${size + 10}" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 1C8.3 1 2 7.2 2 14.8 2 25.2 16 41 16 41s14-15.8 14-26.2C30 7.2 23.7 1 16 1z" fill="#0e0e0e" stroke="#ffffff" stroke-width="2"/>
    <circle cx="16" cy="15" r="5" fill="#ffffff"/>
  </svg>`;
}

export function EastTexasPinMap() {
  const frameRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function mountMap() {
      const leaflet = await import("leaflet");
      const L = leaflet.default;
      if (cancelled || !frameRef.current || mapRef.current) return;

      const map = L.map(frameRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([32.73, -94.94], 8);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18,
      }).addTo(map);

      const bounds = L.latLngBounds([]);

      TOWNS.forEach((town) => {
        const icon = L.divIcon({
          className: "rhr-pin",
          html: pinMarkup(town.hq),
          iconSize: town.hq ? [34, 44] : [26, 36],
          iconAnchor: town.hq ? [17, 44] : [13, 36],
          popupAnchor: [0, town.hq ? -40 : -32],
        });

        const marker = L.marker([town.lat, town.lng], {
          icon,
          title: `${town.city}, TX`,
          zIndexOffset: town.hq ? 500 : 0,
        }).addTo(map);

        marker.bindPopup(
          `<div style="font-family:Inter,system-ui,sans-serif;min-width:140px">
            <strong>${town.city}, TX</strong>
            <div style="margin-top:4px;color:#5c5c5c;font-size:12px">${town.hq ? "Based in Gilmer" : "Service area"}</div>
            <a href="/service-areas/${town.slug}" style="display:inline-block;margin-top:8px;color:#0e0e0e;font-weight:700">View ${town.city} roofing</a>
          </div>`
        );

        bounds.extend([town.lat, town.lng]);
      });

      map.fitBounds(bounds, { padding: [28, 28] });
      mapRef.current = map;
    }

    void mountMap();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative z-0 bg-white rounded-[5px] shadow-md border border-slate-200 overflow-hidden">
      <div ref={frameRef} className="z-0 h-[390px] w-full bg-[#e7ebea]" />
    </div>
  );
}
