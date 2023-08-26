// WarehouseOwnerDashboard.js

import React from 'react';
import AddWarehouseForm from './AddWarehouseForm';
import './WarehouseOwnerDashboard.css'; // Import the CSS file
import './AddWarehouseForm.css';

function WarehouseOwnerDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Warehouse Owner Dashboard</h1>
      <div className="form-container">
        <AddWarehouseForm />
      </div>
      {/* Additional content */}
    </div>
  );
}

export default WarehouseOwnerDashboard;
