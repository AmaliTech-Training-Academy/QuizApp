const { userModel } = require("../models/userModels");

// @desc Add interests to user's interests and addInterest fields
// @route PATCH /api/users/interest/:id
// @access Public
const interests = async (req, res) => {
  try {
    const { id } = req.params;
    const { interests, addInterest } = req.body;

    const user = await userModel.findById(id);

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    user.interests = interests,
    user.addInterest = addInterest

    const updatedUser = await user.save();

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = interests;
