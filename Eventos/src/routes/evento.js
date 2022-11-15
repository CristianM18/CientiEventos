const express = require("express");
const router = express.Router(); //manejador de rutas de express
const eventoSchema = require("../models/a");



router.post("/crearUsuario", (req, res) => {
    const evento = eventoSchema(req.body);
    evento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/mostrarUsuario", (req, res) => {
    eventoSchema.find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/mostrarUsuario/:id", (req, res) => {
    const { id } = req.params;
    eventoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}); 