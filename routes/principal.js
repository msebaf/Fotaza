var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const { sequelize } = require('../models');

const {imagen, comentario, perfil} = require("../models");

var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log(req.session.user)

  res.render('principal', { title: 'Express' });
}); */
router.get('/', async function(req, res, next) {
  console.log(req.session.user);
  const imagenes = await imagen.findAll({
    order: [['fechaCreacion', 'ASC']],
    include: [
      {
        model: comentario,
        separate:true,
        order: [['fechaCreacion', 'DESC']],
        include: [
          {
            model: perfil,
            as: 'perfil'
          }
        ]
      }
    ]
  });
    if (imagenes) {

      for (const imagen of imagenes) {
        const comentarios = imagen.comentarios;
        for (const comentario of comentarios) {
          const perfil = comentario.perfil;
          // Accede a los atributos del perfil según tus necesidades
          console.log("---------------------------------------------------------------------------------------------")
          console.log("---------------------------------------------------------------------------------------------")
          console.log(perfil.nombreUsuario); // Ejemplo: Imprime el nombre del perfil
          
          // ...
        }
      }
      console.log("Se vienen las imagnes")
      console.log("mira acaaaaaaaaaaa  "+ imagenes[0].comentario)
      
      res.render('principal', { title: 'Express', imagenes }); 
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
});

module.exports = router;
