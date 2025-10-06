import React from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  if (items.length === 0) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <FaShoppingBag size={64} className="text-muted mb-4" />
            <h2>Your cart is empty</h2>
            <p className="text-muted mb-4">
              Looks like you haven't added any winter clothing to your cart yet.
            </p>
            <Button as={Link} to="/" variant="primary" size="lg">
              <FaArrowLeft className="me-2" />
              Continue Shopping
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart ({getTotalItems()} items)</h2>
            <Button variant="outline-danger" onClick={clearCart}>
              <FaTrash className="me-1" />
              Clear Cart
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          {items.map(item => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ height: '100px', objectFit: 'cover' }}
                    />
                  </Col>
                  
                  <Col md={4}>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-1">{item.category}</p>
                    <Badge bg="secondary">{item.sizes[0]}</Badge>
                  </Col>
                  
                  <Col md={2}>
                    <div className="text-center">
                      <h6 className="mb-0">${item.price}</h6>
                    </div>
                  </Col>
                  
                  <Col md={3}>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </Button>
                      
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        min="1"
                        max="99"
                        className="mx-2 text-center"
                        style={{ width: '60px' }}
                      />
                      
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </Col>
                  
                  <Col md={1}>
                    <div className="text-end">
                      <h6 className="mb-0">${(item.price * item.quantity).toFixed(2)}</h6>
                      <Button
                        variant="link"
                        size="sm"
                        className="text-danger p-0"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '100px' }}>
            <Card.Header>
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({getTotalItems()} items):</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className="text-success">Free</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>${(getTotalPrice() * 1.08).toFixed(2)}</strong>
              </div>
              
              <Button
                variant="primary"
                size="lg"
                className="w-100 mb-3"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              
              <Button
                as={Link}
                to="/"
                variant="outline-primary"
                className="w-100"
              >
                <FaArrowLeft className="me-2" />
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>

          {/* Promo Code */}
          <Card className="mt-3">
            <Card.Body>
              <h6>Have a promo code?</h6>
              <Form className="d-flex gap-2">
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                  size="sm"
                />
                <Button variant="outline-secondary" size="sm">
                  Apply
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Security Badge */}
          <div className="text-center mt-3">
            <small className="text-muted">
              🔒 Secure checkout with SSL encryption
            </small>
          </div>
        </Col>
      </Row>

      {/* Related Products */}
      <Row className="mt-5">
        <Col>
          <h4>You might also like</h4>
          <Alert variant="info" className="text-center py-4">
            <p className="mb-0">
              Related products would be displayed here based on your cart items.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;