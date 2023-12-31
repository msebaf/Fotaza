var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const { sequelize } = require('../models');

const {imagen} = require("../models");


var router = express.Router();



router.post("/publicar", async (req, res) => {
  try {
    const { titulo, categoria, etiqueta1, etiqueta2, etiqueta3, privacidad, licencia,marcaAgua, comentarioAutor } = req.body;
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

    foto.mv("public/images/" + nombreImagen); 
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
      marcaAgua:marcaAgua,
      comentarioAutor: comentarioAutor,
      eliminada: false
    });
    if(newImagen){
    res.redirect("/principal");
    
    }else {
    console.error(error);
    res.send('<script>alert("Error al cargar la imagen"); </script>');
   
  }

  } catch (error) {
    console.error(error);
    res.send('<script>alert("Error al cargar la imagen"); </script>');
    
  }
})

router.post("/fotoPerfil", async (req, res) => {
  const { foto } = req.files;

  const ext = foto.name.split(".").pop(); // Obtenemos la extensión del archivo
  let nombreImagen = "perfil" + req.session.usuarioId + "." + ext;

  foto.mv("public/avatares/" + nombreImagen);
  const rutaImagen = "/avatares/" + nombreImagen;
  return res.send(rutaImagen);
});


router.put("/eliminarImagen/:id", async (req, res) => {
  const imagenId = req.params.id;

  try {
    
    const imagenExistente = await imagen.findByPk(imagenId);

    if (!imagenExistente) {
      return res.status(404).json({ error: "La imagen no existe." });
    }

   
    imagenExistente.eliminada = true;

   
    await imagenExistente.save();

    return res.status(200).json({ message: "La imagen se ha marcado como eliminada." });
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    return res.status(500).json({ error: "Error al eliminar la imagen." });
  }
});

module.exports = router;
