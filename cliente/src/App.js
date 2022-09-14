import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaEmpleados from './ListaEmpleados';
import AgregarEmpleado from './AgregarEmpleado';
import EditarEmpleado from './EditarEmpleado';
import Landing from './Landing';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Empleados de la empresa
          </a>
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
                <a className='nav-link active' aria-current='page' href='/'>
                  Inicio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='agregarempleado'>
                  Agregar Empleado
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} exact></Route>
          <Route
            path='/ListaEmpleados'
            element={<ListaEmpleados />}
            exact
          ></Route>
          <Route
            path='/agregarempleado'
            element={<AgregarEmpleado />}
            exact
          ></Route>
          <Route
            path='/editarempleado/:idempleado'
            element={<EditarEmpleado />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
