import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileUserImg from '../imgs/profile-user.png';
import './Navbar.css'; 
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('userId'); 
    navigate('/'); 
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/browse">Pesquisa</Link> {}
        <Link to="/about">Sobre nós</Link> {}
      </div>
      <div className="profile-menu">
        <button className="profile-button" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
          <img src={profileUserImg} alt="Profile" />
        </button>
        {isProfileMenuOpen && (
          <div className="menu">
            <Link to="/profile">Perfil</Link>
            <button onClick={handleLogout}>Sair</button> {}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;