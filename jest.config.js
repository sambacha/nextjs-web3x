// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')

module.exports = {
  moduleNameMapper: {
    '^@functions/(.*)$': '<rootDir>/functions/$1',
    '@utils/(.*)$': '<rootDir>/utils/$1',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // A list of reporter names that Jest uses when writing coverage reports
   coverageReporters: [
     "json",
    "clover"
   ],
  testEnvironment: "jsdom",
//  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),

};
