import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b4 from '../images/b4.webp';
import { Container } from 'react-bootstrap';

function Offers() {
  return (
    
    <Container style={{marginBottom:'20px',backgroundColor:'black'}}>
    <Carousel>
      <Carousel.Item>
        <img  src={b4} alt='b1' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={b4} alt='b1' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={b4} alt='b1' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={b4} alt='b1' text="Second slide" />
        <Carousel.Caption>
          <h3> Fourth slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Offers