import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/currency";

export function ProductCard({ product }: { product: Product }) {
  const { addItem, getItemQuantity } = useCart();
  const qty = getItemQuantity(product.id);

  return (
    <div className="card h-100 shadow-sm">
      <img src={product.imageUrl} className="card-img-top object-fit-cover" alt={product.name} height={180} />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title pe-2">{product.name}</h5>
          <span className="badge text-bg-light">{formatCurrency(product.price)}</span>
        </div>
        <p className="card-text text-body-secondary small flex-grow-1">{product.description}</p>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-primary" onClick={() => addItem(product.id)}>
            <i className="bi bi-plus-lg me-1" /> Add to cart
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-outline-secondary">
            Details
          </Link>
          {qty > 0 && <span className="ms-auto small text-success">In cart: {qty}</span>}
        </div>
      </div>
    </div>
  );
}
