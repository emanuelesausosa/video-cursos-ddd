const trackApi = require("./tracks");
// 1. crear un metodo orquestador para manejar los segmentos de endpoints
const api = server => {
  server.use("/api/v1/tracks", trackApi);
};
// 2. exportar ese metodo api
module.exports = api;
