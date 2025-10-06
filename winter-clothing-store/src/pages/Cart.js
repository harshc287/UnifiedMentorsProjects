import React from 'react';
import { Container, Row, Col, Card, Button, Table, Alert, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="py-5">
              <h2>Your Cart is Empty</h2>
              <p className="text-muted mb-4">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button as={Link} to="/" variant="primary" size="lg">
                Start Shopping
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart</h2>
            <Button variant="outline-danger" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.cartId}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            className="rounded me-3"
                          />
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Badge bg="secondary">{item.size}</Badge>
                      </td>
                      <td>
                        <Badge bg="info">{item.color}</Badge>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.cartId)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
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
              
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Proceed to Checkout
                </Button>
                <Button as={Link} to="/" variant="outline-secondary">
                  Continue Shopping
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Alert variant="info" className="mt-3">
            <strong>Free Shipping!</strong> All orders qualify for free standard shipping.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;