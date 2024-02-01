import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Buscador = ({ onSearch }) => {
  const [termino, setTermino] = useState('');

  const handleSearch = () => {
    onSearch(termino);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Buscar colaborador"
        onChange={(e) => setTermino(e.target.value)}
      />
      <InputGroup>
        <Button onClick={handleSearch}>Buscar</Button>
      </InputGroup>
    </InputGroup>
  );
};

export default Buscador;
