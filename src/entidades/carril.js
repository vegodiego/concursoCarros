const prompt = require("prompt-sync")();


class Carril {
  constructor(carro, numero) {
    this.numero = numero;
    this.carro = carro;
  }
              
  imprimir() {
    const infoCarril = {jugador: "jugador " + this.carro.jugador.id, conductor: this.carro.conductor.nombre, carril: this.numero};
    console.log(infoCarril);
  }
}


module.exports = Carril;