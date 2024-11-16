import React from 'react';
import Navbar from './Navbar';
import Vibecat from '../imgs/catvibe.gif';


const About = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='bgAbout'>
                <div className="p-8 about-content">
                    <h2 className='habout'>
                        Somos uma equipe dedicada a encontrar lares amorosos para animais abandonados,<br />
                        ou em más condições, proporcionando uma segunda chance a cães e gatos em situação de vulnerabilidade. <br />
                        Nossa missão é resgatar, reabilitar e realocar animais em lares seguros e carinhosos. <br />
                        Nosso projeto começou em 2024, quando nosso grupo de amigos decidiu fazer a diferença na vida de cães e gatos abandonados. <br />
                        Para assim podermos mudar a vida de centenas de animais a encontrar novos lares.
                    </h2> <br />

                    <h3>Nossa Equipe</h3>

                    <ul className='memberlist'>
                        <li className=''>Davi Ferreira</li>
                        <li className=''>Gustavo Manoel</li>
                        <li className=''>Pedro Augusto</li>
                        <li className=''>Pedro Leonardo</li>
                        <li className=''>Lucas Roncato</li>
                    </ul> <br /> <br /> <br />

                    <h3>
                        Quer fazer a diferença na vida de um animal? Adote, doe ou torne-se voluntário hoje mesmo!
                    </h3> <br />
                    <img className='gif' src={Vibecat} alt="Vibing Cat" />
                </div>
            </div>
        </div>
    );
};

export default About;
