const {
  userModel,
  generateAccessToken,
  generateRefreshToken,
} = require("../models/userModels");
const bcrypt = require("bcrypt");

// @desc Register new user
// @route POST /api/login
// @access Public
const loginUser = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Authentication failed. Please check your login credentials.",
      });
    }

    const validPassword = bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials provided",
      });
    }

    const accessToken = user.generateAccessToken(user._id);
    console.log("access::", accessToken)
    const refreshToken = generateRefreshToken(user._id, rememberMe);
    console.log("refresh::", refreshToken)

    user.refreshToken = refreshToken;
    await user.save();

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days expiration in milliseconds
        httpOnly: true, // Ensuring the cookie is only accessed via HTTP(S)
      })
      .json({
        success: true,
        accessToken,
        message: "You have successfully logged in.",
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Oops! Something went wrong. Please try again later.",
    });
  }
};

module.exports = loginUser;
