const express = require('express')
const deleteProfile = require('../controller/deleteProfileController')
const protected = require('../middleware/verifyToken')
const router = express.Router()


router.delete('/:id', protected, deleteProfile)

module.exports = router