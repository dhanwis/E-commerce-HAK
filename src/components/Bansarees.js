import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import b2 from '../images/b1.avif'; // Example image
import Dilfooter from './Dilfooter';

// Define card data with unique content and images
const cardData = [
  {
    title: 'Saree 1',
    text: 'This is a beautiful saree with intricate designs.',
    image: b2,
  },
  {
    title: 'Saree 2',
    text: 'An elegant saree perfect for special occasions.',
    image: b2,
  },
  {
    title: 'Saree 3',
    text: 'A colorful saree with a unique pattern.',
    image: b2,
  },
  {
    title: 'Saree 4',
    text: 'A classic saree with a timeless look.',
    image: b2,
  },
  {
    title: 'Saree 5',
    text: 'A vibrant saree that stands out.',
    image: b2,
  },
  {
    title: 'Saree 6',
    text: 'A modern saree with a contemporary design.',
    image: b2,
  },
  {
    title: 'Saree 7',
    text: 'A lightweight saree for everyday wear.',
    image: b2,
  },
  {
    title: 'Saree 8',
    text: 'A luxurious saree for grand events.',
    image: b2,
  },
];

function Bansarees() {
  return (
    <Container fluid> {/* Ensures proper grid layout */}
      <Row> {/* Organizes columns */}
        {cardData.map((card, index) => (
          <Col xs={12} sm={6} md={4} key={index}> {/* Responsive layout, 4 cards per row on medium+ */}
            <Card style={{ width: '590px', marginBottom: '20px' }}> {/* Wider cards */}
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">ADD TO CART</Button> {/* Example button text */}
                <Button variant="primary">BUY NOW</Button> {/* Example button text */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Ensure footer is below the row of cards */}
      <Dilfooter />
    </Container>
  );
}

export default Bansarees;
