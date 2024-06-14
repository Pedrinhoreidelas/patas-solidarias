import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Browse.css'; 

const Browse = () => {
  const [animals, setAnimals] = useState([]);

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

  return (
    <div>
      <Navbar />
      <div className='bg-browser'>
        <div className="animal-list">
          <h2 id='hDisp'>Animais Disponíveis para Adoção</h2>
          <div className="animal-grid">
            {animals.map((animal) => (
              <div key={animal.id} className="animal-card" onClick={() => window.location.href = `/animals/${animal.id}`}>
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