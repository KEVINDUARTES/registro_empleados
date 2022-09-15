import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  //Hooks

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  function register() {
    var usuario = {
      nombre: nombre,
      apellido: apellido,

      email: email,
      contraseña: contraseña,

      idusuario: uniqid(),
    };

    axios

      .post('http://localhost:5000/api/usuario/register', usuario)
      .then((res) => {
        //alert(res.data)
        console.log(res);
        Swal.fire('Registrar', 'Registrado Correctamente');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Error al registrarse');
      });
    setNombre('');
    setApellido('');

    setEmail('');
    setContraseña('');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <h2 className='mt-4'>Registrarse</h2>
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
              Apellido
            </label>
            <input
              type='email'
              className='form-control'
              value={apellido}
              onChange={(e) => {
                setApellido(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='area' className='form-label'>
              Email
            </label>
            <input
              type='text'
              className='form-control'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='puesto' className='form-label'>
              Contraseña
            </label>
            <input
              type='text'
              className='form-control'
              value={contraseña}
              onChange={(e) => {
                setContraseña(e.target.value);
              }}
            ></input>
          </div>
          <Link to='/register'>
            <button onClick={register} className='btn btn-primary btn-block'>
              Guardar Usuario
            </button>
          </Link>{' '}
          <Link to='/'>
            <button className='btn btn-primary btn-block'> volver </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
