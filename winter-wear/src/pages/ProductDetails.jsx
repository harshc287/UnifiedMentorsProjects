import { useParams } from 'react-router-dom'
import products from '../data/products.js'
import { formatCurrency } from '../utils/currency.js'
import { useCart } from '../context/CartContext.jsx'
import { useMemo, useState } from 'react'

export default function ProductDetails() {
  const { id } = useParams()
  const product = useMemo(() => products.find((p) => p.id === id), [id])
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) return <div>Product not found.</div>

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="text-muted">{product.category}</p>
        <p className="lead">{formatCurrency(product.price)}</p>
        <p>{product.description}</p>

        <div className="d-flex align-items-center gap-2 my-3">
          <label className="form-label m-0">Qty</label>
          <input
            type="number"
            className="form-control"
            style={{ width: 100 }}
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button className="btn btn-primary" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
