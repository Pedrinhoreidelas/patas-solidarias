import '@testing-library/jest-dom';

/**
 * Configuração do ambiente de teste para JSDOM
 */
const { TestEnvironment } = require('jest-environment-jsdom');

module.exports = class CustomEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
  }
};