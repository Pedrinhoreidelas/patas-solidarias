module.exports = {
  collectCoverage: true, // Ativa a coleta de cobertura
  coverageDirectory: "coverage", // Diretório onde o relatório será salvo
  coverageReporters: ["lcov", "text"], // Gera o formato lcov necessário para o SonarCloud
  // ... outras configurações ...
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
  
} 
