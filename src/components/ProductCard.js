import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
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
    <Card className="h-100 shadow-sm hover-shadow transition">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        {product.inStock ? (
          <Badge 
            bg="success" 
            className="position-absolute top-0 end-0 m-2"
          >
            In Stock
          </Badge>
        ) : (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 end-0 m-2"
          >
            Out of Stock
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg="secondary" className="me-2">{product.category}</Badge>
        </div>
        <Card.Title className="h5">
          <Link 
            to={`/product/${product.id}`} 
            className="text-decoration-none text-dark"
          >
            {product.name}
          </Link>
        </Card.Title>
        <div className="mb-2">
          {renderStars(product.rating)}
          <span className="text-muted ms-2">({product.rating})</span>
        </div>
        <Card.Text className="text-muted flex-grow-1">
          {product.description.substring(0, 80)}...
        </Card.Text>
        <div className="mb-3">
          <label className="form-label small mb-1">Size:</label>
          <select 
            className="form-select form-select-sm"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h5 className="mb-0 text-primary">${product.price.toFixed(2)}</h5>
          <Button 
            variant={showSuccess ? "success" : "primary"}
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {showSuccess ? (
              <>
                <i className="bi bi-check-circle me-1"></i>
                Added!
              </>
            ) : (
              <>
                <i className="bi bi-cart-plus me-1"></i>
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
