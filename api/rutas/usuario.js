const User = require('../user');
const express = require('express');
const app = express.Router();

app.post('/register', (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;

  const user = new User({ nombre, apellido, email, contraseña });

  user.save((err) => {
    if (err) {
      return res.status(500).send('ERROR AL REGISTRARSE ');
    } else {
      return res.status(200).send('USUARIO REGISTRADO');
    }
  });
});
app.post('/aunthenticate', (req, res) => {
  const { email, contraseña } = req.body;
  if (!email || !contraseña) {
    res.status(500).send('Error Campos vacios');
  }
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).send('ERROR AL AUNTENTICAR AL USUARIO');
    } else if (!user) {
      res.status(500).send('EL USUARIO NO EXISTE');
    } else {
      user.isCorrectPassword(contraseña, (err, result) => {
        if (err) {
          res.status(500).send('ERROR AL AUNTETICAR');
        } else if (result) {
          res.status(200).send('USUARIO AUNTENTICADO CORRECTAMENTE');
        } else {
          res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
        }
      });
    }
  });
});

module.exports = app;
