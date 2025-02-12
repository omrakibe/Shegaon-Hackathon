const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./database/dbConfig");
connectDB();

app.use(express.json());
app.use(cors());

const mathRoute = require("./routes/mathRoute");

app.use("/api/mathRoute", mathRoute);

app.listen(5000, () => console.log("Backend running on port 5000"));
