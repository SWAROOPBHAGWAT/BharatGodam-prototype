// Import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

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
app.post('/api/signup',async (req, res)=>{
  console.log(req.body);
  const{userType,
    name,
    address,
    // kyc,
    mobile,
    email,
    document,
    warehouseName,
    adminId,
    password,
    warehouseType}=req.body;
  try{
    await User.create({
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
    res.send({status:"ok"});
  }
  catch(error){
    console.log("error");
    res.send({status:" signup error",error})
  }
});

app.post("/login-user",async(req,res)=>{
  const{email,password}=req.body;

  
})

// Start the server
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
