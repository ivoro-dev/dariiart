import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/work/moore-perfume",
        destination: "/work/moor-perfume",
        permanent: true,
      },
      {
        source: "/work/volohosky",
        destination: "/work/voloshky",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
