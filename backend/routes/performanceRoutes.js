const express = require('express')
const performance = require('../controller/performanceController')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.get('/:userId', protected, performance)

module.exports = router