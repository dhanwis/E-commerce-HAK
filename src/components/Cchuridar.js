import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import p1r from '../images/p1r.jpg';
import p2b from '../images/p2b.jpg';
import p3g from '../images/p3g.jpg';
import p4y from '../images/p4y.webp';
import p5v from '../images/p5v.webp';
import p6pu from '../images/p6pu.webp';
import p7g from '../images/p7g.jpeg';
import p8p from '../images/p8p.jpg';
import p9bl from '../images/p9bl.avif';
import p10y from '../images/p10y.webp';
import p11r from '../images/p11r.webp';
import p12o from '../images/p12o.jpg';
import p13b from '../images/p13b.avif';
import p14w from '../images/p14w.jpg';
import p15v from '../images/p15v.jpg';
import p16bl from '../images/p16bl.jpg';
import Navbar1 from './Navbar1';

// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: '$600',
    description: 'Beautiful red churidar .',
    image: p1r,
    size: 'Small',
    color: 'Red',
    price: 600,
    popularity: 500,
  },
  {
    title: '&350',
    description: 'blue churidar.',
    image: p2b,
    size: 'Medium',
    color: 'Blue',
    price: 350,
    popularity: 200,
  },
  {
    title: '$499',
    description: 'Classic green churidar.',
    image: p3g,
    size: 'Large',
    color: 'Green',
    price: 499,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant yellow churidar.',
    image: p4y,
    size: 'Extra Large',
    color: 'Yellow',
    price: 999,
    popularity: 300,
  },
 
  {
    title: '$490',
    description: 'Elegant violet churidar for special occasions.',
    image: p5v,
    size: 'Medium',
    color: 'Violet',
    price: 490,
    popularity: 200,
  },
  {
    title: '$690',
    description: 'Beautiful purple salwar.',
    image: p6pu,
    size: 'Small',
    color: 'Purple',
    price: 690,
    popularity: 500,
  },
  {
    title: '$509',
    description: 'Classic green churidar.',
    image: p7g,
    size: 'Large',
    color: 'Green',
    price: 509,
    popularity: 800,
  },
  {
    title: '$699',
    description: 'Elegant pink salwar.',
    image: p8p,
    size: 'Extra Large',
    color: 'Pink',
    price: 699,
    popularity: 300,
  },
  {
    title: '$499',
    description: 'Elegant black churidar.',
    image: p9bl,
    size: 'Extra Large',
    color: 'Black',
    price: 499,
    popularity: 400,
  },
  {
    title: '$359',
    description: 'Yellow salwar.',
    image: p10y,
    size: 'Large',
    color: 'Yellow',
    price: 359,
    popularity: 500,
  },
  {
    title: '$899',
    description: 'Red churidar.',
    image: p11r,
    size: 'Large',
    color: 'Red',
    price: 899,
    popularity: 500,
  },
  {
    title: '$799',
    description: 'Elegant orange salwar.',
    image: p12o,
    size: 'Small',
    color: 'Orange',
    price: 799,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant blue salwar.',
    image: p13b,
    size: 'Small',
    color: 'Blue',
    price: 999,
    popularity: 800,
  },
  {
    title: '$899',
    description: 'Elegant white churidar.',
    image: p14w,
    size: 'Small',
    color: 'White',
    price: 899,
    popularity: 400,
  },
  {
    title: '$259',
    description: 'Elegant violet salwar.',
    image: p15v,
    size: 'Small',
    color: 'Violet',
    price: 259,
    popularity: 200,
  },
  {
    title: '$349',
    description: 'Elegant black salwar.',
    image: p16bl,
    size: 'Small',
    color: 'Black',
    price: 349,
    popularity: 200,
  },
];

const Cchuridar = () => {
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
                    <option value="Pink">Pink</option>
                    <option value="Yellow">Yellow</option>
                    <option value="White">White</option>
                    <option value="Purple">Purple</option>
                    <option value="Violet">Violet</option>
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
              <Card.Img variant="top" src={card.image} style={{ width: '100%', height: '500px' }} /> {/* Set image size */}
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

export default Cchuridar;
