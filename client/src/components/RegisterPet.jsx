import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom'; 

const RegisterPet = () => {
  const location = useLocation();
  const [animalData, setAnimalData] = useState({
    nome: '',
    tipo: '',
    raca: '',
    idade: '',
    sexo: '',
    tamanho: '',
    comportamento: '',
    nomedono: '',
    telldono: '',
    local: '',
    descricao: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); 
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    if (location.state && location.state.animal) {
      const currentUserId = localStorage.getItem('userId');
      const animalOwnerId = location.state.animal.userId;
      
      if (currentUserId !== animalOwnerId.toString()) {
        setIsAuthorized(false);
        navigate('/profile');
        return;
      }
      
      setAnimalData(location.state.animal);
      setIsEditing(true);
    }
  }, [location.state, navigate]);

  const handleChange = (e) => {
    setAnimalData({ ...animalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      
      if (isEditing && animalData.userId !== parseInt(userId)) {
        alert('Você não tem permissão para editar este animal.');
        return;
      }

      if (isEditing) {
        await axios.put(`http://localhost:8800/api/animals/${animalData.id}`, animalData);
      } else {
        await axios.post(`http://localhost:8800/api/user/animals/${userId}`, { ...animalData, userId });
      }
      setShowAlert(true); 
      setTimeout(() => {
        setShowAlert(false); 
        navigate('/profile'); 
      }, 3000);
    } catch (error) {
      console.error('Erro ao registrar animal:', error);
    }
  };

  return (
    <div className='bg-gray-800'>
      <Navbar />
      <div className='petbg'>
        <div className='petrbg'>
          <div className='petrcontent '>
            {showAlert && (
              <div className="alert">
                {isEditing ? 'Animal atualizado com sucesso!' : 'Animal registrado com sucesso!'}
              </div>
            )}
            <h2>{isEditing ? 'Edição de Animal' : 'Registrar Animal'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome:</label><br />
                <input type="text" name="nome" value={animalData.nome} onChange={handleChange} required />
              </div>
              <div>
                <label>Tipo:</label><br />
                <input type="text" name="tipo" value={animalData.tipo} onChange={handleChange} required />
              </div>
              <div>
                <label>Raça:</label><br />
                <input type="text" name="raca" value={animalData.raca} onChange={handleChange} required />
              </div>
              <div>
                <label>Idade:</label><br />
                <input type="number" name="idade" value={animalData.idade} onChange={handleChange} required />
              </div>
              <div>
                <label>Gênero:</label><br />
                <select name="sexo" value={animalData.sexo} onChange={handleChange} required >
                  <option value="">Selecione</option>
                  <option value="Macho">Macho</option>
                  <option value="Fêmea">Fêmea</option>
                  <option value="Não sei">Não sei</option>
                </select>
              </div>
              <div>
                <label>Tamanho:</label><br />
                <select name="tamanho" value={animalData.tamanho} onChange={handleChange} required >
                  <option value="">Selecione</option>
                  <option value="Pequeno">Pequeno</option>
                  <option value="Medio">Médio</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>
              <div>
                <label>Comportamento:</label><br />
                <input type="text" name="comportamento" value={animalData.comportamento} onChange={handleChange} required />
              </div>
              <div>
                <label>Nome do dono do animal:</label><br />
                <input type="text" name="nomedono" value={animalData.nomedono} onChange={handleChange} required />
              </div>
              <div>
                <label>Telefone para contato:</label><br />
                <input type="text" name="telldono" value={animalData.telldono} onChange={handleChange} required />
              </div>
              <div>
                <label>Local:</label><br />
                <input type="text" name="local" value={animalData.local} onChange={handleChange} required />
              </div>
              <div>
                <label>Descrição:</label><br />
                <input type="text" name="descricao" value={animalData.descricao} onChange={handleChange} required />
              </div>
              <button type="submit">{isEditing ? 'Atualizar' : 'Registrar'}</button>
            </form>

            {/* Botão de Voltar */}
            <button onClick={() => navigate(-1)} className='voltar-btn'>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPet;