const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // kyc: {
  //   type: String, // Store the path or link to the uploaded KYC document
  //   required: true,
  // },
  mobile: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
  },
  document: {
    type: String, // Store the path or link to the uploaded document (for warehouse owner)
  },
  warehouseName: {
    type: String, // Only for warehouse owner
  },
  adminId: {
    type: String, // Only for admin
  },
  password: {
    type: String,
    required: true,
  },
  warehouseType: {
    type: String, // Only for warehouse owner
  },
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);

