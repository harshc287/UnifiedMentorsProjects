import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaFilter, FaSort, FaSearch } from 'react-icons/fa';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = ({ searchQuery }) => {
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category === filterCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, sortBy, filterCategory, priceRange]);

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  return (
    <Container fluid className="py-4">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center py-5 winter-theme text-white rounded">
              <h1 className="display-4 fw-bold mb-3">Winter Collection 2024</h1>
              <p className="lead mb-4">
                Stay warm and stylish with our premium winter clothing collection
              </p>
              <Button variant="light" size="lg" className="px-4">
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>

        {/* Filters and Search */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
              <h2 className="h4 mb-0">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
                <span className="text-muted ms-2">({filteredAndSortedProducts.length} items)</span>
              </h2>
              
              <div className="d-flex gap-2">
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowFilters(!showFilters)}
                  className="d-lg-none"
                >
                  <FaFilter className="me-1" />
                  Filters
                </Button>
                
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ width: 'auto' }}
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Sort by Category</option>
                </Form.Select>
              </div>
            </div>

            {/* Filters Panel */}
            <div className={`${showFilters ? 'd-block' : 'd-none d-lg-block'}`}>
              <Row className="bg-light p-3 rounded">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                        min="0"
                      />
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                        min="0"
                      />
                    </div>
                  </Form.Group>
                </Col>
                
                <Col md={3} className="d-flex align-items-end">
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      setFilterCategory('all');
                      setPriceRange([0, 500]);
                      setSortBy('name');
                    }}
                  >
                    Clear Filters
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <Row>
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        ) : (
          <Row>
            <Col>
              <Alert variant="info" className="text-center py-5">
                <FaSearch size={48} className="mb-3 text-muted" />
                <h4>No products found</h4>
                <p className="mb-0">
                  Try adjusting your search criteria or browse all products.
                </p>
              </Alert>
            </Col>
          </Row>
        )}

        {/* Newsletter Signup */}
        <Row className="mt-5">
          <Col>
            <div className="bg-primary text-white p-5 rounded text-center">
              <h3 className="mb-3">Stay Updated with Winter Deals</h3>
              <p className="mb-4">
                Subscribe to our newsletter and get 10% off your first order!
              </p>
              <Form className="d-flex justify-content-center gap-2" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow-1"
                />
                <Button variant="light" type="submit">
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductList;