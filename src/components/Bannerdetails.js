import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import './Bannerdetails.css';
import b1 from '../components/b1.jpeg';
import Dilfooter from './Dilfooter';

const clothingData = [
  {
    id: 1,
    image: b1,
    name: 'Dress 1',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Dresses',
  },
  {
    id: 2,
    image: b1,
    name: 'Shirt 1',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Sarees',
  },
  {
    id: 3,
    image: b1,
    name: 'Dress 1',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Churidars',
  },
  {
    id: 4,
    image: b1,
    name: 'Shirt 1',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Sarees',
  },
  {
    id: 5,
    image: b1,
    name: 'Dress 1',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Kurtis',
  },
  {
    id: 6,
    image: b1,
    name: 'Shirt 1',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Tops',
  },
  {
    id: 7,
    image: b1,
    name: 'Dress 1',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Dresses',
  },
  {
    id: 8,
    image: b1,
    name: 'Shirt 1',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Kurtis',
  },
  {
    id: 9,
    image: b1,
    name: 'Shirt 1',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Sarees',
  },
  

];

function Bannerdetails() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter clothing items based on selected category
  const filteredClothingData = selectedCategory === 'All'
    ? clothingData
    : clothingData.filter(item => item.category === selectedCategory);

  return (
    <div className='Bannerdetails'>
      <Navbar />
      {/* Filters */}
      <div className='Ban'>
        <Form>
          <Form.Group controlId="category" className="category-filter">
            <Form.Label>Category </Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Dresses">Dresses</option>
              <option value="Sarees">Sarees</option>
              <option value="Churidars">Churidars</option>
              <option value="Tops">Tops</option>
              <option value="Kurtis">Kurtis</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      {/* Clothing items */}
      <Container fluid className="clothing-container">
        <Row xs={1} md={3} className="g-4">
          {filteredClothingData.map(item => (
            <Col key={item.id}>
              <div className="clothing-card">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Dilfooter/>
    </div>
  );
}

export default Bannerdetails;
