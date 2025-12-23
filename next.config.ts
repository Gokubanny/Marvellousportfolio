/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If you're using trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig