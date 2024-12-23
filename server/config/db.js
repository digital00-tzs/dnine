const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is imported to read the environment variables

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables.");
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection error: ", err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
