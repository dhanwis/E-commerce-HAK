import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Csaree() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">My Ecommerce Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#western">Western</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#kids">Kids</NavDropdown.Item>
                <NavDropdown.Item href="#home-and-kitchen">Home & Kitchen</NavDropdown.Item>
                <NavDropdown.Item href="#beauty-and-health">Beauty & Health</NavDropdown.Item>
                <NavDropdown.Item href="#jewellery-and-accessories">Jewellery & Accessories</NavDropdown.Item>
                <NavDropdown.Item href="#bags-and-footwear">Bags & Footwear</NavDropdown.Item>
                <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col sm={2} className="bg-light border-end">
            <Nav className="flex-column">
              <Nav.Link href="#women">Women Ethnic</Nav.Link>
              <Nav.Link href="#women">Women Western</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#kids">Kids</Nav.Link>
              <Nav.Link href="#home-and-kitchen">Home & Kitchen</Nav.Link>
              <Nav.Link href="#beauty-and-health">Beauty & Health</Nav.Link>
              <NavDropdown title="More" id="side-dropdown">
                <NavDropdown.Item href="#jewellery-and-accessories">Jewellery & Accessories</NavDropdown.Item>
                <NavDropdown.Item href="#bags-and-footwear">Bags & Footwear</NavDropdown.Item>
                <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col sm={10}>
            <Row>
              <Col>
                <h2 className="d-flex justify-content-between">
                  Products
                  <span>Showing 21-40 out of 10000 products</span>
                </h2>
                <Row>
                  <Col sm={3}>
                    <Form.Select aria-label="Sort by">
                      <option value="relevance">Relevance</option>
                      <option value="price_low_to_high">Price (Low to High)</option>
                      <option value="price_high_to_low">Price (High to Low)</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Add product listing components here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Csaree;
