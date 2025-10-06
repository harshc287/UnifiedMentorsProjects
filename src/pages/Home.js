import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.filter(p => p.rating >= 4.7).slice(0, 4);

  return (
    <>
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <div 
            style={{ 
              height: '500px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="text-white">
                  <h1 className="display-3 fw-bold mb-4">Winter Collection 2025</h1>
                  <p className="lead mb-4">
                    Stay warm and stylish with our premium winter clothing collection
                  </p>
                  <Button as={Link} to="/products" variant="light" size="lg">
                    Shop Now <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div 
            style={{ 
              height: '500px', 
              background: 'linear-gradient(135deg, #2C5F7C 0%, #1a3a4d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="text-white">
                  <h1 className="display-3 fw-bold mb-4">Premium Jackets</h1>
                  <p className="lead mb-4">
                    Discover our exclusive range of winter jackets and coats
                  </p>
                  <Button as={Link} to="/products" variant="light" size="lg">
                    Explore Collection <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div 
            style={{ 
              height: '500px', 
              background: 'linear-gradient(135deg, #DC3545 0%, #a02834 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="text-white">
                  <h1 className="display-3 fw-bold mb-4">Winter Sale</h1>
                  <p className="lead mb-4">
                    Up to 30% off on selected items. Limited time offer!
                  </p>
                  <Button as={Link} to="/products" variant="light" size="lg">
                    Shop Sale <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
        {/* Categories Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <Row xs={2} md={4} className="g-3">
            {categories.filter(cat => cat !== 'All').slice(0, 4).map(category => (
              <Col key={category}>
                <Card className="text-center h-100 shadow-sm hover-shadow transition" style={{ cursor: 'pointer' }}>
                  <Card.Body>
                    <i className={`bi bi-${getCategoryIcon(category)} display-4 text-primary mb-3`}></i>
                    <Card.Title>{category}</Card.Title>
                    <Button as={Link} to="/products" variant="outline-primary" size="sm">
                      Browse
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Featured Products */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Featured Products</h2>
            <Button as={Link} to="/products" variant="outline-primary">
              View All <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {featuredProducts.map(product => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Features Section */}
        <section className="mb-5">
          <Row className="g-4">
            <Col md={3}>
              <Card className="text-center border-0 bg-light h-100">
                <Card.Body>
                  <i className="bi bi-truck display-4 text-primary mb-3"></i>
                  <h5>Free Shipping</h5>
                  <p className="text-muted small">On orders over $100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center border-0 bg-light h-100">
                <Card.Body>
                  <i className="bi bi-arrow-repeat display-4 text-primary mb-3"></i>
                  <h5>Easy Returns</h5>
                  <p className="text-muted small">30-day return policy</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center border-0 bg-light h-100">
                <Card.Body>
                  <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                  <h5>Secure Payment</h5>
                  <p className="text-muted small">100% secure transactions</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center border-0 bg-light h-100">
                <Card.Body>
                  <i className="bi bi-headset display-4 text-primary mb-3"></i>
                  <h5>24/7 Support</h5>
                  <p className="text-muted small">Dedicated customer service</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary text-white rounded p-5 text-center">
          <h3 className="mb-3">Subscribe to Our Newsletter</h3>
          <p className="mb-4">Get the latest updates on new products and exclusive offers</p>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <Button variant="dark">
                  Subscribe
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <style jsx>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    'Jackets': 'bag',
    'Coats': 'briefcase',
    'Sweaters': 'heart',
    'Hoodies': 'stars',
    'Accessories': 'gem',
    'Footwear': 'boot',
    'Bottoms': 'file-earmark'
  };
  return icons[category] || 'bag';
};

export default Home;
