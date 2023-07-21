var express = require('express');
var router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const {comentario, perfil} = require('../models');

/* GET users listing. */

router.post("/comentar", async (req,res)=>{
  console.log(req.body)
  
  const nComentario = await comentario.create({
      autorId: req.session.usuarioId,
      fotoId: req.body.nfoto,
      comentario: req.body.comentario,
      fechaCreacion: new Date()
    
  })
  res.status(200).json({ message: "Comentario agregado exitosamente" });
 
})

router.get("/listar/:fotoId", async (req, res) => {
  

  try {
    const comentarios = await comentario.findAll({
      where: { fotoId: req.params.fotoId },
      order: [['fechaCreacion', 'DESC']],
      include: [perfil]
    });

    console.log("Datos de comentarios:", comentarios);

    // Serializar los datos antes de enviarlos como respuesta JSON
    const comentariosSerializados = JSON.stringify(comentarios);

    res.status(200).json(comentariosSerializados);
  } catch (error) {
    console.error("Error al obtener los comentarios:", error);
    res.status(500).json({ message: "Error al obtener los comentarios" });
  }
});

module.exports = router;


