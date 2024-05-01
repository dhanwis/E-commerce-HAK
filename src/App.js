import React from 'react';
import './App.css'; 
import  Bestsell from './components/Bestsell';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Dilfooter from './components/Dilfooter';


const SimpleAnimation = () => {
 

  return (
    <div id="page1">
      <Navbar/>
      <Banner/>
     <Bestsell/>
     <Category/>
        <Dilfooter/>
    </div>
  );
};

export default SimpleAnimation;