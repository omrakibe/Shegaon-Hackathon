const Score = require("../model/typeSpeedModel");

const getBestWpm = async(req, res) => {
    const score = await Score.findOne();
    res.json({ bestWpm: score ? score.bestWpm : 0 });
}

const createWpm = async(req, res) => {
    const { wpm } = req.body;
    let score = await Score.findOne({bestWpm: wpm });
    if (!score || wpm > score.bestWpm) {
      await Score.findOneAndUpdate({}, { bestWpm: wpm }, { upsert: true, new: true });
    }
    res.json({ message: "Score saved!" });
}

module.exports = {getBestWpm, createWpm};