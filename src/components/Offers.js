import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import b4 from '../images/b4.webp';
import { Container } from 'react-bootstrap';

function Offers() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCarouselClick = (slideIndex) => {
    // Define navigation based on the slide index
    switch (slideIndex) {
      case 0:
        navigate('/Bansarees'); // Navigate to a specific page
        break;
      case 1:
        navigate('/Bansarees');
        break;
      case 2:
        navigate('/Bansarees');
        break;
      case 3:
        navigate('/Bansarees');
        break;
      default:
        navigate('/'); // Default navigation
    }
  };

  return (
    <Container style={{ marginBottom: '20px', backgroundColor: 'black' }}>
      <Carousel>
        <Carousel.Item onClick={() => handleCarouselClick(0)}> {/* Add click event */}
          <img src={b4} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => handleCarouselClick(1)}> {/* Add click event */}
          <img src={b4} alt='Second slide' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => handleCarouselClick(2)}> {/* Add click event */}
          <img src={b4} alt='Third slide' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => handleCarouselClick(3)}> {/* Add click event */}
          <img src={b4} alt='Fourth slide' />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Offers;
