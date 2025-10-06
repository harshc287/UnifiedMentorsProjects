import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Breadcrumb, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product Not Found</h2>
        <p className="text-muted">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </Container>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
    }
    return stars;
  };

  return (
    <Container className="py-4">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>Products</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      {showSuccess && (
        <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
          <i className="bi bi-check-circle me-2"></i>
          Product added to cart successfully!
        </Alert>
      )}

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
          />
        </Col>

        <Col md={6}>
          <div className="mb-3">
            <Badge bg="secondary" className="me-2">{product.category}</Badge>
            {product.inStock ? (
              <Badge bg="success">In Stock</Badge>
            ) : (
              <Badge bg="danger">Out of Stock</Badge>
            )}
          </div>

          <h1 className="mb-3">{product.name}</h1>

          <div className="mb-3">
            <span className="fs-4 me-2">{renderStars(product.rating)}</span>
            <span className="text-muted">({product.rating} out of 5)</span>
          </div>

          <h2 className="text-primary mb-4">${product.price.toFixed(2)}</h2>

          <p className="lead mb-4">{product.description}</p>

          <div className="mb-4">
            <h5>Product Features:</h5>
            <ul>
              <li>Premium quality materials</li>
              <li>Designed for extreme winter conditions</li>
              <li>Multiple size options available</li>
              <li>Easy care and maintenance</li>
              <li>30-day return policy</li>
            </ul>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Select Size:</label>
            <div className="d-flex gap-2 flex-wrap">
              {product.sizes.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'primary' : 'outline-primary'}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Quantity:</label>
            <div className="d-flex align-items-center gap-2">
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <i className="bi bi-dash"></i>
              </Button>
              <input
                type="number"
                className="form-control text-center"
                style={{ width: '80px' }}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                <i className="bi bi-plus"></i>
              </Button>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
            <Button variant="outline-secondary" size="lg" as={Link} to="/products">
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Button>
          </div>

          <div className="mt-4 p-3 bg-light rounded">
            <h6><i className="bi bi-truck me-2"></i>Free Shipping</h6>
            <p className="mb-2 small text-muted">On orders over $100</p>
            <h6><i className="bi bi-arrow-repeat me-2"></i>Easy Returns</h6>
            <p className="mb-0 small text-muted">30-day return policy</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
