import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';

function AgregarEmpleado() {
  //Hooks

  const [nombre, setNombre] = useState('');
  const [area, setArea] = useState('');
  const [puesto, setPuesto] = useState('');

  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  function agregarEmpleado() {
    var empleado = {
      nombre: nombre,
      area: area,
      email: email,
      puesto: puesto,
      telefono: telefono,
      idusuario: uniqid(),
    };
    console.log(empleado);
    axios
      .post('http://localhost:5000/api/empleado/agregarempleado', empleado)
      .then((res) => {
        //alert(res.data)
        Swal.fire('Agregar empleado', 'El empleado fue agregado');
      })
      .then((err) => {
        console.log(err);
      });
    setNombre('');
    setArea('');
    setEmail('');
    setPuesto('');
    setTelefono('');
  }

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

      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <h2 className='mt-4'>Crear un nuevo empleado</h2>
          </div>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor='nombre' className='form-label'>
                Nombre
              </label>
              <input
                type='text'
                className='form-control'
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='telefono' className='form-label'>
                Teléfono
              </label>
              <input
                type='text'
                className='form-control'
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              ></input>
            </div>

            <div className='mb-3'>
              <label htmlFor='area' className='form-label'>
                Area
              </label>
              <input
                type='text'
                className='form-control'
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              ></input>
            </div>

            <div className='mb-3'>
              <label htmlFor='puesto' className='form-label'>
                Puesto
              </label>
              <input
                type='text'
                className='form-control'
                value={puesto}
                onChange={(e) => {
                  setPuesto(e.target.value);
                }}
              ></input>
            </div>

            <button onClick={agregarEmpleado} className='btn btn-success'>
              Guardar Empleado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarEmpleado;
