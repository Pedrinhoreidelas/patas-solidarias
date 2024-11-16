import { checkAnimalOwnership } from './auth';

describe('checkAnimalOwnership', () => {
  const mockAnimal = {
    id: 1,
    nome: 'Rex',
    userId: 'user123'
  };

  test('deve retornar true quando o usuário é dono do animal', () => {
    const currentUser = {
      id: 'user123'
    };
    expect(checkAnimalOwnership(mockAnimal, currentUser)).toBe(true);
  });

  test('deve retornar false quando o usuário não é dono do animal', () => {
    const currentUser = {
      id: 'outroUser456'
    };
    expect(checkAnimalOwnership(mockAnimal, currentUser)).toBe(false);
  });

  test('deve retornar false quando não há usuário logado', () => {
    const currentUser = null;
    expect(checkAnimalOwnership(mockAnimal, currentUser)).toBe(false);
  });

  test('deve retornar false quando o animal não existe', () => {
    const currentUser = {
      id: 'user123'
    };
    expect(checkAnimalOwnership(null, currentUser)).toBe(false);
  });
});