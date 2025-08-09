/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // lets us bypass lint during CI
  },
};

export default nextConfig;