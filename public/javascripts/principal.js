
var arrayClickeados = [];
let usuarioLogeado = document.getElementById('logeado').checked ;

function click1estrella(imagenId, controlVoto) {
   // console.log(imagenId)
  //  console.log(controlVoto)
  //  console.log(controlVoto==0)
    if(controlVoto==0 && !arrayClickeados.includes(imagenId)){
        let cvotos= document.getElementById("cantVotos" + imagenId).innerHTML;
        arrayClickeados.push(imagenId);
        cvotos =  parseInt(document.getElementById("cantVotos" + imagenId).innerHTML) +1;

    fetch(`/votos/votar/${imagenId}/1`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta no es válida");
        }
       // console.log("Votación exitosa");
        
        
        controlVoto = 1;
        
        const estrellasCont = document.getElementById("estrellasCont" + imagenId);
        
        estrellasCont.setAttribute('data-clickeado', 'true');

        const estrellas = estrellasCont.children;
      
        for (let i = 0; i < estrellas.length; i++) {
          if(estrellas[i].classList.contains("estrella1")){
            estrellas[i].classList.remove("estrellaSelected")
            estrellas[i].classList.add("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella2")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella3")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella4")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella5")){
            estrellas[i].classList.remove("estrellaSelected");
          }
        }
        fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
       //     console.log("Promedio actualizado");
      //      console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

      })
      .catch((error) => {
        console.error("Error al votar:", error);
      });
    }else{
    //  console.log(controlVoto==0)
    //  console.log(controlVoto)
      fetch(`/votos/update/${imagenId}/1`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
      
        //  console.log("Votación exitosa");
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
        const estrellas = estrellasCont.children;
      
        for (let i = 0; i < estrellas.length; i++) {
          if(estrellas[i].classList.contains("estrella1")){
            estrellas[i].classList.remove("estrellaSelected")
            estrellas[i].classList.add("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella2")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella3")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella4")){
            estrellas[i].classList.remove("estrellaSelected");
          }
          if(estrellas[i].classList.contains("estrella5")){
            estrellas[i].classList.remove("estrellaSelected");
          }
        }
        fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    }
  }

  function click2estrella(imagenId, controlVoto) {
  //  console.log(imagenId);
  //  console.log(controlVoto);
  //  console.log(controlVoto === 0);
  
    if(controlVoto==0 && !arrayClickeados.includes(imagenId)){
      let cvotos= document.getElementById("cantVotos" + imagenId).innerHTML;
      arrayClickeados.push(imagenId);
      cvotos =  parseInt(document.getElementById("cantVotos" + imagenId).innerHTML) +1;
      fetch(`/votos/votar/${imagenId}/2`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
       //   console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          estrellasCont.setAttribute('data-clickeado', 'true');
          
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
        //    console.log("Promedio actualizado");
        //    console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
    //  console.log(controlVoto === 0);
    //  console.log(controlVoto);

      fetch(`/votos/update/${imagenId}/2`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
        //  console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
          //  console.log("Promedio actualizado");
         //   console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    }
  }
  
  function click3estrella(imagenId, controlVoto) {
   // console.log(imagenId);
   // console.log(controlVoto);
   // console.log(controlVoto === 0);
  
    if(controlVoto==0 && !arrayClickeados.includes(imagenId)){
      let cvotos= document.getElementById("cantVotos" + imagenId).innerHTML;
      arrayClickeados.push(imagenId);
      cvotos =  parseInt(document.getElementById("cantVotos" + imagenId).innerHTML) +1;
      fetch(`/votos/votar/${imagenId}/3`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
        //  console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
    //  console.log(controlVoto === 0);
     // console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/3`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
          console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
           // console.log("Promedio actualizado");
          //  console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    }
  }
  
  function click4estrella(imagenId, controlVoto) {
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
    if(controlVoto==0 && !arrayClickeados.includes(imagenId)){
      let cvotos= document.getElementById("cantVotos" + imagenId).innerHTML;
      arrayClickeados.push(imagenId);
      cvotos =  parseInt(document.getElementById("cantVotos" + imagenId).innerHTML) +1;
      fetch(`/votos/votar/${imagenId}/4`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
         // console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
    //  console.log(controlVoto === 0);
    //  console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/4`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
         // console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    }
  }
  
  function click5estrella(imagenId, controlVoto) {
    //console.log(imagenId);
   // console.log(controlVoto);
   // console.log(controlVoto === 0);
  
    if(controlVoto==0 && !arrayClickeados.includes(imagenId)){
      let cvotos= document.getElementById("cantVotos" + imagenId).innerHTML;
      arrayClickeados.push(imagenId);
      cvotos =  parseInt(document.getElementById("cantVotos" + imagenId).innerHTML) +1;
      fetch(`/votos/votar/${imagenId}/5`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Votación exitosa");
          controlVoto = 1;
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
          //  console.log("Promedio actualizado");
           // console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
    //  console.log(controlVoto === 0);
    //  console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/5`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
        //  console.log("Votación exitosa");
          const estrellasCont = document.getElementById("estrellasCont" + imagenId);
          const estrellas = estrellasCont.children;
  
          for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].classList.contains("estrella1")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella2")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella3")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella4")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
            if (estrellas[i].classList.contains("estrella5")) {
              estrellas[i].classList.remove("estrellaSelected");
              estrellas[i].classList.add("estrellaSelected");
            }
          }
          fetch(`/votos/promedio/${imagenId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
            document.getElementById("cantVotos" + imagenId).innerHTML = data.cantVotos;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    }
  }
  

  function comentar(fotoId) {
    let pcontenedor = document.getElementById("fotoCont" + fotoId);
    const formulario = document.getElementById("formulario-comentario" + fotoId);
    let coment = document.getElementById("n-comentario" + fotoId).value;
  
    const formData = new URLSearchParams();
    formData.append("nfoto", fotoId);
    formData.append("comentario", coment);
  
    fetch("/comentarios/comentar", {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("La respuesta no es válida");
      }
  
      fetch(`/comentarios/listar/${fotoId}`).then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta no es válida");
        }
        return response.json();
      })
      .then((data) => {
        const comentarios = JSON.parse(data);
        let pContenedor = document.getElementById("fotoCont" + fotoId);
        let divComent = document.getElementById("pcomentarios" + fotoId);
        let masComentarios = document.getElementById("masComentarios" + fotoId);
        
        // Mostrar el primer comentario
        if (document.getElementById("primerComentario" + fotoId)) {
          document.getElementById("primerComentario" + fotoId).innerText = comentarios[0].comentario;
          document.getElementById("imgPrimerComentario" + fotoId).src = comentarios[0].perfil.avatar;
        } else {
          let primerFoto = document.createElement("img");
          primerFoto.setAttribute("id", "imgPrimerComentario" + fotoId);
          primerFoto.setAttribute("class", "img-perfil-comentario");
          primerFoto.setAttribute("src", comentarios[0].perfil.avatar);
          divComent.appendChild(primerFoto);
  
          let primerComent = document.createElement("p");
          primerComent.setAttribute("id", "primerComentario" + fotoId);
          divComent.appendChild(primerComent);
          primerComent.innerText = comentarios[0].comentario;
        }
  
        // Crear o actualizar el elemento "details" según sea necesario
        let isMasComentariosOpen = masComentarios ? masComentarios.open : false; // Verificar si está abierto
  
        if (!masComentarios && comentarios.length>=2) {
          // Crear el elemento "details" solo si no existe
          masComentarios = document.createElement("details");
          masComentarios.setAttribute("id", "masComentarios" + fotoId);
          pContenedor.appendChild(masComentarios);
        }
  
        // Establecer el atributo "open" según el estado deseado antes de modificar el contenido
        if(comentarios.length>=2){
        masComentarios.open = isMasComentariosOpen;
        }
  
        // Crear el elemento "summary" solo si no existe
        if(masComentarios){
        if (!document.getElementById("summary" + fotoId)) {
          let summary = document.createElement("summary");
          summary.setAttribute("id", "summary" + fotoId);
          summary.innerText = "Mas Comentarios";
          masComentarios.appendChild(summary);
        }
      }
  
        // Código para agregar los comentarios anteriores y los nuevos comentarios
        if(masComentarios){
        let comentariosExistentes = masComentarios.getElementsByClassName("comentarios");
        while (comentariosExistentes.length > 0) {
          comentariosExistentes[0].remove();
        }
      }
  
        for (let i = 1; i < comentarios.length; i++) {
          let div = document.createElement("div");
          div.setAttribute("class", "comentarios");
          masComentarios.appendChild(div);
          let img = document.createElement("img");
          img.setAttribute("class", "img-perfil-comentario");
          img.setAttribute("src", comentarios[i].perfil.avatar);
          div.appendChild(img);
          let p = document.createElement("p");
          p.innerText = comentarios[i].comentario;
          div.appendChild(p);
        }
  
        // Restablecer el atributo "open" después de modificar el contenido
        if(masComentarios){
        masComentarios.open = isMasComentariosOpen;
        }
        document.getElementById("n-comentario" + fotoId).value="";
      })
    })
    .catch((error) => {
      console.error("Error al enviar el comentario:", error);
    });
  }
  

  



  
//mostrar vista previa de la foto
  function mostrarVistaPrevia() {
  //  console.log("Cambio")
    const archivo = document.getElementById('foto').files[0];
    if (archivo) {
      const lector = new FileReader();

      lector.onload = function(e) {
        document.getElementById('fotoAsubir').setAttribute('src', e.target.result);
      }

      lector.readAsDataURL(archivo);
    }
  }

  if(document.getElementById("foto")){
  document.getElementById('foto').addEventListener('change', mostrarVistaPrevia);
}

//buscar perfiles

const inputBusqueda = document.getElementById('buscaUsuario');
const listaResultados = document.getElementById('paraBarra');

inputBusqueda.addEventListener('input', buscarPerfil)

function buscarPerfil(){
  const query = inputBusqueda.value;
  //  console.log(query);
    if (query.length > 0) {
      // Enviar una solicitud AJAX al servidor con la consulta de búsqueda
      fetch(`/perfil/buscar/:${query}`)
        .then(response => response.json())
        .then(data => {
      //    console.log("---------data-----------")
      //    console.log(data);
          // Limpiar los resultados anteriores
          listaResultados.innerHTML = '';

          // Mostrar los resultados de la búsqueda
          data.forEach(perfil => {
            const itemLista = document.createElement('div');
            itemLista.setAttribute('class', 'item-lista');
            listaResultados.appendChild(itemLista);
            let foto = document.createElement('img');
            foto.setAttribute('class', 'foto-perfil-busqueda');
            foto.setAttribute('src', perfil.avatar);
            itemLista.appendChild(foto);
            const enlace = document.createElement('a');
            enlace.setAttribute('href', `/perfil/${perfil.usuarioId}`);
            enlace.textContent = perfil.nombreUsuario; // Aquí estableces el texto del enlace
            itemLista.appendChild(enlace);

          });
        })
        .catch(error => {
          console.error('Error en la búsqueda:', error);
        });
    } else {
      // Limpiar la lista de resultados si no hay una consulta
      listaResultados.innerHTML = '';
    }
  };





let filtroCategoria =  document.getElementById("filtroCategoriaSelect");
filtroCategoria.addEventListener("change", filtrarFotos)

let filtroEtiquetas =  document.getElementById("filtroEtiquetas");
filtroEtiquetas.addEventListener("input", filtrarFotos)

function filtrarFotos(){
      let categoriaOk=true;
      let etiquetaOk=true;
      let fotos = document.querySelectorAll('[id^="foto-main-container"]');
      fotos.forEach(foto => {
        categoriaOk=filtrarPorCategoria(foto);
        console.log(categoriaOk)
        etiquetaOk=filtrarPorEtiqueta(foto);
        console.log(etiquetaOk)
        if(!categoriaOk || !etiquetaOk){
          foto.style.display = "none"
          console.log("ocultar")
        }else{
          foto.style.display = "flex"
        //  console.log("mostrar")
        }
      })
  
}




function filtrarPorCategoria(foto){

 // console.log("funcion activada")
  let filtroCategoria =  document.getElementById("filtroCategoriaSelect");
   
   
  if(filtroCategoria.value != "Todos"){
    

      console.log("foto")
      let categoria = foto.querySelector('[id^="categoriaFoto"]');
   //   console.log("-------------------------------------------")
   //   console.log(categoria.innerText)
      if(categoria.innerText ==filtroCategoria.value){
        return true;
      }else{
        return false;
      }
    
  
} else{
    
  return true;
}
}

function filtrarPorEtiqueta(foto){
  let filtroEtiquetas =  document.getElementById("filtroEtiquetas");
  if(filtroEtiquetas.value == ""){
   // console.log("probando filtro letras valor nulo")
     
      return true
  }else{
  
  
  //  console.log("probando filtro letras valor no nulo ")
    
     // console.log("foto")
      let esIgual=false;
      let etiquetas = foto.querySelectorAll('[id^="textEtiqueta"]')
      let titulo = foto.querySelector("h3")
      etiquetas.forEach(etiqueta => {
      //  console.log("etiqueta probando")
        if(etiqueta.value.toLowerCase().includes(filtroEtiquetas.value.toLowerCase())){
          esIgual=true;
        }
        else if(titulo.textContent.toLowerCase().includes(filtroEtiquetas.value.toLowerCase())){
          esIgual=true
        }
       
    })
      return esIgual

    }
}


//-------------------------
try{
let licencia = document.getElementById("licencia");
licencia.addEventListener("change", ajustarPrivacidad);
}catch(e){
 // console.log("no aplica")
}

function ajustarPrivacidad(){
  if(licencia.value == "1"){
    privacidad = document.getElementById("privacidad")
    privacidad.value= "2";
    privacidad.setAttribute("disabled", true);
  }else{
    privacidad = document.getElementById("privacidad")

    privacidad.removeAttribute("disabled");
  }
  
}


//------------------------------------------------chat

if(usuarioLogeado){

let iconoChat = document.getElementById("imgChat");
iconoChat.addEventListener("click", cargarChats);
let desplegado=false
let chatsAbiertos=false;
let listaChats = document.getElementById("paraBarraMensajes");
function cargarChats(){
  
 if(!desplegado){
  desplegado=true;
    fetch(`/mensaje/chats`)
      .then(response => response.json())
      .then(data => {
      //  console.log("---------data-----------")
      //  console.log(data);
        // Limpiar los resultados anteriores
        listaChats.innerHTML = '';

        // Mostrar los resultados de la búsqueda
        data.forEach(mensaje => {
        //  console.log("--------------perfil----------------")
        //  console.log(mensaje)
          let itemLista = document.createElement('div');
          itemLista.setAttribute('class', 'item-lista');
          listaChats.appendChild(itemLista);
          itemLista.setAttribute('class', 'item-lista');
          let imagenItem = document.createElement('img');
          imagenItem.setAttribute("class", "img-perfil-chat");
          imagenItem.setAttribute("src", mensaje.perfil.avatar);
          itemLista.appendChild(imagenItem);
          let nombre = document.createElement('p');
          nombre.textContent = mensaje.perfil.nombreUsuario;
          itemLista.appendChild(nombre);
          itemLista.addEventListener('click', () => cargaChat(mensaje.perfil.usuarioId));
          itemLista.addEventListener('click', () => marcarMensajeComoVisto(mensaje.perfil.usuarioId));

        });
      })
      .catch(error => {
        console.error('Error en la búsqueda:', error);
      });
  } else {
    // Limpiar la lista de resultados si no hay una consulta
    desplegado =false;
    listaChats.innerHTML = '';
  }
}


function retornarChats(){
  desplegado=true;
  chatsAbiertos=false;
    fetch(`/mensaje/chats`)
      .then(response => response.json())
      .then(data => {
      //  console.log("---------data-----------")
    //    console.log(data);
        // Limpiar los resultados anteriores
        listaChats.innerHTML = '';

        // Mostrar los resultados de la búsqueda
        data.forEach(mensaje => {
        //  console.log("--------------perfil----------------")
        //  console.log(mensaje)
          let itemLista = document.createElement('div');
          itemLista.setAttribute('class', 'item-lista');
          listaChats.appendChild(itemLista);
          itemLista.setAttribute('class', 'item-lista');
          let imagenItem = document.createElement('img');
          imagenItem.setAttribute("class", "img-perfil-chat");
          imagenItem.setAttribute("src", mensaje.perfil.avatar);
          itemLista.appendChild(imagenItem);
          let nombre = document.createElement('p');
          nombre.textContent = mensaje.perfil.nombreUsuario;
          itemLista.appendChild(nombre);
          itemLista.addEventListener('click', () => cargaChat(mensaje.perfil.usuarioId));
          itemLista.addEventListener('click', () => marcarMensajeComoVisto(mensaje.perfil.usuarioId));

        });
      })
      .catch(error => {
        console.error('Error en la búsqueda:', error);
      });
}

function cargaChat(id){
  listaChats.innerHTML = '';

  let itemListaEsp = document.createElement('div');
  
  itemListaEsp.setAttribute('class', 'item-lista');
  listaChats.appendChild(itemListaEsp);
  itemListaEsp.setAttribute('class', 'item-lista');
  
  let nombre = document.createElement('p');
  nombre.textContent = "<---";
  itemListaEsp.addEventListener('click', () => retornarChats());
  itemListaEsp.appendChild(nombre);


  fetch(`/mensaje/${id}`)
      .then(response => response.json())
      .then(data => {
       // console.log("---------data-----------")
       // console.log(data);
        // Limpiar los resultados anteriores
       

        // Mostrar los resultados de la búsqueda
        data.forEach(mensaje => {
        //  console.log("--------------perfil----------------")
          //console.log(mensaje.perfil)
          let itemLista = document.createElement('div');
        //  console.log("usuario id")
        //  console.log(mensaje.perfil.usuarioId)
          if(mensaje.emisorId != id){
          //  console.log(mensaje.emisorId == id)
         //   console.log(mensaje.emisorId)
        //    console.log(id)
       //     console.log(mensaje.receptorId)
          itemLista.setAttribute('class', 'item-lista-uno');
          listaChats.appendChild(itemLista);
          
          let imagenItem = document.createElement('img');
          imagenItem.setAttribute("class", "img-perfil-chat");
          imagenItem.setAttribute("src", mensaje.perfil.avatar);
          itemLista.appendChild(imagenItem);
          let nombre = document.createElement('p');
          nombre.textContent = mensaje.texto;
          itemLista.appendChild(nombre);

          }else{
        // console.log(mensaje.emisorId)
        // console.log(id)
       //  console.log(mensaje.receptorId)
          itemLista.setAttribute('class', 'item-lista-otro');
          listaChats.appendChild(itemLista);
          
          let nombre = document.createElement('p');
          nombre.textContent = mensaje.texto;
          itemLista.appendChild(nombre);
          let imagenItem = document.createElement('img');
          imagenItem.setAttribute("class", "img-perfil-chat");
          imagenItem.setAttribute("src", mensaje.perfil.avatar);
          itemLista.appendChild(imagenItem);
          
          
           
          }

         

        });
      })
      .catch(error => {
        console.error('Error en la búsqueda:', error);
      });
  
      let campoMensajes = document.createElement('div');
      campoMensajes.setAttribute("class", "campoMensajes");
     
      listaChats.appendChild(campoMensajes);
      let campoTexto = document.createElement('textarea');
      campoTexto.setAttribute("rows", "2");
      campoTexto.setAttribute("placeholder", "Escribe tu mensaje")
      campoTexto.setAttribute("id", "campoMensajes");
      campoTexto.setAttribute("style", "width: 100%;");
      
      campoMensajes.appendChild(campoTexto);
      let botonEnviar = document.createElement('button');
      botonEnviar.setAttribute("onclick", `enviarMensaje(${id})`);
      botonEnviar.setAttribute("style", "width: 100%;");
      botonEnviar.textContent = "Enviar";
      campoMensajes.appendChild(botonEnviar);

}


  async function marcarMensajeComoVisto(id) {
    try {
      const response = await fetch(`/mensaje/marcarVisto/${id}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
       // console.log(data.message); 
      } else {
        console.error('Error al marcar mensaje como visto:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  
  
}






function enviarMensaje(id) {
  console.log("-------------------------------------POST--------------------------------------------------");
  const textoMensaje = document.getElementById("campoMensajes").value; // Aquí deberías obtener el texto del mensaje desde algún lugar en el cliente
  console.log("mensaje"+ textoMensaje)
  fetch(`/mensaje/enviar/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Especificamos que el contenido es JSON
    },
    body: JSON.stringify({ texto: textoMensaje }) // Aquí enviamos los datos en formato JSON
  })
    .then(response => response.json())
    .then(data => {
      
      cargaChat(data.mensaje.receptorId);
    })
    .catch(error => {
      console.error("Error al enviar el mensaje:", error);
    });

  document.getElementById("campoMensajes").value = "";
}
}

function mensajearAutor(id){
  console.log("click mensaje")
  cargaChat(id)
}



//-------------------------------modo edicion

let modoEdicion=false
let rutaImgOriginal;
document.getElementById("editor").addEventListener("click", habilitarEdicion);
document.getElementById("guardarEdicion").addEventListener("click", editar)
function habilitarEdicion(){
  console.log("edicion activado")
    let nombre = document.getElementById("nuevoNombre");
    let apellido = document.getElementById("nuevoApellido");
    let intereses = document.getElementById("nuevosIntereses")
    let imagenPerfil = document.getElementById("nuevaFotoPerfil");
    let botonGuardar = document.getElementById("guardarEdicion");
    if(!modoEdicion){
        modoEdicion=true;
        nombre.style.display = "block";
        apellido.style.display = "block";
        intereses.style.display = "block";
        imagenPerfil.style.display = "block";
        botonGuardar.style.display = "block";
        
        rutaImgOriginal= document.getElementById("imgPerfil").src
        console.log(rutaImgOriginal)
        document.getElementById("editor").innerText = "Salir del editor"
    }else{
        modoEdicion=false;
        nombre.style.display = "none";
        apellido.style.display = "none";
        intereses.style.display = "none";
        imagenPerfil.style.display = "none";
        botonGuardar.style.display = "none";
        document.getElementById("imgPerfil").src = rutaImgOriginal
        document.getElementById("editor").innerText = "Editar"
    }

}

async function editar() {
  let nombre = document.getElementById("nuevoNombre").value;
  let apellido = document.getElementById("nuevoApellido").value;
  let intereses = document.getElementById("nuevosIntereses").value;
  let imagenPerfil = document.getElementById("nuevaFotoPerfil").files[0];

  let nuevaRuta = "";
  if (imagenPerfil) {
    try {
      
      const formData = new FormData();
      formData.append("foto", imagenPerfil);

      const nuevaRutaResponse = await fetch("/imagen/fotoPerfil", {
        method: "POST",
        body: formData,
      });

      if (!nuevaRutaResponse.ok) {
        throw new Error("Error al obtener la nueva ruta de la imagen");
      }

      nuevaRuta = await nuevaRutaResponse.text();
    } catch (error) {
      console.error("Error al obtener la nueva ruta de la imagen:", error);
      return;
    }
  }


  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("apellido", apellido);
  formData.append("intereses", intereses);

  // Si se obtuvo una nueva ruta, la agregamos al formData, de lo contrario, agregamos el valor original de imagenPerfil
  formData.append("imagenPerfil", nuevaRuta !== "" ? nuevaRuta : imagenPerfil);

  try {
    const editarResponse = await fetch("/perfil/editar", {
      method: "POST",
      body: formData,
    });

    if (!editarResponse.ok) {
      throw new Error("Error al enviar los datos");
    }

    console.log("Datos enviados correctamente");
    location.reload();
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
}

if (document.getElementById("nuevaFotoPerfil")) {
  document.getElementById("nuevaFotoPerfil").addEventListener("change", mostrarVistaPreviaPerfil);
}

function mostrarVistaPreviaPerfil() {
  console.log("Cambio");
  const archivo = document.getElementById("nuevaFotoPerfil").files[0];
  if (archivo) {
    const lector = new FileReader();

    lector.onload = function (e) {
      document.getElementById("imgPerfil").setAttribute("src", e.target.result);
    };

    lector.readAsDataURL(archivo);
  }
}


function mostrarVistaPreviaPerfil() {
    console.log("Cambio")
    const archivo = document.getElementById('nuevaFotoPerfil').files[0];
    if (archivo) {
      const lector = new FileReader();

      lector.onload = function(e) {
        document.getElementById('imgPerfil').setAttribute('src', e.target.result);
      }

      lector.readAsDataURL(archivo);
    }
  }

  
