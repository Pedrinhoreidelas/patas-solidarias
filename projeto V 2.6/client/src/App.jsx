
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Profile from './Profile';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Browse from './components/Browse';
import RegisterPet from './components/RegisterPet';
import AnimalDetails from './components/AnimalDetails';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Renderize o Navbar aqui */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registerpet" element={<RegisterPet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animals/:id" element={<AnimalDetails />} />
        <Route path="/" element={<Navigate to="/auth" />} /> {/* Definindo a rota padrão */}
      </Routes>
    </Router>
  );
};

export default App;
