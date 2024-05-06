import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import Navbar1 from './Navbar1';
import s1 from '../images/s1.webp';
import s2 from '../images/s2.avif';
import s3 from '../images/s3.jpg';
import s4 from '../images/s4.avif';
import s5 from '../images/s5.avif';
import s11 from '../images/s11.avif';
import s12 from '../images/s12.avif';
import s13 from '../images/s13.webp';
import s14 from '../images/s14.jpg';
import s15 from '../images/s15.jpg';
import s6 from '../images/s6.webp';
import s7 from '../images/s7.webp';
import s8 from '../images/s8.webp';
import s9 from '../images/s9.webp';
import s10 from '../images/s10.jpg';
import s16 from '../images/s16.jpg';

// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: '$600',
    description: 'Beautiful saree with intricate designs.',
    image: s1,
    size: 'Small',
    color: 'Red',
    price: 600,
    popularity: 500,
  },
  {
    title: '&900',
    description: 'Elegant saree for special occasions.',
    image: s2,
    size: 'Medium',
    color: 'Blue',
    price: 900,
    popularity: 200,
  },
  {
    title: '$500',
    description: 'Classic black saree.',
    image: s13,
    size: 'Large',
    color: 'Black',
    price: 500,
    popularity: 800,
  },
  {
    title: '$1000',
    description: 'Elegant green saree.',
    image: s14,
    size: 'Extra Large',
    color: 'Green',
    price: 1000,
    popularity: 300,
  },
 
  {
    title: '$990',
    description: 'Elegant saree for special occasions.',
    image: s15,
    size: 'Medium',
    color: 'Blue',
    price: 990,
    popularity: 200,
  },
  {
    title: '$690',
    description: 'Beautiful saree with intricate designs.',
    image: s6,
    size: 'Small',
    color: 'Yellow',
    price: 690,
    popularity: 500,
  },
  {
    title: '$5090',
    description: 'Classic black saree.',
    image: s7,
    size: 'Large',
    color: 'Black',
    price: 5090,
    popularity: 800,
  },
  {
    title: '$10000',
    description: 'Elegant green saree.',
    image: s16,
    size: 'Extra Large',
    color: 'Red',
    price: 10000,
    popularity: 300,
  },
  {
    title: '$4999',
    description: 'Elegant green and pink saree.',
    image: s3,
    size: 'Extra Large',
    color: 'Pink',
    price: 4999,
    popularity: 400,
  },
  {
    title: '$3599',
    description: 'Elegant green and orange saree.',
    image: s4,
    size: 'Large',
    color: 'Orange',
    price: 3599,
    popularity: 500,
  },
  {
    title: '$4699',
    description: 'Elegant blue saree.',
    image: s8,
    size: 'Large',
    color: 'Blue',
    price: 4699,
    popularity: 500,
  },
  {
    title: '$7999',
    description: 'Elegant yellow saree.',
    image: s9,
    size: 'Small',
    color: 'Yellow',
    price: 7999,
    popularity: 800,
  },
  {
    title: '$9999',
    description: 'Elegant yellow saree.',
    image: s10,
    size: 'Small',
    color: 'Yellow',
    price: 9999,
    popularity: 800,
  },
  {
    title: '$8999',
    description: 'Elegant purple saree.',
    image: s12,
    size: 'Small',
    color: 'Purple',
    price: 8999,
    popularity: 400,
  },
  {
    title: '$2599',
    description: 'Elegant white saree.',
    image: s5,
    size: 'Small',
    color: 'White',
    price: 2599,
    popularity: 200,
  },
  {
    title: '$3499',
    description: 'Elegant white saree.',
    image: s11,
    size: 'Small',
    color: 'White',
    price: 3499,
    popularity: 200,
  },
];

const Csaree = () => {
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
    <div>
      <Navbar1/>
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
                    <option value="White">White</option>
                    <option value="Purple">Purple</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Pink">Pink</option>
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
              <Card.Img variant="top" src={card.image} style={{ width: '100%', height: '600px' }} /> {/* Set image size */} 
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
    </Container>
      <Dilfooter />
      </div>
  );
};

export default Csaree;

