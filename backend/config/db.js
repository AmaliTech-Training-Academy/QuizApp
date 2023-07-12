const mongoose = require("mongoose");
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

module.exports = { connectDB };
