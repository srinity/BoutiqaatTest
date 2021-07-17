module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/__tests__/**/*.js', '**/?(*.)(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__/Setup.js',
    '<rootDir>/__tests__/FileMock.js',
    '<rootDir>/__tests__/__mocks__'
  ],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/FileMock.js'
  },
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  setupFiles: ['<rootDir>/__tests__/Setup'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)',
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-native-picker/picker)'
  ],
  preset: 'react-native',
  coverageReporters: ['text', 'text-summary', 'lcov'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/index.js',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!.eslintrc.js',
    '!.prettierrc.js'
  ]
}
