const Order = require('../models/Order');
const Product = require('../models/Product');

// Create an order
exports.createOrder = async (req, res) => {
  const { products } = req.body;
  const userId = req.user._id;

  try {
    let totalAmount = 0;

    // Calculate total amount
    for (const item of products) {
      const product = await Product.findById(item.productId);
      totalAmount += product.price * item.quantity;
    }

    // Create a new order
    const newOrder = new Order({
      userId,
      products,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Get all orders for admin
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('products.productId');
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
