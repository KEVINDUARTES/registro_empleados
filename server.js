const express = require('express');

const app = express();

//Importar Conexión MongoDB

const archivoBD = require('./conexion');

//Importacion de archivo Rutas y Modelos

const rutaempleado = require('./rutas/empleado');

//Importacion de Body Parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/empleado', rutaempleado);

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Backend Node.js Corriendo...');
});
//Configurar server básico

app.listen(5000, function () {
  console.log('El Servidor NODE está corriendo correctamente');
});
