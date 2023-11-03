import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FotoCarrito from '../assets/carrito.jpg'
import FotoBanderas from '../assets/banderas.jpg'
import FotoProductos from '../assets/productos.jpg'
import FotoCita from '../assets/cita.jpg'
import FotoPersonajes from '../assets/personajes.jpg'
import FotoQqsm from '../assets/qqsm.jpg'
import FotoLisandro from '../assets/lisandro.jpg'
import FotoLista  from '../assets/lista.jpg'
import FotoJava from '../assets/js.jpg'
import FotoReact from '../assets/react.jpg'
import './Creaciones.css';

function Creaciones() {
  return (
    <div>
      <h2>Nuestras Creaciones</h2>
      <div className="creaciones-container">
      <div className="d-flex flex-wrap">
        
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoCarrito} />
          <Card.Body>
            <Card.Title>Carrito de Compras</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP-8-Carrito-de-compras">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoBanderas} />
          <Card.Body>
            <Card.Title>Banderas</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP-6-Jugando-con-banderas">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoProductos} />
          <Card.Body>
            <Card.Title>Productos PT.2</Card.Title>
            <Button variant="primary" href="https://github.com/MartinWit2/TP7-productos">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoCita} />
          <Card.Body>
            <Card.Title>Citas PT.2</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP5-Citas-P2">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoCita} />
          <Card.Body>
            <Card.Title>Citas PT.1</Card.Title>
            <Button variant="primary" href="https://github.com/MartinWit2/TP4-EFSI">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoPersonajes} />
          <Card.Body>
            <Card.Title>Personajes</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP-Personajes">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoQqsm} />
          <Card.Body>
            <Card.Title>¿Quien quiere ser millonario?</Card.Title>
            <Button variant="primary" href="https://github.com/AleBur10/TP7">Ver Trabajo</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoLisandro} />
          <Card.Body>
            <Card.Title>Futbol Argentino</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP9---TP-Final-integrador">Ver Trabajo</Button>
          </Card.Body>
        </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoLista} />
          <Card.Body>
            <Card.Title>TODO List</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP2-TODO-List">Ver Trabajo</Button>
          </Card.Body>
        </Card>

                        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoProductos} />
          <Card.Body>
            <Card.Title>Productos PT.1</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP3-Productos">Ver Trabajo</Button>
          </Card.Body>
        </Card>

                                <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoJava} />
          <Card.Body>
            <Card.Title>Manejo de JavaScript</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP1---Validaciones-con-funciones-y-manejo-de-DOM-con-Javascript">Ver Trabajo</Button>
          </Card.Body>
        </Card>

                                        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={FotoReact} />
          <Card.Body>
            <Card.Title>Imagenes en React Native</Card.Title>
            <Button variant="primary" href="https://github.com/JuliiAk47/TP-2-Imagenes-en-RN-Expo">Ver Trabajo</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
}

export default Creaciones;
