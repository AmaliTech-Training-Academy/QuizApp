const express = require('express')
const getQuizResults = require('../controller/getResults')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.get('/:userId/quizzes/:quizId/results', protected, getQuizResults)

module.exports = router