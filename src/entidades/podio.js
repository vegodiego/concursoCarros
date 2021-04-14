const prompt = require("prompt-sync")();


class Podio {
  constructor() {
    this.posiciones = [];
  }

  modificar(carro) {
    const posiciones = this.posiciones;
    posiciones.push(carro.posicion.toString() + carro.conductor.nombre);
    this.posiciones = posiciones;
  }

  imprimir() {
    const posiciones = this.posiciones.sort().map((i) => i.slice(1));
    for (let i = 0; i < posiciones.length; i++) { console.log("Puesto " + (i + 1) + ": " + posiciones[i]) };
    console.log("\n¡Gracias por jugar!")
  }
}


module.exports = Podio;