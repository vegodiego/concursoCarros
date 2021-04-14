const prompt = require("prompt-sync")();


class Conductor {
  constructor(idJugador) {
    const nombre = prompt("Ingrese el nombre del conductor para el jugador " + idJugador + ": ");
    this.nombre = nombre;
  }
}


module.exports = Conductor;