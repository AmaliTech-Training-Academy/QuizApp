// const mongoose = require("mongoose");

// const tokenSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User", // a reference to the user the token belongs to, stored as the user's ObjectId
//     required: true,
//   },
//   token: {
//     type: String,
//     require: true,
//   },
//   type: { // this indicates the type of the token, such as access or refresh
//     type: String,
//     required: true,
//   },
//   expiresAt: {
//     type: Date,
//     required: true,
//   },
// });

// const tokenModel = mongoose.model("Token", tokenSchema);
// module.exports = tokenModel;
