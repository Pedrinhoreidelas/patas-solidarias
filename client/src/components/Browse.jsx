import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Browse.css';

const Browse = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState(''); // Para filtrar por tipo de animal

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('http://localhost:8800/animals');
        setAnimals(response.data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };

    fetchAnimals();
  }, []);

  // Filtra os animais com base na barra de pesquisa e no filtro de tipo
  const filteredAnimals = animals.filter((animal) => {
    const animalData = `${animal.nome} ${animal.tipo} ${animal.raca} ${animal.idade}`
      .toLowerCase();
    return (
      animalData.includes(searchTerm.toLowerCase()) &&
      (filterType === '' || animal.tipo.toLowerCase() === filterType.toLowerCase())
    );
  });
  
  return (
    <div>
      <Navbar />
      <div className='bg-browser'>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos os Tipos</option>
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
            <option value="pássaro">Pássaro</option>
          </select>
        </div>
        <div className="animal-list">
          <h2 id='hDisp'>Animais Disponíveis para Adoção</h2>
          <div className="animal-grid">
            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="animal-card"
                onClick={() => window.location.href = `/animals/${animal.id}`}
              >
                <div className="animal-info">
                  <h3>{animal.nome}</h3>
                  <p><strong>Tipo:</strong> {animal.tipo}</p>
                  <p><strong>Raça:</strong> {animal.raca}</p>
                  <p><strong>Idade:</strong> {animal.idade} anos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
