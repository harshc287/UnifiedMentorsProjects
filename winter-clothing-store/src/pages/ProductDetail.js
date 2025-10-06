import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert, Badge, Breadcrumb } from 'react-bootstrap';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  if (!product) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.category}</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      {showAlert && (
        <Alert variant="success" className="mb-4">
          Product added to cart successfully!
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </Col>
        
        <Col md={6}>
          <div className="ps-md-4">
            <h1 className="mb-3">{product.name}</h1>
            
            <div className="mb-3">
              <Badge bg="secondary" className="me-2 text-capitalize">
                {product.category}
              </Badge>
              {product.inStock ? (
                <Badge bg="success">In Stock</Badge>
              ) : (
                <Badge bg="danger">Out of Stock</Badge>
              )}
            </div>
            
            <h3 className="text-primary mb-4">${product.price}</h3>
            
            <p className="mb-4">{product.description}</p>
            
            {product.inStock && (
              <Form>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Size</Form.Label>
                      <Form.Select 
                        value={selectedSize} 
                        onChange={(e) => setSelectedSize(e.target.value)}
                        required
                      >
                        <option value="">Select Size</option>
                        {product.sizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Color</Form.Label>
                      <Form.Select 
                        value={selectedColor} 
                        onChange={(e) => setSelectedColor(e.target.value)}
                        required
                      >
                        <option value="">Select Color</option>
                        {product.colors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row className="mb-4">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="d-grid gap-2 d-md-flex">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={handleAddToCart}
                    className="me-md-2 flex-grow-1"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="lg"
                    onClick={() => navigate('/')}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </Form>
            )}
            
            {!product.inStock && (
              <Alert variant="warning">
                This product is currently out of stock. Please check back later.
              </Alert>
            )}
          </div>
        </Col>
      </Row>
      
      {/* Product Features */}
      <Row className="mt-5">
        <Col>
          <h4>Product Features</h4>
          <ul className="list-unstyled">
            <li>✓ High-quality materials</li>
            <li>✓ Comfortable fit</li>
            <li>✓ Durable construction</li>
            <li>✓ Easy care instructions</li>
            <li>✓ 30-day return policy</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;