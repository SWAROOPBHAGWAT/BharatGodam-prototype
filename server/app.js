// Import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require('bcrypt');

require("dotenv").config();
const warehousesRoutes = require('./routes/warehouses');
const userRoutes = require("./routes/user");
const User = require('./models/user'); 
 

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
app.use("/api/users", userRoutes);
  
// Port
const port = 4000;
// const User= mongoose.model("users");
app.post('/api/signup', async (req, res) => {
  console.log(req.body);
  const {
    userType,
    name,
    address,
    mobile,
    email,
    document,
    warehouseName,
    adminId,
    password,
    warehouseType,
  } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      userType,
      name,
      address,
      mobile,
      email,
      document,
      warehouseName,
      adminId,
      password: hashedPassword, // Store the hashed password
      warehouseType,
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "signup error", error });
  }
});



// Login route
app.post('/login-user', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ status: 'error', error: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      return res.json({ status: 'ok', token: 'your_generated_token' });
    } else {
      return res.json({ status: 'error', error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ status: 'error', error: 'Server error' });
  }
});



// Start the server
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
