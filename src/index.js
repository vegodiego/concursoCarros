const prompt = require("prompt-sync")();
const Juego = require("./entidades/juego");
const Pista = require("./entidades/pista");
const Podio = require("./entidades/podio");
const Carril = require("./entidades/carril");
const Carro = require("./entidades/carro");
const Conductor = require("./entidades/conductor");
const Jugador = require("./entidades/jugador");
const Persistencia = require("./persistencia/persistencia");


const nuevoJuego = () => {
  const juego = new Juego();
  const resultado = juego.jugar();
  Persistencia(resultado);
}

nuevoJuego();