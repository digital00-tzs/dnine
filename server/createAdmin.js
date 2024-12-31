const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config(); // Ensure MONGO_URI is in your .env file

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process if connection fails
  });

async function createAdmin() {
  const email = 'admin123@gmail.com';
  const password = 'admin123'; // Set the admin password
  const role = 'admin'; // Set role to admin

  try {
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
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    mongoose.connection.close();
  }
}

// Run the createAdmin function
createAdmin();
