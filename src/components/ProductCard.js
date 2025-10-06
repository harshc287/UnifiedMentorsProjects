import React, { useState } from 'react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <Card 
          className={`h-100 card-hover ${!product.inStock ? 'opacity-50' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="position-relative">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            {!product.inStock && (
              <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                Out of Stock
              </Badge>
            )}
            <div className="position-absolute top-0 end-0 m-2">
              <Button
                variant="light"
                size="sm"
                className="rounded-circle p-2"
                onClick={handleWishlistToggle}
                style={{ 
                  opacity: isHovered ? 1 : 0.7,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <FaHeart color={isWishlisted ? '#dc3545' : '#6c757d'} />
              </Button>
            </div>
            {isHovered && product.inStock && (
              <div className="position-absolute bottom-0 start-0 end-0 p-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-100"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart className="me-1" />
                  Add to Cart
                </Button>
              </div>
            )}
          </div>
          
          <Card.Body className="d-flex flex-column">
            <div className="mb-2">
              <Badge bg="secondary" className="mb-1">
                {product.category}
              </Badge>
            </div>
            
            <Card.Title className="h6 text-dark mb-2">
              {product.name}
            </Card.Title>
            
            <Card.Text className="text-muted small mb-2">
              {product.description.substring(0, 80)}...
            </Card.Text>
            
            <div className="mt-auto">
              <Row className="align-items-center">
                <Col>
                  <div className="d-flex align-items-center">
                    <span className="h5 text-primary mb-0 me-2">
                      ${product.price}
                    </span>
                    {product.price > 100 && (
                      <Badge bg="success" className="small">
                        Free Shipping
                      </Badge>
                    )}
                  </div>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    as={Link}
                    to={`/product/${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaEye />
                  </Button>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;