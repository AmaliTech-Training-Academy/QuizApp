const express = require('express')
const forgetPassword = require('../controller/forgetPasswordController')
const resetPassword = require('../controller/forgetPasswordController')
const router = express.Router()

router.post('/', forgetPassword)
router.post('/', resetPassword)

module.exports = router