const mongoose = require("mongoose");


const ScoreSchema = new mongoose.Schema({
    username: { type: String, default: "Anonymous" },
    points: { type: Number, required: true },
});


const Scores = mongoose.model("Score", ScoreSchema);

module.exports = { Scores };
