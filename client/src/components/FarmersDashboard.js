// import React, { useState, useEffect } from 'react';
// import './FarmersDashboard.css';

// const server_uri = "http://localhost:4000";

// function FarmersDashboard() {
//   const [warehouses, setWarehouses] = useState([]);

//   useEffect(() => {
//     fetchWarehouses();
//   }, []);

  
//   const fetchWarehouses = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/warehouses/fetch/');
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched data:', data);
//         setWarehouses(data);
//       } else {
//         console.error('Response not OK:', response.status);
//       }
//     } catch (error) {
//       console.error('Error fetching warehouses:', error);
//     }
//   };
  

//   return (
//     <div className="farmers-dashboard">
//       <h2>Farmers Dashboard</h2>
//       <div className="warehouse-cards">
//         {warehouses.map((warehouse) => (
//           <div key={warehouse._id} className="warehouse-card">
//             <h3>{warehouse.name}</h3>
//             <p>{warehouse.description}</p>
//             <p>Size: {warehouse.size}</p>
//             <p>Location: {warehouse.location}</p>
//             {warehouse.image && (
//               <img src={`data:image/jpeg;base64,${warehouse.image}`} alt={warehouse.name} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FarmersDashboard;
import React, { useState, useEffect } from 'react';
import './FarmersDashboard.css';

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
        setWarehouses(data);
      } else {
        console.error('Response not OK:', response.status);
      }
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  };


  const handleBookNow = (warehouseId) => {
    const confirmation = window.confirm("Do you want to book this warehouse?");
    if (confirmation) {
      // Send a request to the warehouse owner or perform necessary actions
      alert("Your request to book this warehouse has been sent to the owner.");
    }
  };

  return (
    <div className="farmers-dashboard">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">Farmers Portal</a>
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
            <li className="navbar-item"><a href="/" className="navbar-link">About</a></li>
            <li className="navbar-item"><a href="/" className="navbar-link">Services</a></li>
            <li className="navbar-item"><a href="/" className="navbar-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="warehouse-cards">
        {warehouses.map((warehouse) => (
          <div className="warehouse-card" key={warehouse._id}>
            <h3>{warehouse.name}</h3>
            <p>{warehouse.description}</p>
            <p>Size: {warehouse.size}</p>
            <p>Location: {warehouse.location}</p>
            {warehouse.image && (
              <img src={`data:image/jpeg;base64,base64ImageDataHere,${warehouse.image}`} alt={warehouse.name} />
            )}
            <button onClick={() => handleBookNow(warehouse._id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmersDashboard;
