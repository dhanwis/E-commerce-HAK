import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Dilfooter from './Dilfooter';
import Navbar1 from './Navbar1';
import c1b from '../images/c1b.jpg';
import c2y from '../images/c2y.jpg';
import c3pu from '../images/c3pu.webp';
import c4g from '../images/c4g.jpg';
import c5y from '../images/c5y.jpg';
import c6o from '../images/c6o.jpeg';
import c7pi from '../images/c7pi.jpeg';
import c8o from '../images/c8o.jpg';
import c9pi from '../images/c9pi.jpeg';
import c10w from '../images/c10w.jpeg';
import c11b from '../images/c11b.jpg';
import c12v from '../images/c12v.jpeg';
import c13b from '../images/c13b.webp';
import c14g from '../images/c14g.jpg';
import c15a from '../images/c15a.webp';
import c16y from '../images/c16y.jpg';


// Example data with additional metrics for sorting
const initialCardData = [
  {
    title: '$999',
    description: 'Cotton blue.',
    image: c1b,
    size: 'Small',
    color: 'Blue',
    price: 999,
    popularity: 500,
  },
  {
    title: '&750',
    description: 'Polister yellow.',
    image: c2y,
    size: 'Medium',
    color: 'Yellow',
    price: 750,
    popularity: 200,
  },
  {
    title: '$499',
    description: 'Classic purple.',
    image: c3pu,
    size: 'Large',
    color: 'Purple',
    price: 499,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Elegant green.',
    image: c4g,
    size: 'Extra Large',
    color: 'Green',
    price: 999,
    popularity: 300,
  },
 
  {
    title: '$490',
    description: 'Elegant yellow for special occasions.',
    image: c5y,
    size: 'Medium',
    color: 'Yellow',
    price: 490,
    popularity: 200,
  },
  {
    title: '$690',
    description: 'Beautiful orange color .',
    image: c6o,
    size: 'Small',
    color: 'Orange',
    price: 690,
    popularity: 500,
  },
  {
    title: '$509',
    description: 'Classic pink.',
    image: c7pi,
    size: 'Large',
    color: 'Pink',
    price: 509,
    popularity: 800,
  },
  {
    title: '$699',
    description: 'Elegant orange .',
    image: c8o,
    size: 'Extra Large',
    color: 'Orange',
    price: 699,
    popularity: 300,
  },
  {
    title: '$499',
    description: 'Elegant pink.',
    image: c9pi,
    size: 'Extra Large',
    color: 'Pink',
    price: 499,
    popularity: 400,
  },
  {
    title: '$359',
    description: 'Cotton White.',
    image: c10w,
    size: 'Large',
    color: 'White',
    price: 359,
    popularity: 500,
  },
  {
    title: '$899',
    description: 'Silk Blue.',
    image: c11b,
    size: 'Large',
    color: 'Blue',
    price: 899,
    popularity: 500,
  },
  {
    title: '$799',
    description: 'Elegant violet.',
    image: c12v,
    size: 'Small',
    color: 'Violet',
    price: 799,
    popularity: 800,
  },
  {
    title: '$999',
    description: 'Chiffon Blue.',
    image: c13b,
    size: 'Small',
    color: 'Blue',
    price: 999,
    popularity: 800,
  },
  {
    title: '$899',
    description: 'Elegant green.',
    image: c14g,
    size: 'Small',
    color: 'Green',
    price: 899,
    popularity: 400,
  },
  {
    title: '$259',
    description: 'Elegant Ash.',
    image: c15a,
    size: 'Medium',
    color: 'Ash',
    price: 259,
    popularity: 200,
  },
  {
    title: '$349',
    description: 'Elegant yellow.',
    image: c16y,
    size: 'Large',
    color: 'Yellow',
    price: 349,
    popularity: 200,
  },
];

const Cchuridarmaterial = () => {
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
              {/* <h6>Pricing</h6> */}
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

 
export default Cchuridarmaterial;
