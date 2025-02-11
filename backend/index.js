// backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/gamifiedEducation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const User = mongoose.model("User", UserSchema);

app.post("/api/submit-score", async (req, res) => {
  const { name, score } = req.body;
  try {
    let user = await User.findOne({ name });
    if (user) {
      user.score += score;
      await user.save();
    } else {
      user = new User({ name, score });
      await user.save();
    }
    res.json({ message: "Score updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await User.find().sort({ score: -1 });
  res.json(users);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
