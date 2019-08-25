// 1. imporar las librerias : monogoose
const mongoose = require("mongoose");
const trackHandler = require("../Handlers/trackHandler");

// 2. extraer el objeto Schema de mongoose
const { Schema } = mongoose;

// 3. Crear nuestro mongooseSchema: va a contener nuetras propiedades
const mongoSchema = new Schema(
  {
    titulo: String,
    descripcion: String,
    avatar: String,
    color: String
  },
  {
    timestamps: true
  }
);

// hacer una inyeccion de dependencias
mongoSchema.loadClass(trackHandler);

//4. link, bind una conexion entre mongooseSchema y el document en la BD
const Track = mongoose.model("tracks", mongoSchema);
//5. exportar ese modelo (esa conexion)
module.exports = Track;
