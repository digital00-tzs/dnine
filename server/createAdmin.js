const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const cors = require('cors');
require('dotenv').config();  // Path to your User model

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

async function createAdmin() {
  const email = 'admin@gmail.com';
  const password = 'admin123';  // Set the admin password
  const role = 'admin';  // Set role to admin

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if the admin already exists
  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    console.log('Admin already exists!');
    mongoose.connection.close();
    return;
  }

  // Create a new admin user
  const newAdmin = new User({
    email,
    password: hashedPassword,
    role
  });

  await newAdmin.save();
  console.log('Admin user created successfully!');
  mongoose.connection.close();
}

// Run the createAdmin function
createAdmin();
