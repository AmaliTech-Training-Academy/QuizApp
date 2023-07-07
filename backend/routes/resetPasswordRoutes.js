const express = require("express");
const resetPassword = require("../controller/resetPasswordController");
const protected = require('../middleware/verifyToken')
const router = express.Router();

router.post("/:id/:token", protected, resetPassword);

module.exports = router;
