import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';

const ProductList = ({ searchQuery = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h2 className="mb-3">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
          </h2>
        </Col>
      </Row>

      <Row>
        <Col lg={3} className="mb-4">
          <div className="bg-white p-3 rounded shadow-sm sticky-top" style={{ top: '80px' }}>
            <h5 className="mb-3">Filters</h5>
            
            {/* Category Filter */}
            <div className="mb-4">
              <h6 className="mb-2">Category</h6>
              <div className="d-grid gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-4">
              <h6 className="mb-2">Sort By</h6>
              <Form.Select 
                size="sm" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name (A-Z)</option>
              </Form.Select>
            </div>

            {/* Price Range */}
            <div className="mb-3">
              <h6 className="mb-2">Price Range</h6>
              <div className="d-flex justify-content-between mb-2">
                <span className="small">${priceRange[0]}</span>
                <span className="small">${priceRange[1]}</span>
              </div>
              <Form.Range
                min="0"
                max="500"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
            </div>

            {/* Reset Filters */}
            <Button 
              variant="outline-secondary" 
              size="sm" 
              className="w-100"
              onClick={() => {
                setSelectedCategory('All');
                setSortBy('featured');
                setPriceRange([0, 500]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        </Col>

        <Col lg={9}>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <p className="text-muted mb-0">
              Showing {filteredAndSortedProducts.length} products
            </p>
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredAndSortedProducts.map(product => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-search display-1 text-muted"></i>
              <h4 className="mt-3">No products found</h4>
              <p className="text-muted">Try adjusting your filters or search query</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
