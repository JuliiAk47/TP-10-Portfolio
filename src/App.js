import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';
import Contacto from './components/Contacto';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creaciones" element={<Creaciones />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


