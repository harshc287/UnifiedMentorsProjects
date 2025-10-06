import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">
              <i className="bi bi-snow2 me-2"></i>
              Winter Clothes Shop
            </h5>
            <p className="text-muted">
              Your trusted source for premium winter clothing. Stay warm, stay stylish.
            </p>
            <div className="mt-3">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </Col>
          <Col md={2} className="mb-3">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Size Guide</a></li>
              <li><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="mb-3">Contact Us</h6>
            <ul className="list-unstyled text-muted">
              <li><i className="bi bi-geo-alt me-2"></i>123 Winter St, Snow City</li>
              <li><i className="bi bi-telephone me-2"></i>+1 (555) 123-4567</li>
              <li><i className="bi bi-envelope me-2"></i>info@wintershop.com</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Winter Clothes Shop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
