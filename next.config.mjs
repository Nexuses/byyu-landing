/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '22527425.fs1.hubspotusercontent-na1.net',
        pathname: '/hubfs/**',
      },
    ],
  },
}

export default nextConfig
