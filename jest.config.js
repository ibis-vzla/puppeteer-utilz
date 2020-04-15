module.exports = {
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  preset: './jest.preset',
  testTimeout: 600000,
};
