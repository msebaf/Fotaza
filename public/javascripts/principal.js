

function click1estrella(imagenId, controlVoto) {
    console.log(imagenId)
    console.log(controlVoto)
    console.log(controlVoto==0)
    if(controlVoto==0){
    fetch(`/votos/votar/${imagenId}/1`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta no es válida");
        }
        console.log("Votación exitosa");
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
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

      })
      .catch((error) => {
        console.error("Error al votar:", error);
      });
    }else{
      console.log(controlVoto==0)
      console.log(controlVoto)
      fetch(`/votos/update/${imagenId}/1`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
      
          console.log("Votación exitosa");
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
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
    if (controlVoto === 0) {
      fetch(`/votos/votar/${imagenId}/2`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Votación exitosa");
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
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
      console.log(controlVoto === 0);
      console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/2`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
          console.log("Votación exitosa");
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
            console.log("Promedio actualizado");
            console.log("data:" + data);
            document.getElementById("ranking" + imagenId).innerHTML = data.promedio;
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
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
    if (controlVoto === 0) {
      fetch(`/votos/votar/${imagenId}/3`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Votación exitosa");
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
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
      console.log(controlVoto === 0);
      console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/3`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
          console.log("Votación exitosa");
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
  
    if (controlVoto === 0) {
      fetch(`/votos/votar/${imagenId}/4`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Votación exitosa");
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
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
      console.log(controlVoto === 0);
      console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/4`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
          console.log("Votación exitosa");
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
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
    if (controlVoto === 0) {
      fetch(`/votos/votar/${imagenId}/5`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Votación exitosa");
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
          })
          .catch((error) => {
            console.error("Error al obtener el promedio:", error);
          });

        })
        .catch((error) => {
          console.error("Error al votar:", error);
        });
    } else {
      console.log(controlVoto === 0);
      console.log(controlVoto);
      fetch(`/votos/update/${imagenId}/5`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
  
          console.log("Votación exitosa");
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
    const formulario = document.getElementById("formulario-comentario"+fotoId);
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = new URLSearchParams(new FormData(formulario));
  
      fetch("/comentarios/comentar", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no es válida");
          }
          console.log("Comentario enviado");
          fetch(`/comentarios/listar/${fotoId}`).then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta no es válida");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Los datos:" + data);
            const comentarios = JSON.parse(data);

            console.log("Datos de comentarios:", comentarios)
            document.getElementById("primerComentario" + fotoId).innerText = comentarios[0].comentario;
           
            document.getElementById("imgPrimerComentario" + fotoId).src = comentarios[0].perfil.avatar;
            if(comentarios.length>1){
            comentarios.shift();
            let masComentarios = document.getElementById("masComentarios" + fotoId);
            masComentarios.innerHTML = '';
            let summary = document.createElement("summary");
            summary.innerText = "Mas Comentarios";
            masComentarios.appendChild(summary);
            for(let i=0;i<comentarios.length;i++){
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
          }

            
          })
        })
        
        .catch((error) => {
          console.error("Error al enviar el comentario:", error);
        });
    });
  }
  
  

  