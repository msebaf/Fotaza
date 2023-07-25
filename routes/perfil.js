var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const { Sequelize } = require('../models');

const {usuario, imagen, perfil} = require("../models")
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(req.session.autorId)

  const perfilUsuario = await perfil.findOne({where: {usuarioId: req.session.usuarioId}})

  const imagenes =  await  imagen.findAll({where: { autorId: req.session.usuarioId },
    order: [['fechaCreacion', 'DESC']]})
    if (imagenes) {
      console.log("Se vienen las imagnes")
      console.log(imagenes)
      res.render('perfil', { title: 'Express', imagenes, perfilUsuario });
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
});

router.get('/buscar/:perfil', async function(req, res, next) {
  console.log("Perfil buscado: ", req.params.perfil)
  try {
    const perfilBuscado = req.params.perfil.substring(1);

    if (perfilBuscado.length > 0) {
      // Realiza la búsqueda de perfiles de usuarios que coincidan con el nombre de usuario ingresado
      const perfilesUsuarios = await perfil.findAll({
        where: {
          nombreUsuario: {
            [Sequelize.Op.like]: `${perfilBuscado}%`
          }
        }
      });

      // Envía los resultados de la búsqueda como respuesta
      res.json(perfilesUsuarios);
    } else {
      // Si no se proporciona una consulta, devuelve una lista vacía
      res.json([]);
    }
  } catch (error) {
    console.error('Error en la búsqueda de perfiles:', error);
    res.status(500).json({ error: 'Ocurrió un error en la búsqueda de perfiles.' });
  }
});

module.exports = router;
