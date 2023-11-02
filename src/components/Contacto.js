import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Contacto.css';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");


    window.location.reload();
  };

  return (
    <div>
      <h1>Acá te vas a poder contactar con el soporte para resolver problemas</h1>
      <div className="form-container"> { }

        <Form onSubmit={handleSubmit}>
          <div className="form-div">
            <Form.Group className="form-group" controlId="formName"> { }
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
          </div>
          <div className="form-div">
            <Form.Group className="form-group" controlId="formEmail"> { }
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
          </div>
          <div className="form-div">
            <Form.Group className="form-group" controlId="formMessage"> { }
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje" />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contacto;

