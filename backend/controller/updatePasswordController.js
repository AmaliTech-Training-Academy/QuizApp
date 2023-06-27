const { userModel } = require("../models/userModels");
const bcrypt = require("bcrypt");


// @desc Update user password
// @route PATCH /api/users/account/:id/password
// @access Private
const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword, confirmPassword } = req.body;

    //Finding user by ID
    const user = await userModel.findById(id);

    //if user does not exist, return error
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });

    //Ensure that a current password is provided and compare with the stored password
    if (!currentPassword)
      return res
        .status(400)
        .json({ success: false, message: "Current password is required" });

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch)
      return res
        .status(401)
        .json({ success: false, message: "Wrong Password" });

    //if new password is provided, ensure that both of it and confirm password match
    if (newPassword !== confirmPassword)
      return res.status(400).json({
        success: false,
        message: "Password do not match, please try again",
      });

    // Updating the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to update password" });
  }
};

module.exports = updatePassword;
