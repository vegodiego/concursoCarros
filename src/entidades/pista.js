const prompt = require("prompt-sync")();


class Pista {
  constructor(nombre, carriles) {
    this.nombre = nombre;
    this.kilometros = 3;
    this.carriles = carriles;
  }

  agregar(carril) {
    const carriles = this.carriles;
    carriles.push(carril);
    this.carriles = carriles;
  }

  imprimir() {
    const infoPista = {nombre: this.nombre, kilometros: this.kilometros, carriles: this.carriles.length};
    console.log("\nPista:\n");
    console.log(infoPista);
  }
}


module.exports = Pista;
