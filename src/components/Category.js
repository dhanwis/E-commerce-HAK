import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; // Import for navigation
import './Category.css'; // Import your custom CSS file (optional)
import k4 from '../images/k4.webp';

function Category() {
  const categoryItems = [
    { name: 'Sarees', path: '/Csaree' },
    { name: 'KurthaSet', path: '/Ckurthaset' },
    { name: 'Churidar Material', path: '/Cchuridarmaterial' },
    { name: 'Kurta', path: '/Ckurta' },
    { name: 'Churidar', path: '/Cchuridar' },
    // Add more category items here as needed
  ];

  return (
    <Container>
      <h4 className='ctitle'>Category</h4>
      <Row className='scroll-row'>
        {categoryItems.map((item) => (
          <Col key={item.name}>
            <Link to={item.path}>
              <Card className='cbackground' style={{ width: '9rem' }}>
                <Card.Img
                  className='category'
                  variant="top"
                  src={k4} // Replace with your placeholder image
                  style={{
                    borderRadius: '50%',
                    width: '9rem', // Make the image completely circular
                    height: '10rem', // Explicit height to match width
                  }}
                />
                <Card.Body className='cat'>
                  <Card.Title className='cat'>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Category;
