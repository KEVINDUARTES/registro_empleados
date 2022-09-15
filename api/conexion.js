const mongoose = require('mongoose');

const uri = `mongodb+srv://duartes:1234@cluster0.4zrsabt.mongodb.net/dbempleados?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('base de datos conectada'))
  .catch((e) => console.log(e));

module.exports = mongoose;
