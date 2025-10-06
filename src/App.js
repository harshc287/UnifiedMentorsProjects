import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="container-fluid px-0">
            <Routes>
              <Route 
                path="/" 
                element={<ProductList searchQuery={searchQuery} />} 
              />
              <Route 
                path="/product/:id" 
                element={<ProductDetail />} 
              />
              <Route 
                path="/cart" 
                element={<Cart />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;