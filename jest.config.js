module.exports = {
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  preset: "jest-puppeteer",
  testTimeout: 600000,
};
