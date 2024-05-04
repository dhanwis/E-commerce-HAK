import React, {  useState } from 'react';
import logo1 from '../images/logo1.png';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false); // Track the visibility of "Contact Us"
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track if sidebar is open
  const [topSlidebarOpen, setTopSlidebarOpen] = useState(false); // Track if top slidebar is open
  const [loginOpen, setLoginOpen] = useState(false); // Track if login panel is open
  const [mobileNumber, setMobileNumber] = useState(''); // Track the mobile number input value
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       setIsScaled(scrollPosition > 50);
//       setIsVisible(scrollPosition > 100);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Only run once on component mount

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
    <div id="nav1">
      <div className="navcon1">
        <h4
          onClick={toggleSidebar}
          style={{ cursor: 'pointer' }}
        >
          CONTACT
        </h4>
      </div>

      <div className="dillogo1">
        <img
          src={logo1}
          alt="Logo" height='100px'
        />
      </div>

      <div className="navcontent1">
        <h4
          onClick={toggleTopSlidebar} 
          style={{ cursor: 'pointer' }}
        >
          SEARCH
        </h4>
        <h4  onClick={toggleLogin}>
          LOGIN
        </h4>
      </div>

      {/* Sidebar with contact details and a close button */}
      {sidebarOpen && (
        <div className="sidebar" >
          <button onClick={closeSidebar} className="close-sidebar">
          <i class="fa-solid fa-circle-xmark" style={{backgroundColor:' rgb(253, 168, 208)'}}></i>
          </button>&nbsp;&nbsp;
          <ul style={{backgroundColor:' rgb(253, 168, 208)'}}>
            <li style={{backgroundColor:' rgb(253, 168, 208)'}}>Phone: 123-456-7890</li>
            <li style={{backgroundColor:' rgb(253, 168, 208)'}}>Email: contact@dilhak.com</li>
            <li style={{backgroundColor:' rgb(253, 168, 208)'}}>Address: 123 DILHAK St, City</li>
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
        </div>
      )}
    </div>
  );
}

export default Navbar;