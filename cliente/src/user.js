const mongoose = require('mongoose');
const bcrypt = require('bcrypy');

const saltRounds = 10; //para saber cuantas veces hay que encriptarlo

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

UserSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;

    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, smae) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);
