import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaShieldAlt, FaTruck, FaUndo } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">
              <span className="me-2">❄️</span>
              WinterWear
            </h5>
            <p className="text-light mb-3">
              Your premier destination for high-quality winter clothing. 
              Stay warm and stylish with our curated collection of winter essentials.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="text-light">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-light">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-light">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-light">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-light">
                <FaYoutube size={20} />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Winter Jackets</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Sweaters</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Accessories</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Footwear</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Base Layers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Sale</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Size Guide</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Returns & Exchanges</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Track Your Order</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Press</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Sustainability</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Terms of Service</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={12}>
            <h6 className="text-white mb-3">Newsletter</h6>
            <p className="text-light mb-3">
              Subscribe to get updates on new arrivals, exclusive offers, and winter fashion tips.
            </p>
            <Form className="mb-3">
              <div className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="me-2"
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </div>
            </Form>
            
            <div className="text-light small">
              <div className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2" />
                <span>support@winterwear.com</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" />
                <span>1-800-WINTER-1</span>
              </div>
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <span>123 Winter Street, Cold City, CC 12345</span>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="text-light" />

        <Row className="py-3">
          <Col md={6}>
            <p className="text-light mb-0">
              © 2024 WinterWear. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-md-end gap-3">
              <div className="d-flex align-items-center text-light small">
                <FaCreditCard className="me-1" />
                <span>Secure Payment</span>
              </div>
              <div className="d-flex align-items-center text-light small">
                <FaShieldAlt className="me-1" />
                <span>SSL Encrypted</span>
              </div>
              <div className="d-flex align-items-center text-light small">
                <FaTruck className="me-1" />
                <span>Free Shipping</span>
              </div>
              <div className="d-flex align-items-center text-light small">
                <FaUndo className="me-1" />
                <span>Easy Returns</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;