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
    <div>
      <h2>Lista de empleados</h2>
      {listaempleados}
    </div>
  );
}

export default ListaEmpleados;
