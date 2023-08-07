const express = require('express')
const passwordUpdate = require('../controller/updatePasswordController')
const accountMiddleware = require('../middleware/accountMiddleware')
const protected = require('../middleware/verifyToken')
const router = express.Router()

router.patch('/:id/password', protected, accountMiddleware, passwordUpdate)

module.exports = router