const express = require('express')
const detailRoutes = require('../controller/updateDetailsController')
const router = express.Router()


router.patch('/:id/details', detailRoutes)

module.exports = router