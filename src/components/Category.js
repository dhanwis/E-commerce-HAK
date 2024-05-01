import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kurtaset from '../images/k4.webp'; // Assuming this is an image URL
import { Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Category.css';


function Category() {
  return (
<Container>
    <h4 className='ctitle'>Category</h4>
<Row className='scroll-row'>
 <Col> 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset}  style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }}/>
     <Card.Body>
      <Card.Title>Kurta Set</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  <Col > 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset} style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }}/>
     <Card.Body>
      <Card.Title>Sarees</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  <Col > 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset} style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }} />
     <Card.Body>
      <Card.Title>Kurta Material</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  <Col > 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset} style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }} />
     <Card.Body>
      <Card.Title>kurta</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  <Col > 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset}style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }} />
     <Card.Body>
      <Card.Title>Churidar</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  <Col > 
  <Card   className='cbackground'style={{ width: '9rem' }}>
    <Card.Img  className='category'variant="top" src={kurtaset}style={{
                  borderRadius: '50%',width:'9rem', // Make the image completely circular
                  height: '10rem' // Explicit height to match width
                }} />
     <Card.Body>
      <Card.Title>Churidar</Card.Title>
    </Card.Body> 
  </Card>
  </Col>
  
</Row>
</Container>
  );
}

export default Category;
