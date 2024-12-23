const axios = require('axios');
const Order = require('../models/Order');

// Replace with your RezerPay API details
const REZERPAY_API_URL = 'https://api.rezerpay.com/v1/payment/';  // Replace with correct RezerPay API URL
const REZERPAY_SECRET_KEY = process.env.REZERPAY_SECRET_KEY; // Add your RezerPay Secret Key in the .env file

// Process Payment
exports.processPayment = async (req, res) => {
  const { orderId, paymentDetails } = req.body;

  try {
    // Get the order
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(400).json({ message: 'Order not found' });
    }

    // Prepare payment request payload
    const paymentPayload = {
      amount: order.totalAmount * 100,  // Convert to paise (RezerPay may require amounts in the smallest unit)
      currency: 'INR',  // You can change this if you're using a different currency
      order_id: orderId,
      payment_method: paymentDetails.payment_method,
      card_number: paymentDetails.card_number,
      expiry_date: paymentDetails.expiry_date,
      cvv: paymentDetails.cvv,
    };

    // Send payment request to RezerPay API
    const response = await axios.post(REZERPAY_API_URL, paymentPayload, {
      headers: {
        'Authorization': `Bearer ${REZERPAY_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Handle the response from RezerPay
    if (response.data.success) {
      order.paymentStatus = 'Successful';
      await order.save();
      res.json({ message: 'Payment successful', paymentDetails: response.data });
    } else {
      order.paymentStatus = 'Failed';
      await order.save();
      res.status(400).json({ message: 'Payment failed', paymentDetails: response.data });
    }
  } catch (err) {
    console.error('Error processing payment:', err);
    res.status(500).json({ message: 'Payment processing failed', error: err.message });
  }
};
