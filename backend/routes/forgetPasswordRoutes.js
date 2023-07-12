const express = require('express')
const forgetPassword = require('../controller/forgetPasswordController')
const resetPassword = require('../controller/forgetPasswordController')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.post('/', protected, forgetPassword)
router.post('/', protected, resetPassword)

module.exports = router