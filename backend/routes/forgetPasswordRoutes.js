const express = require('express')
const forgetPassword = require('../controller/forgetPasswordController')
const router = express.Router()

router.post('/', forgetPassword)

module.exports = router