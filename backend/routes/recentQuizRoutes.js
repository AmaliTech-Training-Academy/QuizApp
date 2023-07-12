const express = require("express");
const recentQuiz = require("../controller/recentQuizController");
const protected = require('../middleware/verifyToken')
const router = express.Router();

router.get("/:id", protected, recentQuiz);

module.exports = router;
