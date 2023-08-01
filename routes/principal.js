var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const { sequelize } = require('../models');

const {imagen, comentario, perfil, voto, privacidad, licencia, categoria} = require("../models");


var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log(req.session.user)

  res.render('principal', { title: 'Express' });
}); */
router.get('/', async function(req, res, next) {
  console.log(req.session.user);
  let imagenes;
  let autenticado;
  let usuarioId= null;
  if(req.session.isAuthenticated){
    autenticado=true;
    usuarioId = req.session.usuarioId;
   imagenes = await imagen.findAll({
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
      licenciaId: 3
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
      imagen.ranking=ranking;
      imagen.cantVotos=cantVotos;
      imagen.votoUsuario=votoUsuario;
      }
      //console.log("Se vienen las imagnes")
     
      
      res.render('principal', { autenticado, imagenes, usuarioId }); 
      
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  
});

/*router.post("/publicar", async (req, res) => {
  try {
    const { titulo, categoria, etiqueta1, etiqueta2, etiqueta3, privacidad, licencia } = req.body;
    const autor = req.session.user;
    const autorId = req.session.usuarioId;
    const { foto } = req.files;
    const formato = foto.mimetype;
    console.log("Nombre de la foto: " + foto.name);
    const fecha = new Date();
    const size = foto.size; // por si quiero revisar un máximo tamaño
    console.log(fecha.getDate());
    console.log(fecha.getMonth());
    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());

    const nombreImagen = ""+autorId + fecha.getDate() + fecha.getMonth() + fecha.getFullYear() + fecha.getHours() + fecha.getMinutes() + fecha.getSeconds() + foto.name;
    console.log("nombre de la imagen " + nombreImagen);

    foto.mv("public/images/" + nombreImagen); // Move the uploaded image to the destination directory
    const rutaImagen = "images/" + nombreImagen;
    console.log("Los datos")
    console.log(titulo)
    console.log(categoria)
    console.log(etiqueta1)
    console.log(etiqueta2)
    console.log(etiqueta3)
    console.log(privacidad)
    console.log(licencia)
    console.log(autor)
    console.log(autorId)

    const newImagen = await imagen.create({
      autorId: autorId,
      autor: autor,
      fechaCreacion: fecha,
      titulo: titulo,
      categoriaId: categoria,
      etiqueta1: etiqueta1 || null,
      etiqueta2: etiqueta2 || null,
      etiqueta3: etiqueta3 || null,
      privacidadId: privacidad,
      licenciaId: licencia,
      formato: formato,
      resolucion: null,
      ruta: rutaImagen,
    });

    res.send('<script>alert("Imagen cargada"); window.location.href = "/principal"; </script>');
    // res.redirect("/principal"); // This line is not needed since you're already sending a response above.
  } catch (error) {
    console.error(error);
    res.send('<script>alert("Error al cargar la imagen"); window.location.href = "/principal"; </script>');
  }
});*/

module.exports = router;
