const { userModel } = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Reset user password
// @route POST /api/resetPassword
// @access Public
const resetPassword = async (req, res) => {
  console.log("Hello");
  try {
    const { id, token } = req.params;
    const { password } = req.body; // Retrieved the password from the request body
    console.log(id);
    const user = await userModel.findOne({ _id: id });
    // console.log(user);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      // Additional actions after successful token verification
      const hashedPassword = await bcrypt.hash(password, 10); // Hashing the new password before updating
      console.log(hashedPassword);
      user.password = hashedPassword;
      await user.save(); // Saving the updated user
      // return res.redirect("http://localhost:8080/api/login");
      return res
        .status(200)
        .json({ success: true, message: "Password reset successful" });
    } catch (error) {
      console.log(error);
      if (error instanceof jwt.TokenExpiredError) {
        return res
          .status(400)
          .json({ success: false, message: "Token expired" });
      }
      return res.status(400).json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(404).json({ success: false, message: "Failed to reset password. User not verified." });
  }
};

module.exports = resetPassword;
