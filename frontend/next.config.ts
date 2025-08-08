import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost', 'placeholder.pics', 'example.com'],
  },
};

export default nextConfig;
