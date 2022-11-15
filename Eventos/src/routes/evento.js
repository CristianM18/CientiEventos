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