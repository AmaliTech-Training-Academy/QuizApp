const express = require('express')
const loginUser = require('../controller/loginController')
const router = express.Router()

router.post('/', loginUser)

module.exports = router