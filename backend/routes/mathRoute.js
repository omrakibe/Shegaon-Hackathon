const express = require("express");
const router = express.Router();

const mathController = require("../controller/mathController");

router.post("/createScore", mathController.createScore);
router.get("/getScore", mathController.getScore);

module.exports = router;
