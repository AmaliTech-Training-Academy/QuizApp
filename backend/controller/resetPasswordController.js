const { userModel } = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;

    const user = await userModel.findOne({ _id: id });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);

      user.oldPassword = user.password; // storing the previous password in oldPassword

      const hashedPassword = await bcrypt.hash(password, 10); // hashing the new password

      user.password = hashedPassword;

      await user.save();

      return res
        .status(200)
        .json({ success: true, message: "Password Reset successful" });
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
    return res.status(404).json({
      success: false,
      message: "Failed to reset password. User not verified.",
    });
  }
};

module.exports = resetPassword;
