import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatCurrency } from '../utils/currency.js'

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <h2 className="h4">Your cart is empty</h2>
        <p>
          <Link to="/products" className="btn btn-primary mt-2">
            Browse products
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="row g-4">
      <div className="col-lg-8">
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded object-fit-cover"
              />
              <div className="flex-grow-1">
                <div className="fw-semibold">{item.name}</div>
                <div className="text-muted small">{formatCurrency(item.price)}</div>
              </div>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="form-control"
                style={{ width: 90 }}
              />
              <div style={{ width: 100 }} className="text-end fw-semibold">
                {formatCurrency(item.price * item.quantity)}
              </div>
              <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
              <button className="btn btn-outline-secondary" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
