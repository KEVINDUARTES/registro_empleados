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

router.get('/obtenerdataempleado/:_id', (req, res) => {
  let { _id } = req.params;
  ModeloEmpleado.find({ _id: _id }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

//editar empleados
router.put('/actualizarempleado', (req, res) => {
  ModeloEmpleado.findOneAndUpdate(
    { _id: req.body._id },
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
router.delete('/borrarempleado', (req, res) => {
  ModeloEmpleado.findOneAndDelete({ idempleado: req.body._id }, (err) => {
    if (!err) {
      res.send('Empleado borrado correctamente');
    } else {
      res.send(err);
    }
  });
});
