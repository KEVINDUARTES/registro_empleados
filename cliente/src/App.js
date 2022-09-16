import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaEmpleados from './ListaEmpleados';
import AgregarEmpleado from './AgregarEmpleado';
import EditarEmpleado from './EditarEmpleado';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listaempleados' element={<ListaEmpleados />} />
          <Route path='/agregarempleado' element={<AgregarEmpleado />} />
          <Route
            exact
            path='/editarempleado/:_id'
            element={<EditarEmpleado />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    // </div>
  );
}

export default App;
