import React from 'react';
import banner from '/home/vidya/Documents/DIL-HAK/dil-hakapp/src/ban.webp';

function Banner() {
  return (
    <div className="Banner">
        <img src={banner} alt="Banner" className="banner-img" />
      </div>
  )
}

export default Banner;