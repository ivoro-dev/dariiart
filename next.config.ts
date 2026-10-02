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
      {
        source: "/work/love-lust-and-violence",
        destination: "/work/love-lust",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
