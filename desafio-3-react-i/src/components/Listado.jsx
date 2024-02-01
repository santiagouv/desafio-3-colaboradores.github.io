import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Listado = ({ colaboradores, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <Button 
                variant="danger" 
                onClick={() => onDelete(colaborador.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
