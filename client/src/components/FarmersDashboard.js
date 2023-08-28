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
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

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
      socket.emit('bookWarehouse', warehouseId);
      alert("Your request to book this warehouse has been sent to the owner.");
    }
  };

  const warehouse1 = 12000;
  const warehouse2 = 10000;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_lQ12FPA25FtT13",
      currency: "INR",
      amount: amount * 100,
      name: "BharatGodam",
      description: "Thanks for purchasing",
      

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "BharatGodam",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
      {warehouse.image && (
        <div className="card-image">
          <img src={`data:image/jpeg;base64,${warehouse.image}`} alt={warehouse.name} />
        </div>
      )}
      <div className="card-content">
        <h3>Warehouse Owner: {warehouse.name}</h3>
        <p>Description: {warehouse.description}</p>
        <p>Size: {warehouse.size}</p>
        <p>Location: {warehouse.location}</p>
        {/* <button className="book-now-button">Book Now</button> */}
        <button className="book-now-button" onClick={() => displayRazorpay(warehouse1)}>
              Book Now
        </button>
      </div>
    </div>
  ))}
</div>
      </div>
    
  );
}



export default FarmersDashboard;
