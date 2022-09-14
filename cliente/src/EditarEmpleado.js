import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditarEmpleado() {
  function editarEmpleado() {
    //nuevo objeto

    const actualizarempleado = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idempleado: params.idempleado,
    };

    //accion editar con axios
    axios
      .put('/api/empleado/actualizarempleado', actualizarempleado)
      .then((res) => {
        //alert(res.data)
        Swal.fire('Editar empleado', 'El empleado fue editado');
        navegar(0);
      })
      .then((err) => {
        console.log(err);
      });
  }

  const params = useParams();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const navegar = useNavigate();

  useEffect(() => {
    axios
      .post('/api/empleado/obtenerdataempleado', {
        idempleado: params.idempleado,
      })
      .then((res) => {
        console.log(res.data[0]);

        const dataempleado = res.data[0];
        setNombre(dataempleado.nombre);
        setEmail(dataempleado.email);
        setTelefono(dataempleado.telefono);
      });
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <h2 className='mt-4'>Editar un nuevo empleado</h2>
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

          <button onClick={editarEmpleado} className='btn btn-success'>
            Editar empleado
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarEmpleado;
