
let cantMensajesContendor = document.getElementById('cantMensajesContenedor')
let cmensajesP = document.getElementById('canMensajes')
let logeado = document.getElementById('logeado').checked ;

function revisarMensajes() {
    if(logeado){
  setInterval(async () => {
    try {
      const response = await fetch('/mensaje/nuevos');
      if (response.ok) {
        const data = await response.json();
        console.log('Mensajes nuevos:', data);
        let cantMensajes = data.mensajesNuevos;
        cmensajesP.textContent = cantMensajes;
        if(cantMensajes!=0){
          cantMensajesContendor.setAttribute('style', 'background-color: red ;');
        }else{
          cantMensajesContendor.removeAttribute('style');
        }
       
      } else {
        console.error('Error al obtener mensajes nuevos:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }, 2000);
}else{
    console.log("visitante")
}
}

revisarMensajes()