const express = require("express");
const router = express.Router();
const { Scores } = require("../models/scores");

router.post("/addscore", async (req, res) => {
  try {
    const newScore = new Scores(req.body);
    await newScore.save();
    res.status(201).send(newScore);
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = { addscore: router };
