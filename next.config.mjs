/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    async redirects() {
        return [
          {
            source: "/_next/static/",
            destination: "/static/splat",
            permanent: true,
          },
        ]
      },
};

export default nextConfig;