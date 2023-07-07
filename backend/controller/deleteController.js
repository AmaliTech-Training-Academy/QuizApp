const { userModel } = require("../models/userModels");

// @desc Delete a user
// @route DELETE /api/users/delete/:id
// @access Public
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    // pass ID and updated fields as separate arguments to findByIdAndUpdate
    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = deleteUser;
