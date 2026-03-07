import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dately",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
