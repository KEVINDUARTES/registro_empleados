const express = require('express');

const app = express();
const cors = require('cors');
//Importar Conexión MongoDB

const archivoBD = require('./conexion');

//Importacion de archivo Rutas y Modelos

const rutaempleado = require('./rutas/empleado');
const rutausuario = require('./rutas/usuario');

//Importacion de Body Parser

//habilitar el cors
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/empleado', rutaempleado);
app.use('/api/usuario', rutausuario);

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Backend Node.js Corriendo...');
});
//Configurar server básico

app.listen(5000, function () {
  console.log('El Servidor NODE está corriendo correctamente');
});
