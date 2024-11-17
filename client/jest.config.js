module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Para transpilar arquivos JS/JSX
  },
  testEnvironment: 'node', // Ambiente para lógica pura
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock para arquivos de estilo
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock para imagens
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Configurações adicionais
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Garante que o Jest entenda .js e .jsx´
};
