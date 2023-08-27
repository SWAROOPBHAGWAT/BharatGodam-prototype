// WarehouseOwnerDashboard.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AddWarehouseForm from './AddWarehouseForm';
import './WarehouseOwnerDashboard.css'; // Import the CSS file
import './AddWarehouseForm.css';

function WarehouseOwnerDashboard() {
  return (
    <div>
    {/* <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#007bff', marginTop: '45px',width: '100%' ,padding: '50px 663px', color: 'white' }} >
      <h1 className="navbar-title" style={{ marginright: '500px',marginTop: '50px', fontSize: '24px', flex: 1 }}>Warehouse Owner</h1>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        <div className="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </nav> */}
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Warehouse Owner Dashboard</h1>
      <div className="form-container">
        <AddWarehouseForm />
      </div>
      {/* Additional content */}
    </div>
    </div>
  );
}

export default WarehouseOwnerDashboard;
