import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const initialState = {
  Nombre: '',
  Correo: '',
  Edad: '',
  Cargo: '',
  Telefono: '',
};

const Formulario = ({ onAdd }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+569\d{8}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedData = {
        ...formData,
        nombre: formData.nombre.trim(),
        correo: formData.correo.trim(),
        edad: formData.edad.trim(),
        cargo: formData.cargo.trim(),
        telefono: formData.telefono.trim().replace(' ',''),
      };

    let validationErrors = {};
    if (!validateEmail(trimmedData.correo)) {
      validationErrors.correo = 'El correo debe tener un formato válido (ejemplo@dominio.com, .org, .cl, etc.)';
    }

    if (!validatePhone(trimmedData.telefono)) {
      validationErrors.telefono = 'El número de teléfono debe comenzar con +569 seguido de 8 dígitos';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd(trimmedData);
    setFormData(initialState);
    setErrors({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre del colaborador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCorreo">
            <Form.Label>Email del colaborador</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese el email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              isInvalid={!!errors.correo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.correo}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Group controlId="formEdad">
            <Form.Label>Edad del colaborador</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese la edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCargo">
            <Form.Label>Cargo del colaborador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono del colaborador</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingrese el teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              isInvalid={!!errors.telefono}
            />
            <Form.Control.Feedback type="invalid">
              {errors.telefono}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );
};

export default Formulario;
