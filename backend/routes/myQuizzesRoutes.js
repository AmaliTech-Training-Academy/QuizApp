const express = require("express");
const myQuizzes = require("../controller/myQuizzesController");
const router = express.Router();

router.get("/quizzes", myQuizzes);

module.exports = router;
