import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import '../index.css'; 
import Navbar from './Navbar';
import deleteImg from '../imgs/lixeira.png';
import editImg from '../imgs/lapis.png';

const Profile = () => {
  const [user, setUser] = useState({});
  const [animals, setAnimals] = useState([]);
  const userId = localStorage.getItem('userId'); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:8800/api/user/profile/${userId}`);
        setUser(userResponse.data);

        const animalsResponse = await axios.get(`http://localhost:8800/api/user/animals/${userId}`);
        setAnimals(animalsResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const deleteAnimal = async (animalId) => {
    try {
      await axios.delete(`http://localhost:8800/api/animals/${animalId}`);
      setAnimals(animals.filter((animal) => animal.id !== animalId));
    } catch (error) {
      console.error('Erro ao deletar animal:', error);
    }
  };

  const editAnimal = (animal) => {
    navigate('/registerpet', { state: { animal } });
  };

  return (
    <div>
      <Navbar />
      <div className='bgprofile'>
        <div className='profile-page'>
          <h2>Olá {user.nome}</h2>
          <Link to="/registerpet" className="add-pet-button">Adicionar Pet</Link>
          <h3>Seus Animais:</h3>
          <ul className='animaisUsuario'>
            {animals.length > 0 ? (
              animals.map((animal) => (
                <li className='animal' key={animal.id}>
                  <div className="animal-info">
                    <Link to={`/animals/${animal.id}`}>
                      <p>{animal.nome}</p>
                      <p>{animal.tipo}</p>
                      <p>{animal.raca}</p>
                      <p>{animal.idade} anos</p>
                    </Link>
                  </div>

                  <button className="edit-button" title='Editar' onClick={() => editAnimal(animal)}><img className='edit-icon' src={editImg} alt="" /></button>

                  <button className="delete-button" title='Excluir' onClick={() => deleteAnimal(animal.id)}><img className='delete-icon' src={deleteImg} alt="" /></button>

                </li>
              ))
            ) : (
              <p>Nenhum animal cadastrado.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;