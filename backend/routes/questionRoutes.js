const express = require("express");
const question = require("../controller/questionsController");
const protected = require('../middleware/verifyToken')
const router = express.Router();

router.get("/", protected, question);

module.exports = router;
