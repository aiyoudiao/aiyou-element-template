module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['jest-serializer-vue'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  /* 忽略掉的测试文件夹或目录 */
  testPathIgnorePatterns: ['.eslintrc.js'],

  testMatch: [
    // '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/unit/**/*.[jt]s?(x)'
  ],
  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // 'collectCoverage': true,
  'coverageReporters': [
    'lcov',
    'text-summary'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
