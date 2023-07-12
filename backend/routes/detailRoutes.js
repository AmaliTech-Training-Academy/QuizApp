const express = require('express')
const detailRoutes = require('../controller/updateDetailsController')
const protected = require('../middleware/verifyToken')
const router = express.Router()


router.patch('/:id/details',protected, detailRoutes)

module.exports = router