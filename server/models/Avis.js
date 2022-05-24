const mongoose = require("mongoose");
 const AvisSchema = new mongoose.Schema(
   {
     rating: { type: Number },
     comment: { type: String, required: true },
       userId: {
      type: String
    },
    },
   {
     timestamps: true,
   }
 )
 module.exports = mongoose.model("Avis", AvisSchema);