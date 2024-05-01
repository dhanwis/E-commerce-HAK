import React, { useEffect, useState } from 'react';
import logo1 from '../images/logo1.png';
import './Navbar.css';

function Navbar() {
  const [isScaled, setIsScaled] = useState(false); // Track the scale of the logo image
  const [isVisible, setIsVisible] = useState(false); // Track the visibility of "Contact Us"
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track if sidebar is open
  const [topSlidebarOpen, setTopSlidebarOpen] = useState(false); // Track if top slidebar is open
  const [loginOpen, setLoginOpen] = useState(false); // Track if login panel is open
  const [mobileNumber, setMobileNumber] = useState(''); // Track the mobile number input value
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScaled(scrollPosition > 50);
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run once on component mount

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar on click
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close sidebar on click
  };

  const toggleTopSlidebar = () => {
    setTopSlidebarOpen(!topSlidebarOpen); // Toggle top slidebar on click
  };

  const closeTopSlidebar = () => {
    setTopSlidebarOpen(false); // Close top slidebar on click
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen); // Toggle login panel on click
  };

  const sendOTP = () => {
    // Here you can implement the logic to send OTP to the entered mobile number
    setOtpSent(true); // Set OTP sent flag to true
  };

  return (
    <div id="nav">
      <div className="navcon">
        <h4
          onClick={toggleSidebar} // Toggle the sidebar when clicked
          className={isVisible ? 'visible' : 'hidden'}
          style={{ cursor: 'pointer' }}
        >
          CONTACT
        </h4>
      </div>

      <div className="dillogo">
        <img
          src={logo1}
          alt="Logo"
          className={isScaled ? 'scaled' : ''}
          style={{
            transition: 'transform 0.5s ease', // Scaling transition
          }}
        />
      </div>

      <div className="navcontent">
        <h4
          onClick={toggleTopSlidebar} // Toggle the top slidebar when clicked
          className={isVisible ? 'visible' : 'hidden'}
          style={{ cursor: 'pointer' }}
        >
          SEARCH
        </h4>
        <h4 className={isVisible ? 'visible' : 'hidden'} onClick={toggleLogin}>
          LOGIN
        </h4>
      </div>

      {/* Sidebar with contact details and a close button */}
      {sidebarOpen && (
        <div className="sidebar">
          <button onClick={closeSidebar} className="close-sidebar">
            X
          </button>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: contact@dilhak.com</li>
            <li>Address: 123 DILHAK St, City</li>
          </ul>
        </div>
      )}

      {topSlidebarOpen && (
        <div className="top-slidebar">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
        </div>
      )}

      {/* Login panel */}
      {loginOpen && (
        <div className="login-panel text-center"><p style={{fontFamily:'serif',fontWeight:'bold'}}>LOGIN</p>
          <div className="login-form">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="login-input"
            />
            {otpSent ? (
              <input
                type="text"
                placeholder="Enter OTP"
                // Handle OTP verification here
                className="login-input"
              />
            ) : (
              <button onClick={sendOTP} className="send-otp-btn">Send OTP</button>
            )}
          </div>
          <button className="close-login" onClick={toggleLogin}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;