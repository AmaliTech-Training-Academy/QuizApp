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
    profileImage: {
      type: String,
    },
    interests: {
      type: [String],
    },
    addInterest: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// generating token logic, jwt.sign({takes 3 arguments to generate the token})
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
