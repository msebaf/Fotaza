var express = require('express');
var router = express.Router();

const { imagen, voto, Sequelize } = require("../models");
const { Op } = Sequelize; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(302,'/index');
});

router.get('/index', async function(req, res, next) {
  try {
    
    const fechaHaceUnAnio = new Date();
    fechaHaceUnAnio.setFullYear(fechaHaceUnAnio.getFullYear() - 1);

   
    const imagenesUltimoAño = await imagen.findAll({
      where: {
        fechaCreacion: {
          [Op.gte]: fechaHaceUnAnio, 
        },
      },
      include: [
        {
          model: voto,
          as: 'votos', 
        },
      ],
    });

   

  
    const seleccionImagenes = imagenesUltimoAño.filter(imagen => {
      const fechaLimitePrimeraSemana = new Date(imagen.fechaCreacion);
      fechaLimitePrimeraSemana.setDate(fechaLimitePrimeraSemana.getDate() + 7);

      const votosPrimerSemana = imagen.votos.filter(voto => voto.fechaVoto >= imagen.fechaCreacion && voto.fechaVoto <= fechaLimitePrimeraSemana);
      const sumaVotosPrimerSemana = votosPrimerSemana.reduce((total, voto) => total + voto.voto, 0);
      const promedioVotosPrimerSemana = sumaVotosPrimerSemana / votosPrimerSemana.length;

      return votosPrimerSemana.length > 1 && promedioVotosPrimerSemana >= 4;
    });

  

    // Ordenar el array por el promedio de votos de mayor a menor
    seleccionImagenes.sort((a, b) => {
      const promedioA = a.votos.reduce((total, voto) => total + voto.voto, 0) / a.votos.length;
      const promedioB = b.votos.reduce((total, voto) => total + voto.voto, 0) / b.votos.length;
      return promedioB - promedioA;
    });

    // Si hay menos de tres imágenes en seleccionImagenes, completar con imágenes aleatorias
    while (seleccionImagenes.length < 3) {
      const randomIndex = Math.floor(Math.random() * imagenesUltimoAño.length);
      const randomImage = imagenesUltimoAño[randomIndex];

      if (!seleccionImagenes.includes(randomImage)) {
        seleccionImagenes.push(randomImage);
      }
    }

    console.log("--------imagenes seleccionadas----------------")
    console.log(seleccionImagenes)



     // Generar otras tres imágenes aleatorias que no estén en seleccionImagenes
     const otrasTresImagenes = [];
     while (otrasTresImagenes.length < 3) {
       const randomIndex = Math.floor(Math.random() * imagenesUltimoAño.length);
       const randomImage = imagenesUltimoAño[randomIndex];
 
       if (!seleccionImagenes.includes(randomImage) && !otrasTresImagenes.includes(randomImage)) {
         otrasTresImagenes.push(randomImage);
       }
     }

     console.log("--------otras tres imagenes----------------")
     console.log(otrasTresImagenes)
   
    res.render('index', { imagenesPrincipales: seleccionImagenes, otrasTresImagenes });
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    res.status(500).send('Error al obtener las imágenes');
  }
});

module.exports = router;
