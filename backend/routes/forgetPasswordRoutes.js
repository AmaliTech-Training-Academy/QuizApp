const express = require('express')
const forgetPassword = require('../controller/4getPasswordController')
const resetPassword = require('../controller/4getPasswordController')
const router = express.Router()

router.post('/', forgetPassword)
router.post('/', resetPassword)

module.exports = router