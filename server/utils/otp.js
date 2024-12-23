const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Generate a random 6-digit OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Store OTP in-memory for simplicity (use Redis or database in production)
const otpStore = {};

// Function to send OTP via email
const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code for Login/Signup',
    text: `Your OTP code is: ${otp}. It is valid for 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
};

// Function to verify OTP
const verifyOTP = (email, otp) => {
  const storedOtp = otpStore[email];
  if (!storedOtp) return false;

  // Check OTP and expiration time
  const { otpValue, timestamp } = storedOtp;
  const otpExpiryTime = process.env.OTP_EXPIRY_TIME * 60 * 1000; // in milliseconds
  const currentTime = Date.now();

  if (currentTime - timestamp > otpExpiryTime) {
    delete otpStore[email]; // OTP expired, remove it
    return false;
  }

  return otpValue === otp;
};

// Save OTP to memory with timestamp
const saveOTP = (email, otp) => {
  otpStore[email] = { otpValue: otp, timestamp: Date.now() };
};

module.exports = { generateOTP, sendOTP, verifyOTP, saveOTP };
