import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // State variables to store user input and login status
  const [userType, setUserType] = useState('farmer');
  const [email, setEmail] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false); // Track login success
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle login attempt
  const handleLogin = async (e) => {
    e.preventDefault();

    switch (userType) {
      case 'farmer':
        // Perform client login logic for farmers
        console.log('Farmer Email:', email);
        console.log('Farmer Password:', password);
        // Set isLoginSuccessful to true if the login is successful
        // isLoginSuccessful = true;

        // Navigate to Farmer Dashboard
        // navigate('/FarmersDashboard');
        
        break;
      case 'warehouse owner':
        // Perform business login logic for warehouse owners
        console.log('Warehouse Owner Email:', email);
        console.log('Warehouse Owner Password:', password);
        // Set isLoginSuccessful to true if the login is successful
        // isLoginSuccessful = true;
        // Navigate to Warehouse Owner Dashboard
        // navigate('/WarehouseOwnerDashboard');
        break;
      case 'admin':
        // Perform admin login logic
        console.log('Admin ID:', adminId);
        console.log('Admin Password:', password);
        // Set isLoginSuccessful to true if the login is successful
        // isLoginSuccessful = true;
        // Navigate to Admin Dashboard
        // navigate('/');
        break;
      default:
        console.log('Invalid user type.');
        break;
    }

    try {
      const response = await axios.post('http://localhost:4000/login-user', { email, password });

      if (response.data.status === 'ok') {
        setIsLoginSuccessful(true);
        const token = response.data.token;
        console.log('Login successful');
        console.log('Token:', token);
      } else {
        console.log('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleCardClick = (type) => {
    setUserType(type);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="card-container" >
        <div
          className={`user-card ${userType === 'farmer' ? 'active' : ''}`}
          onClick={() => handleCardClick('farmer')}
        >
          Farmer
        </div>
        <div
          className={`user-card ${userType === 'warehouse owner' ? 'active' : ''}`}
          onClick={() => handleCardClick('warehouse owner')}
        >
          Warehouse
        </div>
        <div
          className={`user-card ${userType === 'admin' ? 'active' : ''}`}
          onClick={() => handleCardClick('admin')}
        >
          Admin
        </div>
      </div>
      <form onSubmit={handleLogin}>
        {userType === 'farmer' && (
          <>
           
            <div>
            <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                placeholder="Enter a valid email id"
              />
            </div>
          </>
        )}
        {userType === 'warehouse owner' && (
          <>
            <div>
            <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                placeholder="Enter a valid email id"
              />
            </div>
           
          </>
        )}
        {userType === 'admin' && (
          <>
            <div>
              <label>Admin ID:</label>
              <input
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Sign Up</Link>
      {isLoginSuccessful && (
        <>
          {userType === 'farmer' && <Link to="/FarmersDashboard">Go to Farmer Dashboard</Link>}
          {userType === 'warehouse owner' && <Link to="/WarehouseOwnerDashboard">Go to Warehouse Owner Dashboard</Link>}
          {userType === 'admin' && <Link to="/AdminDashboard">Go to Admin Dashboard</Link>}
        </>
      )}
    </div>
    
  );
};

export default Login;