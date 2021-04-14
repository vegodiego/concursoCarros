const dbCon = require('./dbconex');
const persistiendoInfo1 = require('./persistiendoInfo1');
const persistiendoInfo2 = require('./persistiendoInfo2');


const Persistencia = async (resultado) => {
  try{
    await dbCon();
    await persistiendoInfo1(resultado);
    await persistiendoInfo2(resultado);
  } catch(err){
    console.log(err);
  }
}


module.exports = Persistencia;