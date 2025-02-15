const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const PORT =  process.env.PORT || 5000;

const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./database/dbConfig");
connectDB();

app.use(express.json());
app.use(cors());

const mathRoute = require("./routes/mathRoute");
const userRoute = require("./routes/userRoute");
const typeSpeedRoute = require("./routes/typeSpeedRoute");

app.use("/api/mathRoute", mathRoute);
app.use("/api/auth", userRoute)
app.use("/api/typeSpeed", typeSpeedRoute);

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
