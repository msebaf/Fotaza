var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const { Sequelize } = require('../models');

const {usuario, imagen, perfil, comentario, voto, privacidad, licencia, categoria} = require("../models")
var router = express.Router();

/* GET home page. */
/*router.get('/', async function(req, res, next) {
  console.log(req.session.autorId)
  autenticado=true;
  const perfilUsuario = await perfil.findOne({where: {usuarioId: req.session.usuarioId}})
  const imagenes =  await  imagen.findAll({where: { autorId: req.session.usuarioId },
    order: [['fechaCreacion', 'DESC']]})
    if (imagenes) {
      console.log("Se vienen las imagnes")
      console.log(imagenes)
      res.render('perfil', { imagenes, perfilUsuario, autenticado });
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
  
});*/

router.get('/:id', async function(req, res, next) {
  console.log(req.session.user);
  let imagenes;
  let autenticado;
  
  const perfilUsuario = await perfil.findOne({where: {usuarioId: req.params.id}})
 console.log("------------------------perfilUsuario--------------")
  console.log(perfilUsuario)

  if(req.session.isAuthenticated){
    autenticado=true;
   imagenes = await imagen.findAll({
    where: {
      autorId: req.params.id
    },
    order: [['fechaCreacion', 'DESC']],
    include: [
      {
        model: comentario,
        separate: true,
        order: [['fechaCreacion', 'DESC']],
        include: [
          {
            model: perfil,
            as: 'perfil'
          }
        ]
      },
      {
        model: voto,
       
      },
      {
        model: privacidad,
      },
      {
        model: licencia,
        as: 'licencia',
      },
      {
        model: categoria,
        as: 'categoria',
      }
    ]
  });
}else{
  autenticado=false;
  imagenes = await imagen.findAll({
    where: {
      licenciaId: 3,
      autorId: req.params.id
    },
    order: [['fechaCreacion', 'DESC']],
    include: [
      {
        model: comentario,
        separate: true,
        order: [['fechaCreacion', 'DESC']],
        include: [
          {
            model: perfil,
            as: 'perfil'
          }
        ]
      },
      {
        model: voto,
         
      },
      {
        model: privacidad,
      },
      {
        model: licencia,
        as: 'licencia',
      },
      {
        model: categoria, // Incluir el modelo Categoria
        as: 'categoria', 
      }
    ]
  });
}
    if (imagenes) {

      for (const imagen of imagenes) {
        console.log(imagen.marcaAgua)
      //  console.log("licencia")
      //  console.log(imagen.licencia)
       // console.log("categorias")
      // console.log(imagen.categoria)
       // console.log("privaciad")
      //  console.log(imagen.privacidad)
        const comentarios = imagen.comentarios;
        for (const comentario of comentarios) {
          const perfil = comentario.perfil;
      
         // console.log("---------------------------------------------------------------------------------------------")
        //  console.log("---------------------------------------------------------------------------------------------")
         // console.log(perfil.nombreUsuario); 
          
          
        }
        let ranking = 0;
        let cantVotos = 0
        let votoUsuario=0;
        if(imagen.votos.length>0){
        for(const voto of imagen.votos){
          if(voto.usuarioId==req.session.usuarioId){
            votoUsuario=voto.voto.toFixed(2);
            
          }
          ranking+=voto.voto;
          cantVotos++;
        }
       
        ranking/=imagen.votos.length;
        
      }
      imagen.ranking=ranking.toFixed(2);
      imagen.cantVotos=cantVotos;
      imagen.votoUsuario=votoUsuario;
      }
      //console.log("Se vienen las imagnes")
     
      
      res.render('perfil', { autenticado, imagenes, perfilUsuario, usuarioId: req.session.usuarioId }); 
      
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
