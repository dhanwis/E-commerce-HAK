import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import banner from '../images/b1.avif';
import Navbar1 from './Navbar1';
import Dilfooter from './Dilfooter';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Fetch the product details using the ID from the URL params
  // Example:
  const product = { id: parseInt(id), name: 'Product Name', imageUrl: banner, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' };
  const availableSizes = ['S', 'M', 'L', 'XL'];
  const availableColors = ['Red', 'Blue', 'Green', 'Yellow'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log('Buy Now clicked');
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Add to Cart clicked');
  };

  return (
    <div className="product-details">
      <Navbar1/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={product.imageUrl} alt={product.name} className="product-image" height='500px' width='500px'/>
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="size-selector">
              <h4>Sizes:</h4>
              {availableSizes.map((size, index) => (
                <button key={index} onClick={() => handleSizeSelect(size)} className={selectedSize === size ? 'selected' : ''}>{size}</button>
              ))}
            </div>
            <div className="color-selector">
              <h4>Colors:</h4>
              {availableColors.map((color, index) => (
                <button key={index} onClick={() => handleColorSelect(color)} className={selectedColor === color ? 'selected' : ''}>{color}</button>
              ))}
            </div>
            <div className="buttons">
              <button onClick={handleBuyNow} className="buy-now">Buy Now</button>
              <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Dilfooter/>
    </div>
  );
};

export default ProductDetails;
