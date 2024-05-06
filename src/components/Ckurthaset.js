import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import k1 from '../images/k1.jpg';
import k2 from '../images/k2.jpg';
import k3 from '../images/k3.jpg';
import k5 from '../images/k5.webp';
import k6 from '../images/k6.avif';
import k7 from '../images/k7.webp';
import k8 from '../images/k8.webp';
import k9 from '../images/k9.webp';
import k10 from '../images/k10.avif';
import k11 from '../images/k11.jpg';
import k12 from '../images/k12.jpg';
import k13 from '../images/k13.jpg';
import k14 from '../images/k14.jpg';
import k15 from '../images/k15.webp';
import k16 from '../images/k16.webp';
import k17 from '../images/k17.jpg';
import Navbar1 from './Navbar1';

// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: '$600',
    description: 'Beautiful pink kurtha.',
    image: k1,
    size: 'Small',
    color: 'Pink',
    price: 600,
    popularity: 500,
  },
  {
    title: '&350',
    description: 'blue kurtha.',
    image: k2,
    size: 'Medium',
    color: 'Blue',
    price: 350,
    popularity: 200,
  },
  {
    title: '$499',
    description: 'Classic pink kurtha.',
    image: k3,
    size: 'Large',
    color: 'Pink',
    price: 499,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant white kurtha.',
    image: k5,
    size: 'Extra Large',
    color: 'White',
    price: 999,
    popularity: 300,
  },
 
  {
    title: '$490',
    description: 'Elegant silver kurtha for special occasions.',
    image: k6,
    size: 'Medium',
    color: 'Silver',
    price: 490,
    popularity: 200,
  },
  {
    title: '$690',
    description: 'Beautiful ash color kurtha.',
    image: k7,
    size: 'Small',
    color: 'Ash',
    price: 690,
    popularity: 500,
  },
  {
    title: '$509',
    description: 'Classic red kurtha.',
    image: k8,
    size: 'Large',
    color: 'Red',
    price: 509,
    popularity: 800,
  },
  {
    title: '$699',
    description: 'Elegant grey kurtha.',
    image: k9,
    size: 'Extra Large',
    color: 'Grey',
    price: 699,
    popularity: 300,
  },
  {
    title: '$499',
    description: 'Elegant purple kurtha.',
    image: k10,
    size: 'Extra Large',
    color: 'Purple',
    price: 499,
    popularity: 400,
  },
  {
    title: '$359',
    description: 'Black kurtha.',
    image: k11,
    size: 'Large',
    color: 'Black',
    price: 359,
    popularity: 500,
  },
  {
    title: '$899',
    description: 'Red kurtha.',
    image: k12,
    size: 'Large',
    color: 'Red',
    price: 899,
    popularity: 500,
  },
  {
    title: '$799',
    description: 'Elegant yellow kurtha.',
    image: k13,
    size: 'Small',
    color: 'Yellow',
    price: 799,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant Ash kurtha.',
    image: k14,
    size: 'Small',
    color: 'Ash',
    price: 999,
    popularity: 800,
  },
  {
    title: '$899',
    description: 'Elegant blue kurtha.',
    image: k15,
    size: 'Small',
    color: 'Blue',
    price: 899,
    popularity: 400,
  },
  {
    title: '$259',
    description: 'Elegant white kurtha.',
    image: k16,
    size: 'Small',
    color: 'White',
    price: 259,
    popularity: 200,
  },
  {
    title: '$349',
    description: 'Elegant red kurtha.',
    image: k17,
    size: 'Small',
    color: 'Red',
    price: 349,
    popularity: 200,
  },
];

const Ckurthaset = () => {
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
                    <option value="Ash">Ash</option>
                    <option value="Grey">Grey</option>
                    <option value="Purple">Purple</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Silver">Silver</option>
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

export default Ckurthaset;
