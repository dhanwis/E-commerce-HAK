import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/ban.jpg';

function Banner() {
  return (
    <div className="Banner">
      <Link to="/Bannerdetails">
        <img src={banner} alt="Banner" className="banner-img" />
      </Link>
    </div>
  );
}

export default Banner;