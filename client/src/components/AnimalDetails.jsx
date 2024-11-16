import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import Navbar from './Navbar';
import './AnimalDetails.css';

const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/animals/${id}`);
        setAnimal(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do animal:', error);
      }
    };

    fetchAnimalDetails();
  }, [id]);

  if (!animal) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='maindiv'>
      <Navbar />
      <div className='bgimg'>
        <div className='animal-details'>
          <h1 className='animalname'>{animal.nome}</h1>

          <div className='info1'>
            <p className='infop'><strong>Gênero:</strong> <br /> {animal.sexo}</p>
            <p className='bt infop'><strong>Tamanho:</strong> <br />{animal.tamanho}</p>
            <p className='infop'><strong>Idade:</strong> <br />{animal.idade} anos</p>
          </div>

          <p><strong>Tipo:</strong> {animal.tipo}</p>
          <p><strong>Raça:</strong> {animal.raca}</p>
          <p><strong>Comportamento:</strong> {animal.comportamento}</p>
          <p><strong>Nome do Dono:</strong> {animal.nomedono}</p>
          <p><strong>Telefone do Dono:</strong> {animal.telldono}</p>
          <p><strong>Local:</strong> {animal.local}</p>
          <div className='animaldisc'>
            <p className=''><strong>Descrição:</strong> {animal.descricao}</p>
          </div>

          {/* Botão de Voltar */}
          <button onClick={() => navigate(-1)} className='voltar-btn'>
            Voltar
          </button>

        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;