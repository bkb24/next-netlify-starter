/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
