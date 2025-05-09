/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    assetPrefix: '/', 
    images: {
      domains: ["picsum.photos"], 
    },
  };
  
  export default nextConfig;
  