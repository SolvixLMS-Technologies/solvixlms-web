import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Apex → www lives in middleware.ts as an explicit 301.
  // Do not add a next.config redirects() host rule here: permanent:true becomes
  // 308, and even statusCode:301 was observed as 308 at runtime in Next 16.2
  // (with IE11 Refresh header) because that layer runs before middleware.
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
