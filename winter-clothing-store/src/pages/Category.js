import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Category = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let filtered = products.filter(product => product.category === category);

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [category, sortBy]);

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          {category}
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-capitalize">{category}</h2>
            <Form.Select 
              style={{ width: 'auto' }}
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </div>
          <p className="text-muted">
            {filteredProducts.length} products found
          </p>
        </Col>
      </Row>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col>
            <div className="text-center py-5">
              <h4>No products found</h4>
              <p className="text-muted">
                No products available in the {category} category.
              </p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Category;