import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FotoReact from "../assets/react.jpg";
import FotoQqsm from "../assets/qqsm.jpg";
import FotoPersonajes from "../assets/personajes.jpg";
import FotoCita from "../assets/cita.jpg";
import "./Favoritos.css";

function Favoritos() {
  return (
    <div>
      <h2>Nuestros Favoritos</h2>
      <div className="creaciones-container">
        <div className="d-flex flex-wrap">
      <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={FotoReact} />
            <Card.Body>
              <Card.Title>Imagenes en React Native</Card.Title>
              <Button
                variant="primary"
                href="https://github.com/JuliiAk47/TP-2-Imagenes-en-RN-Expo"
              >
                Ver Trabajo
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={FotoQqsm} />
            <Card.Body>
              <Card.Title>¿Quien quiere ser millonario?</Card.Title>
              <Button variant="primary" href="https://github.com/AleBur10/TP7">
                Ver Trabajo
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={FotoPersonajes} />
            <Card.Body>
              <Card.Title>Personajes</Card.Title>
              <Button
                variant="primary"
                href="https://github.com/JuliiAk47/TP-Personajes"
              >
                Ver Trabajo
              </Button>
            </Card.Body>
          </Card>


      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={FotoCita} />
        <Card.Body>
          <Card.Title>Citas PT.2</Card.Title>
          <Button
            variant="primary"
            href="https://github.com/JuliiAk47/TP5-Citas-P2"
          >
            Ver Trabajo
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={FotoCita} />
        <Card.Body>
          <Card.Title>Citas PT.1</Card.Title>
          <Button
            variant="primary"
            href="https://github.com/MartinWit2/TP4-EFSI"
          >
            Ver Trabajo
          </Button>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}

export default Favoritos;
