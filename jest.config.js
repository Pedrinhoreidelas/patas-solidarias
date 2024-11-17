module.exports = {
  // ... outras configurações ...
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
  }
} 