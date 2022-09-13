/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");
const { lstatSync, readdirSync } = require('fs');

const path = require("path");
const config = require('./config/config.json');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// alias
// const basePath = path.resolve(__dirname, '../../components', 'packages');
// const packages = readdirSync(basePath).filter((name) =>
//   lstatSync(path.join(basePath, name)).isDirectory(),
// );

// const aliases = packages.reduce((previousValue, currentValue) => {
//   return {
//     ...previousValue,
//     [`@components/${currentValue}`]: path.join(basePath, currentValue, 'src'),
//   }
// }, {}); 
// {} => is the initial value 

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

//     config.resolve = {
//       ...config.resolve,
//       modules: [
//         ...config.resolve.modules,
//         path.resolve(__dirname, '../../components'),
//         path.resolve(__dirname, 'styles'),
//       ],
//       alias: {
//         ...config.resolve.alias,
//         ...aliases
//       }
//     }

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

    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [new TerserPlugin()],
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
