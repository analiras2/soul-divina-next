/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { loader: 'imgix', path: '' },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/therapies',
        permanent: true,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  env: {
    API_BASE_URL: 'https://soul-divina-next-pxz7wjsna-analiras2.vercel.app',
    API_THERAPY: '/therapies',
    API_THERAPY_OPTIONS: '/therapy-options',
    API_BATH: '/baths',
  },
};

module.exports = nextConfig;
