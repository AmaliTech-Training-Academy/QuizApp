const jwt = require("jsonwebtoken");

// Middleware function for token verification
const verifyToken = (req, res, next) => {
  // Getting the token from the request header or cookie
  const accessToken = req.headers.authorization || req.cookies.token;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    let decoded;

    if (accessToken) {
      // Verifying and decoding the accessToken
      decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      req.user_id = decoded.user_id; // Token is valid, access the decoded data (e.g., user_id)
    } else if (refreshToken) {
      // Verifying and decoding the refreshToken
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      req.user_id = decoded.user_id; // Token is valid, access the decoded data (e.g., user_id)
    }

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid Token" });
  }
};

module.exports = verifyToken;
