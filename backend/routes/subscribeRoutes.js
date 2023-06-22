const express = require("express");
const subscribeUser = require("../controller/subscribeController");
const subscribe = require('../models/subscribeModel')

const router = express.Router();

router.post("/", subscribe, subscribeUser);

module.exports = router;
