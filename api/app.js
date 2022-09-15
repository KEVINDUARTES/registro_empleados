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

module.exports = app;
