import { useCart } from '../context/CartContext.jsx'
import { formatCurrency } from '../utils/currency.js'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Order placed! (Demo)')
    clearCart()
  }

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <h2 className="h4">Checkout</h2>
        <form className="row g-3" onSubmit={onSubmit}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input id="firstName" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input id="lastName" className="form-control" required />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" type="email" className="form-control" required />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input id="address" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input id="city" className="form-control" required />
          </div>
          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">ZIP</label>
            <input id="zip" className="form-control" required />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Place order</button>
          </div>
        </form>
      </div>
      <div className="col-md-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Summary</h5>
            <ul className="list-unstyled">
              {items.map((i) => (
                <li key={i.id} className="d-flex justify-content-between small mb-1">
                  <span>
                    {i.name} × {i.quantity}
                  </span>
                  <span>{formatCurrency(i.price * i.quantity)}</span>
                </li>
              ))}
            </ul>
            <hr />
            <div className="d-flex justify-content-between fw-semibold">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
