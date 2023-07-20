const subscribeModel = require("../models/subscribeModel");

// @desc Subscribe
// @route POST /api/users/subscribe
// @access Public
const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email already exists
    const user = await subscribeModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already subscribed to our mail",
      });
    }

    // If user does not exist, create a new subscription
    await subscribeModel.create({
      email,
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
