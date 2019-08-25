// 1. importar express
const express = require("express");
// imporatar mongoose: ODM> Object Document Manager
const mongoose = require("mongoose");
// importar la API
const api = require("./Application/Api");
// inicialiar dotenv
require("dotenv").config();
// crear las configuraciones para la conexiona a la BD
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// 2. crear una instancia express
const server = express();
// 3. crear un puerto
const port = 3000;
// conectarnos a la base de datos
mongoose.connect(process.env.MONGO_URL, options);
// usar un middleware para manejar json
server.use(express.json());
// api - pasariamos el serve express
api(server);
// 4. abrir un listener/disparar el listener
server.listen(port, () => {
  console.log("Server start on > http://localhost:" + port);
});
