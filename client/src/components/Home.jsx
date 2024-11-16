import React from 'react';
import Navbar from './Navbar';
import Vibecat from '../imgs/catvibe.gif';
const Home = () => {
  return (
    <div className=' fbg'>
      <Navbar />
      <div className='bg-grad'>
        <div className="p-8 ml-4 mt-4 home-content ">
          <div className='bg-home '>

            <h1 className="text-3xl mb-4">🐾 Bem-vindo ao Pata Solidaria Adoção! 🐾</h1>

            <p>

              Encontre um amigo de quatro patas para alegrar sua vida! <br />
              Estamos felizes em recebê-lo em nossa comunidade dedicada aos animais que buscam um lar amoroso. <br /> Aqui, cada patinha tem uma história especial e espera encontrar um lugar para chamar de lar. <br />

              Em Nosso Site, você não está apenas adotando um animalzinho, <br />
              está ganhando um companheiro para todas as aventuras da vida. <br /> 
              Navegue por nossos adoráveis amigos peludos e descubra seu novo membro da família. <br />

              Junte-se a nós nesta jornada de amor e compaixão. Adote, salve vidas e encha seu coração de amor incondicional!
              <br />
              Estamos aqui para ajudar você a encontrar o parceiro perfeito. Comece sua jornada de adoção hoje mesmo!
              <br /> <br />
              🐶🐱 Seja bem-vindo! 🐾🐾</p>
              <img className='gif' src={Vibecat} alt="Vibing Cat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
