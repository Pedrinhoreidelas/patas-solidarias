// validateEmail.test.js
import { validateEmail } from './Auth'; // Importando as funções exportadas
// se tive dizendo que tem eero no from é fake news

describe('validateEmail', () => {
  test('deve retornar true para email válido', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('deve retornar false para email inválido', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@com')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
  });
});
