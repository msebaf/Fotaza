
var arrayClickeados = [];

function click1estrella(imagenId, controlVoto) {
    console.log(imagenId)
    console.log(controlVoto)
    console.log(controlVoto==0)
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
        console.log("Votación exitosa");
        
        
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
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
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
          console.log("Votación exitosa");
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
  
  function click3estrella(imagenId, controlVoto) {
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
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
    console.log(imagenId);
    console.log(controlVoto);
    console.log(controlVoto === 0);
  
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
  
  



  
//mostrar vista previa de la foto
  function mostrarVistaPrevia() {
    console.log("Cambio")
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
    console.log(query);
    if (query.length > 0) {
      // Enviar una solicitud AJAX al servidor con la consulta de búsqueda
      fetch(`/perfil/buscar/:${query}`)
        .then(response => response.json())
        .then(data => {
          console.log("---------data-----------")
          console.log(data);
          // Limpiar los resultados anteriores
          listaResultados.innerHTML = '';

          // Mostrar los resultados de la búsqueda
          data.forEach(perfil => {
            const itemLista = document.createElement('div');
            itemLista.setAttribute('class', 'item-lista');
            listaResultados.appendChild(itemLista);
            const enlace = document.createElement('a');
            enlace.setAttribute('href', `/perfil/${perfil.id}`);
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
          console.log("mostrar")
        }
      })
  
}




function filtrarPorCategoria(foto){

  console.log("funcion activada")
  let filtroCategoria =  document.getElementById("filtroCategoriaSelect");
   
   
  if(filtroCategoria.value != "Todos"){
    

      console.log("foto")
      let categoria = foto.querySelector('[id^="categoriaFoto"]');
      console.log("-------------------------------------------")
      console.log(categoria.innerText)
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
    console.log("probando filtro letras valor nulo")
     
      return true
  }else{
  
  
    console.log("probando filtro letras valor no nulo ")
    
     // console.log("foto")
      let esIgual=false;
      let etiquetas = foto.querySelectorAll('[id^="textEtiqueta"]')
      etiquetas.forEach(etiqueta => {
        console.log("etiqueta probando")
        if(etiqueta.value.toLowerCase().includes(filtroEtiquetas.value.toLowerCase())){
          esIgual=true;
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
  console.log("no aplica")
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