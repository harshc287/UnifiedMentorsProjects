import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>❄️ WinterWear</h5>
            <p className="text-muted">
              Your trusted destination for premium winter clothing and accessories.
            </p>
          </Col>
          
          <Col md={3}>
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li><a href="/category/coats" className="text-muted text-decoration-none">Coats</a></li>
              <li><a href="/category/jackets" className="text-muted text-decoration-none">Jackets</a></li>
              <li><a href="/category/sweaters" className="text-muted text-decoration-none">Sweaters</a></li>
              <li><a href="/category/accessories" className="text-muted text-decoration-none">Accessories</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h6>Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-muted text-decoration-none">Contact Us</a></li>
              <li><a href="/size-guide" className="text-muted text-decoration-none">Size Guide</a></li>
              <li><a href="/returns" className="text-muted text-decoration-none">Returns</a></li>
              <li><a href="/shipping" className="text-muted text-decoration-none">Shipping Info</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h6>Connect</h6>
            <ul className="list-unstyled">
              <li><a href="mailto:info@winterwear.com" className="text-muted text-decoration-none">📧 Email</a></li>
              <li><a href="https://instagram.com/winterwear" className="text-muted text-decoration-none">📱 Instagram</a></li>
              <li><a href="https://facebook.com/winterwear" className="text-muted text-decoration-none">📘 Facebook</a></li>
              <li><a href="https://twitter.com/winterwear" className="text-muted text-decoration-none">🐦 Twitter</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              © 2024 WinterWear. All rights reserved. | Made with ❤️ for winter lovers
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;