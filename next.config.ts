import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    inlineCss: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/node/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/content/:path*",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/about/how-to-choose-a-roofer",
        destination: "/about#how-to-choose-a-roofer",
        permanent: true,
      },
      {
        source: "/contact/estimate",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services/shingle",
        destination: "/services/shingle-roofing",
        permanent: true,
      },
      {
        source: "/services/metal",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/services/flat",
        destination: "/services/torch-down-rubber-roofing",
        permanent: true,
      },
      {
        source: "/repair",
        destination: "/repairs",
        permanent: true,
      },
      {
        source: "/repair/storm",
        destination: "/repairs/storm-hail-damage",
        permanent: true,
      },
      {
        source: "/repair/leaks",
        destination: "/repairs/leaky-roof-repair",
        permanent: true,
      },
      {
        source: "/repair/do-i-need-a-new-roof",
        destination: "/repairs/new-roof-or-repair",
        permanent: true,
      },
      {
        source: "/repair/:path*",
        destination: "/repairs",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/shingle-roof",
        destination: "/services/shingle-roofing",
        permanent: true,
      },
      {
        source: "/metal-roof",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/torch-down-rubber",
        destination: "/services/torch-down-rubber-roofing",
        permanent: true,
      },
      {
        source: "/repair-replacement",
        destination: "/services/roof-repair-and-redecks",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
