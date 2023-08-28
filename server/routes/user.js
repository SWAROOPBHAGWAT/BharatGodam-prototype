const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import your user model

router.post('/signup', async (req, res) => {
  try {
    // Extract data from the request body
    const { userType, name, address, 
      // kyc, 
      mobile, email, document, warehouseName, adminId, password, warehouseType } = req.body;

    // Create a new user in the database
    const newUser = new User({
      userType,
      name,
      address,
      // kyc,
      mobile,
      email,
      document,
      warehouseName, 
      adminId,
      password,
      warehouseType,
    });

    // Save the user to the database
    await newUser.save();
    // const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while signing up.' });
  }
});

module.exports = router;

