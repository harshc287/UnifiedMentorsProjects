import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

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
      // Simulate order processing
      setOrderPlaced(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 5000);
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (orderPlaced) {
    return (
      <Container className="py-5 text-center min-vh-80">
        <div className="mb-4">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
        </div>
        <h1 className="mb-3">Order Placed Successfully!</h1>
        <p className="lead text-muted mb-4">
          Thank you for your purchase. You will receive a confirmation email shortly.
        </p>
        <p className="text-muted">
          Order Number: <strong>WC{Date.now().toString().slice(-8)}</strong>
        </p>
        <p className="text-muted">Redirecting to home page...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">
        <i className="bi bi-credit-card me-2"></i>
        Checkout
      </h2>

      <Row>
        <Col lg={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <Card className="mb-4">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-truck me-2"></i>
                  Shipping Information
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Address *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={5} className="mb-3">
                    <Form.Group>
                      <Form.Label>City *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label>State *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your state.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group>
                      <Form.Label>Zip Code *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your zip code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Payment Information */}
            <Card className="mb-4">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-credit-card-2-front me-2"></i>
                  Payment Information
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Cardholder Name *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the cardholder name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Card Number *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid card number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Expiry Date *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide the expiry date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>CVV *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="4"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide the CVV.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Alert variant="info" className="mb-0">
                  <i className="bi bi-shield-check me-2"></i>
                  Your payment information is encrypted and secure
                </Alert>
              </Card.Body>
            </Card>

            <div className="d-grid">
              <Button variant="success" size="lg" type="submit">
                <i className="bi bi-check-circle me-2"></i>
                Place Order - ${total.toFixed(2)}
              </Button>
            </div>
          </Form>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm sticky-top" style={{ top: '80px' }}>
            <Card.Header className="bg-dark text-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item key={`${item.id}-${item.selectedSize}-${index}`}>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      className="rounded me-3"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold">{item.name}</div>
                      <small className="text-muted">
                        Size: {item.selectedSize} | Qty: {item.quantity}
                      </small>
                    </div>
                    <div className="fw-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span className="fw-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className={shipping === 0 ? 'text-success' : ''}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <h5 className="text-success">${total.toFixed(2)}</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
