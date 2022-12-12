/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ['http://146.190.112.92/'],
    loader: 'imgix',
    path: 'http://146.190.112.92/'
  }
};

module.exports = nextConfig
