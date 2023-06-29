const mongoose = require("mongoose");
const dataModel = require("../models/dataModel");
const data = require("../data.json"); // data.json
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error("Failed to Connect to MongoDB:", error.message);
    throw error; // Rethrow the error to be caught by the caller
  }
};

// const populateDatabase = async (req, res) => {
//   try {
//     await dataModel.deleteMany(); // clearing the existing data
//     await dataModel.insertMany(data.topics); //Inserting new data
//     // res
//     //   .status(200)
//     //   .json({ success: true, message: "Data Populated Successfully" });
//     console.log("Data Populated Successfully");
//   } catch (error) {
//     // res
//     //   .status(500)
//     //   .json({ success: false, message: "Error Populating Database" });
//     console.log("Error Populating Database");
//   }
// };

module.exports = { connectDB };
