const express = require('express')
const QuizLog = require('../controller/quizLogController')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.get('/:userId', protected, QuizLog)

module.exports = router