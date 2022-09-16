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
  function borrarempleado(_id) {
    // console.log(idempleado);

    axios
      .delete('http://localhost:5000/api/empleado/borrarempleado', {
        idempleado: _id,
      })
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
          <Link to={`/editarempleado/${empleado._id}`}>
            <li className='btn btn-success ml-auto'>Editar</li>{' '}
          </Link>
          &nbsp;
          <button
            className='btn btn-danger'
            onClick={() => {
              borrarempleado(empleado._id);
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
