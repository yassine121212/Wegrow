const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      ref:'user'
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  comments: { 
      type: Array,
       created:{type:Date, default: Date.now()},
       userId: { type: String, ref:'user'} },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

