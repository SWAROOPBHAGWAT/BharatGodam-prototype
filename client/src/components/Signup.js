import React, { useState } from 'react';
import './Signup.css';
import { Link , useHistory } from 'react-router-dom';
import Login from './Login';

import axios from 'axios';
const Signup = () => {
  const [userType, setUserType] = useState('farmer');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  // const [kyc, setKyc] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  // const [warehouseName, setWarehouseName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [warehouseType, setWarehouseType] = useState('dry');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        userType,
        name,
        address,
        // kyc,
        mobile,
        email,
        document,
        // warehouseName,
        adminId,
        password,
        warehouseType,
      };

      // Send the user data to the backend API
      const response = await axios.post('http://localhost:4000/api/signup', userData)

      console.log('Signup response:', response.data);

      // Handle success or show appropriate message to the user
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error or show appropriate error message to the user
    }

    history.push('/Login')
  };


  const handleLogin = (e) => {
    e.preventDefault();

    switch (userType) {
      case 'farmer':
        // Perform client login logic here
        console.log('user type', userType)
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Address:', address);
        console.log('Mobile:', mobile)
        // console.log('Kyc:', kyc)
        break;
      case 'warehouse owner':
        // Perform business login logic here
        // console.log('Warehouse Name:', warehouseName);
        console.log('user type', userType)
        console.log('Password:', password);
        console.log('Address:', address);
        console.log('Mobile:', mobile)
        // console.log('Kyc:', kyc)
        console.log('Documents:', document)
        console.log('WarehouseType:', warehouseType)
        break;
      case 'admin':
        // Perform admin login logic here
        console.log('user type', userType)
        console.log('Admin ID:', adminId);
        console.log('Admin Password:', password);
        break;
      default:
        console.log('Invalid user type.');
        break;
    }
  };

  const handleDocumentChange = (e) => {
    const selectedDocument = e.target.files[0];
    setDocument(selectedDocument);
  
    // Create a URL for the selected document to preview it
    const documentURL = URL.createObjectURL(selectedDocument);
    // setDocumentPreview(documentURL);
  };
  

  const handleCardClick = (type) => {
    setUserType(type);
  };

  return (
    
    <div className="container">
      <h2>SignUp</h2>
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
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Address:</label>
              <input
                type="textbox"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              {/* <label>KYC:</label>
              <input
                type="file"
                accept=".pdf, .doc, .docx" // Define the allowed file formats
                onChange={(e) => setKyc(e.target.files[0])}
                required
              /> */}

              <label>Mobile No:</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^\d{0,10}$/.test(input)) {
                    setMobile(input);
                  }
                }}
                required
                placeholder="Enter a 10-digit Indian mobile number"
              />

              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                placeholder="Enter a valid email id"
              />

            </div>
          </>
        )}
        {userType === 'warehouse owner' && (
          <>
            <div>
            <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Address:</label>
              <input
                type="textbox"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              {/* <label>KYC:</label>
              <input
                type="file"
                accept=".pdf, .doc, .docx" // Define the allowed file formats
                onChange={(e) => setKyc(e.target.files[0])}
                required
              /> */}

              <label>Mobile No:</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^\d{0,10}$/.test(input)) {
                    setMobile(input);
                  }
                }}
                required
                placeholder="Enter a 10-digit Indian mobile number"
              />

              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                placeholder="Enter a valid email id"
              />
              <label>Documents :</label>
              <input
                type="file"
                accept=".pdf, .doc, .docx" // Define the allowed file formats
                capture="environment"
                onChange={handleDocumentChange}

                required
              />
              <div>
                <label>Type:</label>
                <select value={warehouseType} onChange={(e) => setWarehouseType(e.target.value)}>
                  <option value="dry">Dry</option>
                  <option value="cold">Cold</option>
                </select>
              </div>

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
        <Link to={'/Login'}><button type="submit">Sign Up</button></Link>
        
      </form>

    </div>

  );
};

export default Signup;
