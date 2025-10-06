import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidated(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="lead text-center text-muted">
            Have questions? We'd love to hear from you!
          </p>
        </Col>
      </Row>

      {submitted && (
        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
              <i className="bi bi-check-circle me-2"></i>
              Thank you for contacting us! We'll get back to you within 24 hours.
            </Alert>
          </Col>
        </Row>
      )}

      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm mb-5">
            <Card.Body className="p-4">
              <h4 className="mb-4">Send us a Message</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Select
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="product">Product Information</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-geo-alt display-4 text-primary mb-3"></i>
              <h5>Visit Us</h5>
              <p className="text-muted mb-0">
                123 Winter Street<br />
                Snow City, SC 12345<br />
                United States
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-telephone display-4 text-primary mb-3"></i>
              <h5>Call Us</h5>
              <p className="text-muted mb-0">
                Customer Service:<br />
                +1 (555) 123-4567<br />
                Mon-Fri: 9AM - 6PM EST
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body className="p-4">
              <i className="bi bi-envelope display-4 text-primary mb-3"></i>
              <h5>Email Us</h5>
              <p className="text-muted mb-0">
                General Inquiries:<br />
                info@wintershop.com<br />
                Support:<br />
                support@wintershop.com
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="p-4">
              <h5 className="mb-3">Frequently Asked Questions</h5>
              <Row>
                <Col md={6}>
                  <h6>What are your shipping times?</h6>
                  <p className="text-muted small mb-3">
                    Standard shipping takes 3-5 business days. Express shipping is available
                    for 1-2 business days delivery.
                  </p>
                  <h6>Do you ship internationally?</h6>
                  <p className="text-muted small mb-3">
                    Yes! We ship to most countries worldwide. International shipping times vary
                    by location.
                  </p>
                </Col>
                <Col md={6}>
                  <h6>What is your return policy?</h6>
                  <p className="text-muted small mb-3">
                    We offer a 30-day return policy for all items in original condition with
                    tags attached.
                  </p>
                  <h6>How can I track my order?</h6>
                  <p className="text-muted small mb-3">
                    Once your order ships, you'll receive a tracking number via email to
                    monitor your delivery.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
