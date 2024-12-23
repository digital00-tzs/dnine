const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateOTP, sendOTP, verifyOTP, saveOTP } = require('../utils/otp');

// Request OTP for Signup or Login
exports.requestOTP = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    const otp = generateOTP();

    // Save OTP and send it to the user
    saveOTP(email, otp);
    await sendOTP(email, otp);

    if (user) {
      return res.json({ message: 'OTP sent for login' });
    }

    return res.json({ message: 'OTP sent for signup' });
  } catch (err) {
    console.error('Error requesting OTP:', err);
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

// Verify OTP and Complete Signup or Login
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const isValidOTP = verifyOTP(email, otp);

    if (!isValidOTP) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    let user = await User.findOne({ email });

    // If user does not exist, complete signup
    if (!user) {
      user = new User({
        email,
        password: '', // No password required for OTP-based signup
        role: 'user', // Default role
      });
      await user.save();
      return res.status(201).json({ message: 'User signed up successfully' });
    }

    // Generate JWT token for login
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error verifying OTP:', err);
    res.status(500).json({ message: 'Error completing signup or login' });
  }
};

// Admin Login
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || user.role !== 'admin') {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Admin login successful', token });
  } catch (err) {
    console.error('Error logging in as admin:', err);
    res.status(500).json({ message: 'Error logging in as admin' });
  }
};
