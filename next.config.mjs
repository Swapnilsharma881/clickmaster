/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // Ensures trailing slashes in URLs
    assetPrefix: '/', // Ensures correct asset path resolution
    images: {
      domains: ["picsum.photos"], // ✅ Allow external images from picsum.photos
    },
  };
  
  export default nextConfig;
  