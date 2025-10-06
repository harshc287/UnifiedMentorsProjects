import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

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
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
            alt="Winter Collection"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Winter Collection 2024</h3>
            <p>Stay warm and stylish with our premium winter clothing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
            alt="Coats & Jackets"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Premium Coats & Jackets</h3>
            <p>Discover our range of high-quality winter outerwear</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
            alt="Accessories"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Winter Accessories</h3>
            <p>Complete your winter look with our accessories collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* Filters */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Search Results Info */}
        {searchTerm && (
          <Row className="mb-3">
            <Col>
              <p className="text-muted">
                Showing {filteredProducts.length} results for "{searchTerm}"
              </p>
            </Col>
          </Row>
        )}

        {/* Products Grid */}
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
                  {searchTerm 
                    ? `No products match your search for "${searchTerm}"`
                    : "No products available in this category"
                  }
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setSelectedCategory('all');
                    window.location.reload();
                  }}
                >
                  View All Products
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;