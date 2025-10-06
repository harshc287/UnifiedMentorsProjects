import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const NavigationBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="bi bi-snow2 me-2"></i>
          Winter Clothes Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <i className="bi bi-cart3 fs-5"></i>
              {getCartCount() > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {getCartCount()}
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
