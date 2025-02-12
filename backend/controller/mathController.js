const MathModel = require("../model/mathModel");

const createScore = async (req, res) => {
  const { name, score } = req.body;
  try {
    let user = await MathModel.findOne({ name });
    if (user) {
      user.score += score;
      await user.save();
    } else {
      user = new MathModel({ name, score });
      await user.save();
    }
    res.json({ message: "Score updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getScore = async (req, res) => {
  const users = await MathModel.find().sort({ score: -1 });
  res.json(users);
};

module.exports = { createScore, getScore };
