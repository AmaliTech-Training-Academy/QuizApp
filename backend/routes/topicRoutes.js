const express = require('express')
const topicController = require('../controller/topicController')
const router = express.Router()

router.get('/', topicController)


module.exports = router