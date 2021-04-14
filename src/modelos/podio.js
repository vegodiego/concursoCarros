const mongoose = require("mongoose");


const PodioSchema = new mongoose.Schema({
  pista: { 
    type: String
  },
  resultado: { 
    type: Array
  }
});


module.exports = mongoose.model("Podium", PodioSchema);