const userModel = require("../models/userModels");
const fs = require("fs");

// @desc Delete profile image
// @route DELETE /api/delete-profile/:id
// @access Private
async function deleteAvatar(req, res) {
  try {
    const { id } = req.params;

    // find the user by id
    const user = await userModel.findById(id);

    // check if user exist
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // check if the user has a profile image
    if (!user.profileImage)
      res.status(404).json({ success: false, message: "No Profile Image" });

    // Delete the profile image file from the server
    fs.unlink(user.profileImage, (error) => {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete Profile Image" });
    });

    // update the user document in the database to remove the profile image
    user.profileImage = null;
    user.save();

    return res
      .status(200)
      .json({ success: true, message: "Profile Image deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = deleteAvatar;
