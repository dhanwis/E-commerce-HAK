import React, { useState } from 'react';
import './Bestsell.css';
import b1 from '../images/b1.avif';
import b3 from '../images/b3.webp';
import b2 from '../images/b2.jpeg';
import b4 from '../images/b5.jpg';
import b5 from '../images/b5.webp';
import b6 from '../images/b6.jpg';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
  const bestsellers = [
    { id: 1, name: 'Bestseller 1', imageUrl: b1 },
    { id: 2, name: 'Bestseller 2', imageUrl: b2 },
    { id: 3, name: 'Bestseller 3', imageUrl: b3 },
    { id: 4, name: 'Bestseller 1', imageUrl: b4 },
    { id: 5, name: 'Bestseller 2', imageUrl: b5 },
    { id: 6, name: 'Bestseller 3', imageUrl: b6 },
    { id: 7, name: 'Bestseller 1', imageUrl: b1 },
    { id: 8, name: 'Bestseller 2', imageUrl: b1 },
    { id: 9, name: 'Bestseller 3', imageUrl: b1 },
  ];

  const trendingProducts = [
    { id: 1, name: 'Trending 1', imageUrl: b1 },
    { id: 2, name: 'Trending 2', imageUrl: b1 },
    { id: 3, name: 'Trending 3', imageUrl: b1 },
  ];

  const featuredProducts = [
    { id: 1, name: 'Featured 1', imageUrl: b1 },
    { id: 2, name: 'Featured 2', imageUrl: b1 },
    { id: 3, name: 'Featured 3', imageUrl: b1 },
    { id: 4, name: 'Featured 1', imageUrl: b1 },
    { id: 5, name: 'Featured 2', imageUrl: b1 },
    { id: 6, name: 'Featured 3', imageUrl: b1 },
  ];

  const [selectedOption, setSelectedOption] = useState('bestsellers');

  const renderProductCards = (products) => {
    return (
      <div className="row" >
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Link to={`/product/${product.id}`} className="card-link">
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name} style={{height:'250px'}}/>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="options">
        <div className={`option ${selectedOption === 'bestsellers' ? 'active' : ''}`} onClick={() => setSelectedOption('bestsellers')}>Bestsellers</div>
        <div className={`option ${selectedOption === 'trending' ? 'active' : ''}`} onClick={() => setSelectedOption('trending')}>Trending Products</div>
        <div className={`option ${selectedOption === 'featured' ? 'active' : ''}`} onClick={() => setSelectedOption('featured')}>Featured Products</div>
      </div>
      {selectedOption === 'bestsellers' && renderProductCards(bestsellers)}
      {selectedOption === 'trending' && renderProductCards(trendingProducts)}
      {selectedOption === 'featured' && renderProductCards(featuredProducts)}
    </div>
  );
};

export default ProductGallery;
