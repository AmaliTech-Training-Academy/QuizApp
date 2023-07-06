const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 5,
      maxlength: 255,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
      maxlength: 50,
      required: [true, "Email field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is a required field"],
      minlength: 10,
      maxlength: 255,
    },
    contact: {
      type: String,
      minlength: 10,
      maxlength: 20,
    },
    profileImage: {
      type: String,
    },
    location: {
      type: String,
      maxlength: 150,
    },
    interests: {
      type: [String],
    },
    addInterest: {
      type: [String],
    },
    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  {
    timestamps: true,
  }
);

// generating token logic, jwt.sign({takes 3 arguments to generate the token})
exports.generateAccessToken = function () {
  const accessToken = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
  return accessToken;
};

// refresh Token
exports.generateRefreshToken = function (rememberMe) {
  if (rememberMe) {
    const refreshToken = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return refreshToken;
  } else {
    const refreshToken = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return refreshToken;
  }
};

exports.userModel = mongoose.model("User", userSchema);
