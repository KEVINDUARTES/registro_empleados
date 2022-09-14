import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

function EmpleadoIndividual({ empleado }) {
  const navegar = useNavigate();

  //Para animacion scroll al bajar

  useEffect(() => {
    AOS.init();
  }, []);

  //Function para borrar usuario
  function borrarempleado(idempleado) {
    console.log(idempleado);

    axios
      .post('/api/empleado/borrarempleado', { idempleado: idempleado })
      .then((res) => {
        console.log(res.data);
        //alert(res.data)
        Swal.fire('Borrar empleado', 'El empleado fue borrado');
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-3' data-aos='flip-right'>
          <ul className='list-group'>
            <li className='list-group-item'>{empleado.idempleado}</li>
            <li className='list-group-item'>{empleado.nombre}</li>
            <li className='list-group-item'>{empleado.email}</li>
            <li className='list-group-item'>{empleado.telefono}</li>
          </ul>
          <Link to={`/editarempleado/${empleado.idempleado}`}>
            <li className='btn btn-success ml-auto'>Editar</li>{' '}
          </Link>
          &nbsp;
          <button
            className='btn btn-danger'
            onClick={() => {
              borrarempleado(empleado.idempleado);
            }}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoIndividual;
