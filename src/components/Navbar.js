import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      ).slice(0, 5);
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearchResults(false);
    navigate('/');
  };

  const handleResultClick = (productId) => {
    setShowSearchResults(false);
    navigate(`/product/${productId}`);
  };

  const handleSearchBlur = () => {
    // Delay hiding search results to allow clicking on results
    setTimeout(() => setShowSearchResults(false), 200);
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold">
          ❄️ WinterWear
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Jackets</Nav.Link>
            <Nav.Link as={Link} to="/">Sweaters</Nav.Link>
            <Nav.Link as={Link} to="/">Accessories</Nav.Link>
            <Nav.Link as={Link} to="/">Sale</Nav.Link>
          </Nav>
          
          <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
            <div className="search-container position-relative">
              <Form.Control
                type="search"
                placeholder="Search winter clothing..."
                className="me-2"
                value={searchQuery}
                onChange={handleSearch}
                onBlur={handleSearchBlur}
                onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
              />
              <Button variant="outline-light" type="submit">
                <FaSearch />
              </Button>
              
              {showSearchResults && searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={() => handleResultClick(product.id)}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: '40px', height: '40px', objectFit: 'cover', marginRight: '10px' }}
                        />
                        <div>
                          <div className="fw-bold">{product.name}</div>
                          <div className="text-muted small">${product.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to="/" className="d-flex align-items-center">
              <FaUser className="me-1" />
              Account
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center position-relative">
              <FaShoppingCart className="me-1" />
              Cart
              {getTotalItems() > 0 && (
                <Badge bg="danger" className="cart-badge">
                  {getTotalItems()}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;