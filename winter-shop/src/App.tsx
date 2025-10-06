import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import CartDrawer from './components/CartDrawer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <CartDrawer />
    </div>
  )
}

export default App
