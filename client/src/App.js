import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import WarehouseOwnerDashboard from './components/WarehouseOwnerDashboard';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {/* <Route path="/signup" element={<Signup />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />  */}
          <Route path="/" element={<WarehouseOwnerDashboard />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
