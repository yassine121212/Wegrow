const mongoose = require("mongoose");
 const AvisSchema = new mongoose.Schema(
   {
     rating: { type: Number },
     comment: { type: String, required: true },
    },
   {
     timestamps: true,
   }
 )
 module.exports = mongoose.model("Avis", AvisSchema);