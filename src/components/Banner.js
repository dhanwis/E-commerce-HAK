import React from 'react';
import banner from '../images/ban.jpg';

function Banner() {
  return (
    <div className="Banner">
        <img src={banner} alt="Banner" className="banner-img" />
      </div>
  )
}

export default Banner;