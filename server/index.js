const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db')
const { connectCloudinary } = require('./config/cloudinary');
require('dotenv').config();

const app = express();

connectDB();
connectCloudinary();


// Middleware
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:5173',  // Update this with the frontend URL
  methods: 'GET,POST,PUT,DELETE',  // Methods that your server supports
  allowedHeaders: 'Content-Type,Authorization',  // Headers allowed
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Handle preflight requests


// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);




// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
