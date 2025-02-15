const express = require("express");
const router = express.Router();

const typeSpeedController = require("../controller/typeSpeedController");

router.get("/getBestWpm", typeSpeedController.getBestWpm);
router.post("/createWpm", typeSpeedController.createWpm);

module.exports = router;