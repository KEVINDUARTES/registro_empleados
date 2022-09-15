import { Link } from 'react-router-dom';
import React, { useState, useDispatch } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Login() {
  //Hooks

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  function login() {
    var usuario = {
      email: email,
      contraseña: contraseña,
      idusuario: uniqid(),
    };

    axios

      .post('http://localhost:5000/api/usuario/aunthenticate', usuario)
      .then((res) => {
        //alert(res.data)
        console.log(res);
        Swal.fire('Aunthenticar', 'Aunthenticado correctamente');

        navigate('/listaempleados', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Error al ingresar');
      });

    setEmail('');
    setContraseña('');
  }

  return (
    // < onSubmit={(e) => handleSubmit(e)}/>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <h2 className='mt-4'>Logearse</h2>
        </div>
        <div className='col-sm-6 offset-3'>
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
            <button className='btn btn-primary btn-block'> Registrarse</button>
          </Link>
          {''} {''}
          <button onClick={login} className='btn btn-primary btn-block'>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
