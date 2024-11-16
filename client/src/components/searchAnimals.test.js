import { searchAnimals } from './searchAnimals';

describe('searchAnimals', () => {
  const mockAnimals = [
    {
      id: 1,
      nome: 'Rex',
      especie: 'Cachorro',
      raca: 'Pastor Alemão',
      idade: 3
    },
    {
      id: 2,
      nome: 'Luna',
      especie: 'Gato',
      raca: 'Siamês',
      idade: 2
    },
    {
      id: 3,
      nome: 'Max',
      especie: 'Cachorro',
      raca: 'Golden Retriever',
      idade: 1
    }
  ];

  test('deve retornar todos os animais quando não houver termo de busca', () => {
    const resultado = searchAnimals(mockAnimals, '');
    expect(resultado).toEqual(mockAnimals);
  });

  test('deve filtrar animais por nome', () => {
    const resultado = searchAnimals(mockAnimals, 'Rex');
    expect(resultado).toHaveLength(1);
    expect(resultado[0].nome).toBe('Rex');
  });

  test('deve filtrar animais por espécie', () => {
    const resultado = searchAnimals(mockAnimals, 'Cachorro');
    expect(resultado).toHaveLength(2);
    expect(resultado.every(animal => animal.especie === 'Cachorro')).toBe(true);
  });

  test('deve filtrar animais por raça', () => {
    const resultado = searchAnimals(mockAnimals, 'Siamês');
    expect(resultado).toHaveLength(1);
    expect(resultado[0].raca).toBe('Siamês');
  });

  test('deve retornar array vazio quando nenhum animal corresponder à busca', () => {
    const resultado = searchAnimals(mockAnimals, 'Papagaio');
    expect(resultado).toHaveLength(0);
  });

  test('deve ignorar maiúsculas e minúsculas na busca', () => {
    const resultado = searchAnimals(mockAnimals, 'rex');
    expect(resultado).toHaveLength(1);
    expect(resultado[0].nome).toBe('Rex');
  });

  test('deve retornar array vazio quando a lista de animais for vazia', () => {
    const resultado = searchAnimals([], 'Rex');
    expect(resultado).toHaveLength(0);
  });
}); 