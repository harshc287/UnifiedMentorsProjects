import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function AppNavbar() {
  const navigate = useNavigate()
  const { totalQuantity } = useCart()
  const [query, setQuery] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    navigate(`/products?${params.toString()}`)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          WinterWear
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
          </ul>

          <form className="d-flex me-3" role="search" onSubmit={onSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search winter gear"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <Link to="/cart" className="btn btn-primary position-relative">
            Cart
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              title={`${totalQuantity} items in cart`}
            >
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
