import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Bestsell from './components/Bestsell';
import Category from './components/Category';
import Offers from './components/Offers';
import Dilfooter from './components/Dilfooter';
import Bansarees from './components/Bansarees';

// The main content of the homepage
const SimpleAnimation = () => {
  return (
    <div id="page1">
      {/* <Navbar /> */}
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
       <Navbar /> {/*Common navbar */}
      <Routes>
        <Route path="/" element={<SimpleAnimation />} /> {/* Home route */}
        <Route path="/Bansarees" element={<Bansarees/>} /> {/* Page for slide 1 in Offers */}
        {/* Add more routes as needed */}
      </Routes>
        {/* <Dilfooter />  */}
    </Router>
  );
};

export default App;
