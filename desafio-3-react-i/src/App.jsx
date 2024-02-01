import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './components/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const agregarColaborador = colaborador => {
    if (
      colaborador.nombre &&
      colaborador.correo &&
      colaborador.edad &&
      colaborador.cargo &&
      colaborador.telefono
    ) {
      setColaboradores([...colaboradores, { ...colaborador, id: Date.now().toString() }]);
      setAlerta({ mensaje: 'Colaborador agregado con éxito', tipo: 'success' });
    } else {
      setAlerta({ mensaje: 'Todos los campos deben ser completados', tipo: 'danger' });
    }
  };

  const eliminarColaborador = id => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    setAlerta({ mensaje: 'Colaborador eliminado', type: 'danger' });
  };

  const filtrarColaboradores = termino => {
    setTerminoBusqueda(termino.toLowerCase());
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    colaborador.nombre.toLowerCase().includes(terminoBusqueda) ||
    colaborador.correo.toLowerCase().includes(terminoBusqueda) ||
    colaborador.cargo.toLowerCase().includes(terminoBusqueda) ||
    colaborador.telefono.includes(terminoBusqueda)
  );

  return (
    <div className="container mt-5">
      {alerta.mensaje && <Alert message={alerta.mensaje} type={alerta.tipo} />}
      <Buscador onSearch={filtrarColaboradores} />
      <Listado colaboradores={colaboradoresFiltrados} onDelete={eliminarColaborador} />
      <Formulario onAdd={agregarColaborador} />
    </div>
  );
}

export default App;
