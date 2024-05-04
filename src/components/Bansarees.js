import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import b1 from '../images/red.avif';
import b2 from '../images/blue.avif';
import b3 from '../images/black.avif';
import b4 from '../images/green.jpg';
import b5 from '../images/blue.jpg';
import b6 from '../images/red.webp';
import b7 from '../images/black.webp';
import b8 from '../images/green.jpeg';

// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: 'Saree 1',
    description: 'Beautiful saree with intricate designs.',
    image: b1,
    size: 'Small',
    color: 'Red',
    price: 600,
    popularity: 500,
  },
  {
    title: 'Saree 2',
    description: 'Elegant saree for special occasions.',
    image: b2,
    size: 'Medium',
    color: 'Blue',
    price: 900,
    popularity: 200,
  },
  {
    title: 'Saree 3',
    description: 'Classic black saree.',
    image: b3,
    size: 'Large',
    color: 'Black',
    price: 500,
    popularity: 800,
  },
  {
    title: 'Saree 4',
    description: 'Elegant green saree.',
    image: b4,
    size: 'Extra Large',
    color: 'Green',
    price: 1000,
    popularity: 300,
  },
 
  {
    title: 'Saree 5',
    description: 'Elegant saree for special occasions.',
    image: b5,
    size: 'Medium',
    color: 'Blue',
    price: 990,
    popularity: 200,
  },
  {
    title: 'Saree 6',
    description: 'Beautiful saree with intricate designs.',
    image: b6,
    size: 'Small',
    color: 'Red',
    price: 690,
    popularity: 500,
  },
  {
    title: 'Saree 7',
    description: 'Classic black saree.',
    image: b7,
    size: 'Large',
    color: 'Black',
    price: 5090,
    popularity: 800,
  },
  {
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
        sortedData.sort((a, b) => b.popularity - a.popularity); // Most popular first
        break;
      case 'default':
      default:
        sortedData = [...initialCardData]; // Default or reset order
        break;
    }

    setFilteredData(sortedData); // Update the sorted product list
  };

  return (
    <Container fluid>
      <Row style={{ paddingTop: '205px', justifyContent: 'flex-end' ,paddingBottom:'7px'}}> {/* Right-align the row content */}
        <Col xs={4}>
          <Form.Group style={{ display: 'flex', justifyContent: 'flex-end' }}> {/* Align label and control to the right */}
            <Form.Label style={{ marginRight: '10px', color: 'pink',marginTop:'7px' }}>Size</Form.Label>
                <Form.Control
                as="select"
                onChange={(e) => handleFilterChange({ size: e.target.value })}
                style={{ background: 'none', color: 'pink',width:'100px' }}>
                <option value="">All Sizes</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
                </Form.Control>
            <Form.Label style={{ color: 'pink',marginRight: '8px' ,marginLeft:'8px',marginTop:'7px'}}>Color</Form.Label>
                    <Form.Control
                    as="select"
                    onChange={(e) => handleFilterChange({ color: e.target.value })}
                    style={{ background: 'none', color: 'pink' ,width:'100px'}}>
                    <option value="">All Colors</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Black">Black</option>
                    </Form.Control>
            <Form.Label style={{color: 'pink',marginRight: '8px' ,marginLeft:'8px',marginTop:'7px'}}>Sort By</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => handleSortChange(e.target.value)}
              style={{ background: 'none', color: 'pink' ,width:'100px'}}
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
        {filteredData.map((card, index) => (
          <Col xs={12} sm={6} md={3} key={index}> {/* Responsive layout */}
            <Card style={{ width: '400px', marginBottom: '20px' }}> {/* Consistent card width */}
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Footer Section */}
      <Dilfooter />
    </Container>
  );
};

export default Bansarees;
