const path = require('path');
module.exports = {
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  setupFilesAfterEnv: ['jest-extended', './__tests__/setup.js'],
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,vue}',
    '!**/node_modules/**',
    '!**/interface/**',
    '!**/interface.ts',
    '!**/i18n/**',
    '!**/icons/**',
    '!**/constant/**',
    '!**/constant.ts',
    '!**/index.{ts,tsx,js,vue}',
  ],
  coveragePathIgnorePatterns: ['hd-adapter/index.ts', 'packages/s2-vue'],
  coverageReporters: ['text', 'clover', 'html'],
  transformIgnorePatterns: [],
  testRegex: '/__tests__/*.*(-|\\.)spec\\.(tsx|ts|js|vue)?$',
  transform: {
    '\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            // https://swc.rs/docs/configuration/compilation#jsctransformusedefineforclassfields
            useDefineForClassFields: false,
          },
        },
      },
    ],
    '\\.vue$': 'vue-jest',
    '\\.(less|css)$': 'jest-less-loader',
    '\\.svg$': 'jest-raw-loader',
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^tests/(.*)': '<rootDir>/__tests__/$1',
    '^@antv/s2$': path.join(__dirname, 'packages/s2-core/src'),
    '^@antv/s2-shared$': path.join(__dirname, 'packages/s2-shared/src'),
    '\\.svg$': '<rootDir>/__tests__/__mocks__/svg.ts',
  },
  testTimeout: 30000,
};
