import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import AppNavbar from './components/AppNavbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="container my-4">
        <Outlet />
      </main>
      <footer className="mt-auto py-4 bg-light border-top">
        <div className="container text-center">
          © WinterWear {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
