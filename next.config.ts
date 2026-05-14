import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/callback",
        destination: "https://app.solvixlms.com/api/v1/callback",
      },
      {
        source: "/api/v1/login",
        destination: "https://app.solvixlms.com/api/v1/login",
      },
      {
        source: "/api/v1/logout",
        destination: "https://app.solvixlms.com/api/v1/logout",
      },
    ];
  },
};

export default nextConfig;
