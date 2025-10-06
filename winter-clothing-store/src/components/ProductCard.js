import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm product-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        {!product.inStock && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 end-0 m-2"
          >
            Out of Stock
          </Badge>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6">{product.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {product.description.substring(0, 100)}...
        </Card.Text>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="h5 mb-0 text-primary">${product.price}</span>
            <small className="text-muted text-capitalize">
              {product.category}
            </small>
          </div>
          
          <div className="d-flex gap-2">
            <Button 
              as={Link} 
              to={`/product/${product.id}`}
              variant="outline-primary" 
              size="sm"
              className="flex-grow-1"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;