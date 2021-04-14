const PodioM = require("../modelos/podio");


// agregando un nuevo podio a la base de datos
const persistiendoInfo1 = async (resultado) => {
  try {
    const data = {
      pista: resultado.pista.nombre,
      resultado: [
        {
          posicion: parseInt(resultado.podio.posiciones[0][0]),
          conductor: resultado.podio.posiciones[0].slice(1),
        },
        {
          posicion: parseInt(resultado.podio.posiciones[1][0]),
          conductor: resultado.podio.posiciones[1].slice(1),
        },
        {
          posicion: parseInt(resultado.podio.posiciones[2][0]),
          conductor: resultado.podio.posiciones[2].slice(1),
        },
      ],
    };
    const newPodio = new PodioM(data);
    await newPodio.save();
  } catch (err) {
    console.log(err);
  }
};


module.exports = persistiendoInfo1;
