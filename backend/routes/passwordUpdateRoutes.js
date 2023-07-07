const express = require('express')
const passwordUpdate = require('../controller/updatePasswordController')
const router = express.Router()

router.patch('/:id/password', passwordUpdate)

module.exports = router