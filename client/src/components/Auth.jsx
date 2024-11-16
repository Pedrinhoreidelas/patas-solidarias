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
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Validação do email (qualquer domínio válido após @)
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validação da senha (mínimo de 8 caracteres)
  const validatePassword = (senha) => {
    return senha.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação de email
    if (!validateEmail(userData.email)) {
      setError('O e-mail deve ser válido (exemplo: exemplo@gmail.com)');
      return;
    }

    // Validação de senha
    if (!validatePassword(userData.senha)) {
      setError('A senha deve ter no mínimo 8 caracteres');
      return;
    }

    setError(''); // Limpa os erros se as validações passarem

    const endpoint = isLogin ? 'http://localhost:8800/api/auth/login' : 'http://localhost:8800/api/auth/register';

    try {
      const response = await axios.post(endpoint, userData);
      console.log(response.data);
      if (isLogin) {
        localStorage.setItem('userId', response.data.id); 
        window.location.href = '/home'; 
      } else {
        alert('Registro realizado com sucesso! Pode Entrar.'); 
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 fbg">
      <div className={` ${isLogin ? 'loginbg' : 'registerbg'} flexcolumn`}>
        <h2 className="text-white text-2xl mb-4">{isLogin ? 'Entrar' : 'Registrar'}</h2>
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
          {error && <p className="text-red-500">{error}</p>} {/* Exibe a mensagem de erro, se houver */}
          <button type="submit" className="bg-blue-600 text-white ml-c">
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
        </form>
        <div className="mt-4 text-gray-400">
          <button onClick={() => setIsLogin(!isLogin)} className="hover:underline">
            {isLogin ? 'Registre-se' : 'Já tem uma conta? Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
