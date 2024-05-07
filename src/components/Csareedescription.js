import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import images
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


import Dilfooter from './Dilfooter';
import Navbar1 from './Navbar1';

// Placeholder data array with unique IDs for navigation
const sarees = [
    {
        id:111,
        title: '$600',
        description: 'Beautiful saree with intricate designs.',
        image: s1,
        size: 'Small',
        color: 'Red',
        price: 600,
        popularity: 500,
      },
      {
        id:112,
        title: '&900',
        description: 'Elegant saree for special occasions.',
        image: s2,
        size: 'Medium',
        color: 'Blue',
        price: 900,
        popularity: 200,
      },
      {
        id:113,
        title: '$500',
        description: 'Classic black saree.',
        image: s13,
        size: 'Large',
        color: 'Black',
        price: 500,
        popularity: 800,
      },
      {
        id:114,
        title: '$1000',
        description: 'Elegant green saree.',
        image: s14,
        size: 'Extra Large',
        color: 'Green',
        price: 1000,
        popularity: 300,
      },
     
      {
        id:115,
        title: '$990',
        description: 'Elegant saree for special occasions.',
        image: s15,
        size: 'Medium',
        color: 'Blue',
        price: 990,
        popularity: 200,
      },
      {
        id:116,
        title: '$690',
        description: 'Beautiful saree with intricate designs.',
        image: s6,
        size: 'Small',
        color: 'Yellow',
        price: 690,
        popularity: 500,
      },
      {
        id:117,
        title: '$5090',
        description: 'Classic black saree.',
        image: s7,
        size: 'Large',
        color: 'Black',
        price: 5090,
        popularity: 800,
      },
      {
        id:118,
        title: '$10000',
        description: 'Elegant green saree.',
        image: s16,
        size: 'Extra Large',
        color: 'Red',
        price: 10000,
        popularity: 300,
      },
      {
        id:119,
        title: '$4999',
        description: 'Elegant green and pink saree.',
        image: s3,
        size: 'Extra Large',
        color: 'Pink',
        price: 4999,
        popularity: 400,
      },
      {
        id:120,
        title: '$3599',
        description: 'Elegant green and orange saree.',
        image: s4,
        size: 'Large',
        color: 'Orange',
        price: 3599,
        popularity: 500,
      },
      {
        id:121,
        title: '$4699',
        description: 'Elegant blue saree.',
        image: s8,
        size: 'Large',
        color: 'Blue',
        price: 4699,
        popularity: 500,
      },
      {
        id:122,
        title: '$7999',
        description: 'Elegant yellow saree.',
        image: s9,
        size: 'Small',
        color: 'Yellow',
        price: 7999,
        popularity: 800,
      },
      {
        id:123,
        title: '$9999',
        description: 'Elegant yellow saree.',
        image: s10,
        size: 'Small',
        color: 'Yellow',
        price: 9999,
        popularity: 800,
      },
      {
        id:124,
        title: '$8999',
        description: 'Elegant purple saree.',
        image: s12,
        size: 'Small',
        color: 'Purple',
        price: 8999,
        popularity: 400,
      },
      {
        id:125,
        title: '$2599',
        description: 'Elegant white saree.',
        image: s5,
        size: 'Small',
        color: 'White',
        price: 2599,
        popularity: 200,
      },
      {
        id:126,
        title: '$3499',
        description: 'Elegant white saree.',
        image: s11,
        size: 'Small',
        color: 'White',
        price: 3499,
        popularity: 200,
      },
];

const Csareedescription = () => {
  const { Id } = useParams(); // Get the product ID from the route parameters 
  
  const saree = sarees.find((sar) => sar.id == Id);

  

  if (!saree) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Navbar1/>
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
    </Container>
    <Dilfooter/>
    </div>
  );
};

export default Csareedescription;
