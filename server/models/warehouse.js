const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  location: String,
  image: Buffer,
  book: Boolean
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;
