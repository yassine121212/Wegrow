const mongoose = require("mongoose");
const { User} = require("./user");

 const AvisSchema = new mongoose.Schema(
   {
     rating: { type: Number },
     comment: { type: String, required: true },
     userName: {type: String, required: true },
     lastName: {type: String, required: true },
     firstName: {type: String, required: true },
     profilePicture: {
      type: String,
      default: "",
      },

    },
   {
     timestamps: true,
   }
 )
 module.exports = mongoose.model("Avis", AvisSchema);