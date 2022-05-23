const router = require("express").Router();
const Avis = require("../models/Avis");

router.post("/", async (req, res) => {
    const newPost = new Avis(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;