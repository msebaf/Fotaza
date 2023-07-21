

function click1estrella(id) {
    const estrellasCont = document.getElementById("estrellasCont" + id);
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
  }

  function click2estrella(id){
    const estrellasCont = document.getElementById("estrellasCont" + id);
    const estrellas = estrellasCont.children;

    for (let i = 0; i < estrellas.length; i++) {
      if(estrellas[i].classList.contains("estrella1")){
        estrellas[i].classList.remove("estrellaSelected")
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella2")){
        estrellas[i].classList.add("estrellaSelected");
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
  }

  function click3estrella(id){
    const estrellasCont = document.getElementById("estrellasCont" + id);
    const estrellas = estrellasCont.children;

    for (let i = 0; i < estrellas.length; i++) {
      if(estrellas[i].classList.contains("estrella1")){
        estrellas[i].classList.remove("estrellaSelected")
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella2")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected")
      }
      if(estrellas[i].classList.contains("estrella3")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella4")){
        estrellas[i].classList.remove("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella5")){
        estrellas[i].classList.remove("estrellaSelected");
      }
    }
  }

  function click4estrella(id){
    const estrellasCont = document.getElementById("estrellasCont" + id);
    const estrellas = estrellasCont.children;

    for (let i = 0; i < estrellas.length; i++) {
      if(estrellas[i].classList.contains("estrella1")){
        estrellas[i].classList.remove("estrellaSelected")
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella2")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella3")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella4")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella5")){
        estrellas[i].classList.remove("estrellaSelected");
      }
    }
  }

  function click5estrella(id){
    const estrellasCont = document.getElementById("estrellasCont" + id);
    const estrellas = estrellasCont.children;

    for (let i = 0; i < estrellas.length; i++) {
      if(estrellas[i].classList.contains("estrella1")){
        estrellas[i].classList.remove("estrellaSelected")
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella2")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella3")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella4")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
      if(estrellas[i].classList.contains("estrella5")){
        estrellas[i].classList.remove("estrellaSelected");
        estrellas[i].classList.add("estrellaSelected");
      }
    }
  }


  function calcularRanking(array){
    let ranking=0;
    for(let i=0;i<array.length;i++){
        ranking+=array[i].voto;
    }
    return ranking/array.length||0;
  }