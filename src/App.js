import React from 'react';
import './App.css'; 
import  Bestsell from './components/Bestsell';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


const SimpleAnimation = () => {
 

  return (
    <div id="page1">
      <Navbar/>
      <Banner/>
     <Bestsell/>
        
    </div>
  );
};

export default SimpleAnimation;