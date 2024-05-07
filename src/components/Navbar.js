import React, { useEffect, useState } from 'react';
import logo1 from '../images/logo1.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';

function Navbar() {
  const [isScaled, setIsScaled] = useState(false); // Track the scale of the logo image
  const [isVisible, setIsVisible] = useState(false); // Track the visibility of "Contact Us"
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track if sidebar is open
  const [topSlidebarOpen, setTopSlidebarOpen] = useState(false); // Track if top slidebar is open
  const navigate = useNavigate(); 
 

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

  const handleLoginClick = () => navigate('/login'); 


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
        <h4 className={isVisible ? 'visible' : 'hidden'} onClick={handleLoginClick} >
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

     
    </div>
  );
}

export default Navbar;