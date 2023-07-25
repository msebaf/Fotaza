var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {usuario, perfil} = require("../models")
var router = express.Router();




/*
router.get("/github", passport.authenticate("github"));

router.get("/github/callback", passport.authenticate("github", {failureRedirect: "/index"}), (req,res)=>{
    console.log("a la grande le puse cuca")
    console.log(req.user[0].id)
    req.session.user = req.user[0].id
    res.redirect(301,"/todo")}

)*/

router.post("/registrar", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.Password, salt);
      console.log(req.body.Email + " " + req.body.UserName + " " + password);
      const user = await usuario.create({
        mail: req.body.Email,
        usuario: req.body.UserName,
        contrasenia: password
        
      });
      console.log("el id es ........................"+ user.id);
      const nuevoPerfil = await perfil.create({
        usuarioId: user.id,
        nombreUsuario: req.body.UserName,
        mail: req.body.Email

      })

  
  
      const response = {
        message: "Usuario Creado"
      };
  
      // Enviar respuesta JSON al cliente
      res.json(response);
    } catch (error) {
        console.log(error.errors[0].path);
        let palabraError ="";
        if(error.errors[0].path == "usuario"){
            palabraError="El usuario ya esta en uso"
        }
        else{
            palabraError="Ya existe una cuenta con ese Email"
        }
      const response = {
        message: `${palabraError}`
      };
  
      // Enviar respuesta JSON al cliente
      res.json(response);
    }
  });

router.post("/login", async (req,res)=>{
   
    const user = await usuario.findOne({where:{usuario:req.body.UserName}})
    if(user){
        console.log(user)
       const validado = await bcrypt.compare(req.body.Password, user.contrasenia)
       if(validado){
        req.session.isAuthenticated=true;
        req.session.usuarioId= user.id;
        req.session.user = user.usuario
        console.log(req.session.user)
        res.redirect("/principal");
       }
       else{
        res.send('<script>alert("Password incorrecto"); window.location.href = "/index"; </script>')
       }
    }
    else{
        res.send('<script>alert("Usuario no registrado"); window.location.href = "/index"; </script>')
    }
})

router.post("/loginInvitado", async (req,res)=>{
   
  
      req.session.isAuthenticated=false;
      req.session.user = "invitado"
      
      res.redirect("/principal");
     
     
})


router.get("/logout",(req,res)=>{
    req.session.destroy();
    
    res.redirect("/")
})

var EstaAutenticado = function(req,res,next){
    console.log(req.session.user)
    console.log(req.isAuthenticated() + "----" + req.user);
    if(req.user || req.session.isAuthenticated){ return next()}
    else{
    res.redirect("/index");
    }
}

module.exports.router = router;
module.exports.EstaAutenticado = EstaAutenticado;