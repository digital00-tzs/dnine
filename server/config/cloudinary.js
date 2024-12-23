const cloudinary = require('cloudinary').v2;

// Asynchronous configuration function
const connectCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log('Cloudinary configured successfully');
  } catch (error) {
    console.error('Error configuring Cloudinary:', error);
    throw error;
  }
};

module.exports = { cloudinary, connectCloudinary };
