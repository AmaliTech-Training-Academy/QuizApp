const express = require('express')
const performance = require('../controller/performanceController')
const router = express.Router()

router.get('/', performance)

module.exports = router