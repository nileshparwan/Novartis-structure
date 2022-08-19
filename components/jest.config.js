/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  rootDir: ".",
  modulePaths: [
    "<rootDir>"
  ],
  collectCoverageFrom: [
    "packages/**/*.{js,jsx,mjs}"
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|tsx)$"
  ],
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/packages/$1/src',
    '^@/(.*)$': '<rootDir>/packages/$1/src',
  },
  testEnvironment: "node",
  moduleFileExtensions: [
    "jsx",
    "js",
    "ts"
  ],
  moduleDirectories: [
    "node_modules",
    "packages"
  ]
};