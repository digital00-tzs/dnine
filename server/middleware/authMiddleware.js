const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Import the User model

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    // Log token for debugging
    console.log('Token:', token);

    // Extract the token from "Bearer <token>" format
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;

    // Admin access required for certain routes (e.g., viewing orders)
    if (req.originalUrl.startsWith('/api/orders') && req.method === 'GET') {
      if (user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
      }
    }

    // Allow the route to proceed if it's not a restricted admin-only route
    next();

  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid token' });
  }
};
