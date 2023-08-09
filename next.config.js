/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['91.107.160.88'],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: '91.107.160.88',
    //     port: '3001',
    //
    //   },
    // ],
  },
}