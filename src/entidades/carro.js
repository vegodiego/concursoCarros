const prompt = require("prompt-sync")();


class Carro {
  constructor(jugador, conductor) {
    this.jugador = jugador;
    this.conductor = conductor;
    this.kmRecorridos = 0;
    this.posicion = 0;
  }

  avazar(kilometros) {
    this.kmRecorridos += kilometros;
    if (this.kmRecorridos.toFixed(1) < 3) { return false };
    return true
  }

  actualizarPosicion(posicion){
    this.posicion = posicion;
  }

  imprimir() {
    console.log("El conductor " + this.conductor.nombre + " ha recorrido " + this.kmRecorridos.toFixed(1) + " kilometros");
  }
}


module.exports = Carro;