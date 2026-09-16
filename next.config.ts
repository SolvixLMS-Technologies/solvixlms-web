import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Defense-in-depth if host headers reach Next without middleware match.
    // Primary apex fix still requires DNS/edge to point solvixlms.com at this service.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "solvixlms.com" }],
        destination: "https://www.solvixlms.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
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
