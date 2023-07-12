const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers.authorization || req.cookies.token;
  const refreshToken = req.cookies.refreshToken;

  if (!bearerToken && !refreshToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    let decoded;

    if (bearerToken) {
      const accessToken = bearerToken.split(" ")[1];
      decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      req.user_id = decoded.user_id; // Accessing the user ID from the decoded token
    } else if (refreshToken) {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
      req.user_id = decoded.user_id;
    }

    if (decoded) {
      if (decoded.exp < Date.now() / 1000) {
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized: Token has Expired" });
      }
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid Token" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = verifyToken;
