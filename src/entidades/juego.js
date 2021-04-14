const prompt = require("prompt-sync")();
const Pista = require('./pista');
const Podio = require('./podio');
const Carril = require('./carril');
const Carro = require('./carro');
const Conductor = require('./conductor');
const Jugador = require('./jugador');
const helpers = require("./helpers");


class Juego {
  constructor() {
    helpers.bienvenida();
    console.log();
    const nombrePista = prompt("Ingrese el nombre de la pista: ");
    this.pista = new Pista(nombrePista, []);
    this.podio = new Podio();
    this.numeroDeJugadores = helpers.numeroJugadores();
  }

  jugar(){
    this.preparandoJuego();
    this.comenzar();
    this.asignarPodio();
    this.mostrarPodio();
    return this
  }

  preparandoJuego() {
    this.configurarJuego();
    this.mostrarInformacion();
  }

  configurarJuego() {
    for (let i = 0; i < this.numeroDeJugadores; i++) {
      const jugador = new Jugador(i + 1);
      const conductor = new Conductor(i + 1);
      this.pista.agregar(new Carril(new Carro(jugador, conductor), i + 1));
    }
  }

  mostrarInformacion() {
    console.log("\nInformación de la carrera:");
    this.pista.imprimir();
    console.log("\nJugadores:\n");
    for (let i = 0; i < this.pista.carriles.length; i++) { this.pista.carriles[i].imprimir() };
    console.log();
    const ir = prompt("Presiona enter para comenzar la carrera: ");
  }

  comenzar(){
    console.log("\n¡La carrera comienza ya!");
    let carreraTerminada = false;
    while (carreraTerminada === false) {
      if (this.jugando().every((i) => i === true)) { carreraTerminada = true };
      this.mostrarKilometros();
    }
  }
            
  jugando() {
    let finalizado = [];
    for (let i = 0; i < this.pista.carriles.length; i++) {
      if (this.pista.carriles[i].carro.kmRecorridos.toFixed(1) < 3) {
        console.log()
        const lanzar = prompt(this.pista.carriles[i].carro.conductor.nombre + " presiona enter para lanzar los dados y conocer el avance de tu auto: ");
        const carroFinaliza = this.lanzarDados(this.pista.carriles[i].carro);
        finalizado.push(carroFinaliza);
        if(carroFinaliza){ this.asignarNuevaPosicion(this.pista.carriles[i].carro) };
      } 
    }
    return finalizado;
  }

  lanzarDados(carro) {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    const metros = numeroAleatorio * 100;
    console.log("El carro avanza " + metros + " metros");
    return carro.avazar(metros / 1000);
  }

  mostrarKilometros() {
    const carriles = this.pista.carriles;
    console.log("\nKilometros recorridos por cada conductor:\n");
    for (let i = 0; i < carriles.length; i++) { carriles[i].carro.imprimir() };
  }

  asignarNuevaPosicion(carro) {
    let posicionAnterior = 0; 
    for (let j = 0; j < this.pista.carriles.length; j++){
      if (this.pista.carriles[j].carro.posicion  > posicionAnterior){ posicionAnterior = this.pista.carriles[j].carro.posicion };
    }
    carro.actualizarPosicion(posicionAnterior + 1);
  }

  asignarPodio() {
    for (let i = 0; i < this.pista.carriles.length; i++) {
      if (this.pista.carriles[i].carro.posicion < 4) { this.podio.modificar(this.pista.carriles[i].carro) };
    }
  }
  
  mostrarPodio() {
    console.log("\n¡La carrera ha finalizado!")
    console.log("\nPodio de la carrera: \n");
    this.podio.imprimir();
  }
}


module.exports = Juego;