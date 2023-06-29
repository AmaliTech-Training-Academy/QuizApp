const jwt = require("jsonwebtoken");

// Middleware function for token verification
const verifyToken = (req, res, next) => {
  // Getting the token from the request header or cookie
  const accessToken = req.headers.authorization || req.cookies.token;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    let decoded;
    // Verifying and decoding the accessToken
    if (accessToken) {
      decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    } else if (refreshToken) {
      // Verifying and decoding the refresh token
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    }

    // Token is valid, so you can access the decoded data (e.g. user_id)
    req.user_id = decoded.user_id;

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid Token" });
  }
};

module.exports = verifyToken;
