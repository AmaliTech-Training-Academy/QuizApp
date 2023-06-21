const express = require("express");
const resetPassword = require("../controller/resetPasswordController");
const router = express.Router();

router.post("/:id/:token", resetPassword);

module.exports = router;
