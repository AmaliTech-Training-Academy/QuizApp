const { userModel } = require("../models/userModels");

// @desc Register new user
// @route POST /api/users/photo/:id
// @access Public
async function editUser(req, res) {
  try {
    const { id } = req.params;
    // console.log(id);
    const data = req.body;
    // console.log(data);
    const updatedUser = await userModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    res.status(200).json({
      success: true,
      profileImage: updatedUser.profileImage,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = editUser;
