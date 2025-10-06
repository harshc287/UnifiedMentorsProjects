import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatCurrency } from '../utils/currency.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top object-fit-cover"
        style={{ height: 200 }}
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small mb-2">{product.category}</p>
        <p className="fw-semibold mb-3">{formatCurrency(product.price)}</p>
        <div className="mt-auto d-flex gap-2">
          <Link className="btn btn-outline-secondary w-50" to={`/products/${product.id}`}>
            Details
          </Link>
          <button
            className="btn btn-primary w-50"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
