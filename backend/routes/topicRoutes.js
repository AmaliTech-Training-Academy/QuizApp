const express = require('express')
const topicController = require('../controller/topicController')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.get('/', protected, topicController)


module.exports = router