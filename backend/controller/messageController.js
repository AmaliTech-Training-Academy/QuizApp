const validateMessage = require("../middleware/validateMessage");
const messageModel = require("../models/messageModel");

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
    console.log("Failed to send message:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// module.exports = { sendMessage };
module.exports = {
  sendMessage: [validateMessage, sendMessage], // Apply validateMessage middleware before calling sendMessage
};
