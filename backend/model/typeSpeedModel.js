const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    bestWpm: Number,
  });

module.exports = mongoose.model("Score", ScoreSchema);