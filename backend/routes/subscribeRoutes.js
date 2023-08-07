const express = require("express");
const subscribeUser = require("../controller/subscribeController");
const router = express.Router();

router.post("/", subscribeUser);

module.exports = router;
