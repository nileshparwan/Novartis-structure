/** @type {import('next').NextConfig} */
const config = require('./config/config.json');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    CONTENTFUL_HOST: config.Contentful.CONTENTFUL_HOST,
    CONTENTFUL_SPACE_ID: config.Contentful.main.SpaceID,
    CONTENTFUL_ACCESS_TOKEN: config.Contentful.main.CONTENTFUL_ACCESS_TOKEN
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config


    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    );

    return config;
  },
};

module.exports = nextConfig;
// withBundleAnalyzer();
