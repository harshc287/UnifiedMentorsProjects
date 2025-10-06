import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Container className="py-5 text-center min-vh-80">
        <i className="bi bi-cart-x display-1 text-muted"></i>
        <h2 className="mt-4">Your Cart is Empty</h2>
        <p className="text-muted mb-4">Add some winter essentials to your cart!</p>
        <Button as={Link} to="/products" variant="primary" size="lg">
          <i className="bi bi-shop me-2"></i>
          Start Shopping
        </Button>
      </Container>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">
        <i className="bi bi-cart3 me-2"></i>
        Shopping Cart
        <Badge bg="primary" className="ms-3">{cartItems.length} items</Badge>
      </h2>

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header className="bg-dark text-white">
              <Row>
                <Col md={6}>Product</Col>
                <Col md={2} className="text-center">Size</Col>
                <Col md={2} className="text-center">Quantity</Col>
                <Col md={2} className="text-end">Price</Col>
              </Row>
            </Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item key={`${item.id}-${item.selectedSize}-${index}`}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          className="rounded me-3"
                        />
                        <div>
                          <h6 className="mb-1">
                            <Link 
                              to={`/product/${item.id}`}
                              className="text-decoration-none text-dark"
                            >
                              {item.name}
                            </Link>
                          </h6>
                          <small className="text-muted">{item.category}</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={2} className="text-center">
                      <Badge bg="secondary">{item.selectedSize}</Badge>
                    </Col>
                    <Col md={2}>
                      <div className="d-flex align-items-center justify-content-center gap-1">
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        >
                          <i className="bi bi-dash"></i>
                        </Button>
                        <span className="mx-2 fw-bold">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        >
                          <i className="bi bi-plus"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md={2} className="text-end">
                      <div className="fw-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button
                        size="sm"
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                      >
                        <i className="bi bi-trash"></i> Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          <div className="d-flex justify-content-between">
            <Button variant="outline-secondary" as={Link} to="/products">
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Button>
            <Button variant="outline-danger" onClick={clearCart}>
              <i className="bi bi-trash me-2"></i>
              Clear Cart
            </Button>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm sticky-top" style={{ top: '80px' }}>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span className="fw-bold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className="text-success">
                  {getCartTotal() > 100 ? 'FREE' : '$9.99'}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (10%):</span>
                <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <h5>Total:</h5>
                <h5 className="text-primary">
                  ${(getCartTotal() + (getCartTotal() > 100 ? 0 : 9.99) + (getCartTotal() * 0.1)).toFixed(2)}
                </h5>
              </div>

              <div className="alert alert-info small mb-3">
                <i className="bi bi-info-circle me-2"></i>
                {getCartTotal() > 100 ? (
                  <span>You qualify for free shipping!</span>
                ) : (
                  <span>Add ${(100 - getCartTotal()).toFixed(2)} more for free shipping</span>
                )}
              </div>

              <div className="d-grid">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  <i className="bi bi-credit-card me-2"></i>
                  Proceed to Checkout
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-3 bg-light">
            <Card.Body>
              <h6><i className="bi bi-shield-check me-2"></i>Secure Checkout</h6>
              <p className="small text-muted mb-0">
                Your payment information is encrypted and secure
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
