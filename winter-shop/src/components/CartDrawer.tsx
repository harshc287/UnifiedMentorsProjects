import { Offcanvas } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";
import { formatCurrency } from "../utils/currency";
import { useCartUI } from "../context/CartUIContext";

export default function CartDrawer() {
  const { items, increment, decrement, removeItem, clear } = useCart();
  const { isOpen, close } = useCartUI();

  const total = items.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  return (
    <>
      <Offcanvas id="cartDrawer" show={isOpen} onHide={close} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p className="text-body-secondary">Your cart is empty.</p>
          ) : (
            <div className="vstack gap-3">
              {items.map((it) => {
                const product = getProductById(it.productId)!;
                return (
                  <div key={it.productId} className="d-flex gap-3 align-items-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded object-fit-cover border"
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="fw-medium">{product.name}</div>
                          <div className="text-body-secondary small">{formatCurrency(product.price)} each</div>
                        </div>
                        <div className="small text-nowrap">{formatCurrency(product.price * it.quantity)}</div>
                      </div>
                      <div className="d-flex align-items-center mt-2 gap-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => decrement(it.productId)}>
                          <i className="bi bi-dash" />
                        </button>
                        <span className="px-2">{it.quantity}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => increment(it.productId)}>
                          <i className="bi bi-plus" />
                        </button>
                        <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeItem(it.productId)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-1">
                <div className="fw-medium">Total</div>
                <div className="fs-5">{formatCurrency(total)}</div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary" onClick={clear}>Clear</button>
                <button className="btn btn-success w-100">Checkout</button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
