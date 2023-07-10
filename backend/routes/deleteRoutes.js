const express = require('express')
const deleteUser = require('../controller/deleteController')
const protected = require('../middleware/verifyToken')
const router = express.Router()


router.delete('/:id', protected, deleteUser)

module.exports = router