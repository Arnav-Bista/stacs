import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
