const prompt = require("prompt-sync")();


const helpers = { };

helpers.bienvenida = () => {
  console.log("                                               ¡Bienvenidos a carrera de autos!\n") 
  console.log("En este juego avanzas con tu auto dependiendo del valor que saques al lanzar los dados. El valor obtenido se multiplica por cien para conocer los metros que avanzas.\n")
  const ir = prompt("Presiona enter para comenzar: ");
}

helpers.numeroJugadores = () => {
  let ingresoOk = true;
  while (ingresoOk) {
    var numeroJugadores = prompt("Ingrese el número de jugadores: ");
    console.log()
    if (/^\d+$/.test(numeroJugadores)) {
      ingresoOk = false;
    } else {
      console.log("Ingreso incorrecto\n");
    }
  }
  return parseInt(numeroJugadores);
};


module.exports = helpers;