import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Navbar1 from './Navbar1';
import Dilfooter from './Dilfooter';
import './Bansarees.css'
import { useNavigate } from 'react-router-dom'; // for navigation

// Import images (as your provided images)
import b1 from '../images/red.avif';
import b2 from '../images/blue.avif';
import b3 from '../images/black.avif';
import b4 from '../images/green.jpg';
import b5 from '../images/blue.jpg';
import b6 from '../images/red.webp';
import b7 from '../images/black.webp';
import b8 from '../images/green.jpeg';

// Initial data for your product list
const initialCardData = [
  {
    id: 11, // Adding unique IDs for navigation
    title: 'Saree 1',
    description: 'Beautiful saree with intricate designs.',
    image: b1,
    size: 'Small',
    color: 'Red',
    price: 600,
    popularity: 500,
  },
  {
    id: 12,
    title: 'Saree 2',
    description: 'Elegant saree for special occasions.',
    image: b2,
    size: 'Medium',
    color: 'Blue',
    price: 900,
    popularity: 200,
  },
  {
    id: 13,
    title: 'Saree 3',
    description: 'Classic black saree.',
    image: b3,
    size: 'Large',
    color: 'Black',
    price: 500,
    popularity: 800,
  },
  {
    id: 14,
    title: 'Saree 4',
    description: 'Elegant green saree.',
    image: b4,
    size: 'Extra Large',
    color: 'Green',
    price: 1000,
    popularity: 300,
  },
  {
    id: 15,
    title: 'Saree 5',
    description: 'Elegant saree for special occasions.',
    image: b5,
    size: 'Medium',
    color: 'Blue',
    price: 990,
    popularity: 200,
  },
  {
    id: 16,
    title: 'Saree 6',
    description: 'Beautiful saree with intricate designs.',
    image: b6,
    size: 'Small',
    color: 'Red',
    price: 690,
    popularity: 500,
  },
  {
    id: 17,
    title: 'Saree 7',
    description: 'Classic black saree.',
    image: b7,
    size: 'Large',
    color: 'Black',
    price: 5090,
    popularity: 800,
  },
  {
    id: 18,
    title: 'Saree 8',
    description: 'Elegant green saree.',
    image: b8,
    size: 'Extra Large',
    color: 'Green',
    price: 10000,
    popularity: 300,
  },
];

const Bansarees = () => {
  const [filteredData, setFilteredData] = useState(initialCardData);
  const navigate = useNavigate(); // For navigation

  // Handle navigation to the product description page
  const handleCardClick = (Id) => {
    console.log(Id)
    navigate(`/sarees/${Id}`); // Navigate to the product description page with the product ID
  };

  // Handle filtering by size and color
  const handleFilterChange = (filters) => {
    let filtered = initialCardData;

    if (filters.size) {
      filtered = filtered.filter((card) => card.size === filters.size);
    }

    if (filters.color) {
      filtered = filtered.filter((card) => card.color === filters.color);
    }

    setFilteredData(filtered); // Update the filtered product list
  };

  // Handle sorting by various criteria
  const handleSortChange = (sortOption) => {
    let sortedData = [...filteredData];

    switch (sortOption) {
      case 'price_low_high':
        sortedData.sort((a, b) => a.price - b.price); // Ascending price
        break;
      case 'price_high_low':
        sortedData.sort((a, b) => b.price - a.price); // Descending price
        break;
      case 'popularity':
        sortedData.sort((a, b) => b.popularity - b.popularity); // Most popular first
        break;
      case 'default':
      default:
        sortedData = [...initialCardData]; // Reset to default
        break;
    }

    setFilteredData(sortedData); // Update the sorted product list
  };

  return (
    <div>
      <Navbar1/>
    <Container fluid>

      {/* Filter and Sort Controls */}
      <Row style={{ paddingTop: '25px', justifyContent: 'flex-end', paddingBottom: '7px' }}>
        <Col xs={4}>
          <Form.Group style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Label style={{ marginRight: '10px', color: 'black', marginTop: '7px' }}>Size</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => handleFilterChange({ size: e.target.value })}
              style={{ background: 'none', color: 'black', width: '100px' }}
            >
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </Form.Control>

            <Form.Label style={{ color: 'black', marginRight: '8px', marginLeft: '8px', marginTop: '7px' }}>
              Color
            </Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => handleFilterChange({ color: e.target.value })}
              style={{ background: 'none', color: 'black', width: '100px' }}
            >
              <option value="">All Colors</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
            </Form.Control>

            <Form.Label
              style={{ color: 'black', marginRight: '8px', marginLeft: '8px', marginTop: '7px' }}
            >
              Sort By
            </Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => handleSortChange(e.target.value)}
              style={{ background: 'none', color: 'black', width: '100px' }}
            >
              <option value="default">Default</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
              <option value="popularity">Popularity</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Product Card Grid */}
      <Row>
                {filteredData.map((card) => (
                    <Col xs={12} sm={6} md={3} key={card.id}> {/* Responsive layout */}
                        <Card
                            className="card"
                            onClick={() => handleCardClick(card.id)} // Navigate to the product page on click
                            style={{ cursor: 'pointer', margin: '5px' }}
                        >
                          

                            <div className="slide slide1"> {/* Apply slide1 styles */}
                                <Card.Img variant="top" src={card.image}  style={{width: '100%',height:'600px'}}/>
                            </div>

                            <div className="slide slide2"> {/* Apply slide2 styles */}
                                <Card.Body>
                                    <div className="content">
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.description}</Card.Text>
                                    </div>
                                    <Button className='button1'>Add to Cart</Button> {/* Placeholder button */}
                                    <Button className='button1'>Buy Now</Button> {/* Placeholder button */}
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
      </Container>
      {/* Footer Section */}
      <Dilfooter />
   
    </div>
  );
};

export default Bansarees;
