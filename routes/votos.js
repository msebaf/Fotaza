var express = require('express');
var router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const {voto} = require('../models');

/*  
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post("/votar/:fotoid/:voto", async (req,res)=>{
  console.log(req.body)
  console.log(req.params.fotoid)
  console.log(req.params.voto)
  const nVoto = await voto.create({
      usuarioId: req.session.usuarioId,
      fotoId: req.params.fotoid, 
      voto: req.params.voto
      
    
  })
  res.status(200).json({ message: "Voto exitoso" });
 
})

router.put("/update/:fotoid/:voto", async (req, res) => {
  try {
    const actVoto = await voto.update(
      { voto: req.params.voto },
      {
        where: {
          fotoId: req.params.fotoid,
          usuarioId: req.session.usuarioId,
        },
      }
    );

   
    if (actVoto[0] === 1) {
      return res.status(200).json({ message: "Voto exitoso" });
    } else {
      return res.status(404).json({ error: "No se encontró el voto para actualizar" });
    }
  } catch (error) {
    console.error("Error al actualizar el voto:", error);
    res.status(500).json({ error: "Ocurrió un error al actualizar el voto" });
  }
});

router.get("/promedio/:fotoid", async (req,res)=>{
  
  console.log(req.params.fotoid)
  let promedio=0
  const votos = await voto.findAll({where: { fotoId: req.params.fotoid }})
  for (const voto of votos) {
    promedio+=voto.voto;
  }
  if(votos.length>0){
    promedio= promedio/votos.length;
  }
  res.status(200).json({ promedio: promedio.toFixed(2) });
 
})
module.exports = router;
