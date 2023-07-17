var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {usuario, imagen} = require("../models")
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(req.session.autorId)
  const imagenes =  await  imagen.findAll({where: { autorId: req.session.autorId },
    order: [['fechaCreacion', 'DESC']]})
    if (imagenes) {
      console.log("Se vienen las imagnes")
      console.log(imagenes)
      res.render('perfil', { title: 'Express', imagenes });
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
});

module.exports = router;
