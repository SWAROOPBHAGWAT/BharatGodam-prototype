// Import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const warehousesRoutes = require('./routes/warehouses');

// Initialize the app
const app = express();

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // Corrected typo here
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// Middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
app.use('/api/warehouses', warehousesRoutes);
console.log('inside server');

// Port
const port = process.env.PORT || 4000;

// Start the server
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
