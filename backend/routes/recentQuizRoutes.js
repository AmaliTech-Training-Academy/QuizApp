const express = require("express").Router;
const recentQuiz = require("../controller/recentQuizController");
const router = require("./questionRoutes");

router.get("/recent-quizzes", recentQuiz);

module.exports = router;
