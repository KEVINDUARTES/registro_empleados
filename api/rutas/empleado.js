const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaEmpleado = new schema({
  nombre: String,
  email: String,
  area: String,
  puesto: String,
  telefono: String,
  idempleado: String,
});

const ModeloEmpleado = mongoose.model('empleados', schemaEmpleado);

module.exports = router;

//Agregar empleados
router.post('/agregarempleado', (req, res) => {
  const nuevoempleado = new ModeloEmpleado({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    area: req.body.area,
    puesto: req.body.puesto,
    idempleado: req.body.idempleado,
  });
  nuevoempleado.save(function (err) {
    //el metodo save nos permite guardar en la db
    if (!err) {
      res.send('Empleado agregado correctamente');
    } else {
      res.send(err);
    }
  });
});

router.get('/obtenerempleados', (req, res) => {
  ModeloEmpleado.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post('/obtenerdataempleado', (req, res) => {
  ModeloEmpleado.find(
    { idempleado: req.body.idempleado },
    function (docs, err) {
      if (!err) {
        res.send(docs);
      } else {
        res.send(err);
      }
    }
  );
});

//editar empleados
router.put('/actualizarempleado', (req, res) => {
  ModeloEmpleado.findOneAndUpdate(
    { idempleado: req.body.idempleado },
    {
      nombre: req.body.nombre,
      email: req.body.email,
      area: req.body.area,
      puesto: req.body.puesto,
      telefono: req.body.telefono,
    },
    (err) => {
      if (!err) {
        res.send('Empleado actualizado');
      } else {
        res.send(err);
      }
    }
  );
});

//borrar empleados
router.post('/borrarempleado', (req, res) => {
  ModeloEmpleado.findOneAndDelete(
    { idempleado: req.body.idempleado },
    (err) => {
      if (!err) {
        res.send('Empleado borrado correctamente');
      } else {
        res.send(err);
      }
    }
  );
});


