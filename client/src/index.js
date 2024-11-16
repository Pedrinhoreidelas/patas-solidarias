
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Home from './components/Home';
import './index.css';
import RegisterPet from './components/RegisterPet';
import AnimalDetails from './components/AnimalDetails';
import Browse from './components/Browse';
import About from './components/About';

const root = createRoot(document.getElementById('root'));

const RootComponent = () => (
  <Router>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registerpet" element={<RegisterPet />} />
      <Route path="/animals/:id" element={<AnimalDetails />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/" element={<Navigate to="/auth" />} />
    </Routes>
  </Router>
);

root.render(<RootComponent />);
