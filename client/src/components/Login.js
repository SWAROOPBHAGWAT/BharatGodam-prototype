import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('farmer');
  const [email, setEmail] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    switch (userType) {
      case 'farmer':
        // Perform client login logic for farmers
        console.log('Farmer Email:', email);
        console.log('Farmer Password:', password);

        // Navigate to Farmer Dashboard
        navigate('/FarmersDashboard');
        break;
      case 'warehouse owner':
        // Perform business login logic for warehouse owners
        console.log('Warehouse Owner Email:', email);
        console.log('Warehouse Owner Password:', password);

        // Navigate to Warehouse Owner Dashboard
        navigate('/WarehouseOwnerDashboard');
        break;
      case 'admin':
        // Perform admin login logic
        console.log('Admin ID:', adminId);
        console.log('Admin Password:', password);

        // Navigate to Admin Dashboard
        // navigate('/');
        break;
      default:
        console.log('Invalid user type.');
        break;
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
    </div>
    
  );
};

export default Login;