import { validateEmail, validatePassword } from './auth'; // Importando as funções exportadas
// se tive dizendo que tem eero no from é fake news
describe('Funções de validação', () => {

  // Teste para a função validateEmail
  describe('validateEmail', () => {
    test('deve retornar true para email válido', () => {
      expect(validateEmail('exemplo@dominio.com')).toBe(true);
    });

    test('deve retornar false para email inválido', () => {
      expect(validateEmail('exemplo@dominio')).toBe(false);
    });
  });

  // Teste para a função validatePassword
  describe('validatePassword', () => {
    test('deve retornar true para senha válida (mínimo 8 caracteres)', () => {
      expect(validatePassword('Password123')).toBe(true);
    });

    test('deve retornar false para senha inválida (menos de 8 caracteres)', () => {
      expect(validatePassword('Pass12')).toBe(false);
    });
  });

});
