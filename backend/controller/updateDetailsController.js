const { userModel } = require("../models/userModels");
const bcrypt = require("bcrypt");

// @desc Update user details
// @route PATCH /api/users/account/id/details
// @access Private
const updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, location, gender } = req.body;

    //Finding user by ID
    const user = await userModel.findById(id);

    // if user does not exist, return error
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });

    //Update user details
    user.name = name;
    user.email = email;
    user.contact = contact;
    user.location = location;
    user.gender = gender;

    //Saving the updated details
    await user.save();

    // sending response object
    const response = {
      success: true,
      message: "User details updated successfully",
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
    };

    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user details" });
  }
};

module.exports = updateDetails;
