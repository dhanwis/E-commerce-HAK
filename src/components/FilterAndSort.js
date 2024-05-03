import React, { useState } from 'react';
import { Form, Row, Col, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

// Component to handle filtering and sorting
function FilterAndSort({ onFilterChange, onSortChange }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Handle size change
  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
    if (onFilterChange) {
      onFilterChange({ size });
    }
  };

  // Handle color change
  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    if (onFilterChange) {
      onFilterChange({ color });
    }
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    const sort = e.target.value;
    setSortOption(sort);
    if (onSortChange) {
      onSortChange(sort);
    }
  };

  return (
    <Row style={{ marginBottom: '20px' }}> {/* Container for filters */}
      <Col sm={4}>
        <Form.Group controlId="filterSize">
          <Form.Label>Filter by Size</Form.Label>
          <Form.Control as="select" value={selectedSize} onChange={handleSizeChange}>
            <option value="">All Sizes</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col sm={4}>
        <Form.Group controlId="filterColor">
          <Form.Label>Filter by Color</Form.Label>
          <Form.Control as="select" value={selectedColor} onChange={handleColorChange}>
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col sm={4}>
        <Form.Group controlId="sortBy">
          <Form.Label>Sort by</Form.Label>
          <Form.Control as="select" value={sortOption} onChange={handleSortChange}>
            <option value="">Default</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default FilterAndSort;
