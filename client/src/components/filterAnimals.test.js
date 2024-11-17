import { filterAnimals } from './Browse';

describe('filterAnimals', () => {
  const mockAnimals = [
    { nome: 'Rex', tipo: 'cachorro', raca: 'Labrador', idade: 3 },
    { nome: 'Miau', tipo: 'gato', raca: 'Persa', idade: 2 },
    { nome: 'Piu', tipo: 'pássaro', raca: 'Canário', idade: 1 },
    { nome: 'Rex', tipo: 'cachorro', raca: 'Golden Retriever', idade: 5 },
  ];

  it('deve retornar todos os animais quando o termo de busca e o tipo de filtro estão vazios', () => {
    const result = filterAnimals(mockAnimals, '', '');
    expect(result).toEqual(mockAnimals);
  });

  it('deve filtrar os animais pelo termo de busca', () => {
    const result = filterAnimals(mockAnimals, 'rex', '');
    expect(result).toEqual([
      { nome: 'Rex', tipo: 'cachorro', raca: 'Labrador', idade: 3 },
      { nome: 'Rex', tipo: 'cachorro', raca: 'Golden Retriever', idade: 5 },
    ]);
  });

  it('deve filtrar os animais pelo tipo', () => {
    const result = filterAnimals(mockAnimals, '', 'gato');
    expect(result).toEqual([{ nome: 'Miau', tipo: 'gato', raca: 'Persa', idade: 2 }]);
  });

  it('deve filtrar os animais pelo termo de busca e tipo', () => {
    const result = filterAnimals(mockAnimals, 'rex', 'cachorro');
    expect(result).toEqual([
      { nome: 'Rex', tipo: 'cachorro', raca: 'Labrador', idade: 3 },
      { nome: 'Rex', tipo: 'cachorro', raca: 'Golden Retriever', idade: 5 },
    ]);
  });

  it('deve retornar uma lista vazia se nenhum animal corresponder aos critérios', () => {
    const result = filterAnimals(mockAnimals, 'tigre', '');
    expect(result).toEqual([]);
  });
});
