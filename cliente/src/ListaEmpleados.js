import React, { useEffect, useState } from 'react';
import EmpleadoIndividual from './EmpleadoIndividual';
import axios from 'axios';

function ListaEmpleados() {
  const [dataempleados, setDataempleados] = useState([]);
  useEffect(() => {
    axios
      .get('api/empleado/obtenerempleados')
      .then((res) => {
        console.log(res.data);
        setDataempleados(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //mapear lista de usuarios en objeto usuario
  const listaempleados = dataempleados.map((empleado) => {
    return (
      <div>
        <EmpleadoIndividual empleado={empleado} />
      </div>
    );
  });

  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='/listaempleados'
                >
                  Lista de Empleados
                </a>
              </li>

              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='agregarempleado'
                >
                  Agregar Empleado
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <h2>Lista de empleados</h2>
        {listaempleados}
      </div>
    </div>
  );
}

export default ListaEmpleados;
