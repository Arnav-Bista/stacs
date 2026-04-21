import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["localhost", "placeholder.pics", "example.com"],
  },
};

export default nextConfig;
