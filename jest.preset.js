const jest_puppeteer = require('jest-puppeteer/jest-preset');
const ts_jest = require('ts-jest/jest-preset');

module.exports = Object.assign(
  jest_puppeteer,
  ts_jest,
);
