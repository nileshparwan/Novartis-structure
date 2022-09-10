/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const config = require('./config/config.json');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config

    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [new TerserPlugin()],
    };

    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../../components'),
        loader: 'ts-loader',
      }
      );

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
