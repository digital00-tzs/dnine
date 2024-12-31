const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true }, // Trim whitespace
    password: { type: String, required: true }, // Added `required` for better data integrity
    role: { type: String, required: true, default: 'user' }, // Added role field with default value
    cartData: { type: Object, default: {} }, // Default is an empty object
  },
  { minimize: false, timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Ensure the model isn't redefined in a development environment
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
