const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Schema } = require("mongoose");

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
    quizzes: [
      {
        quizId: {
          type: Schema.Types.ObjectId,
          ref: "Quiz",
        },
        score: {
          type: mongoose.Schema.Types.Decimal128,
          default: 0,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// generating token logic, jwt.sign({takes 3 arguments to generate the token})
userSchema.methods.generateAccessToken = function () {
  console.log("User ID in generateAccess::", this._id)
  const accessToken = jwt.sign({ user_id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
  return accessToken;
};

// refresh Token
userSchema.methods.generateRefreshToken = function (rememberMe) {
  if (rememberMe) {
    const refreshToken = jwt.sign({ user_id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return refreshToken;
  } else {
    const refreshToken = jwt.sign({ user_id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return refreshToken;
  }
};



const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel: userModel,
  generateAccessToken: userModel.prototype.generateAccessToken,
  generateRefreshToken: userModel.prototype.generateRefreshToken,
};
