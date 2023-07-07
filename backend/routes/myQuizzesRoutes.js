const express = require("express");
const myQuizzes = require("../controller/myQuizzesController");
const protected = require('../middleware/verifyToken')
const router = express.Router();

router.get("/quizzes", protected, myQuizzes);

module.exports = router;
