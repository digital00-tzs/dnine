const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL to the image
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  stock: { type: Number, default: 0 },
});

// Check if the 'Product' model already exists before defining it
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
