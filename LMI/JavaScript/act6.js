function verificaHora(hora) {
    if (hora >= 6 && hora <= 12) {
      console.log("Buenos dias");
    } else if (hora >= 13 && hora <= 20) {
      console.log("Buenas tardes");
    } else {
      console.log("Buenas noches");
    }
  }
  
verificaHora(10);
verificaHora(15);
verificaHora(22);
  