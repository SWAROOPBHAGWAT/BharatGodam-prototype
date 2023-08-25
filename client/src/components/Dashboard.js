import React from 'react';
import './Dashboard.css'; // Import your CSS file
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div>
        <div style={{ height: "300px"}}
>
        </div>
      {/* Navigation Bar */}
      <div className="logo">
         {/* <img src="/images/bharatGodam_logo.png" alt="" width="250px" />   */}
      </div>
      <span id="close">
        <img style={{ width: '25px' }} src="http://www.pvhc.net/img5/onbbqnqzkjrtvirmiqnp.png" alt="CLOSE" />
      </span>
      <span id="menu">
        <img style={{ width: '25px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11WXR-a18XfNZknL7S4lu0lLyC4aWZPY4sLd4wNHUNv9So2gd" alt="MENU" />
      </span>
      
<nav>
  <ul>
    <li><a href="/">HOME</a></li>
    <li><a href="#">ABOUT US</a></li>
    {/* Update the SIGN IN link to use Link */}
    <li><Link to="/login" className="signin">SIGN IN</Link></li>
    <li><a href="#" className="signup">SIGN UP</a></li>
  </ul>
</nav>
      {/* Navigation Bar */}

      {/* Hero Image */}
      <header>
        <div className="header-text">
          <h1> BharatGodam<br /><span id="photography"> </span></h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
          <button id='preetesh' > Learn More </button>
        </div>
      </header>
      {/* Hero Image */}

      {/* Footer */}
      <div className="footer">
      <div className="contain">
        {/* Column 1 */}
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </div>
        {/* Column 5 */}
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        {/* Column 6 */}
        <div className="col social">
          <h1>Social</h1>
          <ul>
            <li><img src="https://svgshare.com/i/5fq.svg" width="32" style={{ width: '32px' }} /></li>
            <li><img src="https://svgshare.com/i/5eA.svg" width="32" style={{ width: '32px' }} /></li>
            <li><img src="https://svgshare.com/i/5f_.svg" width="32" style={{ width: '32px' }} /></li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>

      {/* Footer */}
    </div>
  );
}

export default Dashboard;
