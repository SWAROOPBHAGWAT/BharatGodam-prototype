import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/signup" element={<Signup />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
