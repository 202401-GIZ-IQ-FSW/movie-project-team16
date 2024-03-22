/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    images: {
      domains: ["image.tmdb.org"],
    },
  };



export default nextConfig;