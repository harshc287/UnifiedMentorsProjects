import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/currency";

export default function ProductPage() {
  const { id } = useParams();
  const product = id ? getProductById(id) : undefined;
  const { addItem } = useCart();

  if (!product) return <div className="container my-5">Product not found.</div>;

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img src={product.imageUrl} className="img-fluid rounded border object-fit-cover" alt={product.name} />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="h3">{product.name}</h1>
          <div className="fs-4 mb-3">{formatCurrency(product.price)}</div>
          <p className="text-body-secondary">{product.description}</p>
          <button className="btn btn-primary" onClick={() => addItem(product.id)}>
            <i className="bi bi-cart-plus me-1" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
