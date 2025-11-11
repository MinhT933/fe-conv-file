/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  // Configure the src directory
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  // Enable source maps in development
  productionBrowserSourceMaps: false,
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
