import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
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
        source: "/node/:path*",
        destination: "/",
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
        destination: "/services/roof-repair-and-redecks",
        permanent: true,
      },
      {
        source: "/repair/:path*",
        destination: "/services/roof-repair-and-redecks",
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
