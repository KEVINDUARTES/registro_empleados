const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10; //para saber cuantas veces hay que encriptarlo

//modelo usuario
const UserSchema = new mongoose.Schema({
  nombre: { type: String, require: true, unique: true },
  apellido: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  contraseña: { type: String, require: true },
});

UserSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('contraseña')) {
    const document = this;

    bcrypt.hash(document.contraseña, saltRounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.contraseña = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (contraseña, callback) {
  bcrypt.compare(contraseña, this.contraseña, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);
