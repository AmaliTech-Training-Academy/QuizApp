const express = require('express');
const validateMessage = require('../middleware/validateMessage');
const { sendMessage } = require('../controller/messageController');

const router = express.Router();

// POST /api/message
router.post('/', validateMessage, sendMessage);

module.exports = router;
