import React, { useState } from 'react';
import './Bestsell.css'; 
import banner from '/home/vidya/Documents/DIL-HAK/dil-hakapp/src/ban.webp';

const ProductGallery = () => {
  const bestsellers = [
    { id: 1, name: 'Bestseller 1', imageUrl: banner },
    { id: 2, name: 'Bestseller 2', imageUrl: banner },
    { id: 3, name: 'Bestseller 3', imageUrl: banner },
    { id: 4, name: 'Bestseller 1', imageUrl: banner },
    { id: 5, name: 'Bestseller 2', imageUrl: banner },
    { id: 6, name: 'Bestseller 3', imageUrl: banner},
    { id: 7, name: 'Bestseller 1', imageUrl: banner },
    { id: 8, name: 'Bestseller 2', imageUrl: banner },
    { id: 9, name: 'Bestseller 3', imageUrl: banner },
  ];

  const trendingProducts = [
    { id: 1, name: 'Trending 1', imageUrl: banner },
    { id: 2, name: 'Trending 2', imageUrl: banner },
    { id: 3, name: 'Trending 3', imageUrl: banner },
  ];

  const featuredProducts = [
    { id: 1, name: 'Featured 1', imageUrl: banner },
    { id: 2, name: 'Featured 2', imageUrl: banner},
    { id: 3, name: 'Featured 3', imageUrl: banner},
    { id: 4, name: 'Featured 1', imageUrl: banner },
    { id: 5, name: 'Featured 2', imageUrl: banner},
    { id: 6, name: 'Featured 3', imageUrl: banner},
  ];

  const [selectedOption, setSelectedOption] = useState('bestsellers');

  const renderProductCards = (products) => {
    return (
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
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
