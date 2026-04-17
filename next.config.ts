import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/gallery", destination: "/services", permanent: false },
      { source: "/b", destination: "/", permanent: false },
      { source: "/b/:path*", destination: "/", permanent: false },
      { source: "/c", destination: "/", permanent: false },
      { source: "/c/:path*", destination: "/", permanent: false },
      { source: "/reviews", destination: "/areas", permanent: true },
    ];
  },
};

export default nextConfig;
