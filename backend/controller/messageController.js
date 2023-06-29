const validateMessage = require("../middleware/validateMessage");
const messageModel = require("../models/messageModel");

// @desc Register new user
// @route POST /api/message
// @access Public
const sendMessage = async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message } = req.body;

    //create a new message
    const newMessage = new messageModel({
      name,
      email,
      phoneNumber,
      subject,
      message,
    });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = {
  sendMessage: [validateMessage, sendMessage], // Apply validateMessage middleware before calling sendMessage
};
