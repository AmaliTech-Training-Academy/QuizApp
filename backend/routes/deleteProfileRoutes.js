const express = require('express')
const deleteProfile = require('../controller/deleteProfileController')
const router = express.Router()


router.delete('/:id', deleteProfile)

module.exports = router