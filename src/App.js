import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Banner from './components/Banner';
import Bestsell from './components/Bestsell';
import Category from './components/Category';
import Offers from './components/Offers';
import Dilfooter from './components/Dilfooter';
import Bansarees from './components/Bansarees';
import Csaree from './components/Csaree';
import Ckurthaset from './components/Ckurthaset';
import Cchuridarmaterial from './components/Cchuridarmaterial';
import Ckurta from './components/Ckurta';
import Cchuridar from './components/Cchuridar';
import Bannerdetails from './components/Bannerdetails';
import ProductDetails from './components/ProductDetails';
import ProductDescription from './components/ProductDescription'; // Create this component

// The main content of the homepage
const SimpleAnimation = () => {
  return (
    <div id="page1">
      <Navbar />
      <Banner />
      <Bestsell /> {/* Displays bestsellers */}
      <Category /> {/* Some category-based content */}
      <Offers /> {/* Displays carousel with slides */}
      <Dilfooter /> 
    </div>
  );
};

// The main app component with routing
const App = () => {
  return (
    <Router>
       {/* <Navbar1 />  */}
      <Routes>
        <Route path="/" element={<SimpleAnimation />} /> {/* Home route */}
        <Route path="/Bansarees" element={<Bansarees/>} /> {/* Page for slide 1 in Offers */}
        <Route path="/Csaree" element={<Csaree/>} />
        <Route path="/Ckurthaset" element={<Ckurthaset/>} />
        <Route path="/Cchuridarmaterial" element={<Cchuridarmaterial/>} />
        <Route path="/Cchuridar" element={<Cchuridar/>} />
        <Route path="/Ckurta" element={<Ckurta/>} />
        <Route path="/Bannerdetails" element={<Bannerdetails/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/sarees/:Id" element={<ProductDescription />} /> 

        {/* Add more routes as needed */}
      </Routes>
        {/* <Dilfooter />  */}
    </Router>
  );
};

export default App;
