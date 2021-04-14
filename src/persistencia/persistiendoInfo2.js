const ConductorM = require("../modelos/conductor");


// agregando o modificando el conductor ganador en la base de datos
const persistiendoInfo2 = async (resultado) =>{
  try{
    const conductor = await ConductorM.find({ nombre: resultado.podio.posiciones[0].slice(1) });
      if(conductor.length === 1){
        conductor[0].carreras_ganadas += 1;
        await conductor[0].save();
        process.exit();
      } else{
        const data = {nombre: resultado.podio.posiciones[0].slice(1), carreras_ganadas: 1};
        const newConductor = new ConductorM(data);
        await newConductor.save();
        process.exit();
      }
  } catch(err){
    console.log(err);
  }
}


module.exports = persistiendoInfo2;