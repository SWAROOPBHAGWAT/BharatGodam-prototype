import React, { useState } from 'react';
import './Login.css';


const Login = () => {
  const [userType, setUserType] = useState('farmer');
  const [username, setUsername] = useState('');
  const [businessName, setWarehouseId] = useState('');
  const [adminId, setAdminId] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    switch (userType) {
      case 'farmer':
        // Perform client login logic here
        
        console.log('Username:', username);
        console.log('Password:', password);
        break;
      case 'warehouse owner':
        // Perform business login logic here
        console.log('Warehouse Id.:', businessName);
        
        console.log('Password:', password);
        break;
      case 'admin':
        // Perform admin login logic here
        console.log('Admin ID:', adminId);
        console.log('Admin Password:', password);
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
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </>
        )}
        {userType === 'warehouse owner' && (
          <>
            <div>
              <label>Warehouse Id:</label>
              <input
                type="text"
                value={setWarehouseId}
                onChange={(e) => setWarehouseId(e.target.value)}
                required
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
     
    </div>
    
  );
};

export default Login;
