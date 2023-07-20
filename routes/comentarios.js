var express = require('express');
var router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const {comentario} = require('../models');

/* GET users listing. */

router.post("/comentar", async (req,res)=>{
  console.log(req.body)
  const nComentario = await comentario.create({
      autorId: req.session.usuarioId,
      fotoId: req.body.nfoto,
      comentario: req.body.comentario,
      fechaCreacion: new Date()
    
  })
  res.redirect("/principal");
 
})

module.exports = router;


