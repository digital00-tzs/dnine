const express = require('express');
const { 
  requestOTP, // Assuming `requestOTP` is for both signup and login OTP requests
  verifyOTP, // Assuming `verifyOTP` is for both signup and login OTP verification
  adminLogin 
} = require('../controllers/authController');
const router = express.Router();

// Routes for OTP Requests (Signup or Login)
router.post('/request-otp', requestOTP); // One route for both signup and login OTP requests

// Routes for OTP Verification (Signup or Login)
router.post('/verify-otp', verifyOTP); // One route for both signup and login OTP verification

// Admin Login Route
router.post('/admin-login', adminLogin);

module.exports = router;
