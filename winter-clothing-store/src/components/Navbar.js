import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const NavigationBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          ❄️ WinterWear
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/coats">Coats</Nav.Link>
            <Nav.Link as={Link} to="/category/jackets">Jackets</Nav.Link>
            <Nav.Link as={Link} to="/category/sweaters">Sweaters</Nav.Link>
            <Nav.Link as={Link} to="/category/accessories">Accessories</Nav.Link>
          </Nav>
          
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              🔍
            </Button>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              🛒 Cart
              {getTotalItems() > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;