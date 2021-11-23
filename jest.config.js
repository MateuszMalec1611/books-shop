module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './jest/coverage',
  cache: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  modulePaths: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
