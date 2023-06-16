const jwt = require("jsonwebtoken");

// middleware function for token verification
const verifyToken = (req, res, next) => {
  //Getting the token from the request header or cookie
  const accessToken = req.headers.authorization || req.cookies.token;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  // verifying and decoding the accessToken
  if (accessToken) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized: Invalid Token" });
      }
      // Access token is valid, so you can access the decoded data (e.g. user_id)
      req.user_id = decoded.user_id;

      next();
    });
  } else if (refreshToken) {
    // Verifying and decoding the refresh token
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({
            success: false,
            message: "Unauthorized: Invalid refresh token",
          });
      }
      req.user_id = decoded.user_id;

      next();
    });
  }
};

module.exports = verifyToken