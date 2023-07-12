const express = require("express");
const validateMessage = require("../middleware/validateMessage");
const { sendMessage } = require("../controller/messageController");

const router = express.Router();

router.post("/", validateMessage, sendMessage);

module.exports = router;
