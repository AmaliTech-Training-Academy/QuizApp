// const validateRegisterUser = require("../middleware/validateUser");
const registerModel = require("../models/registerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register new user
// @route POST /api/registerUser
// @access Public
const registerUser = async (req, res, next) => {
  try {
    let user = await registerModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({success: false, message: "User already exist"})
    } 

    user = new registerModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
      }
    });
  } catch (error) {
    res.status(500).json({success: false, message: "Something went wrong"})
  }
};

module.exports = { registerUser };
