const { subscribed } = require("../models/subscribeModel");

const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email already exists in the database
    const existingUser = await subscribed.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already subscribed to our mail",
      });
    }

    // If the user does not exist, create a new subscription
    await subscribed.create({
      email: email,
    });

    res
      .status(200)
      .json({ success: true, message: "User subscribed successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = subscribeUser;
