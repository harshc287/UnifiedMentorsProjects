import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form, Alert, Tabs, Tab } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaShare, FaStar, FaArrowLeft, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <h4>Product not found</h4>
          <p>The product you're looking for doesn't exist.</p>
          <Button as={Link} to="/" variant="primary">
            <FaArrowLeft className="me-2" />
            Back to Shop
          </Button>
        </Alert>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor: selectedColor || product.colors[0]
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(productToAdd);
    }
    
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  const images = [product.image, product.image, product.image]; // In a real app, you'd have multiple images

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft className="me-2" />
            Back
          </Button>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <div className="mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="img-fluid rounded"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
          </div>
          
          <Row className="g-2">
            {images.map((image, index) => (
              <Col key={index} xs={4}>
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`img-fluid rounded cursor-pointer ${selectedImage === index ? 'border border-primary' : ''}`}
                  style={{ height: '80px', objectFit: 'cover' }}
                  onClick={() => setSelectedImage(index)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={6}>
          <div className="mb-3">
            <Badge bg="secondary" className="mb-2">{product.category}</Badge>
            {product.price > 100 && (
              <Badge bg="success" className="ms-2">Free Shipping</Badge>
            )}
          </div>

          <h1 className="h2 mb-3">{product.name}</h1>
          
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex text-warning me-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-muted">(4.8) 124 reviews</span>
          </div>

          <div className="mb-4">
            <h3 className="text-primary mb-0">${product.price}</h3>
            <small className="text-muted">Tax included. Shipping calculated at checkout.</small>
          </div>

          <p className="lead mb-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-4">
            <h6>Size</h6>
            <div className="d-flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'primary' : 'outline-secondary'}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h6>Color</h6>
            <div className="d-flex flex-wrap gap-2">
              {product.colors.map(color => (
                <Button
                  key={color}
                  variant={selectedColor === color ? 'primary' : 'outline-secondary'}
                  size="sm"
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-4">
            <h6>Quantity</h6>
            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="99"
                className="mx-2 text-center"
                style={{ width: '80px' }}
              />
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
              >
                +
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2 mb-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-grow-1"
            >
              <FaShoppingCart className="me-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            
            <Button
              variant="outline-secondary"
              onClick={handleWishlistToggle}
            >
              <FaHeart color={isWishlisted ? '#dc3545' : '#6c757d'} />
            </Button>
            
            <Button
              variant="outline-secondary"
              onClick={handleShare}
            >
              <FaShare />
            </Button>
          </div>

          {/* Features */}
          <Row className="g-3 mb-4">
            <Col xs={4}>
              <div className="text-center">
                <FaTruck className="text-primary mb-2" size={24} />
                <div className="small">Free Shipping</div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="text-center">
                <FaShieldAlt className="text-primary mb-2" size={24} />
                <div className="small">Secure Payment</div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="text-center">
                <FaUndo className="text-primary mb-2" size={24} />
                <div className="small">Easy Returns</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Product Details Tabs */}
      <Row className="mt-5">
        <Col>
          <Tabs defaultActiveKey="description" className="mb-4">
            <Tab eventKey="description" title="Description">
              <Card>
                <Card.Body>
                  <h5>Product Details</h5>
                  <p>{product.description}</p>
                  <ul>
                    <li>Premium quality materials</li>
                    <li>Machine washable</li>
                    <li>Available in multiple sizes and colors</li>
                    <li>Perfect for winter weather</li>
                    <li>Comfortable and stylish design</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>
            
            <Tab eventKey="specifications" title="Specifications">
              <Card>
                <Card.Body>
                  <h5>Specifications</h5>
                  <Row>
                    <Col md={6}>
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <td><strong>Category:</strong></td>
                            <td>{product.category}</td>
                          </tr>
                          <tr>
                            <td><strong>Available Sizes:</strong></td>
                            <td>{product.sizes.join(', ')}</td>
                          </tr>
                          <tr>
                            <td><strong>Available Colors:</strong></td>
                            <td>{product.colors.join(', ')}</td>
                          </tr>
                          <tr>
                            <td><strong>Price:</strong></td>
                            <td>${product.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                    <Col md={6}>
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <td><strong>Material:</strong></td>
                            <td>Premium Quality</td>
                          </tr>
                          <tr>
                            <td><strong>Care Instructions:</strong></td>
                            <td>Machine Wash</td>
                          </tr>
                          <tr>
                            <td><strong>Origin:</strong></td>
                            <td>Made with care</td>
                          </tr>
                          <tr>
                            <td><strong>Warranty:</strong></td>
                            <td>1 Year</td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
            
            <Tab eventKey="reviews" title="Reviews">
              <Card>
                <Card.Body>
                  <h5>Customer Reviews</h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-flex text-warning me-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span>4.8 out of 5 stars (124 reviews)</span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2">5</span>
                      <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                        <div className="progress-bar" style={{ width: '85%' }}></div>
                      </div>
                      <span>85%</span>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2">4</span>
                      <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                        <div className="progress-bar" style={{ width: '12%' }}></div>
                      </div>
                      <span>12%</span>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2">3</span>
                      <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                        <div className="progress-bar" style={{ width: '2%' }}></div>
                      </div>
                      <span>2%</span>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2">2</span>
                      <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                        <div className="progress-bar" style={{ width: '1%' }}></div>
                      </div>
                      <span>1%</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-2">1</span>
                      <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                        <div className="progress-bar" style={{ width: '0%' }}></div>
                      </div>
                      <span>0%</span>
                    </div>
                  </div>
                  
                  <Alert variant="info">
                    <p className="mb-0">
                      "Excellent quality and perfect fit! Highly recommend this winter clothing."
                    </p>
                    <small className="text-muted">- Sarah M.</small>
                  </Alert>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;