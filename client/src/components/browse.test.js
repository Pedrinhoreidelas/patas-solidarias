import { filterAnimals } from './Browse';
import axios from 'axios';

// Mock para axios
jest.mock('axios');

describe('Browse Component Logic', () => {
  const mockAnimals = [
    { id: 1, nome: 'Rex', tipo: 'cachorro', raca: 'Labrador', idade: 3 },
    { id: 2, nome: 'Miau', tipo: 'gato', raca: 'Persa', idade: 2 },
    { id: 3, nome: 'Piu', tipo: 'pássaro', raca: 'Canário', idade: 1 },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockAnimals });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve chamar a API para buscar animais', async () => {
    const response = await axios.get('http://localhost:8800/animals');
    expect(response.data).toEqual(mockAnimals);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8800/animals');
  });

  it('deve filtrar corretamente os animais com base no termo de busca', () => {
    const searchTerm = 'Rex';
    const filtered = filterAnimals(mockAnimals, searchTerm, '');
    expect(filtered).toEqual([
      { id: 1, nome: 'Rex', tipo: 'cachorro', raca: 'Labrador', idade: 3 },
    ]);
  });

  it('deve filtrar corretamente os animais com base no tipo', () => {
    const filterType = 'gato';
    const filtered = filterAnimals(mockAnimals, '', filterType);
    expect(filtered).toEqual([
      { id: 2, nome: 'Miau', tipo: 'gato', raca: 'Persa', idade: 2 },
    ]);
  });

  it('deve aplicar o filtro combinado de termo de busca e tipo', () => {
    const searchTerm = 'Piu';
    const filterType = 'pássaro';
    const filtered = filterAnimals(mockAnimals, searchTerm, filterType);
    expect(filtered).toEqual([
      { id: 3, nome: 'Piu', tipo: 'pássaro', raca: 'Canário', idade: 1 },
    ]);
  });

  it('deve retornar uma lista vazia se nenhum animal corresponder aos critérios', () => {
    const searchTerm = 'Tigre';
    const filterType = 'gato';
    const filtered = filterAnimals(mockAnimals, searchTerm, filterType);
    expect(filtered).toEqual([]);
  });
});
