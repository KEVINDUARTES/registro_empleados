const app = express();
const bodyParser = require('body-parser');
const path = requiere('path');
const express = requiere('express');
const bcrypt = require('mongoose');
const mongoose = require('mongoose');
const User = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use(express.static(patch.join(__dirname, 'public')));

const uri = `mongodb+srv://duartes:1234@cluster0.4zrsabt.mongodb.net/dbempleados?retryWrites=true&w=majority`;

mongoose.connect(mongo_uri, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });

  user.save((err) => {
    if (err) {
      res.sattus(500).send('ERROR AL REGISTRAR AL USUARIO');
    } else {
      res.sattus(200).send('USUARIO REGISTRADO');
    }
  });
});
app.post('/aunthenticate', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.sattus(500).send('ERROR AL AUNTENTICAR AL USUARIO');
    } else if (!user) {
      res.sattus(500).send('EL USUARIO NO EXISTE');
    } else {
      user.isCorrectPassword(password, (err, result) => {
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
app.listen(3000, () => {
  console.log('server started');
});
module.exports = app;
