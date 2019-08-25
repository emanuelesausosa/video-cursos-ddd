// segmneot de endpoints para tracks
// endpoint > ruta
// 1. importar express
const express = require("express");
// 2. obtenemos el objeto/funcion Router
const router = express.Router();
// 3. llamar a nuestro modelo
const Track = require("../Domain/Models/track");
// 4. crear diferentes endpoints

// a. listar todos los tracks
/**
 * GET: obtener todos los tracks
 */
router.get("/", async (req, res) => {
  const tracks = await Track.list();
  res.status(200).json(tracks);
});

// b. crear un nuevo track
router.post("/add", async (req, res) => {
  const result = await Track.add(
    req.body.titulo,
    req.body.descripcion,
    req.body.avatar,
    req.body.color
  );

  res.status(200).json(result);
});

// 5. exportar el modulo router
module.exports = router;
