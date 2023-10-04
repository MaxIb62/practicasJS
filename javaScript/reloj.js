function mostrarReloj() {

    const ahora = new Date();
    
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    

    const ampm = horas >= 12 ? "PM" : "AM";
    
    if (horas > 12) {
      horas -= 12;
    }
    

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    

    console.log(`${horas}:${minutos}:${segundos} ${ampm}`);
  }
  
 
  setInterval(mostrarReloj, 1000);
  

  mostrarReloj();
  