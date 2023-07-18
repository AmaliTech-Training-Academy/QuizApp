const express = require("express");
const router = express.Router();
const protected = require("../middleware/verifyToken");
const submitAnswer = require("../controller/submitAnswerController");

router.post("/answers", protected, submitAnswer);

module.exports = router;
