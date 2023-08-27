import React, { useState, useEffect } from 'react';
import './FarmersDashboard.css';

const server_uri = "http://localhost:4000";

function FarmersDashboard() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    fetchWarehouses();
  }, []);

  
  const fetchWarehouses = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/warehouses/fetch/');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched data:', data);
        setWarehouses(data);
      } else {
        console.error('Response not OK:', response.status);
      }
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  };
  

  return (
    <div className="farmers-dashboard">
      <h2>Farmers Dashboard</h2>
      <div className="warehouse-cards">
        {warehouses.map((warehouse) => (
          <div key={warehouse._id} className="warehouse-card">
            <h3>{warehouse.name}</h3>
            <p>{warehouse.description}</p>
            <p>Size: {warehouse.size}</p>
            <p>Location: {warehouse.location}</p>
            {warehouse.image && (
              <img src={`data:image/jpeg;base64,${warehouse.image}`} alt={warehouse.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmersDashboard;
