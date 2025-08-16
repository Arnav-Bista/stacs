import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1337',
    STRAPI_API_TOKEN: '239624e6583a2271614eda600869ed52d114769287f02f37902c6cff895dbc3d3872fabc6a941de9db9b8d3ded2c3a9dd541208bcbd90ffef00d74958dad7dbe8a16f0bf67cd927c2e58e13f0e8f879cf21bca62c648f68d08265a477a0301ae25a500753327cba7d0d516363a703883e3794ca426cee24d157562d0160e04e6',
  },
  images: {
    domains: ['localhost', 'placeholder.pics', 'example.com'],
  },
};

export default nextConfig;
