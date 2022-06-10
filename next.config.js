/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {domains: ['www.eusemfronteiras.com.br']},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/therapies',
        permanent: true,
      },
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  env: {
    API_BASE_URL: "http://localhost:3000/api",
    API_THERAPY: "/therapies",
    API_THERAPY_OPTIONS: "/therapy-options",
  },
  
};

module.exports = nextConfig;
