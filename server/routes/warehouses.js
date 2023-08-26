const express = require('express');
const router = express.Router();
const multer = require('multer');
const Warehouse = require('../models/warehouse');

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route to add a new warehouse
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    console.log('reached inside')
    const { name, description, size, location } = req.body;
    const image = req.file ? req.file.buffer : null; // Handle case where no image is uploaded

    // Create a new Warehouse instance with the provided data
    const newWarehouse = new Warehouse({
      name,
      description,
      size,
      location,
      image,
    });

    // Save the new warehouse document to the database
    await newWarehouse.save();

    res.status(201).json({ message: 'Warehouse added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

