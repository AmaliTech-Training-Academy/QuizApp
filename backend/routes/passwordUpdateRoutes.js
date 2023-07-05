const express = require('express')
const passwordUpdate = require('../controller/updatePasswordController')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.patch('/:id/password', protected, passwordUpdate)

module.exports = router