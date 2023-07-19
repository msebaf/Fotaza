var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {imagen, comentario} = require("../models");

var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log(req.session.user)

  res.render('principal', { title: 'Express' });
}); */
router.get('/', async function(req, res, next) {
  console.log(req.session.user);

    const imagenes =  await  imagen.findAll({order: ['fechaCreacion'], include:[comentario]})
    if (imagenes) {
      console.log("Se vienen las imagnes")
      console.log(imagenes)
      res.render('principal', { title: 'Express', imagenes }); 
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
});

module.exports = router;
