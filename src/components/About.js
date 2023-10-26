import React from 'react';
import './About.css'; 
import nuestraFoto from '../assets/caca.jpg'; 



    
    function About() {
      return (
        <div className="about-container">
          <section className="about-section">
            <div className="container">
              <div className="about-content">
                <div className="about-text">
                  <h2>Acerca de Nosotros</h2>
                  <p>
                    Somos un equipo apasionado de desarrolladores web dedicados a crear soluciones innovadoras en línea. Nuestra misión es proporcionar experiencias excepcionales a nuestros clientes a través del desarrollo web de vanguardia.
                  </p>
                </div>
                <div className="about-image">
                  <img src={nuestraFoto} alt="Nuestra Foto" />
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    
    export default About;
