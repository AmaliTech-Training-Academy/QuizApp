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
    // Find the user by email, if not found in the database, send an error
    const { email, password, rememberMe } = req.body;
    if (!email || !password)
      return res.status(401).json({
        success: false,
        message: "Please Provide both email and password",
      });
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Authentication failed. Please check your login credentials.",
      });
    }

    // Compare the password provided by the user with the hashed password in the database, if not true, the user has no access
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials provided" });

    // Generate access token
    const accessToken = generateAccessToken(user._id);
    // Generate refresh token
    const refreshToken = generateRefreshToken(user._id, rememberMe);

    // Store refresh token in user document in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Send both tokens in the response
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
