import { checkAnimalOwnership } from './Auth';

describe('checkAnimalOwnership', () => {
  test('deve retornar true quando o usuário é dono do animal', () => {
    const animal = { id: 1, userId: 123 };
    const currentUser = { id: 123 };
    expect(checkAnimalOwnership(animal, currentUser)).toBe(true);
  });

  test('deve retornar false quando o usuário não é dono do animal', () => {
    const animal = { id: 1, userId: 123 };
    const currentUser = { id: 456 };
    expect(checkAnimalOwnership(animal, currentUser)).toBe(false);
  });

  test('deve retornar false quando o animal é null', () => {
    const animal = null;
    const currentUser = { id: 123 };
    expect(checkAnimalOwnership(animal, currentUser)).toBe(false);
  });

  test('deve retornar false quando o usuário é null', () => {
    const animal = { id: 1, userId: 123 };
    const currentUser = null;
    expect(checkAnimalOwnership(animal, currentUser)).toBe(false);
  });
}); 