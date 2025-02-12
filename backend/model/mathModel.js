const mongoose = require("mongoose");

const mathSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("MathSchema", mathSchema);
