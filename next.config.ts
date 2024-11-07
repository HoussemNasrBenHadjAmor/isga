import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isgaconsult.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
