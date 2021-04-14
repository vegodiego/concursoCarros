const mongoose = require("mongoose");


const dbCon = async () => {
  try {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect("mongodb://localhost:27017/concursoCarros", options);
    console.log("\nLos resultados han sido persitidos\n");
  } catch (err) {
    console.log("\n¡La conexion no fue establecida con la base de datos!", err);
    process.exit();
  }
};

module.exports = dbCon;