var express = require('express');
var router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const {mensaje, perfil} = require('../models');
const { Op, sequelize, literal } = require('sequelize');



router.get('/nuevos', async function(req, res, next) {
  try {
    const mensajesNuevos = await mensaje.count({
      where: {
        visto: false,
        receptorId: req.session.usuarioId,
      },
    });

    res.json({ mensajesNuevos });
  } catch (error) {
    console.error('Error al obtener mensajes nuevos:', error);
    res.status(500).json({ error: 'Error al obtener mensajes nuevos' });
  }
});
router.get('/marcarVisto/:id', async function(req, res, next) {
  console.log("-----------------------consulta acaaaa-------------------------------")
  try {
    const mensajes = await mensaje.findAll({
      where: {
        receptorId: req.session.usuarioId,
        emisorId: req.params.id,
        visto: false,
      },
    });

    for (const msg of mensajes) {
      console.log(msg)
      msg.visto = true;
      await msg.save();
    }

    res.json({ message: 'Mensajes marcados como vistos' });
  } catch (error) {
    console.error('Error al marcar mensajes como vistos:', error);
    res.status(500).json({ error: 'Error al marcar mensajes como vistos' });
  }
});


router.get('/chats', async function(req, res, next) {
  try {
    const idUsuario = req.session.usuarioId;

    const subquery = `(SELECT MAX(id) FROM mensajes AS m2 WHERE m2.receptorId = ${idUsuario} AND m2.emisorId != ${idUsuario} GROUP BY m2.emisorId)`;

    const mensajesAusuario = await mensaje.findAll({
      attributes: ['emisorId', 'texto', 'fechaHora'],
      include: {
        model: perfil,
        attributes: ['nombreUsuario', 'avatar', 'usuarioId'],
      },
      where: {
        receptorId: idUsuario,
        id: {
          [Op.in]: literal(subquery),
        },
      },
    });

    console.log("---------mensajes a usuario-----------")
    console.log(mensajesAusuario);

    //obtener mensajes de usuario a otros

    const subquery2 = `(SELECT MAX(id) FROM mensajes AS m2 WHERE m2.emisorId = ${idUsuario} AND m2.receptorId != ${idUsuario} GROUP BY m2.receptorId)`;

    const mensajesDEusuario = await mensaje.findAll({
      attributes: ['receptorId', 'texto', 'fechaHora'],
      include: {
        model: perfil,
        attributes: ['nombreUsuario', 'avatar', 'usuarioId'],
      },
      where: {
        emisorId: idUsuario,
        id: {
          [Op.in]: literal(subquery2),
        },
      },
    });
    console.log("---------mensajes de usuario-----------")
    console.log(mensajesDEusuario);

      let listaUltimosMensajes=[];

    if(mensajesAusuario.length> mensajesDEusuario.length){
        console.log("--------------------------mas mensajes a usuario-----------------")
        mensajesAusuario.forEach(mensaje=>{
          let unico = true
          mensajesDEusuario.forEach(mensaje2=>{
            if(mensaje.emisorId == mensaje2.receptorId && mensaje.receptorId == mensaje2.emisorId){
              unico = false
              if(mensaje.fechaHora < mensaje2.fechaHora){
                mensaje2.perfil.nombreUsuario = mensaje.perfil.nombreUsuario;
                mensaje2.perfil.avatar = mensaje.perfil.avatar;
                listaUltimosMensajes.push(mensaje2)
              }else{
                listaUltimosMensajes.push(mensaje)
              }

            }
              
            })
            if(unico){
              listaUltimosMensajes.push(mensaje)
            }
          })

    }else{
        console.log("--------------------------mas mensajes de usuario-----------------")
        
          mensajesDEusuario.forEach(mensaje=>{
            let unico = true
            mensajesAusuario.forEach(mensaje2=>{
              if(mensaje.emisorId == mensaje2.receptorId && mensaje.receptorId == mensaje2.emisorId){
                unico = false
                if(mensaje.fechaHora < mensaje2.fechaHora){
                  
                  listaUltimosMensajes.push(mensaje2)
                }else{
                  mensaje.perfil.nombreUsuario = mensaje2.perfil.nombreUsuario;
                  mensaje.perfil.avatar = mensaje2.perfil.avatar
                  mensaje.perfil.usuarioId = mensaje2.perfil.usuarioId
                  listaUltimosMensajes.push(mensaje)
                }
              }
              
            })
            if(unico){
              listaUltimosMensajes.push(mensaje)
            }
          })
        
      }

      console.log(listaUltimosMensajes)

    res.json(listaUltimosMensajes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    const mensajes = await mensaje.findAll({
      //attributes: ['emisorId', 'texto', 'fechaHora'],
      include: {
        model: perfil,
        attributes: ['avatar', 'usuarioId'],
      },
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { emisorId: req.session.usuarioId },
              { receptorId: req.params.id },
            ],
          },
          {
            [Op.and]: [
              { emisorId: req.params.id },
              { receptorId: req.session.usuarioId },
            ],
          },
        ],
      },
      order: [['fechaHora', 'DESC']], // Ordenar por fechaHora en orden descendente (los mensajes más nuevos primero)
    });

    res.json(mensajes);
  } catch (error) {
    next(error);
  }
});



module.exports = router;
