import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import Navbar1 from './Navbar1';
import k1bl from '../images/k1bl.webp';
import k2b from '../images/k2b.jpg';
import k3r from '../images/k3r.jpeg';
import k4o from '../images/k4o.jpg';
import k5y from '../images/k5y.jpeg';
import k6r from '../images/k6r.webp';
import k7g from '../images/k7g.webp';
import k8pu from '../images/k8pu.jpg';
import k9bl from '../images/k9bl.jpeg';
import k10pi from '../images/k10pi.jpg';
import k11y from '../images/k11y.jpg';
import k12w from '../images/k12w.jpeg';
import k13r from '../images/k13r.jpg';
import k14b from '../images/k14b.jpg';
import k15bl from '../images/k15bl.jpg';
import k16g from '../images/k16g.webp';

// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: '$600',
    description: 'Beautiful black kurtha.',
    image: k1bl,
    size: 'Small',
    color: 'Black',
    price: 600,
    popularity: 500,
  },
  {
    title: '&350',
    description: 'blue kurtha.',
    image: k2b,
    size: 'Medium',
    color: 'Blue',
    price: 350,
    popularity: 200,
  },
  {
    title: '$499',
    description: 'Classic red kurtha.',
    image: k3r,
    size: 'Large',
    color: 'Red',
    price: 499,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant orange kurtha.',
    image: k4o,
    size: 'Extra Large',
    color: 'Orange',
    price: 999,
    popularity: 300,
  },
 
  {
    title: '$490',
    description: 'Elegant yellow kurtha for special occasions.',
    image: k5y,
    size: 'Medium',
    color: 'Yellow',
    price: 490,
    popularity: 200,
  },
  {
    title: '$690',
    description: 'Beautiful red color kurtha.',
    image: k6r,
    size: 'Small',
    color: 'Red',
    price: 690,
    popularity: 500,
  },
  {
    title: '$509',
    description: 'Classic green kurtha.',
    image: k7g,
    size: 'Large',
    color: 'Green',
    price: 509,
    popularity: 800,
  },
  {
    title: '$699',
    description: 'Elegant purple kurtha.',
    image: k8pu,
    size: 'Extra Large',
    color: 'Purple',
    price: 699,
    popularity: 300,
  },
  {
    title: '$499',
    description: 'Elegant black kurtha.',
    image: k9bl,
    size: 'Extra Large',
    color: 'Black',
    price: 499,
    popularity: 400,
  },
  {
    title: '$359',
    description: 'Pinkkurtha.',
    image: k10pi,
    size: 'Large',
    color: 'Pink',
    price: 359,
    popularity: 500,
  },
  {
    title: '$899',
    description: 'Yellow kurtha.',
    image: k11y,
    size: 'Large',
    color: 'Yellow',
    price: 899,
    popularity: 500,
  },
  {
    title: '$799',
    description: 'Elegant white kurtha.',
    image: k12w,
    size: 'Small',
    color: 'White',
    price: 799,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant red kurtha.',
    image: k13r,
    size: 'Small',
    color: 'Red',
    price: 999,
    popularity: 800,
  },
  {
    title: '$899',
    description: 'Elegant blue kurtha.',
    image: k14b,
    size: 'Small',
    color: 'Blue',
    price: 899,
    popularity: 400,
  },
  {
    title: '$259',
    description: 'Elegant black kurtha.',
    image: k15bl,
    size: 'Small',
    color: 'Black',
    price: 259,
    popularity: 200,
  },
  {
    title: '$349',
    description: 'Elegant green kurtha.',
    image: k16g,
    size: 'Small',
    color: 'Green',
    price: 349,
    popularity: 200,
  },
];

const Ckurta = () => {
  const [filteredData, setFilteredData] = useState(initialCardData);

  const handleFilterChange = (filters) => {
    let filtered = initialCardData;

    if (filters.size) {
      filtered = filtered.filter((card) => card.size === filters.size );
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
      case 'newest_first':
        sortedData.reverse(); // Newest first
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
      <Navbar1 />
      <Container fluid>
        <Row>
          <Col md={3}>
            {/* Sidebar */}
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', height: '50%', marginTop: '100px' }}>
            <Button variant="">FILTER</Button>
              <hr />
              <Button variant="" >CATEGORIES</Button>
              {/* Add your category filters here */}
              <hr />
              <Button variant="">PRICING</Button>
              {/* Add your pricing filters here */}
              <hr />
              <Button variant="">BRAND</Button>
              {/* Add your brand filters here */}
              <hr />
              <Button variant="">DISCOUNT</Button>
              {/* Add your discount filters here */}
            </div>
          </Col>
          <Col md={9}>
            {/* Product Card Grid */}
            <Row style={{ paddingTop: '10px', justifyContent: 'center', paddingBottom: '7px' }}>
              <Col xs={12} md={6}>
                <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
                  <Form.Label style={{ marginRight: '10px', color: 'dark pink', marginTop: '7px' }}>Size</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => handleFilterChange({ size: e.target.value })}
                    style={{ background: 'none', color: 'dark pink', width: '100px' }}>
                    <option value="">All Sizes</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                  </Form.Control>
                  <Form.Label style={{ color: 'dark pink', marginRight: '8px', marginLeft: '8px', marginTop: '7px' }}>Color</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => handleFilterChange({ color: e.target.value })}
                    style={{ background: 'none', color: 'dark pink', width: '100px' }}>
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
                  <Form.Label style={{ color: 'dark pink', marginRight: '8px', marginLeft: '8px', marginTop: '7px' }}>Sort By</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => handleSortChange(e.target.value)}
                    style={{ background: 'none', color: 'dark pink', width: '150px' }}
                  >
                    <option value="default">Default</option>
                    <option value="popularity">Popularity</option>
                    <option value="price_low_high">Price: Low to High</option>
                    <option value="price_high_low">Price: High to Low</option>
                    <option value="newest_first">Newest First</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {filteredData.map((card, index) => (
                <Col xs={12} sm={6} md={3} key={index}>
                  <Card style={{ width: '300px', marginBottom: '20px' ,marginLeft:'-12rem'}}>
                    <Card.Img variant="top" src={card.image} style={{ width: '100%', height: '300px'}} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                      <Button variant="" style={{color:' rgb(250, 43, 140)'}}>Add to Cart</Button>
                      <Button variant=""style={{color:' rgb(250, 43, 140)'}}>Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Dilfooter />
    </div>
  );
};

export default Ckurta;
