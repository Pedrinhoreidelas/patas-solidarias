import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'http://localhost:8800/api/auth/login' : 'http://localhost:8800/api/auth/register';

    try {
      const response = await axios.post(endpoint, userData);
      console.log(response.data);
      if (isLogin) {
        localStorage.setItem('userId', response.data.id); 
        window.location.href = '/home'; 
      } else {
        alert('Registro realizado com sucesso! Faça o login agora.'); 
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 fbg">
      <div className={`bg-gray-800 ${isLogin ? 'loginbg' : 'registerbg'} flexcolumn`}>
        <h2 className="text-white text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4 ">
                <label className="block text-white ml-4">Nome</label><br />
                <input
                  type="text"
                  name="nome"
                  className="bg-gray-700 text-black"
                  value={userData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-white ml-4">Email</label><br />
            <input
              type="email"
              name="email"
              className="bg-gray-700 text-black"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white ml-4">Senha</label><br />
            <input
              type="password"
              name="senha"
              className=" bg-gray-700 text-black"
              value={userData.senha}
              onChange={handleChange}
              required
            />
            
          </div>
          <button type="submit" className="bg-blue-600 text-white ml-c">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-4 text-gray-400">
          <button onClick={() => setIsLogin(!isLogin)} className="hover:underline">
            {isLogin ? 'Need to Register?' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
