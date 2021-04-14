const mongoose = require("mongoose");


const ConductorSchema = new mongoose.Schema({
  nombre: { 
    type: String
  },
  carreras_ganadas: { 
    type: Number
  }
});


module.exports = mongoose.model("Driver", ConductorSchema);

