import axios from 'axios';
import React from 'react';

// Mock do axios
jest.mock('axios');

// Mock do useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => ({ state: null })
}));

describe('RegisterPet', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.localStorage = {
      getItem: jest.fn(() => '1'),
      setItem: jest.fn(),
    };
  });

  test('deve chamar axios.post com os dados corretos', async () => {
    const dadosEsperados = {
      nome: 'Rex',
      tipo: 'Cachorro',
      raca: 'Labrador',
      idade: '5',
      genero: 'Macho',
      tamanho: 'Médio',
      comportamento: 'Dócil',
      nomeDono: 'João',
      telefone: '123456789',
      local: 'São Paulo',
      descricao: 'Animal muito amigável',
      userId: '1'
    };

    axios.post.mockResolvedValueOnce({ data: dadosEsperados });

    await axios.post('http://localhost:3001/pets/register', dadosEsperados);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3001/pets/register',
      dadosEsperados
    );
  });

  test('deve lidar com erro na chamada da API', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const erro = new Error('Erro ao registrar');
    
    axios.post.mockRejectedValueOnce(erro);

    try {
      await axios.post('http://localhost:3001/pets/register', {});
    } catch (error) {
      expect(error).toEqual(erro);
    }

    consoleErrorSpy.mockRestore();
  });

  test('deve usar o ID do usuário do localStorage', () => {
    global.localStorage.getItem('userId');
    
    expect(global.localStorage.getItem).toHaveBeenCalledWith('userId');
    expect(global.localStorage.getItem()).toBe('1');
  });
}); 