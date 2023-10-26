import React from 'react';
import './Home.css';
import foto from '../assets/nosotros.jpg';


function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">Martin Witlis y Julian Akselrad</h1>
        <p className="header-subtitle">Los mas capos</p>
      </header>

      <section className="presentation">
        <div className="container">
        <img src={foto} alt="Mi Foto" className="my-photo" />
          <h2 className="presentation-title">¡Bienvenido a nuestro sitio web!</h2>
          <p className="presentation-text">
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

