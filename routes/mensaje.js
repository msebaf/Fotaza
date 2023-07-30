var express = require('express');
var router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const {mensaje, perfil} = require('../models');
const { Op, sequelize, literal } = require('sequelize');

router.get('/', async function(req, res, next) {
  try {
    const receptorId = req.session.usuarioId;

    const subquery = `(SELECT MAX(id) FROM mensajes AS m2 WHERE m2.receptorId = ${receptorId} AND m2.emisorId != ${receptorId} GROUP BY m2.emisorId)`;

    const mensajes = await mensaje.findAll({
      attributes: ['emisorId', 'texto', 'fechaHora'],
      include: {
        model: perfil,
        attributes: ['nombreUsuario', 'avatar', 'usuarioId'],
      },
      where: {
        receptorId: receptorId,
        id: {
          [Op.in]: literal(subquery),
        },
      },
    });

    res.json(mensajes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


module.exports = router;
