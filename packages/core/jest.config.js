/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testMatch: [
      "**/__tests__/**/*.spec.ts"
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    "^jose/(.*)$": "<rootDir>/../../node_modules/jose/dist/node/cjs/$1",
  },
  collectCoverage: true,
};
