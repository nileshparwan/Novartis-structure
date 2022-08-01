/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

/* eslint-disable import/no-extraneous-dependencies */
const { pathsToModuleNameMapper } = require("ts-jest");
// Load the config which holds the path aliases.
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  notify: false,
  notifyMode: 'always',
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest/setupTests.ts'],
  "globals": {
    "window": {}
  }, 
  moduleDirectories: ['packages'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    // This has to match the baseUrl defined in tsconfig.json.
    prefix: "<rootDir>",
  }),
};