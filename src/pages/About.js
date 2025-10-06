import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">About Winter Clothes Shop</h1>
          <p className="lead text-center text-muted">
            Your trusted partner for premium winter clothing since 2020
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h3 className="mb-3">Our Story</h3>
              <p>
                Founded in 2020, Winter Clothes Shop started with a simple mission: to provide
                high-quality winter clothing that combines style, comfort, and durability. What
                began as a small boutique has grown into a trusted online destination for winter
                fashion enthusiasts.
              </p>
              <p>
                We understand that winter doesn't mean compromising on style. That's why we
                carefully curate our collection to ensure every piece meets our high standards
                for quality, design, and functionality.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h3 className="mb-3">Our Mission</h3>
              <p>
                At Winter Clothes Shop, we're committed to:
              </p>
              <ul>
                <li>Providing premium quality winter clothing</li>
                <li>Ensuring sustainable and ethical manufacturing</li>
                <li>Offering exceptional customer service</li>
                <li>Making winter fashion accessible to everyone</li>
                <li>Supporting local communities and artisans</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Why Choose Us?</h2>
        </Col>
      </Row>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-award display-3 text-primary mb-3"></i>
              <h4>Premium Quality</h4>
              <p className="text-muted">
                All our products are made from the finest materials and undergo rigorous quality
                checks to ensure they meet our high standards.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-leaf display-3 text-success mb-3"></i>
              <h4>Sustainable</h4>
              <p className="text-muted">
                We're committed to sustainable practices, from sourcing materials to packaging,
                reducing our environmental footprint.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-people display-3 text-info mb-3"></i>
              <h4>Customer First</h4>
              <p className="text-muted">
                Your satisfaction is our priority. We offer hassle-free returns, responsive
                customer support, and a seamless shopping experience.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="bg-primary text-white rounded p-5">
        <Col md={8} className="mx-auto text-center">
          <h3 className="mb-3">Join Our Community</h3>
          <p className="lead mb-4">
            Become part of the Winter Clothes Shop family and stay updated with our latest
            collections, exclusive offers, and winter fashion tips.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="btn btn-light btn-lg">
              <i className="bi bi-instagram me-2"></i>
              Follow on Instagram
            </a>
            <a href="#" className="btn btn-outline-light btn-lg">
              <i className="bi bi-facebook me-2"></i>
              Like on Facebook
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
