import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import images
import b1 from '../images/red.avif';
import b2 from '../images/blue.avif';
import b3 from '../images/black.avif';
import b4 from '../images/green.jpg';
import b5 from '../images/blue.jpg';
import b6 from '../images/red.webp';
import b7 from '../images/black.webp';
import b8 from '../images/green.jpeg';
import Dilfooter from './Dilfooter';

// Placeholder data array with unique IDs for navigation
const sarees = [
  {
    id: 11,
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

const ProductDescription = () => {
  const { Id } = useParams(); // Get the product ID from the route parameters 
  
  const saree = sarees.find((sar) => sar.id == Id);

  

  if (!saree) {
    return <div>Product not found!</div>;
  }

  return (
    <Container fluid style={{paddingTop:'300px',paddingBottom:'30px'}}>
      <Row>
        <Col md={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={saree.image}
              alt={saree.title}
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Card style={{ border: 'none', background: 'black' }}>
            <Card.Body style={{ color: 'pink' ,background:'black'}}> {/* Apply pink color here */}
              <Card.Title style={{background:'black',fontSize:'70px'}}>{saree.title}</Card.Title>
              <Card.Text style={{background:'black',fontSize:'30px'}}>{saree.description}</Card.Text>
              <Card.Text style={{background:'black',fontSize:'20px'}}>Size: {saree.size}</Card.Text>
              <Card.Text style={{background:'black',fontSize:'20px'}}>Color: {saree.color}</Card.Text>
              <Card.Text style={{background:'black',fontSize:'30px'}}>Price: ${saree.price}</Card.Text>
              <Button style={{marginRight:'6px' ,backgroundColor:'black',border:'2px solid pink',color:'pink'}} >Add to Cart</Button>
              <Button style={{backgroundColor:'black',border:'2px solid pink',color:'pink'}}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Dilfooter/>
    </Container>
  );
};

export default ProductDescription;
